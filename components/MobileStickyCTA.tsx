'use client';

import Link from 'next/link';

export default function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-cta">
      <Link href="/contact" className="btn-primary">
        Book Your Session Now <span className="arrow">&rarr;</span>
      </Link>
    </div>
  );
}
