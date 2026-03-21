import { NextRequest, NextResponse } from 'next/server';

const GHL_API_KEY = process.env.GHL_API_KEY ?? '';
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID ?? '';
const GHL_BASE = 'https://services.leadconnectorhq.com';
const GHL_VERSION = '2021-07-28';

const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${GHL_API_KEY}`,
    Version: GHL_VERSION,
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

        // Step 1: Upsert GHL contact with standard fields
        const contactRes = await fetch(`${GHL_BASE}/contacts/upsert`, {
            method: 'POST',
            headers,
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
                source: 'Home Application Form',
                tags: ['intake-form', 'intake-submitted'],
            }),
        });

        if (!contactRes.ok) {
            const errText = await contactRes.text();
            console.error('GHL upsert error:', contactRes.status, errText);
            return NextResponse.json(
                { error: 'Failed to save your application. Please try again.' },
                { status: 502 }
            );
        }

        const contactData = await contactRes.json();
        const contactId: string = contactData?.contact?.id ?? '';

        if (!contactId) {
            console.error('No contact ID returned:', JSON.stringify(contactData));
            return NextResponse.json(
                { error: 'Failed to save your application. Please try again.' },
                { status: 502 }
            );
        }

        // Step 2: Add all intake data as a formatted note
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

        const noteRes = await fetch(`${GHL_BASE}/contacts/${contactId}/notes`, {
            method: 'POST',
            headers,
            body: JSON.stringify({ body: noteBody }),
        });

        if (!noteRes.ok) {
            const errText = await noteRes.text();
            console.error('GHL note error:', noteRes.status, errText);
            // Contact was saved — don't fail the whole request over the note
        }

        console.log('Intake form submitted for:', email);
        return NextResponse.json({ success: true }, { status: 200 });

    } catch (err) {
        console.error('Intake API error:', err);
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
