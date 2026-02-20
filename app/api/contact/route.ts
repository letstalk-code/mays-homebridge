import { NextRequest, NextResponse } from 'next/server';

const GHL_BASE = 'https://services.leadconnectorhq.com';
const GHL_VERSION = '2021-07-28';

function ghlHeaders(apiKey: string) {
    return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        Version: GHL_VERSION,
    };
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, message } = body;

        // Basic validation
        if (!name || !email || !phone) {
            return NextResponse.json(
                { error: 'Name, email, and phone are required.' },
                { status: 400 }
            );
        }

        const GHL_API_KEY = process.env.GHL_API_KEY;
        const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

        if (!GHL_API_KEY || !GHL_LOCATION_ID) {
            console.error('Missing GHL environment variables');
            return NextResponse.json(
                { error: 'Server configuration error.' },
                { status: 500 }
            );
        }

        // Split name into first/last
        const nameParts = name.trim().split(' ');
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || '';

        // --- Step 1: Create or update contact in GHL ---
        const contactPayload = {
            firstName,
            lastName,
            email,
            phone,
            locationId: GHL_LOCATION_ID,
            tags: ['website-contact-form'],
            source: "May's HomeBridge Website",
        };

        const contactRes = await fetch(`${GHL_BASE}/contacts/`, {
            method: 'POST',
            headers: ghlHeaders(GHL_API_KEY),
            body: JSON.stringify(contactPayload),
        });

        if (!contactRes.ok) {
            const errorText = await contactRes.text();
            console.error('GHL create contact error:', contactRes.status, errorText);
            return NextResponse.json(
                { error: 'Failed to submit to CRM. Please try again.' },
                { status: 502 }
            );
        }

        const contactData = await contactRes.json();
        const contactId = contactData?.contact?.id;
        console.log('GHL contact created/updated:', contactId);

        // --- Step 2: Add the message as a Note on the contact ---
        if (contactId && message && message.trim()) {
            const notePayload = {
                body: `📋 Contact Form Message:\n\n${message.trim()}`,
                userId: contactId, // GHL note requires userId or can be omitted; some versions need it
            };

            const noteRes = await fetch(`${GHL_BASE}/contacts/${contactId}/notes`, {
                method: 'POST',
                headers: ghlHeaders(GHL_API_KEY),
                body: JSON.stringify(notePayload),
            });

            if (!noteRes.ok) {
                // Don't fail the whole request if the note fails — contact was already saved
                const noteError = await noteRes.text();
                console.warn('GHL add note warning:', noteRes.status, noteError);
            } else {
                console.log('GHL note added for contact:', contactId);
            }
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (err) {
        console.error('Contact API error:', err);
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
