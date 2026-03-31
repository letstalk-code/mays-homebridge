'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileStickyCTA() {
  const pathname = usePathname();
  if (pathname === '/documents') return null;
  return (
    <div className="mobile-sticky-cta">
      <Link href="/strategy-session" className="btn-primary btn-pulse">
        Book Consultation
      </Link>
    </div>
  );
}
