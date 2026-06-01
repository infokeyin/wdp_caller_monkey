import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import FadeIn from '@components/motion/FadeIn';
import Container from '@components/layout/Container';
import Icon from '@components/atoms/Icon';
import { capabilities } from '@data/capabilities';
import { useReducedMotion } from '@hooks/useReducedMotion';

/* ── Subtle dot grid — white dots on green ── */
function DotGrid() {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        opacity: 0.12, pointerEvents: 'none',
      }}
    >
      <defs>
        <pattern id="fcta-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#fcta-dots)" />
    </svg>
  );
}

/* ── Scrolling feature icon ticker ── */
function FeatureTicker({ reduced }) {
  // Duplicate for seamless loop
  const items = [...capabilities, ...capabilities];

  return (
    <div
      aria-hidden="true"
      style={{
        overflow: 'hidden',
        marginBottom: '2.5rem',
        maskImage: 'linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)',
      }}
    >
      <div
        className={reduced ? '' : 'custom-ticker-track'}
        style={{
          display: 'flex', gap: '0.75rem',
          width: reduced ? '100%' : 'max-content',
          justifyContent: reduced ? 'center' : undefined,
          flexWrap: reduced ? 'wrap' : undefined,
        }}
      >
        {items.map((cap, i) => (
          <div
            key={`${cap.id}-${i}`}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.35rem 0.875rem',
              background: 'rgba(255,255,255,0.18)',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(255,255,255,0.25)',
              flexShrink: 0,
            }}
          >
            <Icon name={cap.icon} size={13} strokeWidth={2} style={{ color: 'white' }} />
            <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'white', whiteSpace: 'nowrap' }}>
              {cap.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeaturesCTA() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-label="Call to action"
      style={{
        position: 'relative', overflow: 'hidden',
        background: 'var(--color-green-500)',
        paddingBlock: 'clamp(4rem, 7vw, 6.5rem)',
      }}
    >
      <DotGrid />

      {/* Soft light blob top-right */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: 360, height: 360, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container style={{ position: 'relative', zIndex: 1 }}>

        {/* Scrolling icon ticker */}
        <FeatureTicker reduced={reduced} />

        {/* Headline */}
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 3vw + 1rem, 2.75rem)',
              fontWeight: 800, color: '#fff',
              lineHeight: 1.15, letterSpacing: 'var(--tracking-tight)',
              maxWidth: 560, margin: '0 auto 0.875rem',
            }}>
              Ready to see it running for your business?
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: 440, margin: '0 auto',
            }}>
              Pick one feature. 30 minutes. We'll show it live in your industry.
            </p>
          </div>
        </FadeIn>

        {/* Buttons */}
        <FadeIn delay={0.1}>
          <div style={{
            display: 'flex', flexWrap: 'wrap',
            alignItems: 'center', justifyContent: 'center',
            gap: '0.875rem',
          }}>
            <Link
              to="/get-started#demo-form"
              className="custom-btn custom-btn-inverted custom-btn-lg"
            >
              Get a Free Demo
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </Link>

            <Link
              to="/industries"
              className="custom-btn custom-btn-outline custom-btn-lg"
            >
              Browse by Industry
            </Link>
          </div>
        </FadeIn>

      </Container>
    </section>
  );
}

export default FeaturesCTA;
