'use client';

import { useEffect, useState, useRef } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export default function TypewriterText({
  text,
  speed = 40,
  delay = 500,
  className = '',
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [started, text, speed, delay]);

  return (
    <span ref={ref} className={className}>
      {started ? displayed : '\u00A0'}
      {started && !done && (
        <span
          style={{
            display: 'inline-block',
            width: '2px',
            height: '1em',
            background: 'var(--gold)',
            marginLeft: '2px',
            animation: 'blink 0.7s step-end infinite',
            verticalAlign: 'text-bottom',
          }}
        />
      )}
    </span>
  );
}
