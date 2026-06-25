import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@components/motion/FadeIn';
import Stagger from '@components/motion/Stagger';
import Container from '@components/layout/Container';
import Icon from '@components/atoms/Icon';
import { capabilities } from '@data/capabilities';
import { useReducedMotion } from '@hooks/useReducedMotion';

/* ── Unique accent per capability (same order as capabilities.js — 15 features) ── */
const ACCENTS = [
  { color: '#2DA744', bg: '#E8F7EC' }, // Voice Agent
  { color: '#25D366', bg: '#E6FBF0' }, // WhatsApp Automation
  { color: '#2CA5E0', bg: '#E8F5FF' }, // Team Comm on Telegram
  { color: '#1877F2', bg: '#EBF3FF' }, // Meta Leads Tracking
  { color: '#EA4335', bg: '#FEE8E6' }, // Google Leads Tracking
  { color: '#7C3AED', bg: '#F5EEF8' }, // Website Leads Tracking
  { color: '#2C7BE5', bg: '#EBF3FF' }, // CRM Integration
  { color: '#0891B2', bg: '#E0F7FA' }, // Calendar Schedule
  { color: '#E11D48', bg: '#FEE2E2' }, // Email Integration
  { color: '#059669', bg: '#ECFDF5' }, // Quotation & Payment Gateway
  { color: '#D97706', bg: '#FEF3C7' }, // 70+ Languages
  { color: '#F59E0B', bg: '#FFF7ED' }, // Autocall Function
  { color: '#F4A623', bg: '#FEF6E7' }, // Lead Follow-up
  { color: '#9B59B6', bg: '#F5EEF8' }, // Analytics
  { color: '#10B981', bg: '#ECFDF5' }, // Pay as you Go
];

function FeaturesGrid() {
  const reduced = useReducedMotion();

  return (
    <section id="features-grid" className="custom-section-alt">
      <Container>
        <FadeIn>
          <p className="custom-eyebrow mb-3 text-center">What It Does</p>
          <h2 className="custom-h2 text-center mb-10">15 powerful features. One connected system.</h2>
        </FadeIn>

        <Stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {capabilities.map((cap, i) => {
            const { color, bg } = ACCENTS[i] ?? ACCENTS[0];
            return (
              <Stagger.Child key={cap.id}>
                <motion.a
                  href={`#${cap.id}`}
                  whileHover={reduced ? {} : { y: -4, boxShadow: `0 12px 28px ${color}22` }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '1.25rem 1rem',
                    background: 'var(--color-bg-elevated)',
                    border: '1px solid var(--color-border)',
                    borderTop: `3px solid ${color}`,
                    borderRadius: 'var(--radius-lg)',
                    textDecoration: 'none',
                    height: '100%',
                  }}
                  aria-label={`Learn more about ${cap.title}`}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 'var(--radius-md)',
                      background: bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    <Icon name={cap.icon} size={20} strokeWidth={1.75} style={{ color }} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-grey-900)',
                      lineHeight: 1.3,
                    }}
                  >
                    {cap.title}
                  </span>
                </motion.a>
              </Stagger.Child>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}

export default FeaturesGrid;
