'use client';

import AnimatedCounter from './AnimatedCounter';

interface StatItem {
  end?: number;
  suffix?: string;
  prefix?: string;
  text?: string;
  label: string;
}

export default function StatsCounter({
  stats,
  numberClassName,
  labelClassName,
  cardClassName,
}: {
  stats: StatItem[];
  numberClassName: string;
  labelClassName: string;
  cardClassName: string;
}) {
  return (
    <>
      {stats.map((stat, i) => (
        <div key={i} className={`${cardClassName} fade-in stagger-${i + 1}`}>
          <div className={numberClassName}>
            {stat.end !== undefined ? (
              <AnimatedCounter
                end={stat.end}
                suffix={stat.suffix || ''}
                prefix={stat.prefix || ''}
                duration={2000}
              />
            ) : (
              stat.text
            )}
          </div>
          <div className={labelClassName}>{stat.label}</div>
        </div>
      ))}
    </>
  );
}
