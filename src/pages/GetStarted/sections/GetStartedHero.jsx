import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FadeIn from '@components/motion/FadeIn';
import Container from '@components/layout/Container';
import { useReducedMotion } from '@hooks/useReducedMotion';

/* ── Animated go-live timeline on the right ── */
const TIMELINE = [
  { day: 'Day 1',  label: 'Kickoff call',           color: '#2DA744' },
  { day: 'Day 3',  label: 'Scripts reviewed',        color: '#2C7BE5' },
  { day: 'Day 7',  label: 'Integrations live',       color: '#F4A623' },
  { day: 'Day 12', label: 'Testing & QA',            color: '#9B59B6' },
  { day: 'Day 15', label: '🚀 You go live',          color: '#2DA744' },
];

function GoLiveTimeline({ reduced }) {
  return (
    <div style={{
      background: '#FAFAFA',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-xl)',
      padding: '1.5rem 1.25rem',
      width: '100%', maxWidth: 300,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.5rem',
        marginBottom: '1.25rem', paddingBottom: '0.75rem',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#2DA744' }} />
        <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--color-grey-600)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Go-live timeline
        </span>
        <span style={{ marginLeft: 'auto', fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--color-green-600)', background: 'var(--color-green-50)', padding: '0.1rem 0.5rem', borderRadius: 'var(--radius-full)' }}>
          15 days
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {TIMELINE.map((item, i) => (
          <motion.div
            key={item.day}
            initial={reduced ? { opacity: 1 } : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={reduced ? {} : { delay: 0.3 + i * 0.15, duration: 0.3 }}
            style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}
          >
            {/* Timeline dot + line */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: item.color, marginTop: 4, flexShrink: 0 }} />
              {i < TIMELINE.length - 1 && (
                <div style={{ width: 1.5, height: 28, background: `${item.color}40`, marginBlock: 2 }} />
              )}
            </div>
            {/* Content */}
            <div style={{ paddingBottom: i < TIMELINE.length - 1 ? '0.25rem' : 0 }}>
              <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: item.color, fontFamily: 'var(--font-mono)' }}>{item.day}</span>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-grey-700)', margin: 0, lineHeight: 1.4 }}>{item.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Key stats ── */
const STATS = [
  { val: '₹15/min', label: 'Starting price' },
  { val: '15 days', label: 'Go-live guarantee' },
  { val: '0',       label: 'Lock-in contracts' },
];

function GetStartedHero() {
  const reduced = useReducedMotion();

  return (
    <section style={{
      background: 'var(--color-bg)',
      paddingTop: 'clamp(3.5rem, 6vw, 6rem)',
      paddingBottom: 'clamp(2.5rem, 5vw, 5rem)',
      borderBottom: '1px solid var(--color-border)',
      overflow: 'hidden',
    }}>
      <Container>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'clamp(2rem, 5vw, 5rem)' }}>

          {/* Left */}
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <FadeIn>
              <p className="custom-eyebrow mb-3">Get Started</p>
              <h1 className="custom-h1 mb-5" style={{ maxWidth: 480 }}>
                Pick Where to Begin. Add More as You Grow.
              </h1>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="custom-lead mb-8" style={{ maxWidth: 420 }}>
                Most businesses start with AI Voice Calling and expand. From ₹15/min. No lock-in.
              </p>
            </FadeIn>

            {/* Stat pills */}
            <FadeIn delay={0.12}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
                {STATS.map(({ val, label }) => (
                  <div key={label} style={{
                    display: 'flex', flexDirection: 'column',
                    padding: '0.6rem 1.1rem',
                    background: 'var(--color-green-50)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-green-200)',
                    minWidth: 90,
                  }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 'var(--text-xl)', color: 'var(--color-green-600)', lineHeight: 1 }}>{val}</span>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-green-700)', fontWeight: 600, marginTop: '0.2rem' }}>{label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.18}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <a href="#demo-form" className="custom-btn custom-btn-primary">
                  Book a Free Demo
                </a>
                <a href="#plans" className="custom-btn custom-btn-secondary">
                  See Plans
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right — go-live timeline */}
          <div style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}>
            <FadeIn delay={0.1} y={16}>
              <motion.div
                animate={reduced ? {} : { y: [0, -5, 0] }}
                transition={reduced ? {} : { duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
                <GoLiveTimeline reduced={reduced} />
              </motion.div>
            </FadeIn>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default GetStartedHero;
