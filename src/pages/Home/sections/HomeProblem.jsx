import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@components/motion/FadeIn';
import Stagger from '@components/motion/Stagger';
import Container from '@components/layout/Container';
import { useReducedMotion } from '@hooks/useReducedMotion';

/* ── Before / After pairs ── */
const ROWS = [
  { before: 'Lead comes in at 11 PM', after: 'Called within 2 minutes, 24/7' },
  { before: 'Follow-up slips through cracks', after: '100% coverage — every time' },
  { before: 'CRM entry done… maybe', after: 'Auto-logged after every call' },
  { before: 'Reminder depends on who remembers', after: 'Payment & appointment auto-sent' },
];

function HomeProlem() {
  const reduced = useReducedMotion();

  return (
    <section className="custom-section-alt">
      <Container>
        <FadeIn>
          <p className="custom-eyebrow mb-3">The Problem</p>
          <h2 className="custom-h2 mb-3" style={{ maxWidth: 520 }}>
            Your business is growing. Your communication is not keeping up.
          </h2>
          <p
            style={{
              color: 'var(--color-text-muted)',
              fontSize: 'var(--text-base)',
              marginBottom: '2.5rem',
              maxWidth: 460,
            }}
          >
            Every day, leads are lost and follow-ups missed — not from lack of effort, but because
            communication still needs manual work.
          </p>
        </FadeIn>

        {/* Two-column before/after cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {/* Before column */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.75rem',
                padding: '0.4rem 0.875rem',
                background: 'rgba(217,52,43,0.08)',
                borderRadius: 'var(--radius-full)',
                alignSelf: 'flex-start',
                width: 'fit-content',
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#D9342B',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  color: '#D9342B',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                Without Caller Monkey
              </span>
            </div>
            <Stagger className="flex flex-col gap-2">
              {ROWS.map((row, i) => (
                <Stagger.Child key={i}>
                  <motion.div
                    whileHover={reduced ? {} : { x: 2 }}
                    style={{
                      padding: '0.875rem 1rem',
                      background: 'rgba(217,52,43,0.04)',
                      border: '1px solid rgba(217,52,43,0.15)',
                      borderLeft: '3px solid #D9342B',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-grey-500)',
                        lineHeight: 1.4,
                      }}
                    >
                      {row.before}
                    </span>
                  </motion.div>
                </Stagger.Child>
              ))}
            </Stagger>
          </div>

          {/* After column */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.75rem',
                padding: '0.4rem 0.875rem',
                background: 'var(--color-green-50)',
                borderRadius: 'var(--radius-full)',
                alignSelf: 'flex-start',
                width: 'fit-content',
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#2DA744',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  color: 'var(--color-green-700)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                With Caller Monkey
              </span>
            </div>
            <Stagger className="flex flex-col gap-2">
              {ROWS.map((row, i) => (
                <Stagger.Child key={i}>
                  <motion.div
                    whileHover={reduced ? {} : { x: -2 }}
                    style={{
                      padding: '0.875rem 1rem',
                      background: 'var(--color-green-50)',
                      border: '1px solid var(--color-green-200)',
                      borderLeft: '3px solid #2DA744',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-green-800)',
                        fontWeight: 600,
                        lineHeight: 1.4,
                      }}
                    >
                      {row.after}
                    </span>
                  </motion.div>
                </Stagger.Child>
              ))}
            </Stagger>
          </div>
        </div>

        {/* Bottom note */}
        <FadeIn delay={0.3}>
          <p
            style={{
              textAlign: 'center',
              marginTop: '2rem',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-muted)',
            }}
          >
            This is not about replacing your team — it is about closing the gaps that cost you
            revenue every day.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}

export default HomeProlem;
