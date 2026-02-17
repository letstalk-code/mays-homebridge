'use client';

import TypewriterText from './TypewriterText';
import GoldParticles from './GoldParticles';

export function HeroTypewriter({ text }: { text: string }) {
  return <TypewriterText text={text} speed={30} delay={300} />;
}

export function HeroParticles() {
  return <GoldParticles count={15} />;
}
