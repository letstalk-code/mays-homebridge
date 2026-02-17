'use client';

import { useEffect, useRef } from 'react';

interface GoldParticlesProps {
  count?: number;
}

export default function GoldParticles({ count = 20 }: GoldParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * 4 + 2;
      const x = Math.random() * 100;
      const delay = Math.random() * 8;
      const duration = Math.random() * 6 + 8;
      const opacity = Math.random() * 0.4 + 0.1;

      Object.assign(particle.style, {
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        background: `radial-gradient(circle, rgba(197, 165, 90, ${opacity}) 0%, transparent 70%)`,
        left: `${x}%`,
        bottom: '-10px',
        animation: `floatUp ${duration}s ${delay}s ease-in-out infinite`,
        pointerEvents: 'none',
      });

      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, [count]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
