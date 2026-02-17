'use client';

import { useRef, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function TiltCard({
  children,
  className = '',
  glowColor = 'rgba(197, 165, 90, 0.15)',
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      boxShadow: `0 20px 60px ${glowColor}, 0 0 40px ${glowColor}`,
      transition: 'box-shadow 0.3s ease',
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      boxShadow: '',
      transition: 'transform 0.5s ease, box-shadow 0.5s ease',
    });
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, willChange: 'transform' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
