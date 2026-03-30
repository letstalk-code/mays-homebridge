import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const NOTIFY_EMAIL = process.env.DOCUMENTS_NOTIFY_EMAIL ?? '';
const CC_EMAIL = process.env.DOCUMENTS_CC_EMAIL ?? '';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        const firstName = formData.get('firstName') as string ?? '';
        const lastName = formData.get('lastName') as string ?? '';
        const email = formData.get('email') as string ?? '';

        if (!firstName || !lastName || !email) {
            return NextResponse.json(
                { error: 'First name, last name, and email are required.' },
                { status: 400 }
            );
        }

        const fullName = `${firstName} ${lastName}`;

        // Upload each file to Vercel Blob
        const fileFields = [
            { key: 'proofOfId', label: 'Proof of ID' },
            { key: 'proofOfSsn', label: 'Proof of SSN' },
            { key: 'proofOfAddress', label: 'Proof of Address' },
        ];

        const uploadedFiles: { label: string; blobUrl: string; name: string }[] = [];

        for (const field of fileFields) {
            const file = formData.get(field.key) as File | null;
            if (file && file.size > 0) {
                const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
                const pathname = `documents/${Date.now()}_${field.key}_${safeName}`;
                const blob = await put(pathname, file, { access: 'private' });
                uploadedFiles.push({ label: field.label, blobUrl: blob.url, name: file.name });
            }
        }

        if (uploadedFiles.length === 0) {
            return NextResponse.json(
                { error: 'Please upload at least one document.' },
                { status: 400 }
            );
        }

        // Build download links via our proxy endpoint (generates a fresh signed URL on click — no expiration)
        const baseUrl = 'https://mayshomebridgellc.com';
        const fileLines = uploadedFiles
            .map(f => {
                const downloadUrl = `${baseUrl}/api/documents/download?file=${encodeURIComponent(f.blobUrl)}`;
                return `<li><strong>${f.label}:</strong> <a href="${downloadUrl}">${f.name}</a></li>`;
            })
            .join('');

        // Send email notification
        if (NOTIFY_EMAIL && process.env.RESEND_API_KEY) {
            const recipients = [NOTIFY_EMAIL];
            if (CC_EMAIL && CC_EMAIL !== NOTIFY_EMAIL) recipients.push(CC_EMAIL);

            const { error: emailError } = await resend.emails.send({
                from: 'May\'s HomeBridge <noreply@mayshomebridgellc.com>',
                to: recipients,
                subject: `New Document Upload — ${fullName}`,
                html: `
                    <h2>New Document Upload</h2>
                    <p><strong>Name:</strong> ${fullName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <h3>Uploaded Documents:</h3>
                    <ul>${fileLines}</ul>
                `,
            });

            if (emailError) {
                console.error('Resend email error:', JSON.stringify(emailError));
            } else {
                console.log('Email sent to:', recipients.join(', '));
            }
        } else {
            console.log('Email skipped — NOTIFY_EMAIL:', NOTIFY_EMAIL, '| RESEND_API_KEY set:', !!process.env.RESEND_API_KEY);
        }

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.error('Documents upload error:', message);
        return NextResponse.json(
            { error: message },
            { status: 500 }
        );
    }
}
