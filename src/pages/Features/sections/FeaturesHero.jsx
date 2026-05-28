import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@components/motion/FadeIn';
import Container from '@components/layout/Container';
import { useReducedMotion } from '@hooks/useReducedMotion';
import Icon from '@components/atoms/Icon';

const FEATURE_ICONS = [
  { icon: 'PhoneCall',    label: 'AI Calls',   color: '#2DA744', delay: 0 },
  { icon: 'MessageSquare',label: 'WhatsApp',   color: '#25D366', delay: 0.15 },
  { icon: 'Calendar',     label: 'Calendar',   color: '#F4A623', delay: 0.3 },
  { icon: 'Database',     label: 'CRM Sync',   color: '#2C7BE5', delay: 0.45 },
  { icon: 'BarChart3',    label: 'Analytics',  color: '#9B59B6', delay: 0.6 },
];

function FeaturesHero() {
  const reduced = useReducedMotion();

  return (
    <section
      className="custom-section"
      style={{
        background: 'linear-gradient(160deg, var(--color-green-50) 0%, var(--color-bg) 60%)',
        paddingTop: 'clamp(3rem, 5vw, 5rem)',
        paddingBottom: 'clamp(2rem, 4vw, 4rem)',
      }}
    >
      <Container variant="narrow">
        <FadeIn>
          <p className="custom-eyebrow mb-4 text-center">Features</p>
          <h1 className="custom-display text-center mb-6">
            10 Things Caller Monkey Does for You, Every Day, Automatically.
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="custom-lead text-center mb-12">
            These are not features on a list. These are jobs your business needs done — and Caller Monkey does all of them.
          </p>
        </FadeIn>

        {/* Animated icon strip */}
        <div
          style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}
          aria-hidden="true"
        >
          {FEATURE_ICONS.map((f) => (
            <motion.div
              key={f.icon}
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduced ? {} : { duration: 0.45, delay: f.delay, ease: [0.25,1,0.5,1] }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}
            >
              <motion.div
                animate={reduced ? {} : { y: [0, -5, 0] }}
                transition={reduced ? {} : { duration: 3.5 + f.delay, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: 52, height: 52,
                  borderRadius: 'var(--radius-xl)',
                  background: 'white',
                  border: `1.5px solid ${f.color}33`,
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <Icon name={f.icon} size={24} strokeWidth={1.75} style={{ color: f.color }} />
              </motion.div>
              <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-grey-500)' }}>
                {f.label}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturesHero;
