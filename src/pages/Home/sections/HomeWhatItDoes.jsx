import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@components/motion/FadeIn';
import Stagger from '@components/motion/Stagger';
import Container from '@components/layout/Container';
import Icon from '@components/atoms/Icon';
import { useReducedMotion } from '@hooks/useReducedMotion';

/* ── Each capability with its own accent colour ── */
const CAPABILITIES = [
  { icon: 'PhoneCall',     label: 'AI Voice Calling',    color: '#2DA744', bg: '#E8F7EC', desc: 'Calls leads in under 2 minutes'    },
  { icon: 'BellRing',      label: 'Lead Follow-Up',      color: '#2C7BE5', bg: '#EBF3FF', desc: 'Never misses a callback'           },
  { icon: 'MessageSquare', label: 'WhatsApp Auto',        color: '#25D366', bg: '#E6FBF0', desc: 'Replies & follow-ups on WhatsApp'  },
  { icon: 'Mail',          label: 'Email Automation',    color: '#F4A623', bg: '#FEF6E7', desc: 'Sends emails on call outcomes'      },
  { icon: 'Database',      label: 'CRM Logging',         color: '#9B59B6', bg: '#F5EEF8', desc: 'Every call auto-logged'             },
  { icon: 'MapPin',        label: 'Field Tracking',      color: '#E11D48', bg: '#FEE2E2', desc: 'Location + attendance via voice'   },
  { icon: 'BarChart3',     label: 'Live Analytics',      color: '#0891B2', bg: '#E0F7FA', desc: 'Real-time dashboards & reports'    },
  { icon: 'Languages',     label: '15+ Languages',       color: '#D97706', bg: '#FEF3C7', desc: 'Hindi, Tamil, Marathi & more'      },
];

/* ── Animated live indicator dot ── */
function LiveDot() {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
      <span style={{ position: 'relative', display: 'inline-flex' }}>
        <span
          style={{
            width: 8, height: 8, borderRadius: '50%',
            background: '#2DA744', display: 'block',
          }}
        />
        <span
          className="custom-pulse-ring"
          style={{
            position: 'absolute', inset: -3,
            borderRadius: '50%',
            border: '1.5px solid #2DA744',
          }}
          aria-hidden="true"
        />
      </span>
      <span style={{
        fontSize: 'var(--text-xs)', fontWeight: 700,
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        color: 'var(--color-green-600)',
      }}>
        Running 24 / 7
      </span>
    </span>
  );
}

/* ── SVG pipeline flow — shows the 3-channel flow above the grid ── */
function PipelineFlow() {
  return (
    <svg
      viewBox="0 0 640 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: '100%', maxWidth: 640, height: 60, marginBottom: '2rem' }}
    >
      {/* Central spine */}
      <line x1="320" y1="30" x2="30"  y2="30" stroke="#E5E5E5" strokeWidth="1.5" strokeDasharray="5 4" />
      <line x1="320" y1="30" x2="610" y2="30" stroke="#E5E5E5" strokeWidth="1.5" strokeDasharray="5 4" />

      {/* Left node — Lead */}
      <circle cx="30" cy="30" r="18" fill="#EBF3FF" />
      <text x="30" y="34" textAnchor="middle" fontSize="10" fontWeight="700" fill="#2C7BE5" fontFamily="system-ui">Lead</text>

      {/* Centre node — CM */}
      <circle cx="320" cy="30" r="22" fill="#2DA744" />
      <text x="320" y="35" textAnchor="middle" fontSize="11" fontWeight="900" fill="white" fontFamily="system-ui">CM</text>

      {/* Right node — Done */}
      <circle cx="610" cy="30" r="18" fill="#E8F7EC" />
      <text x="610" y="34" textAnchor="middle" fontSize="10" fontWeight="700" fill="#2DA744" fontFamily="system-ui">Done</text>

      {/* Animated traveling dot left-to-centre */}
      <circle r="5" fill="#2C7BE5" opacity="0.85">
        <animateMotion dur="2.4s" repeatCount="indefinite" begin="0s">
          <mpath>
            <path d="M30,30 L320,30" />
          </mpath>
        </animateMotion>
      </circle>

      {/* Animated traveling dot centre-to-right */}
      <circle r="5" fill="#2DA744" opacity="0.85">
        <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.2s">
          <mpath>
            <path d="M320,30 L610,30" />
          </mpath>
        </animateMotion>
      </circle>

      {/* Step labels */}
      <text x="175" y="18" textAnchor="middle" fontSize="9" fill="#9E9E9E" fontFamily="system-ui">AI calls &amp; qualifies</text>
      <text x="465" y="18" textAnchor="middle" fontSize="9" fill="#9E9E9E" fontFamily="system-ui">CRM logged · follow-up sent</text>
    </svg>
  );
}

/* ── Main section ── */
function HomeWhatItDoes() {
  const reduced = useReducedMotion();

  return (
    <section className="custom-section">
      <Container>

        {/* Header */}
        <FadeIn>
          <div style={{ marginBottom: '0.75rem' }}>
            <LiveDot />
          </div>
          <h2 className="custom-h2 mb-4" style={{ maxWidth: 560 }}>
            What Caller Monkey Does for You
          </h2>
          <p className="custom-lead mb-8" style={{ maxWidth: 520 }}>
            Every piece of business communication that currently needs manual effort — handled automatically, end to end.
          </p>
        </FadeIn>

        {/* Pipeline SVG */}
        <FadeIn delay={0.08}>
          {!reduced && <PipelineFlow />}
        </FadeIn>

        {/* 4×2 capability grid */}
        <Stagger className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {CAPABILITIES.map((cap, i) => (
            <Stagger.Child key={cap.icon}>
              <motion.div
                animate={reduced ? {} : { y: [0, -4, 0] }}
                transition={reduced ? {} : {
                  duration: 4 + i * 0.35,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.18,
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  padding: '1.25rem 1rem',
                  background: 'var(--color-bg-elevated)',
                  border: '1px solid var(--color-border)',
                  borderTop: `3px solid ${cap.color}`,
                  borderRadius: 'var(--radius-lg)',
                  cursor: 'default',
                  transition: 'box-shadow 0.25s, transform 0.25s',
                }}
                whileHover={reduced ? {} : {
                  y: -6,
                  boxShadow: `0 12px 28px ${cap.color}22`,
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 44, height: 44,
                    borderRadius: 'var(--radius-md)',
                    background: cap.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  <Icon name={cap.icon} size={22} strokeWidth={1.75} style={{ color: cap.color }} />
                </div>

                {/* Text */}
                <div>
                  <p style={{
                    fontSize: 'var(--text-sm)', fontWeight: 700,
                    color: 'var(--color-grey-800)', marginBottom: '0.2rem', lineHeight: 1.3,
                  }}>
                    {cap.label}
                  </p>
                  <p style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.5,
                  }}>
                    {cap.desc}
                  </p>
                </div>
              </motion.div>
            </Stagger.Child>
          ))}
        </Stagger>

      </Container>
    </section>
  );
}

export default HomeWhatItDoes;
