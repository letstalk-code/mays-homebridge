import { NextRequest, NextResponse } from 'next/server';

const GHL_API_KEY = process.env.GHL_API_KEY ?? '';
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID ?? '';
const GHL_BASE_URL = 'https://services.leadconnectorhq.com';

const GHL_HEADERS = {
    'Authorization': `Bearer ${GHL_API_KEY}`,
    'Content-Type': 'application/json',
    'Version': '2021-07-28',
};

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const {
            firstName, lastName, email, phone,
            dob, address, city, state, zip,
            dlNumber, ssn,
            employer, jobTitle, monthlyIncome,
            savings, loanAmount, downPayment,
            commercialInterest, residentialInterest, moveInDate, preferredLocation,
            firstTimeBuyer, creditAssistance, hasAssets, assetsDescription,
            referral,
        } = body;

        // Required fields
        if (!firstName || !lastName || !email || !phone) {
            return NextResponse.json(
                { error: 'First name, last name, email, and phone are required.' },
                { status: 400 }
            );
        }

        // 1. Upsert contact in GHL
        const upsertRes = await fetch(`${GHL_BASE_URL}/contacts/upsert`, {
            method: 'POST',
            headers: GHL_HEADERS,
            body: JSON.stringify({
                locationId: GHL_LOCATION_ID,
                firstName,
                lastName,
                email,
                phone,
                address1: address || '',
                city: city || '',
                state: state || '',
                postalCode: zip || '',
                source: 'Intake Form',
            }),
        });

        if (!upsertRes.ok) {
            const errText = await upsertRes.text();
            console.error('GHL upsert error:', upsertRes.status, errText);
            return NextResponse.json(
                { error: 'Failed to save your application. Please try again.' },
                { status: 502 }
            );
        }

        const upsertData = await upsertRes.json();
        const contactId = upsertData?.contact?.id;

        if (!contactId) {
            console.error('GHL upsert returned no contact ID:', upsertData);
            return NextResponse.json(
                { error: 'Failed to save your application. Please try again.' },
                { status: 502 }
            );
        }

        // 2. Build formatted note and add it to the contact
        const noteBody = [
            '=== MAY\'S HOMEBRIDGE — HOME APPLICATION INTAKE ===',
            '',
            '— PERSONAL INFORMATION —',
            `Name: ${firstName} ${lastName}`,
            `Date of Birth: ${dob || 'Not provided'}`,
            `Phone: ${phone}`,
            `Email: ${email}`,
            `Address: ${address || 'Not provided'}`,
            `City/State/Zip: ${city || ''}, ${state || ''} ${zip || ''}`,
            '',
            '— IDENTIFICATION —',
            `Driver\'s License #: ${dlNumber || 'Not provided'}`,
            `SSN: ${ssn || 'Not provided'}`,
            '',
            '— EMPLOYMENT —',
            `Place of Employment: ${employer || 'Not provided'}`,
            `Job Title: ${jobTitle || 'Not provided'}`,
            `Monthly Income: ${monthlyIncome || 'Not provided'}`,
            '',
            '— FINANCIAL INFORMATION —',
            `Amount in Savings: ${savings || 'Not provided'}`,
            `Desired Loan Amount: ${loanAmount || 'Not provided'}`,
            `Desired Down Payment: ${downPayment || 'Not provided'}`,
            '',
            '— PROPERTY INTEREST —',
            `Commercial Property Interest: ${commercialInterest || 'Not answered'}`,
            `Residential Property Interest: ${residentialInterest || 'Not answered'}`,
            `Desired Move-In Date: ${moveInDate || 'Not provided'}`,
            `Preferred City & State: ${preferredLocation || 'Not provided'}`,
            '',
            '— HOME BUYING EXPERIENCE —',
            `First Time Buyer: ${firstTimeBuyer || 'Not answered'}`,
            `Needs Credit Assistance: ${creditAssistance || 'Not answered'}`,
            `Has Assets: ${hasAssets || 'Not answered'}`,
            `Asset Description: ${assetsDescription || 'N/A'}`,
            '',
            '— REFERRAL —',
            `Referred By: ${referral || 'Not provided'}`,
        ].join('\n');

        const noteRes = await fetch(`${GHL_BASE_URL}/contacts/${contactId}/notes`, {
            method: 'POST',
            headers: GHL_HEADERS,
            body: JSON.stringify({ body: noteBody }),
        });

        if (!noteRes.ok) {
            console.error('GHL note error:', noteRes.status, await noteRes.text());
            // Don't fail the request — contact was created, note is secondary
        }

        // 3. Add intake-submitted tag
        const tagRes = await fetch(`${GHL_BASE_URL}/contacts/${contactId}/tags`, {
            method: 'POST',
            headers: GHL_HEADERS,
            body: JSON.stringify({ tags: ['intake-submitted'] }),
        });

        if (!tagRes.ok) {
            console.error('GHL tag error:', tagRes.status, await tagRes.text());
            // Don't fail the request — contact was created, tag is secondary
        }

        console.log('Intake form submitted for:', email, '— contactId:', contactId);
        return NextResponse.json({ success: true }, { status: 200 });

    } catch (err) {
        console.error('Intake API error:', err);
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
