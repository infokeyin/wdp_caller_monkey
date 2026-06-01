import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import FadeIn from '@components/motion/FadeIn';
import Container from '@components/layout/Container';
import appConfig from '@config/appConfig';
import { useReducedMotion } from '@hooks/useReducedMotion';

/* ── Subtle dot-grid background ── */
function DotGrid() {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        opacity: 0.18, pointerEvents: 'none',
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="cta-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#2DA744" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#cta-dots)" />
    </svg>
  );
}

/* ── Soft glow blob — decorative ── */
function GlowBlob({ style }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(45,167,68,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
        ...style,
      }}
    />
  );
}



/* ── Animated waveform bars ── */
const WAVE = [4, 8, 14, 20, 26, 20, 14, 8, 4, 8, 16, 22, 18, 10, 4];

function WaveStrip({ reduced }) {
  return (
    <div
      aria-hidden="true"
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 5, marginBottom: '2.5rem', opacity: 0.4,
      }}
    >
      {WAVE.map((h, i) => (
        <div
          key={i}
          className={reduced ? '' : 'custom-wave-bar'}
          style={{
            width: 4, height: h * 1.6,
            background: 'var(--color-green-400)',
            borderRadius: 4,
            animationDelay: `${i * 0.07}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Main Section ── */
function HomeCTA() {
  const reduced = useReducedMotion();
  const waLink = `https://wa.me/${appConfig.contactInfo.whatsapp}?text=${encodeURIComponent("Hi! I'd like to learn more about Caller Monkey.")}`;

  return (
    <section
      aria-label="Call to action"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-bg-dark)',
        paddingBlock: 'clamp(4rem, 8vw, 7rem)',
      }}
    >
      {/* Background decoration */}
      <DotGrid />
      <GlowBlob style={{ width: 480, height: 480, top: '-120px', left: '-80px' }} />
      <GlowBlob style={{ width: 360, height: 360, bottom: '-80px', right: '-60px' }} />

      <Container style={{ position: 'relative', zIndex: 1 }}>

        {/* Waveform strip */}
        <WaveStrip reduced={reduced} />

        {/* Headline block */}
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span style={{
              display: 'inline-block',
              fontSize: 'var(--text-xs)', fontWeight: 700,
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase',
              color: 'var(--color-green-400)',
              marginBottom: '1rem',
            }}>
              Free 30-min walkthrough
            </span>
            <h2
              className="custom-h2"
              style={{
                color: '#fff',
                maxWidth: 620,
                margin: '0 auto 1rem',
                fontSize: 'clamp(1.75rem, 3vw + 1rem, 2.75rem)',
                lineHeight: 1.15,
              }}
            >
              Let's find where communication is costing your business money.
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: 520,
              margin: '0 auto',
            }}>
              No commitment. No jargon. Just a clear picture of where you're losing leads, time, and revenue — and what you can do about it.
            </p>
          </div>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn delay={0.1}>
          <div style={{
            display: 'flex', flexWrap: 'wrap',
            alignItems: 'center', justifyContent: 'center',
            gap: '0.875rem', marginBottom: '3.5rem',
          }}>
            <Link
              to="/get-started#demo-form"
              className="custom-btn custom-btn-primary custom-btn-lg"
            >
              Start the Conversation
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </Link>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="custom-btn custom-btn-outline custom-btn-lg"
            >
              <MessageCircle size={18} strokeWidth={2} aria-hidden="true" style={{ color: '#25D366' }} />
              Chat on WhatsApp
            </a>
          </div>
        </FadeIn>



      </Container>
    </section>
  );
}

export default HomeCTA;
