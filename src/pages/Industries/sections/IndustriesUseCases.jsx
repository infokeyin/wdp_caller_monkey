import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '@components/motion/FadeIn';
import Container from '@components/layout/Container';
import Icon from '@components/atoms/Icon';
import { useCases } from '@data/useCases';
import { industries } from '@data/industries';
import { useReducedMotion } from '@hooks/useReducedMotion';

const industryMap = Object.fromEntries(industries.map((ind) => [ind.id, ind]));

const ACCENT = {
  'customer-support': '#2DA744',
  ecommerce: '#F4A623',
  healthcare: '#E91E63',
  finance: '#2C7BE5',
  travel: '#0891B2',
  education: '#9B59B6',
  'real-estate': '#E07B39',
  hr: '#7C3AED',
  insurance: '#2DA744',
  manufacturing: '#0891B2',
  legal: '#374151',
  automotive: '#D97706',
  logistics: '#5D4037',
  government: '#4CAF50',
  hospitality: '#E07B39',
  entertainment: '#9B59B6',
  agriculture: '#6B9E3E',
  energy: '#F59E0B',
  nonprofits: '#E11D48',
  retail: '#F4A623',
  telecom: '#2C7BE5',
  gaming: '#7C3AED',
  events: '#0891B2',
  construction: '#D97706',
  fitness: '#2DA744',
  recruitment: '#374151',
  'food-beverage': '#D32F2F',
  fashion: '#E91E63',
  'security-it': '#1565C0',
  tourism: '#0891B2',
  'property-management': '#E07B39',
  publishing: '#9B59B6',
  'professional-services': '#2C7BE5',
  transportation: '#5D4037',
  saas: '#2DA744',
};

