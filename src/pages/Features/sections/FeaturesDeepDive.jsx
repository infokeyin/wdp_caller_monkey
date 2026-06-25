import { motion } from 'framer-motion';
import FadeIn from '@components/motion/FadeIn';
import Icon from '@components/atoms/Icon';
import Container from '@components/layout/Container';
import { capabilities } from '@data/capabilities';
import { useReducedMotion } from '@hooks/useReducedMotion';

/* ── Compact detail per capability ── */
const DETAILS = {
  'voice-agent': {
    accent: '#2DA744',
    bg: '#E8F7EC',
    oneliner:
      'AI voice agent calls every lead in under 2 minutes — qualifies, answers, follows up.',
    stat: '21× more likely to convert when called within 5 min',
    chips: ['Lead qualification', 'Inbound answering', 'Re-engagement'],
  },
  whatsapp: {
    accent: '#25D366',
    bg: '#E6FBF0',
    oneliner: 'Follows up missed calls, shares docs, collects replies — on WhatsApp automatically.',
    stat: '98% open rate vs 20% for email',
    chips: ['Post-call follow-up', 'Appointment confirmation', 'Payment links'],
  },
  telegram: {
    accent: '#2CA5E0',
    bg: '#E8F5FF',
    oneliner: 'Broadcasts briefings, alerts and updates to your entire team on Telegram instantly.',
    stat: 'Reaches 1000+ staff in seconds',
    chips: ['Daily briefings', 'Field team alerts', 'Training reminders'],
  },
  'meta-leads': {
    accent: '#1877F2',
    bg: '#EBF3FF',
    oneliner:
      'Captures every Facebook and Instagram lead instantly — and calls them within 2 minutes.',
    stat: 'Zero leads lost from Meta ad spend',
    chips: ['Facebook Lead Ads', 'Instagram Leads', 'Instant AI call'],
  },
  'google-leads': {
    accent: '#EA4335',
    bg: '#FEE8E6',
    oneliner: 'Pulls Google Ads and GMB leads automatically and follows up before competitors do.',
    stat: 'First to call wins 78% of the time',
    chips: ['Google Ads leads', 'Google My Business', 'CRM sync'],
  },
  'website-leads': {
    accent: '#7C3AED',
    bg: '#F5EEF8',
    oneliner: 'Detects website form submissions and triggers an instant AI call — 24/7.',
    stat: 'Lead response in under 2 minutes, round the clock',
    chips: ['Form submissions', 'Chat enquiries', 'Landing page leads'],
  },
  crm: {
    accent: '#2C7BE5',
    bg: '#EBF3FF',
    oneliner: 'Every call outcome auto-logged. Full pipeline visibility, zero manual entry.',
    stat: 'Works with Salesforce, Zoho, Freshsales, HubSpot',
    chips: ['Auto-logging', 'Workflow triggers', 'Pipeline sync'],
  },
  calendar: {
    accent: '#0891B2',
    bg: '#E0F7FA',
    oneliner:
      'AI books appointments into your calendar during the call — no back-and-forth needed.',
    stat: 'Instant booking confirmation sent to the customer',
    chips: ['Appointment booking', 'Reschedule handling', 'Confirmation alerts'],
  },
  email: {
    accent: '#E11D48',
    bg: '#FEE2E2',
    oneliner: 'Triggers the right email based on call outcome — proposals, follow-ups, thank-yous.',
    stat: 'Triggered by call result, not a timer',
    chips: ['Proposals', 'Thank-you notes', 'Escalation emails'],
  },
  payments: {
    accent: '#059669',
    bg: '#ECFDF5',
    oneliner: 'Sends quotations after a call and a payment link so customers can pay immediately.',
    stat: 'Closes deals faster — payment in the same session',
    chips: ['Quotation generation', 'Payment link', 'Invoice tracking'],
  },
  multilanguage: {
    accent: '#D97706',
    bg: '#FEF3C7',
    oneliner: "Speaks the customer's language — Hindi, Tamil, Marathi, Bengali, and 65+ more.",
    stat: 'Higher pick-up rates in regional markets',
    chips: ['North India', 'South India', 'Regional campaigns'],
  },
  autocall: {
    accent: '#F59E0B',
    bg: '#FFF7ED',
    oneliner: 'Dials every new lead the moment it arrives — day or night, no manual trigger.',
    stat: '< 2 minute response time, 24/7',
    chips: ['Instant lead dial', 'Off-hours coverage', 'Weekend calling'],
  },
  'lead-follow-up': {
    accent: '#F4A623',
    bg: '#FEF6E7',
    oneliner: 'Follows up every lead 5+ times — without anyone on your team tracking it.',
    stat: '80% of sales need 5+ follow-ups',
    chips: ['Multi-step sequences', 'Escalation logic', 'Re-engagement'],
  },
  analytics: {
    accent: '#9B59B6',
    bg: '#F5EEF8',
    oneliner: 'Live dashboard: call volume, response rate, team performance, conversion.',
    stat: 'See exactly where leads are lost',
    chips: ['Call dashboard', 'Team comparison', 'Campaign tracking'],
  },
  'pay-as-you-go': {
    accent: '#10B981',
    bg: '#ECFDF5',
    oneliner: 'No retainers, no lock-in. Pay only for what you use — scale up or down any time.',
    stat: 'Up to 60% lower cost vs in-house calling teams',
    chips: ['Usage-based billing', 'No long-term contract', 'Flexible scale'],
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
        scrollMarginTop: '80px',
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
