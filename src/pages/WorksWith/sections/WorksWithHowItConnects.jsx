import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@components/motion/FadeIn';
import Stagger from '@components/motion/Stagger';
import Icon from '@components/atoms/Icon';
import Container from '@components/layout/Container';
import { useReducedMotion } from '@hooks/useReducedMotion';

const STEPS = [
  {
    step: '01',
    icon: 'Zap',
    color: '#F4A623',
    bg: '#FEF6E7',
    title: 'Lead arrives',
    oneliner: 'IndiaMart, Facebook, website — received instantly.',
    time: '0:00',
  },
  {
    step: '02',
    icon: 'PhoneCall',
    color: '#2DA744',
    bg: '#E8F7EC',
    title: 'AI calls in 2 min',
    oneliner: 'Qualifies, answers questions, handles end to end.',
    time: '0:02',
  },
  {
    step: '03',
    icon: 'Database',
    color: '#2C7BE5',
    bg: '#EBF3FF',
    title: 'CRM auto-logged',
    oneliner: 'Status, interest level, next action — no manual entry.',
    time: '0:03',
  },
  {
    step: '04',
    icon: 'MessageSquare',
    color: '#25D366',
    bg: '#E6FBF0',
    title: 'WhatsApp sent',
    oneliner: 'Brochure, pricing, or next step — personalised.',
    time: '< 3 min',
  },
];

function WorksWithHowItConnects() {
  const reduced = useReducedMotion();

  return (
    <section className="custom-section-alt" id="how-it-connects">
      <Container>

        {/* Header — tighter */}
        <FadeIn>
          <p className="custom-eyebrow mb-3 text-center">How It Works</p>
          <h2 className="custom-h2 text-center mb-3">
            What Happens When a Lead Comes In
          </h2>
          <p style={{
            textAlign: 'center', marginBottom: '3rem',
            color: 'var(--color-text-muted)',
            fontSize: 'var(--text-base)',
          }}>
            From first contact to WhatsApp follow-up — in under 3 minutes, zero manual work.
          </p>
        </FadeIn>

        {/* Step cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '0',
          position: 'relative',
        }}>
          {STEPS.map((s, i) => (
            <Stagger key={s.step}>
              <Stagger.Child>
                <div style={{ position: 'relative', padding: '0 0.75rem' }}>

                  {/* Connector line between cards (desktop) */}
                  {i < STEPS.length - 1 && (
                    <div
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        top: 32,
                        right: '-1px',
                        width: '1.5rem',
                        height: 2,
                        background: `linear-gradient(90deg, ${s.color}55, ${STEPS[i+1].color}55)`,
                        zIndex: 1,
                      }}
                    />
                  )}

                  {/* Card */}
                  <motion.div
                    whileHover={reduced ? {} : { y: -4, boxShadow: `0 12px 28px ${s.color}22` }}
                    transition={{ duration: 0.22 }}
                    style={{
                      background: 'var(--color-bg-elevated)',
                      border: '1px solid var(--color-border)',
                      borderTop: `3px solid ${s.color}`,
                      borderRadius: 'var(--radius-lg)',
                      padding: '1.25rem',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                    }}
                  >
                    {/* Top row: step badge + icon */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-xs)', fontWeight: 700,
                        color: s.color,
                        background: s.bg,
                        padding: '0.2rem 0.5rem',
                        borderRadius: 'var(--radius-sm)',
                      }}>
                        {s.step}
                      </span>
                      <div style={{
                        width: 36, height: 36,
                        borderRadius: 'var(--radius-md)',
                        background: s.bg,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }} aria-hidden="true">
                        <Icon name={s.icon} size={17} strokeWidth={2} style={{ color: s.color }} />
                      </div>
                    </div>

                    {/* Title */}
                    <p style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: 'var(--text-h4)',
                      color: 'var(--color-grey-900)',
                      lineHeight: 1.25,
                      margin: 0,
                    }}>
                      {s.title}
                    </p>

                    {/* One-liner */}
                    <p style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.5,
                      margin: 0,
                      flex: 1,
                    }}>
                      {s.oneliner}
                    </p>

                    {/* Time chip */}
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                      alignSelf: 'flex-start',
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-full)',
                      background: s.bg,
                      fontSize: 'var(--text-xs)', fontWeight: 700,
                      color: s.color,
                      fontFamily: 'var(--font-mono)',
                    }}>
                      ⏱ {s.time}
                    </div>
                  </motion.div>
                </div>
              </Stagger.Child>
            </Stagger>
          ))}
        </div>

        {/* Summary bar */}
        <FadeIn delay={0.2}>
          <div style={{
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
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: '50%',
              background: 'var(--color-green-500)', flexShrink: 0,
            }} />
            <span style={{
              fontWeight: 700, color: 'var(--color-green-700)',
              fontSize: 'var(--text-sm)',
            }}>
              Total: under 3 minutes — running 24 / 7, for every lead.
            </span>
          </div>
        </FadeIn>

      </Container>
    </section>
  );
}

export default WorksWithHowItConnects;
