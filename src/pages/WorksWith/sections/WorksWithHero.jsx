import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@components/motion/FadeIn';
import Container from '@components/layout/Container';
import { useReducedMotion } from '@hooks/useReducedMotion';

function PulseRings() {
  const reduced = useReducedMotion();
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        pointerEvents: 'none', overflow: 'hidden',
      }}
    >
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={reduced ? '' : 'custom-pulse-ring'}
          style={{
            position: 'absolute',
            width: 120 + i * 80,
            height: 120 + i * 80,
            borderRadius: '50%',
            border: '1.5px solid var(--color-green-400)',
            opacity: 0.18,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}
      {/* Center dot */}
      <div style={{
        width: 14, height: 14, borderRadius: '50%',
        background: 'var(--color-green-500)', opacity: 0.6,
        position: 'absolute',
      }} />
    </div>
  );
}

function WorksWithHero() {
  return (
    <section
      className="custom-section"
      style={{
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(160deg, var(--color-green-50) 0%, var(--color-bg) 60%)',
        paddingTop: 'clamp(3rem, 5vw, 5rem)',
        paddingBottom: 'clamp(2rem, 4vw, 4rem)',
      }}
    >
      <PulseRings />

      <Container variant="narrow" style={{ position: 'relative', zIndex: 1 }}>
        <FadeIn>
          <p className="custom-eyebrow mb-4 text-center">Integrations</p>
          <h1 className="custom-display text-center mb-6">
            One System. Every Platform Your Business Already Uses.
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="custom-lead text-center">
            Caller Monkey integrates with your CRM, WhatsApp Business, lead platforms, calendar, email, and payment gateway — all connected through one central system, with our team handling setup.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}

export default WorksWithHero;