const EXTRAS = {
  'customer-support': {
    problem: '38% of calls abandoned due to long hold times.',
    stat: '72%',
    statLabel: 'reduction in hold time',
    chips: ['24/7 AI support', 'Tier-1 automation', 'Smart escalation'],
  },
  ecommerce: {
    problem: '30% cart abandonment. Email recovery getting <5% open rate.',
    stat: '4×',
    statLabel: 'cart recovery improvement',
    chips: ['Instant callback', 'Discount via voice', 'WhatsApp follow-up'],
  },
  healthcare: {
    problem: '35% of inbound appointment calls were missed.',
    stat: '58%',
    statLabel: 'more appointments booked',
    chips: ['24/7 answering', 'WhatsApp confirmation', '40% fewer no-shows'],
  },
  finance: {
    problem: '60% of new leads never received a callback.',
    stat: '4×',
    statLabel: 'deals closed, same team',
    chips: ['AI lead qualification', 'CRM auto-logging', 'Warm handoff'],
  },
  travel: {
    problem: 'Inquiry volume spiked 10× in peak season — calls missed.',
    stat: '45%',
    statLabel: 'more bookings in peak season',
    chips: ['Instant inquiry response', 'Consultation booking', 'Multilingual'],
  },
  education: {
    problem: 'Counsellors reached only 30% of leads in week one.',
    stat: '35%',
    statLabel: 'higher conversion rate',
    chips: ['Instant lead call', 'Demo class booking', 'WhatsApp details'],
  },
  'real-estate': {
    problem: '40% of leads missed — team too busy or after hours.',
    stat: '3×',
    statLabel: 'site visit bookings',
    chips: ['24/7 lead response', 'Auto site visit booking', 'WhatsApp follow-up'],
  },
  hr: {
    problem: 'Time-to-shortlist was 12 days with manual screening.',
    stat: '2',
    statLabel: 'days to shortlist (was 12)',
    chips: ['AI screening calls', 'Auto interview booking', 'CRM sync'],
  },
  insurance: {
    problem: '25% policy lapse rate from missed follow-ups.',
    stat: '8%',
    statLabel: 'lapse rate (was 25%)',
    chips: ['30/15/7 day reminders', 'WhatsApp alerts', 'Auto follow-up'],
  },
  manufacturing: {
    problem: 'Sales team spent 3 hours/day on routine dealer calls.',
    stat: '3hrs',
    statLabel: 'reclaimed per day per rep',
    chips: ['Order status AI', 'Dispatch updates', 'Payment reminders'],
  },
  legal: {
    problem: 'Staff spending 2+ hours/day on repetitive client queries.',
    stat: '60%',
    statLabel: 'more consultation bookings',
    chips: ['Intake automation', 'Document checklist', 'FAQ answering'],
  },
  automotive: {
    problem: 'SMS reminders getting 8% response — 20% no-shows.',
    stat: '97%',
    statLabel: 'service show-up rate',
    chips: ['Voice reminders', 'Reschedule handling', 'WhatsApp confirm'],
  },
  logistics: {
    problem: '1,200 delivery status calls/day overwhelming support.',
    stat: '78%',
    statLabel: 'fewer inbound support calls',
    chips: ['Auto status updates', 'Reschedule handling', 'COD confirmation'],
  },
  government: {
    problem: 'Citizens waiting 45+ minutes on hold for basic queries.',
    stat: '68%',
    statLabel: 'faster resolution',
    chips: ['24/7 citizen support', 'Local language', 'Complaint logging'],
  },
  hospitality: {
    problem: 'Reservation calls missed. Post-stay follow-up non-existent.',
    stat: '35%',
    statLabel: 'more reservations captured',
    chips: ['24/7 reservations', 'Pre-arrival info', 'Post-stay feedback'],
  },
  entertainment: {
    problem: '22% monthly churn. Cancelled subs not followed up on.',
    stat: '31%',
    statLabel: 'of cancellations recovered',
    chips: ['Churn detection', 'Retention offer', 'Re-activation in call'],
  },
  agriculture: {
    problem: 'Advisory calls reaching only 15% of registered farmers.',
    stat: '4×',
    statLabel: 'farmer engagement increase',
    chips: ['Weekly AI calls', 'Local language', 'Market price alerts'],
  },
  energy: {
    problem: 'Outage helpline overwhelmed — avg hold time 28 minutes.',
    stat: '65%',
    statLabel: 'reduction in helpline load',
    chips: ['Auto outage logging', 'WhatsApp ETA', 'Critical escalation'],
  },
  nonprofits: {
    problem: 'Donor renewal at 42%. Manual follow-up coverage was poor.',
    stat: '67%',
    statLabel: 'donor renewal rate (was 42%)',
    chips: ['Impact messaging', 'Recurring donation setup', 'Query handling'],
  },
  retail: {
    problem: 'Hours spent manually calling 400+ retailers per cycle.',
    stat: '60%',
    statLabel: 'faster order collection',
    chips: ['Scheduled AI calls', 'Order + payment nudge', '100% follow-up'],
  },
  telecom: {
    problem: 'Low upsell conversion via outbound calls — team too slow.',
    stat: '3.2×',
    statLabel: 'upsell conversion rate',
    chips: ['Proactive upgrade calls', 'Plan explanation', 'In-call confirm'],
  },
  gaming: {
    problem: 'Dormant high-value player win-back at <3% via email.',
    stat: '22%',
    statLabel: 'win-back rate (vs 3% email)',
    chips: ['AI win-back calls', 'Personalised incentive', 'Feedback capture'],
  },
  events: {
    problem: 'Manual RSVP follow-up — confirmation rate stuck at 55%.',
    stat: '91%',
    statLabel: 'confirmation rate',
    chips: ['7-day & 2-day reminders', 'WhatsApp event details', 'RSVP handling'],
  },
  construction: {
    problem: 'Only 30% of site visitors followed up within 48 hours.',
    stat: '2.4×',
    statLabel: 'visit-to-booking conversion',
    chips: ['Same-day follow-up', 'Pricing queries', 'Sales manager booking'],
  },
  fitness: {
    problem: '40% of trial members not converting. Reminders missed.',
    stat: '84%',
    statLabel: 'trial-to-paid conversion',
    chips: ['Day 5/8/12 calls', 'Personalised offers', 'Objection handling'],
  },
  recruitment: {
    problem: '2 recruiters spending full day screening 300+ candidates.',
    stat: '5×',
    statLabel: 'recruiter capacity increase',
    chips: ['AI screening', 'Shortlist scoring', 'Interview auto-booking'],
  },
  'food-beverage': {
    problem: 'Reservation calls unanswered during peak hours.',
    stat: '50%',
    statLabel: 'more reservations captured',
    chips: ['24/7 table booking', '2hr WhatsApp reminder', 'Cancellation handling'],
  },
  fashion: {
    problem: 'Repeat purchase rate at 18% — well below industry average.',
    stat: '31%',
    statLabel: 'repeat purchase rate',
    chips: ['Post-purchase calls', 'Style recommendations', 'New arrivals alert'],
  },
  'security-it': {
    problem: 'Basic IT tickets piling up. Client SLA breaches increasing.',
    stat: '68%',
    statLabel: 'Tier-1 resolved without engineer',
    chips: ['Password resets', 'Auto ticket logging', 'ETA communication'],
  },
  tourism: {
    problem: 'Multilingual tourist queries — staff only fluent in 2 languages.',
    stat: '89%',
    statLabel: 'queries resolved without human',
    chips: ['15+ languages', 'Visa info', 'Recommendations'],
  },
  'property-management': {
    problem: 'Rent reminder calls consuming 4 hours/day. Late payments at 28%.',
    stat: '9%',
    statLabel: 'late payment rate (was 28%)',
    chips: ['Pre-due reminders', 'Maintenance intake', 'Receipt queries'],
  },
  publishing: {
    problem: '35% of subscribers not renewing — manual follow-up coverage low.',
    stat: '88%',
    statLabel: 'renewal rate (was 65%)',
    chips: ['45 & 15 day reminders', 'Upgrade offers', 'In-call renewal'],
  },
  'professional-services': {
    problem: 'Client onboarding taking 2+ hours of senior staff time.',
    stat: '70%',
    statLabel: 'onboarding time saved',
    chips: ['AI intake', 'Doc checklist', 'Onboarding call booking'],
  },
  transportation: {
    problem: 'Cancellation & refund calls overwhelming helpdesk.',
    stat: '58%',
    statLabel: 'helpdesk volume reduced',
    chips: ['Auto cancellation', 'Refund status', 'Rescheduling AI'],
  },
  saas: {
    problem: 'Trial-to-paid at 14%. 60% of trials never got an onboarding call.',
    stat: '26%',
    statLabel: 'trial-to-paid conversion',
    chips: ['2hr trial callback', 'Use case discovery', 'CS call booking'],
  },
};

