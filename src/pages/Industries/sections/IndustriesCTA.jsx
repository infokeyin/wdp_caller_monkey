import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FadeIn from '@components/motion/FadeIn';
import Container from '@components/layout/Container';
import { useReducedMotion } from '@hooks/useReducedMotion';

function DotGrid() {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.18,
        pointerEvents: 'none',
      }}
    >
      <defs>
        <pattern id="ind-cta-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#2DA744" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#ind-cta-dots)" />
    </svg>
  );
}

const WAVE = [4, 8, 14, 20, 26, 20, 14, 8, 4, 8, 16, 22, 18, 10, 4];

function WaveStrip({ reduced }) {
  return (
    <div
      aria-hidden="true"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        marginBottom: '2.5rem',
        opacity: 0.4,
      }}
    >
      {WAVE.map((h, i) => (
        <div
          key={i}
          className={reduced ? '' : 'custom-wave-bar'}
          style={{
            width: 4,
            height: h * 1.6,
            background: 'var(--color-green-400)',
            borderRadius: 4,
            animationDelay: `${i * 0.07}s`,
          }}
        />
      ))}
    </div>
  );
}

function IndustriesCTA() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-label="Call to action"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-bg-dark)',
        paddingBlock: 'clamp(4rem,8vw,7rem)',
      }}
    >
      <DotGrid />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 480,
          height: 480,
          top: '-120px',
          left: '-80px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(45,167,68,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 360,
          height: 360,
          bottom: '-80px',
          right: '-60px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(45,167,68,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container style={{ position: 'relative', zIndex: 1 }}>
        <WaveStrip reduced={reduced} />

        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <span
              style={{
                display: 'inline-block',
                fontSize: 'var(--text-xs)',
                fontWeight: 700,
                letterSpacing: 'var(--tracking-widest)',
                textTransform: 'uppercase',
                color: 'var(--color-green-400)',
                marginBottom: '1rem',
              }}
            >
              Customised walkthrough
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem,3vw + 1rem,2.75rem)',
                fontWeight: 800,
                color: '#fff',
                lineHeight: 1.15,
                maxWidth: 560,
                margin: '0 auto 0.875rem',
              }}
            >
              Your industry has unique challenges. Let us show you how we handle them.
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.65)',
                fontSize: 'var(--text-lg)',
                lineHeight: 'var(--leading-relaxed)',
                maxWidth: 460,
                margin: '0 auto',
              }}
            >
              30 minutes. Your tools, your industry. No generic demos.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.875rem',
            }}
          >
            <Link
              to="/get-started#demo-form"
              className="custom-btn custom-btn-primary custom-btn-lg"
            >
              Book a Free Walkthrough <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

export default IndustriesCTA;
