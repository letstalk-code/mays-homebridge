'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      '.fade-in, .fade-in-left, .fade-in-right, .fade-in-scale'
    );

    // Only hide elements that are BELOW the viewport.
    // Elements already visible on screen stay visible — no flash.
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top >= window.innerHeight) {
        el.classList.add('animate-hidden');
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => {
      if (el.classList.contains('animate-hidden')) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
