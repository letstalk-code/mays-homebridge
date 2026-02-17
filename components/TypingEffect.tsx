'use client';

import { useState, useEffect } from 'react';

interface TypingEffectProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
}

export default function TypingEffect({
    text,
    speed = 50,
    delay = 0,
    className = ''
}: TypingEffectProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let currentIndex = 0;
        const interval = setInterval(() => {
            currentIndex++;
            setDisplayedText(text.slice(0, currentIndex));
            if (currentIndex >= text.length) {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed, started]);

    return (
        <span className={className}>
            {displayedText}
            <span className="cursor-blink">|</span>
        </span>
    );
}
