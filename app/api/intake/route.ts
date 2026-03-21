import { NextRequest, NextResponse } from 'next/server';

const GHL_INTAKE_WEBHOOK_URL = process.env.GHL_INTAKE_WEBHOOK_URL ?? '';

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

        // Build formatted note
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

        // POST all data to GHL inbound webhook
        const webhookRes = await fetch(GHL_INTAKE_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName, lastName, email, phone,
                dob, address, city, state, zip,
                dlNumber, ssn,
                employer, jobTitle, monthlyIncome,
                savings, loanAmount, downPayment,
                commercialInterest, residentialInterest, moveInDate, preferredLocation,
                firstTimeBuyer, creditAssistance, hasAssets, assetsDescription,
                referral,
                noteBody,
            }),
        });

        if (!webhookRes.ok) {
            const errText = await webhookRes.text();
            console.error('GHL webhook error:', webhookRes.status, errText);
            return NextResponse.json(
                { error: 'Failed to save your application. Please try again.' },
                { status: 502 }
            );
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
