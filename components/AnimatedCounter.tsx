'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 2000,
  className = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let animationFrameId: number;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let startTime: number | null = null;

          const animate = (now: number) => {
            if (startTime === null) startTime = now;
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          animationFrameId = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration]);

  return (
    <span
      ref={ref}
      className={className}
      style={{
        position: 'relative',
        display: 'inline-block',
        fontVariantNumeric: 'tabular-nums'
      }}
    >
      {/* Invisible element to set the exact max width for the sentence */}
      <span style={{ visibility: 'hidden' }}>
        {prefix}{end.toLocaleString()}{suffix}
      </span>
      {/* Visible animating element, absolutely positioned so it literally cannot push words */}
      <span style={{
        position: 'absolute',
        right: 0,
        top: 0,
        textAlign: 'right',
        whiteSpace: 'nowrap'
      }}>
        {prefix}{count.toLocaleString()}{suffix}
      </span>
    </span>
  );
}
