import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const NOTIFY_EMAIL = process.env.DOCUMENTS_NOTIFY_EMAIL ?? '';

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

        const uploadedFiles: { label: string; url: string; name: string }[] = [];

        for (const field of fileFields) {
            const file = formData.get(field.key) as File | null;
            if (file && file.size > 0) {
                const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
                const filename = `documents/${Date.now()}_${field.key}_${safeName}`;
                const blob = await put(filename, file, { access: 'public' });
                uploadedFiles.push({ label: field.label, url: blob.url, name: file.name });
            }
        }

        if (uploadedFiles.length === 0) {
            return NextResponse.json(
                { error: 'Please upload at least one document.' },
                { status: 400 }
            );
        }

        // Send email notification to May
        if (NOTIFY_EMAIL && process.env.RESEND_API_KEY) {
            const fileLines = uploadedFiles
                .map(f => `<li><strong>${f.label}:</strong> <a href="${f.url}">${f.name}</a></li>`)
                .join('');

            await resend.emails.send({
                from: 'May\'s HomeBridge <onboarding@resend.dev>',
                to: NOTIFY_EMAIL,
                subject: `New Document Upload — ${fullName}`,
                html: `
                    <h2>New Document Upload</h2>
                    <p><strong>Name:</strong> ${fullName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <h3>Uploaded Documents:</h3>
                    <ul>${fileLines}</ul>
                    <p><small>Files are stored securely and links are valid for 7 days.</small></p>
                `,
            });
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
