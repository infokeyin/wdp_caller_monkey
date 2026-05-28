import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@components/motion/FadeIn';
import Container from '@components/layout/Container';
import { useReducedMotion } from '@hooks/useReducedMotion';
import Icon from '@components/atoms/Icon';

const IND_ICONS = [
  { icon: 'Building2',      color: 'var(--ind-real-estate)',   delay: 0 },
  { icon: 'HeartPulse',     color: 'var(--ind-healthcare)',    delay: 0.1 },
  { icon: 'GraduationCap',  color: 'var(--ind-education)',     delay: 0.2 },
  { icon: 'ShoppingCart',   color: 'var(--ind-retail)',        delay: 0.3 },
  { icon: 'Factory',        color: 'var(--ind-manufacturing)', delay: 0.4 },
  { icon: 'Truck',          color: 'var(--ind-logistics)',     delay: 0.5 },
];

function IndustriesHero() {
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
          <p className="custom-eyebrow mb-4 text-center">Industries</p>
          <h1 className="custom-display text-center mb-6">
            Caller Monkey Works for Your Industry, Not Just Your Business.
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="custom-lead text-center mb-12">
            Every industry has its own follow-up rhythm and customer expectations. Caller Monkey is trained for each one — here is what that looks like across 12 industries.
          </p>
        </FadeIn>

        {/* Industry icon strip */}
        <div
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '1.25rem', flexWrap: 'wrap' }}
          aria-hidden="true"
        >
          {IND_ICONS.map((f, i) => (
            <motion.div
              key={f.icon}
              initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={reduced ? {} : { duration: 0.4, delay: f.delay, ease: [0.25,1,0.5,1] }}
            >
              <motion.div
                animate={reduced ? {} : { y: [0, -4, 0] }}
                transition={reduced ? {} : { duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: 48, height: 48,
                  borderRadius: 'var(--radius-lg)',
                  background: 'white',
                  border: `2px solid ${f.color}`,
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <Icon name={f.icon} size={22} strokeWidth={1.75} style={{ color: f.color }} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default IndustriesHero;
