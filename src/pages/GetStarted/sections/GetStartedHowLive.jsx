import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@components/motion/FadeIn';
import Stagger from '@components/motion/Stagger';
import Container from '@components/layout/Container';
import { useReducedMotion } from '@hooks/useReducedMotion';

const STEPS = [
  {
    number: 1,
    color: '#2DA744',
    bg: '#E8F7EC',
    title: 'Connect',
    oneliner:
      'We link your phone number, CRM, WhatsApp, and lead platforms. Our team handles all setup.',
    result: 'Live from Day 1.',
  },
  {
    number: 2,
    color: '#2C7BE5',
    bg: '#EBF3FF',
    title: 'Train',
    oneliner:
      'Share your scripts, FAQs, and tone. We build the AI and get your approval before going live.',
    result: 'Sounds like your best salesperson.',
  },
  {
    number: 3,
    color: '#9B59B6',
    bg: '#F5EEF8',
    title: 'Scale',
    oneliner: 'As results come in, we add workflows — email, analytics, more integrations.',
    result: 'Scales without adding headcount.',
  },
];

function GetStartedHowLive() {
  const reduced = useReducedMotion();

  return (
    <section className="custom-section" id="how-it-works">
      <Container>
        <FadeIn>
          <p className="custom-eyebrow mb-3 text-center">How Going Live Works</p>
          <h2 className="custom-h2 text-center mb-3">Live in 15 Working Days</h2>
          <p
            style={{
              textAlign: 'center',
              marginBottom: '3rem',
              color: 'var(--color-text-muted)',
              fontSize: 'var(--text-base)',
            }}
          >
            From scripts approved to AI handling real calls — guaranteed.
          </p>
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {STEPS.map((step) => (
            <Stagger.Child key={step.number}>
              <motion.div
                whileHover={reduced ? {} : { y: -4, boxShadow: `0 12px 28px ${step.color}22` }}
                transition={{ duration: 0.2 }}
                style={{
                  padding: '1.5rem',
                  background: 'var(--color-bg-elevated)',
                  border: '1px solid var(--color-border)',
                  borderTop: `3px solid ${step.color}`,
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.875rem',
                  height: '100%',
                }}
              >
                {/* Number badge */}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 'var(--radius-md)',
                    background: step.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 800,
                      fontSize: 'var(--text-lg)',
                      color: step.color,
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 'var(--text-h4)',
                    color: 'var(--color-grey-900)',
                    margin: 0,
                  }}
                >
                  {step.title}
                </h3>

                {/* One-liner */}
                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.55,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {step.oneliner}
                </p>

                {/* Result chip */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignSelf: 'flex-start',
                    padding: '0.25rem 0.75rem',
                    background: step.bg,
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 700,
                    color: step.color,
                    border: `1px solid ${step.color}33`,
                  }}
                >
                  ✓ {step.result}
                </div>
              </motion.div>
            </Stagger.Child>
          ))}
        </Stagger>

        {/* Summary bar */}
        <FadeIn delay={0.2}>
          <div
            style={{
              marginTop: '2rem',
              padding: '1rem 1.5rem',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--color-green-50)',
              border: '1px solid var(--color-green-200)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--color-green-500)',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontWeight: 700,
                color: 'var(--color-green-700)',
                fontSize: 'var(--text-sm)',
              }}
            >
              15 working days from payment · Our team handles all setup · You just approve the
              scripts.
            </span>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

export default GetStartedHowLive;
