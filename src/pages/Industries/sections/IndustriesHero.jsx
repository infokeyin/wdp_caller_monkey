import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FadeIn from '@components/motion/FadeIn';
import Container from '@components/layout/Container';
import Icon from '@components/atoms/Icon';
import { industries } from '@data/industries';
import { useReducedMotion } from '@hooks/useReducedMotion';

/* ── CSS variable → hex map for icons ── */
const IND_HEX = {
  'real-estate':   '#E07B39',
  'finance':       '#2C7BE5',
  'healthcare':    '#E91E63',
  'education':     '#9B59B6',
  'retail':        '#F4A623',
  'manufacturing': '#0891B2',
  'insurance':     '#2DA744',
  'jewellery':     '#D4AF37',
  'logistics':     '#5D4037',
  'restaurants':   '#D32F2F',
  'political':     '#1565C0',
  'government':    '#4CAF50',
};

/* ── Radial orbit of 12 industry icons ── */
function IndustryOrbit({ reduced }) {
  const cx = 200, cy = 200;
  const outerR = 148, innerR = 80;
  const outer = industries.slice(0, 6);
  const inner = industries.slice(6, 12);

  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Industries served by Caller Monkey"
      style={{ width: '100%', maxWidth: 380, height: 'auto' }}
    >
      {/* Orbit rings */}
      <circle cx={cx} cy={cy} r={outerR} stroke="#E5E5E5" strokeWidth="1" strokeDasharray="4 5" />
      <circle cx={cx} cy={cy} r={innerR} stroke="#E5E5E5" strokeWidth="1" strokeDasharray="3 4" />

      {/* Outer ring — 6 nodes */}
      {outer.map((ind, i) => {
        const angle = (i / outer.length) * 2 * Math.PI - Math.PI / 2;
        const nx = cx + outerR * Math.cos(angle);
        const ny = cy + outerR * Math.sin(angle);
        const hex = IND_HEX[ind.id] ?? '#2DA744';
        return (
          <g key={ind.id}>
            <circle cx={nx} cy={ny} r="26" fill={`${hex}18`} stroke={hex} strokeWidth="1.5" />
            <svg x={nx - 10} y={ny - 10} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={hex} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <Icon name={ind.icon} size={20} />
            </svg>
          </g>
        );
      })}

      {/* Inner ring — 6 nodes */}
      {inner.map((ind, i) => {
        const angle = (i / inner.length) * 2 * Math.PI;
        const nx = cx + innerR * Math.cos(angle);
        const ny = cy + innerR * Math.sin(angle);
        const hex = IND_HEX[ind.id] ?? '#2DA744';
        return (
          <g key={ind.id}>
            <circle cx={nx} cy={ny} r="20" fill={`${hex}18`} stroke={hex} strokeWidth="1.25" />
            <svg x={nx - 8} y={ny - 8} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={hex} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <Icon name={ind.icon} size={16} />
            </svg>
          </g>
        );
      })}

      {/* Centre hub */}
      <circle cx={cx} cy={cy} r="36" fill="#2DA744" />
      <circle cx={cx} cy={cy} r="30" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <text x={cx} y={cy - 5} textAnchor="middle" fontSize="12" fontWeight="900" fill="white" fontFamily="system-ui">CM</text>
      <text x={cx} y={cy + 9} textAnchor="middle" fontSize="7" fontWeight="600" fill="rgba(255,255,255,0.75)" fontFamily="system-ui" letterSpacing="0.06em">12 INDUSTRIES</text>
    </svg>
  );
}

function IndustriesHero() {
  const reduced = useReducedMotion();

  return (
    <section
      style={{
        background: 'var(--color-bg)',
        paddingTop: 'clamp(3.5rem, 6vw, 6rem)',
        paddingBottom: 'clamp(2.5rem, 5vw, 5rem)',
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden',
      }}
    >
      <Container>
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', gap: 'clamp(2rem, 5vw, 5rem)',
        }}>

          {/* Left — text */}
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <FadeIn>
              <p className="custom-eyebrow mb-3">Industries</p>
              <h1 className="custom-h1 mb-5" style={{ maxWidth: 500 }}>
                Built for Your Industry, Not Just Any Business.
              </h1>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="custom-lead mb-8" style={{ maxWidth: 440 }}>
                Every industry has its own follow-up rhythm and customer expectations. Caller Monkey is trained for each one across 12 industries.
              </p>
            </FadeIn>
            <FadeIn delay={0.14}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <Link to="#industries-grid" className="custom-btn custom-btn-primary">
                  Find My Industry
                </Link>
                <Link to="/get-started#demo-form" className="custom-btn custom-btn-secondary">
                  Book a Demo
                </Link>
              </div>
            </FadeIn>

            {/* Count badge */}
            <FadeIn delay={0.22}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                marginTop: '2rem',
                padding: '0.5rem 1rem',
                background: 'var(--color-green-50)',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-xs)', fontWeight: 700,
                color: 'var(--color-green-700)',
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-green-500)' }} />
                12 industries · 500+ businesses · Live in 15 days
              </div>
            </FadeIn>
          </div>

          {/* Right — orbit diagram */}
          <div style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}>
            <FadeIn delay={0.1} y={16}>
              <motion.div
                animate={reduced ? {} : { rotate: [0, 360] }}
                transition={reduced ? {} : { duration: 60, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: 'center center' }}
              >
                <IndustryOrbit reduced={reduced} />
              </motion.div>
            </FadeIn>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default IndustriesHero;
