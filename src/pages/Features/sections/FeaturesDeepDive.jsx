import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@components/motion/FadeIn';
import Icon from '@components/atoms/Icon';
import Container from '@components/layout/Container';
import { capabilities } from '@data/capabilities';
import { useReducedMotion } from '@hooks/useReducedMotion';

/* ── Compact detail per capability ── */
const DETAILS = {
  'voice-calling': {
    accent: '#2DA744',
    bg: '#E8F7EC',
    oneliner: 'Calls every lead in under 2 minutes — qualifies, answers, follows up.',
    stat: '21× more likely to convert when called within 5 min',
    chips: ['Lead qualification', 'Cold outreach', 'Re-engagement'],
  },
  whatsapp: {
    accent: '#25D366',
    bg: '#E6FBF0',
    oneliner: 'Follows up missed calls, shares docs, collects replies — on WhatsApp.',
    stat: '98% open rate in India',
    chips: ['Post-call follow-up', 'Appointment confirmation', 'Payment links'],
  },
  crm: {
    accent: '#2C7BE5',
    bg: '#EBF3FF',
    oneliner: 'Every call outcome auto-logged. Full pipeline visibility, zero manual entry.',
    stat: 'Works with Salesforce, Zoho, Freshsales',
    chips: ['Auto-logging', 'Workflow triggers', 'Pipeline sync'],
  },
  'lead-follow-up': {
    accent: '#F4A623',
    bg: '#FEF6E7',
    oneliner: 'Calls every lead, follows up 5+ times — without anyone on your team tracking it.',
    stat: '80% of sales need 5+ follow-ups',
    chips: ['Multi-step sequences', 'Escalation logic', 'Re-engagement'],
  },
  reminders: {
    accent: '#E11D48',
    bg: '#FEE2E2',
    oneliner: 'Right reminder, right time — appointments, EMI, renewals, deliveries.',
    stat: 'Reduces no-shows by up to 40%',
    chips: ['Clinic reminders', 'EMI alerts', 'Policy renewals'],
  },
  'employee-comm': {
    accent: '#7C3AED',
    bg: '#F5EEF8',
    oneliner: 'Broadcasts updates, training nudges, and urgent alerts to your whole team.',
    stat: 'Reaches 1000 staff in seconds',
    chips: ['Daily briefings', 'Training reminders', 'Emergency alerts'],
  },
  email: {
    accent: '#0891B2',
    bg: '#E0F7FA',
    oneliner: 'Triggers the right email based on call outcome — proposals, follow-ups, thank-yous.',
    stat: 'Triggered by call result, not a timer',
    chips: ['Proposals', 'Thank-you notes', 'Escalation emails'],
  },
  analytics: {
    accent: '#9B59B6',
    bg: '#F5EEF8',
    oneliner: 'Live dashboard: call volume, pick-up rate, team performance, conversion.',
    stat: 'See exactly where leads are lost',
    chips: ['Call dashboard', 'Team comparison', 'Campaign tracking'],
  },
  multilanguage: {
    accent: '#D97706',
    bg: '#FEF3C7',
    oneliner: "Speaks the customer's language — Hindi, Tamil, Marathi, Bengali, and 11 more.",
    stat: 'Higher pick-up rates in regional markets',
    chips: ['North India', 'South India', 'Regional campaigns'],
  },
};

function DeepDiveCard({ cap, isEven }) {
  const reduced = useReducedMotion();
  const d = DETAILS[cap.id] ?? {
    accent: '#2DA744',
    bg: '#E8F7EC',
    oneliner: cap.description,
    stat: '',
    chips: [],
  };

  return (
    <div
      id={cap.id}
      style={{
        background: isEven ? 'var(--color-bg)' : 'var(--color-bg-alt)',
        paddingBlock: 'clamp(2.5rem, 4vw, 4rem)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <Container>
        <FadeIn>
          <div
            style={{
              display: 'flex',
              flexDirection: isEven ? 'row' : 'row-reverse',
              alignItems: 'center',
              gap: 'clamp(2rem, 5vw, 5rem)',
              flexWrap: 'wrap',
            }}
          >
            {/* Icon side */}
            <div
              style={{
                flex: '0 0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <motion.div
                animate={reduced ? {} : { y: [0, -5, 0] }}
                transition={reduced ? {} : { duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 'var(--radius-xl)',
                  background: d.bg,
                  border: `1.5px solid ${d.accent}33`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 8px 24px ${d.accent}18`,
                }}
                aria-hidden="true"
              >
                <Icon name={cap.icon} size={34} strokeWidth={1.5} style={{ color: d.accent }} />
              </motion.div>

              {/* Stat badge */}
              {d.stat && (
                <div
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    background: d.bg,
                    fontSize: 'var(--text-xs)',
                    fontWeight: 700,
                    color: d.accent,
                    textAlign: 'center',
                    maxWidth: 160,
                    lineHeight: 1.4,
                    border: `1px solid ${d.accent}33`,
                  }}
                >
                  {d.stat}
                </div>
              )}
            </div>

            {/* Content side */}
            <div style={{ flex: '1 1 280px', minWidth: 0 }}>
              {/* Title with coloured left accent */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: 4,
                    height: 28,
                    borderRadius: 2,
                    background: d.accent,
                    flexShrink: 0,
                  }}
                />
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-h3)',
                    fontWeight: 700,
                    color: 'var(--color-grey-900)',
                    margin: 0,
                  }}
                >
                  {cap.title}
                </h2>
              </div>

              {/* One-liner */}
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--color-text-muted)',
                  lineHeight: 'var(--leading-relaxed)',
                  marginBottom: '1.25rem',
                }}
              >
                {d.oneliner}
              </p>

              {/* Use-case chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {d.chips.map((chip) => (
                  <span
                    key={chip}
                    style={{
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      background: d.bg,
                      fontSize: 'var(--text-xs)',
                      fontWeight: 600,
                      color: d.accent,
                      border: `1px solid ${d.accent}33`,
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}

function FeaturesDeepDive() {
  return (
    <div id="features-deep-dive">
      {capabilities.map((cap, i) => (
        <DeepDiveCard key={cap.id} cap={cap} isEven={i % 2 === 0} />
      ))}
    </div>
  );
}

export default FeaturesDeepDive;
