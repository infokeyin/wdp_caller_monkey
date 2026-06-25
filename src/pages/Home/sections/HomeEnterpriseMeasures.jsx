import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, Globe2, BarChart2 } from 'lucide-react';
import FadeIn from '@components/motion/FadeIn';
import Stagger from '@components/motion/Stagger';
import Container from '@components/layout/Container';

/* ── Content data ── */
const IMPACT_CATEGORIES = [
  {
    id: 'revenue',
    label: 'Revenue Impact',
    accentColor: '#2DA744',
    bg: '#E8F7EC',
    Icon: TrendingUp,
    items: [
      'Higher lead-to-meeting conversion from faster first response',
      'More pipeline coverage from systematic follow-up',
      'Repeat business triggered from dormant customer reactivation',
      'Upsell and cross-sell revenue from structured post-sale engagement',
    ],
  },
  {
    id: 'efficiency',
    label: 'Efficiency Impact',
    accentColor: '#2C7BE5',
    bg: '#EBF3FF',
    Icon: Zap,
    items: [
      'Significant reduction in repetitive communication workload',
      'Human team reallocated to high-value, relationship-driven work',
      'Consistent communication quality across every interaction',
      'Reduced dependency on individual team members',
    ],
  },
  {
    id: 'scale',
    label: 'Scale Impact',
    accentColor: '#9B59B6',
    bg: '#F5EEF8',
    Icon: Globe2,
    items: [
      'New territory activation without proportional headcount',
      'Peak demand managed without surge hiring',
      'Multi-language outreach from a single system',
      '24 / 7 customer engagement at no additional cost',
    ],
  },
  {
    id: 'visibility',
    label: 'Management Visibility',
    accentColor: '#F4A623',
    bg: '#FEF6E7',
    Icon: BarChart2,
    items: [
      'Real-time dashboard: response time, coverage, conversion rates',
      'Full communication audit trail — every interaction logged',
      'Team productivity benchmarking without micromanagement',
      'Early identification of pipeline gaps and drop-off points',
    ],
  },
];

/* ── Arrow bullet icon ── */
function ArrowBullet({ color }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0, marginTop: 2 }}
    >
      <path
        d="M2 7h10M8 3l4 4-4 4"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Single impact card ── */
function ImpactCard({ category, index }) {
  return (
    <Stagger.Child>
      <motion.div
        whileHover={{ y: -4, boxShadow: `0 16px 36px ${category.accentColor}1A` }}
        transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
        style={{
          background: 'var(--color-bg-elevated)',
          border: '1px solid var(--color-border)',
          borderTop: `3px solid ${category.accentColor}`,
          borderRadius: 'var(--radius-lg)',
          padding: '1.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          height: '100%',
        }}
      >
        {/* Card header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.625rem' }}>
          {/* Label row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: category.accentColor,
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-xs)',
                fontWeight: 700,
                letterSpacing: 'var(--tracking-widest)',
                textTransform: 'uppercase',
                color: category.accentColor,
                margin: 0,
              }}
            >
              {category.label}
            </p>
          </div>

          {/* Category icon — top-right */}
          <div
            aria-hidden="true"
            style={{
              width: 36,
              height: 36,
              borderRadius: 'var(--radius-md)',
              background: category.bg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              border: `1px solid ${category.accentColor}28`,
            }}
          >
            <category.Icon size={18} strokeWidth={1.75} style={{ color: category.accentColor }} />
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: `linear-gradient(90deg, ${category.accentColor}40, transparent)`,
          }}
          aria-hidden="true"
        />

        {/* Bullet list */}
        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.625rem',
          }}
        >
          {category.items.map((item) => (
            <li
              key={item}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem',
              }}
            >
              <ArrowBullet color={category.accentColor} />
              <span
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-grey-700)',
                  lineHeight: 1.55,
                }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </Stagger.Child>
  );
}

/* ── Main section ── */
function HomeEnterpriseMeasures() {
  return (
    <section className="custom-section-alt">
      <Container>
        {/* Section header */}
        <FadeIn>
          <p className="custom-eyebrow mb-3">Enterprise Outcomes</p>
          <h2 className="custom-h2 mb-3" style={{ maxWidth: 640 }}>
            What Enterprises Measure After Implementation.
          </h2>
          <p
            className="custom-lead mb-10"
            style={{ maxWidth: 560, fontStyle: 'italic', fontSize: 'var(--text-base)' }}
          >
            Operational leverage — not just cost reduction.
          </p>
        </FadeIn>

        {/* 2×2 impact grid */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {IMPACT_CATEGORIES.map((category, i) => (
            <ImpactCard key={category.id} category={category} index={i} />
          ))}
        </Stagger>

        {/* Bottom callout bar */}
        <FadeIn delay={0.25}>
          <div
            style={{
              marginTop: '2.5rem',
              padding: '1.25rem 2rem',
              background: 'linear-gradient(135deg, var(--color-green-900) 0%, var(--color-grey-900) 100%)',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'var(--text-base)',
                color: 'var(--color-text-on-dark)',
                fontStyle: 'italic',
                letterSpacing: '-0.01em',
              }}
            >
              Communication becomes a system —{' '}
              <span style={{ color: 'var(--color-green-400)' }}>
                not a dependency on individual effort or team bandwidth.
              </span>
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

export default HomeEnterpriseMeasures;
