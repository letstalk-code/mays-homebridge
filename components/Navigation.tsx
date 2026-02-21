'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Image
            src="/images/mays-logo.png"
            alt="May's HomeBridge Logo"
            width={280}
            height={280}
            className={styles.logoImage}
            priority
          />
        </Link>

        <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
          <Link href="/" className={styles.link} onClick={closeMenu}>Home</Link>
          <Link href="/about" className={styles.link} onClick={closeMenu}>About</Link>
          <Link href="/process" className={styles.link} onClick={closeMenu}>Process</Link>
          <Link href="/testimonials" className={styles.link} onClick={closeMenu}>Testimonials</Link>
          <Link href="/contact" className={styles.link} onClick={closeMenu}>Contact</Link>
          <Link href="https://connect.mayshomebridgellc.com/strategy-session" className={`btn-primary ${styles.navCta}`} onClick={closeMenu}>
            Book Consultation
          </Link>
        </div>

        <Link href="https://connect.mayshomebridgellc.com/strategy-session" className={`btn-primary btn-pulse ${styles.desktopCta}`}>
          Book Consultation
        </Link>

        <button
          className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
