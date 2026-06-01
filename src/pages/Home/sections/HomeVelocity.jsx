import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '@components/motion/FadeIn';
import Container from '@components/layout/Container';
import { useReducedMotion } from '@hooks/useReducedMotion';

/* ── Simulated live call events ── */
const EVENTS = [
  { city: 'Mumbai',    industry: 'Real Estate',  action: 'Lead called & qualified',   color: '#2DA744', icon: '📞' },
  { city: 'Delhi',     industry: 'Finance',       action: 'EMI reminder sent',          color: '#2C7BE5', icon: '💬' },
  { city: 'Pune',      industry: 'Healthcare',    action: 'Appointment confirmed',       color: '#E91E63', icon: '✅' },
  { city: 'Bangalore', industry: 'EdTech',        action: 'Demo class booked',           color: '#9B59B6', icon: '🎯' },
  { city: 'Hyderabad', industry: 'Insurance',     action: 'Policy renewal reminded',     color: '#F4A623', icon: '🔔' },
  { city: 'Chennai',   industry: 'Retail',        action: 'Retailer order collected',    color: '#0891B2', icon: '📦' },
  { city: 'Jaipur',    industry: 'Real Estate',   action: 'Site visit auto-booked',      color: '#E07B39', icon: '🏠' },
  { city: 'Surat',     industry: 'Manufacturing', action: 'Dealer follow-up sent',       color: '#059669', icon: '🏭' },
  { city: 'Kochi',     industry: 'Logistics',     action: 'Delivery confirmed',          color: '#5D4037', icon: '🚚' },
  { city: 'Kolkata',   industry: 'Finance DSA',   action: 'Lead qualified → warm hand-off', color: '#1565C0', icon: '🤝' },
];

/* ── Animated call counter ── */
function CallCounter({ reduced }) {
  const [count, setCount] = useState(482317);

  useEffect(() => {
    if (reduced) return;
    const interval = setInterval(() => {
      setCount(c => c + Math.floor(Math.random() * 3) + 1);
    }, 900);
    return () => clearInterval(interval);
  }, [reduced]);

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        fontWeight: 900,
        color: '#fff',
        letterSpacing: '-0.02em',
        lineHeight: 1,
        marginBottom: '0.375rem',
      }}>
        {count.toLocaleString('en-IN')}
      </div>
      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-sm)', fontWeight: 600 }}>
        calls handled to date — and counting
      </p>
    </div>
  );
}

/* ── Live event feed ── */
function LiveFeed({ reduced }) {
  const [items, setItems] = useState(EVENTS.slice(0, 4));
  const indexRef = useRef(4);

  useEffect(() => {
    if (reduced) return;
    const interval = setInterval(() => {
      const next = EVENTS[indexRef.current % EVENTS.length];
      indexRef.current += 1;
      setItems(prev => [next, ...prev.slice(0, 3)]);
    }, 2200);
    return () => clearInterval(interval);
  }, [reduced]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <AnimatePresence mode="popLayout">
        {items.map((ev, i) => (
          <motion.div
            key={`${ev.city}-${ev.action}-${i}`}
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              padding: '0.625rem 0.875rem',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderLeft: `3px solid ${ev.color}`,
              borderRadius: 'var(--radius-md)',
              backdropFilter: 'blur(4px)',
            }}
          >
            <span style={{ fontSize: '1rem', flexShrink: 0 }} aria-hidden="true">{ev.icon}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.3 }}>
                {ev.city} · {ev.industry}
              </p>
              <p style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.55)', margin: 0 }}>
                {ev.action}
              </p>
            </div>
            <span style={{
              fontSize: 'var(--text-xs)', fontWeight: 700,
              color: ev.color, fontFamily: 'var(--font-mono)',
              background: `${ev.color}22`, padding: '0.1rem 0.45rem',
              borderRadius: 'var(--radius-full)',
              flexShrink: 0,
            }}>
              live
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

/* ── Mini stat pills ── */
const MINI_STATS = [
  { val: '< 2 min', label: 'Lead response' },
  { val: '68–72%', label: 'Pick-up rate' },
  { val: '500+',    label: 'Businesses' },
];

function HomeVelocity() {
  const reduced = useReducedMotion();

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-bg-dark)',
        paddingBlock: 'clamp(3.5rem, 6vw, 5.5rem)',
      }}
    >
      {/* Dot grid */}
      <svg aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.12, pointerEvents: 'none' }}>
        <defs>
          <pattern id="vel-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="#2DA744" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#vel-dots)" />
      </svg>

      {/* Glow blob */}
      <div aria-hidden="true" style={{ position: 'absolute', width: 600, height: 400, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', borderRadius: '50%', background: 'radial-gradient(circle, rgba(45,167,68,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <Container style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'clamp(2rem, 5vw, 5rem)' }}>

          {/* Left — counter + stats */}
          <div style={{ flex: '1 1 280px', minWidth: 0 }}>
            <FadeIn>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', padding: '0.35rem 0.875rem', background: 'rgba(45,167,68,0.15)', border: '1px solid rgba(45,167,68,0.3)', borderRadius: 'var(--radius-full)' }}>
                <motion.span
                  animate={reduced ? {} : { opacity: [1, 0.3, 1] }}
                  transition={reduced ? {} : { duration: 1.2, repeat: Infinity }}
                  style={{ width: 7, height: 7, borderRadius: '50%', background: '#2DA744', flexShrink: 0 }}
                />
                <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--color-green-400)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Running right now
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <CallCounter reduced={reduced} />
            </FadeIn>

            {/* Mini stats row */}
            <FadeIn delay={0.12}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem' }}>
                {MINI_STATS.map(({ val, label }) => (
                  <div key={label} style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 'var(--radius-md)',
                  }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 'var(--text-lg)', color: 'var(--color-green-400)', lineHeight: 1 }}>{val}</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.5)', marginTop: '0.2rem' }}>{label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right — live feed */}
          <div style={{ flex: '1 1 280px', minWidth: 0 }}>
            <FadeIn delay={0.08}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                marginBottom: '1rem',
              }}>
                <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Live activity across India
                </span>
              </div>
              <LiveFeed reduced={reduced} />
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeVelocity;
