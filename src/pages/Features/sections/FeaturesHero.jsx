import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FadeIn from '@components/motion/FadeIn';
import Container from '@components/layout/Container';
import Icon from '@components/atoms/Icon';
import { useReducedMotion } from '@hooks/useReducedMotion';

/* ── Feature chips shown in the hero ── */
const FEATURES = [
  { icon: 'PhoneCall', label: 'Voice Agent', color: '#2DA744', bg: '#E8F7EC' },
  { icon: 'MessageSquare', label: 'WhatsApp Automation', color: '#25D366', bg: '#E6FBF0' },
  { icon: 'Send', label: 'Team Comm on Telegram', color: '#2CA5E0', bg: '#E8F5FF' },
  { icon: 'Facebook', label: 'Meta Leads Tracking', color: '#1877F2', bg: '#EBF3FF' },
  { icon: 'Search', label: 'Google Leads Tracking', color: '#EA4335', bg: '#FEE8E6' },
  { icon: 'Globe', label: 'Website Leads Tracking', color: '#7C3AED', bg: '#F5EEF8' },
  { icon: 'Database', label: 'CRM Integration', color: '#2C7BE5', bg: '#EBF3FF' },
  { icon: 'CalendarCheck', label: 'Calendar Schedule', color: '#0891B2', bg: '#E0F7FA' },
  { icon: 'Mail', label: 'Email Integration', color: '#E11D48', bg: '#FEE2E2' },
  { icon: 'CreditCard', label: 'Quotation & Payment Gateway', color: '#059669', bg: '#ECFDF5' },
  { icon: 'Languages', label: '70+ Languages', color: '#D97706', bg: '#FEF3C7' },
  { icon: 'PhoneForwarded', label: "'Autocall' Function", color: '#F59E0B', bg: '#FFF7ED' },
  { icon: 'Zap', label: 'Lead Follow-up', color: '#F4A623', bg: '#FEF6E7' },
  { icon: 'BarChart3', label: 'Analytics', color: '#9B59B6', bg: '#F5EEF8' },
  { icon: 'Coins', label: 'Pay as you Go', color: '#10B981', bg: '#ECFDF5' },
];

/* ── Live activity feed SVG ── */
const FEED_ITEMS = [
  { color: '#2DA744', label: 'Lead called — qualified', time: '0:02' },
  { color: '#25D366', label: 'WhatsApp sent — brochure', time: '0:03' },
  { color: '#2C7BE5', label: 'CRM updated — Hot lead', time: '0:03' },
  { color: '#F4A623', label: 'Follow-up scheduled', time: '0:05' },
  { color: '#9B59B6', label: 'Report generated', time: '1:00' },
];

function ActivityFeed({ reduced }) {
  return (
    <div
      style={{
        background: '#FAFAFA',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.25rem',
        width: '100%',
        maxWidth: 340,
      }}
    >
      {/* Header bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1rem',
          paddingBottom: '0.75rem',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#2DA744' }} />
        <span
          style={{
            fontSize: 'var(--text-xs)',
            fontWeight: 700,
            color: 'var(--color-grey-600)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          Live activity
        </span>
        <span
          style={{
            marginLeft: 'auto',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-text-muted)',
          }}
        >
          today
        </span>
      </div>

      {/* Feed rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
        {FEED_ITEMS.map((item, i) => (
          <motion.div
            key={item.label}
            initial={reduced ? { opacity: 1 } : { opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={reduced ? {} : { delay: 0.3 + i * 0.18, duration: 0.35 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '0.5rem 0.625rem',
              background: 'white',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: item.color,
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-grey-700)', flex: 1 }}>
              {item.label}
            </span>
            <span
              style={{
                fontSize: 'var(--text-xs)',
                fontFamily: 'var(--font-mono)',
                color: 'var(--color-text-muted)',
              }}
            >
              {item.time}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <p
        style={{
          marginTop: '0.875rem',
          fontSize: 'var(--text-xs)',
          color: 'var(--color-text-muted)',
          textAlign: 'center',
        }}
      >
        All of this. Zero manual work.
      </p>
    </div>
  );
}

function FeaturesHero() {
  const reduced = useReducedMotion();

  return (
    <section
      style={{
        background: 'var(--color-bg)',
        paddingTop: 'clamp(5rem, 8vw, 8rem)',
        paddingBottom: 'clamp(2.5rem, 5vw, 5rem)',
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden',
      }}
    >
      <Container>
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-[clamp(2rem,5vw,5rem)]">
          {/* Left */}
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <FadeIn>
              <p className="custom-eyebrow mb-3">Features</p>
              <h1 className="custom-h1 mb-4" style={{ maxWidth: 480 }}>
                9 Jobs Done for You. Every Day. Automatically.
              </h1>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="custom-lead mb-8" style={{ maxWidth: 420 }}>
                Not a feature list — these are real business jobs Caller Monkey handles without
                manual input.
              </p>
            </FadeIn>

            {/* Feature chips */}
            <FadeIn delay={0.14}>
              <div
                style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}
              >
                {FEATURES.map((f, i) => (
                  <motion.a
                    key={f.icon}
                    href={`#features-grid`}
                    initial={reduced ? { opacity: 1 } : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={reduced ? {} : { delay: 0.2 + i * 0.07, duration: 0.3 }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      padding: '0.3rem 0.75rem',
                      background: f.bg,
                      color: f.color,
                      borderRadius: 'var(--radius-full)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 700,
                      textDecoration: 'none',
                      border: `1px solid ${f.color}33`,
                      transition: 'transform 0.15s',
                    }}
                    whileHover={reduced ? {} : { scale: 1.04 }}
                  >
                    <Icon name={f.icon} size={12} strokeWidth={2} aria-hidden="true" />
                    {f.label}
                  </motion.a>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.22}>
              <Link
                to="/get-started#demo-form"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.875rem 1.75rem',
                  background: 'var(--color-green-500)',
                  color: '#fff',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 700,
                  fontSize: 'var(--text-base)',
                  textDecoration: 'none',
                  boxShadow: 'var(--shadow-green)',
                }}
              >
                See It Live
              </Link>
            </FadeIn>
          </div>

          {/* Right — activity feed */}
          <div
            style={{
              flex: '0 0 auto',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <FadeIn delay={0.1} y={16}>
              <motion.div
                animate={reduced ? {} : { y: [0, -5, 0] }}
                transition={reduced ? {} : { duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ActivityFeed reduced={reduced} />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FeaturesHero;
