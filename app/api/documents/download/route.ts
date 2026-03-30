import { NextRequest, NextResponse } from 'next/server';
import { head } from '@vercel/blob';

export async function GET(req: NextRequest) {
    const file = req.nextUrl.searchParams.get('file');

    if (!file) {
        return NextResponse.json({ error: 'Missing file parameter.' }, { status: 400 });
    }

    try {
        // Get fresh blob metadata — returns a new signed downloadUrl valid for 1 hour
        const blob = await head(file);

        // Redirect to the fresh signed URL so the download works immediately
        return NextResponse.redirect(blob.downloadUrl, { status: 302 });

    } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.error('Download proxy error:', message);
        return NextResponse.json({ error: 'File not found.' }, { status: 404 });
    }
}
