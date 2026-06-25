import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '@components/motion/FadeIn';
import Container from '@components/layout/Container';
import Icon from '@components/atoms/Icon';
import { industries } from '@data/industries';
import { useReducedMotion } from '@hooks/useReducedMotion';

const IND_HEX = {
  'customer-support': '#2DA744', ecommerce: '#F4A623', healthcare: '#E91E63',
  finance: '#2C7BE5', travel: '#0891B2', education: '#9B59B6',
  'real-estate': '#E07B39', hr: '#7C3AED', insurance: '#2DA744',
  manufacturing: '#0891B2', legal: '#374151', automotive: '#D97706',
  logistics: '#5D4037', government: '#4CAF50', hospitality: '#E07B39',
  entertainment: '#9B59B6', agriculture: '#6B9E3E', energy: '#F59E0B',
  nonprofits: '#E11D48', retail: '#F4A623', telecom: '#2C7BE5',
  gaming: '#7C3AED', events: '#0891B2', construction: '#D97706',
  fitness: '#2DA744', recruitment: '#374151', 'food-beverage': '#D32F2F',
  fashion: '#E91E63', 'security-it': '#1565C0', tourism: '#0891B2',
  'property-management': '#E07B39', publishing: '#9B59B6',
  'professional-services': '#2C7BE5', transportation: '#5D4037', saas: '#2DA744',
};

const INTERVAL = 2500;
const TRANS = { duration: 0.65, ease: [0.4, 0, 0.2, 1] };

function IndustryCarousel({ reduced }) {
  const [idx, setIdx] = useState(0);
  const n = industries.length;

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setIdx(i => (i + 1) % n), INTERVAL);
    return () => clearInterval(t);
  }, [reduced, n]);

  const curr = industries[idx];
  const next = industries[(idx + 1) % n];
  const currColor = IND_HEX[curr.id] ?? '#2DA744';
  const nextColor = IND_HEX[next.id] ?? '#2DA744';

  return (
    /* Outer wrapper: normal flow, flexbox column — no absolute-centering hacks */
    <div style={{ width: 380, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

      {/* ── Slide area: icon + content row ── */}
      <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>

        {/* Ghost: next industry peeking from the right */}
        <AnimatePresence initial={false}>
          <motion.div
            key={`ghost-${(idx + 1) % n}`}
            initial={{ x: 80, opacity: 0, scale: 0.6 }}
            animate={{ x: 0, opacity: 0.22, scale: 0.78 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              /* Use Framer's y instead of CSS transform to avoid conflicts */
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: '0.4rem',
              pointerEvents: 'none',
            }}
            /* shift up via framer animate so it doesn't clash with scale/x */
            initial={{ x: 80, opacity: 0, scale: 0.6, y: '-50%' }}
            animate={{ x: 0, opacity: 0.22, scale: 0.78, y: '-50%' }}
          >
            <div style={{
              width: 68, height: 68, borderRadius: 'var(--radius-xl)',
              background: `${nextColor}12`, border: `1.5px solid ${nextColor}35`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon name={next.icon} size={26} strokeWidth={1.6} style={{ color: nextColor }} />
            </div>
            <span style={{
              fontSize: 'var(--text-xs)', fontWeight: 700,
              color: 'var(--color-grey-400)', whiteSpace: 'nowrap',
            }}>
              {next.name}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Active card: slides in from right ghost position, exits left */}
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={`active-${idx}`}
            initial={{ x: 160, opacity: 0.15, scale: 0.78, y: '-50%' }}
            animate={{ x: 0, opacity: 1, scale: 1, y: '-50%' }}
            exit={{ x: -180, opacity: 0, scale: 0.88, y: '-50%' }}
            transition={TRANS}
            style={{
              position: 'absolute', left: 0, top: '50%',
              width: 260,
              display: 'flex', flexDirection: 'column', gap: '0.875rem',
            }}
          >
            {/* Icon bubble */}
            <motion.div
              animate={reduced ? {} : { y: [0, -5, 0] }}
              transition={reduced ? {} : { duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: 96, height: 96, borderRadius: 'var(--radius-xl)',
                background: `${currColor}14`, border: `2px solid ${currColor}35`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 16px 40px ${currColor}22`, flexShrink: 0,
              }}
              aria-hidden="true"
            >
              <Icon name={curr.icon} size={40} strokeWidth={1.5} style={{ color: currColor }} />
            </motion.div>

            {/* Name */}
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
              color: 'var(--color-grey-900)', lineHeight: 1.2,
            }}>
              {curr.name}
            </div>

            {/* Description */}
            <div style={{
              fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)',
              lineHeight: 1.5, maxWidth: 240,
              display: '-webkit-box', WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical', overflow: 'hidden',
            }}>
              {curr.description}
            </div>


          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Progress bar + counter — always below, in normal flow ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', width: 260 }}>
        <div style={{
          flex: 1, height: 3, borderRadius: 99,
          background: 'var(--color-border)', overflow: 'hidden',
        }}>
          <motion.div
            key={idx}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
            style={{ height: '100%', background: currColor, borderRadius: 99 }}
          />
        </div>
        <div style={{
          fontSize: 'var(--text-xs)', fontWeight: 600,
          color: 'var(--color-text-muted)', whiteSpace: 'nowrap', flexShrink: 0,
        }}>
          {String(idx + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
}

function IndustriesHero() {
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
                Every industry has its own follow-up rhythm and customer expectations. Caller Monkey
                is trained for each one.
              </p>
            </FadeIn>
            <FadeIn delay={0.14}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <Link to="#industries-grid" className="custom-btn custom-btn-primary">Find My Industry</Link>
                <Link to="/get-started#demo-form" className="custom-btn custom-btn-secondary">Book a Demo</Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.22}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                marginTop: '2rem', padding: '0.5rem 1rem',
                background: 'var(--color-green-50)', borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--color-green-700)',
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-green-500)' }} />
                500+ businesses · Live in 15 days
              </div>
            </FadeIn>
          </div>

          {/* Right — carousel, centred in its column */}
          <div style={{
            flex: '0 0 auto',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <FadeIn delay={0.1} y={16}>
              <IndustryCarousel reduced={reduced} />
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default IndustriesHero;
