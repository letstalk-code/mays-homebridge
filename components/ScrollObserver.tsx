'use client';

import { useEffect } from 'react';

export default function ScrollObserver() {
    useEffect(() => {
        // 1. Select all elements that need animation
        const animatedElements = document.querySelectorAll(
            '.fade-in, .fade-in-left, .fade-in-right, .fade-in-scale'
        );

        // 2. Add the initial 'animate-hidden' class to prepare them
        animatedElements.forEach((el) => {
            el.classList.add('animate-hidden');
        });

        // 3. Set up the IntersectionObserver
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        entry.target.classList.remove('animate-hidden'); // Optional, depends on CSS
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.15, // Trigger when 15% visible
            }
        );

        // 4. Start observing
        animatedElements.forEach((el) => observer.observe(el));

        // Cleanup
        return () => observer.disconnect();
    }, []);

    return null;
}
