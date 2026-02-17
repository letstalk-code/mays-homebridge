'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '../app/process/page.module.css';

export default function TimelineProgress() {
  const lineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = lineRef.current;
      if (!el) return;

      const parent = el.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Calculate how far through the section we've scrolled
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const scrolled = windowH - sectionTop;
      const totalScrollable = sectionHeight + windowH;

      const pct = Math.max(0, Math.min(1, scrolled / totalScrollable));
      setProgress(pct * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.timelineLine} ref={lineRef}>
      <div
        className={styles.timelineProgress}
        style={{ height: `${progress}%` }}
      />
    </div>
  );
}