function StoryCard({ story, index }) {
  const reduced = useReducedMotion();
  const ind = industryMap[story.industryId];
  const ex = EXTRAS[story.industryId];
  const color = ACCENT[story.industryId] ?? '#2DA744';
  const bg = `${color}10`;

  return (
    <div
      id={`story-${story.industryId}`}
      className="scroll-mt-24"
      style={{
        background: index % 2 === 0 ? 'var(--color-bg)' : 'var(--color-bg-alt)',
        paddingBlock: 'clamp(2.5rem,4vw,4rem)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <Container>
        <FadeIn>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
              alignItems: 'center',
              gap: 'clamp(2rem,5vw,4rem)',
            }}
          >
            {/* Stat column */}
            <div
              style={{
                flex: '0 0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                minWidth: 150,
              }}
            >
              <motion.div
                animate={reduced ? {} : { y: [0, -5, 0] }}
                transition={reduced ? {} : { duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: 68,
                  height: 68,
                  borderRadius: 'var(--radius-xl)',
                  background: bg,
                  border: `1.5px solid ${color}33`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 8px 24px ${color}18`,
                }}
                aria-hidden="true"
              >
                {ind && <Icon name={ind.icon} size={30} strokeWidth={1.5} style={{ color }} />}
              </motion.div>
              {ex && (
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'clamp(2rem,4vw,2.5rem)',
                      fontWeight: 900,
                      color,
                      lineHeight: 1,
                    }}
                  >
                    {ex.stat}
                  </div>
                  <div
                    style={{
                      fontSize: 'var(--text-xs)',
                      fontWeight: 600,
                      color: 'var(--color-text-muted)',
                      marginTop: '0.25rem',
                      maxWidth: 130,
                    }}
                  >
                    {ex.statLabel}
                  </div>
                </div>
              )}
              <span
                style={{
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  color,
                  background: bg,
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-full)',
                  border: `1px solid ${color}33`,
                }}
              >
                {story.businessType}
              </span>
            </div>

            {/* Content column */}
            <div style={{ flex: '1 1 280px', minWidth: 0 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  marginBottom: '0.625rem',
                }}
              >
                <div
                  style={{
                    width: 4,
                    height: 22,
                    borderRadius: 2,
                    background: color,
                    flexShrink: 0,
                  }}
                />
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 'var(--text-h3)',
                    color: 'var(--color-grey-900)',
                    margin: 0,
                  }}
                >
                  {ind?.name}
                </h2>
              </div>
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--color-text-muted)',
                  lineHeight: 'var(--leading-relaxed)',
                  marginBottom: '1.25rem',
                }}
              >
                {ex?.problem ?? story.challenge}
              </p>
              {ex && (
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  {ex.chips.map((chip) => (
                    <span
                      key={chip}
                      style={{
                        padding: '0.3rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        background: bg,
                        fontSize: 'var(--text-xs)',
                        fontWeight: 600,
                        color,
                        border: `1px solid ${color}33`,
                      }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              )}
              <a
                href="/get-started#demo-form"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 700,
                  color,
                  textDecoration: 'none',
                  transition: 'gap 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = '0.7rem')}
                onMouseLeave={(e) => (e.currentTarget.style.gap = '0.4rem')}
              >
                Get a similar result <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}

function IndustriesUseCases() {
  return (
    <div id="use-cases">
      <div
        style={{
          background: 'var(--color-bg-alt)',
          paddingBlock: 'clamp(2.5rem,4vw,3.5rem)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <Container variant="narrow">
          <FadeIn>
            <p className="custom-eyebrow mb-3 text-center">Customer Stories</p>
            <h2 className="custom-h2 text-center mb-0">Real Businesses. Real Results.</h2>
          </FadeIn>
        </Container>
      </div>
      {useCases.map((story, i) => (
        <StoryCard key={story.id} story={story} index={i} />
      ))}
    </div>
  );
}

export default IndustriesUseCases;
