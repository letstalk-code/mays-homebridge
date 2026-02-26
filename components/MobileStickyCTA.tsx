'use client';

import Link from 'next/link';

export default function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-cta">
      <Link href="/strategy-session" className="btn-primary btn-pulse">
        Book Consultation
      </Link>
    </div>
  );
}
