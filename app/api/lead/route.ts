import { NextRequest, NextResponse } from 'next/server';

const GHL_INTAKE_WEBHOOK_URL = process.env.GHL_INTAKE_WEBHOOK_URL ?? '';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, phone, email } = body;

        if (!name || !phone || !email) {
            return NextResponse.json(
                { error: 'Name, phone, and email are required.' },
                { status: 400 }
            );
        }

        const nameParts = name.trim().split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts.slice(1).join(' ') || '';

        const webhookRes = await fetch(GHL_INTAKE_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName,
                lastName,
                phone,
                email,
                source: 'Social Media - /start page',
                tags: ['social-lead'],
            }),
        });

        if (!webhookRes.ok) {
            const errText = await webhookRes.text();
            console.error('GHL webhook error:', webhookRes.status, errText);
            return NextResponse.json(
                { error: 'Failed to submit. Please try again.' },
                { status: 502 }
            );
        }

        console.log('Social lead captured:', email);
        return NextResponse.json({ success: true }, { status: 200 });

    } catch (err) {
        console.error('Lead API error:', err);
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
