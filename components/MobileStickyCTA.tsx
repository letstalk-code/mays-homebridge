'use client';

import Link from 'next/link';

export default function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-cta">
      <Link href="https://connect.mayshomebridgellc.com/strategy-session" className="btn-primary btn-pulse">
        Book Consultation
      </Link>
    </div>
  );
}
