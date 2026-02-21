import { NextRequest, NextResponse } from 'next/server';

const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/mitz5mCTOw4TIRcFGxB6/webhook-trigger/ec503436-7e5f-4a91-a4ad-1dd07f38f017';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, message, source } = body;

        // Basic validation
        if (!name || !email || !phone) {
            return NextResponse.json(
                { error: 'Name, email, and phone are required.' },
                { status: 400 }
            );
        }

        // Split name into first/last for GHL
        const nameParts = name.trim().split(' ');
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || '';

        // Send to GHL Inbound Webhook
        const webhookRes = await fetch(GHL_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name ? name.trim() : '',
                fullName: name ? name.trim() : '',
                firstName,
                lastName,
                email,
                phone,
                message: message || '',
                source: source || 'Website Contact Form',
            }),
        });

        if (!webhookRes.ok) {
            const errorText = await webhookRes.text();
            console.error('GHL webhook error:', webhookRes.status, errorText);
            return NextResponse.json(
                { error: 'Failed to send message. Please try again.' },
                { status: 502 }
            );
        }

        console.log('GHL webhook fired successfully for:', email);
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (err) {
        console.error('Contact API error:', err);
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
