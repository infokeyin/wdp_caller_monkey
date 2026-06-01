import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Database, MessageSquare, Mail, Calendar, CreditCard, BarChart3, ArrowRight } from 'lucide-react';
import FadeIn from '@components/motion/FadeIn';
import Container from '@components/layout/Container';
import { useReducedMotion } from '@hooks/useReducedMotion';

const SPOKES = [
  { Icon: Database,      label: 'CRM',       color: '#2DA744', angle: 270 },
  { Icon: MessageSquare, label: 'WhatsApp',  color: '#25D366', angle: 330 },
  { Icon: Mail,          label: 'Email',     color: '#2C7BE5', angle: 30  },
  { Icon: Calendar,      label: 'Calendar',  color: '#F4A623', angle: 90  },
  { Icon: CreditCard,    label: 'Payments',  color: '#9B59B6', angle: 150 },
  { Icon: BarChart3,     label: 'Analytics', color: '#E74C3C', angle: 210 },
];

function spokePos(angleDeg, r = 110) {
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return { cx: 150 + r * Math.cos(rad), cy: 150 + r * Math.sin(rad) };
}

function MiniHub() {
  const reduced = useReducedMotion();

  return (
    <div className="relative w-full max-w-xs mx-auto" style={{ aspectRatio: '1/1' }}>
      <svg viewBox="0 0 300 300" className="absolute inset-0 w-full h-full" aria-hidden="true" fill="none">
        {SPOKES.map((s, i) => {
          const { cx, cy } = spokePos(s.angle);
          return (
            <motion.line
              key={s.label}
              x1={150} y1={150} x2={cx} y2={cy}
              stroke="var(--color-grey-200)"
              strokeWidth={1.5}
              strokeLinecap="round"
              initial={reduced ? { opacity: 1 } : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={reduced ? {} : { duration: 0.5, delay: 0.3 + i * 0.08, ease: [0.25,1,0.5,1] }}
            />
          );
        })}
        <circle cx={150} cy={150} r={36} fill="var(--color-green-500)" />
        <text x={150} y={155} textAnchor="middle" dominantBaseline="middle"
          fill="white" fontFamily="'Cabinet Grotesk', sans-serif" fontWeight="900" fontSize="11">
          CM
        </text>
      </svg>

      {SPOKES.map((s, i) => {
        const { cx, cy } = spokePos(s.angle);
        const leftPct = (cx / 300) * 100;
        const topPct  = (cy / 300) * 100;
        return (
          <motion.div
            key={s.label}
            className="absolute flex flex-col items-center gap-1"
            style={{ left: `${leftPct}%`, top: `${topPct}%`, transform: 'translate(-50%, -50%)' }}
            animate={reduced ? {} : { y: [0, -4, 0] }}
            transition={reduced ? {} : { duration: 5 + i * 0.7, repeat: Infinity, delay: i * 0.9, ease: 'easeInOut' }}
          >
            <div
              className="w-10 h-10 rounded-xl bg-white shadow-card border flex items-center justify-center"
              style={{ borderColor: `${s.color}33` }}
            >
              <s.Icon size={18} strokeWidth={1.75} style={{ color: s.color }} aria-hidden="true" />
            </div>
            <span className="text-xs font-semibold" style={{ color: 'var(--color-grey-500)' }}>{s.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ── 3-step mini flow ── */
const STEPS = [
  { number: '01', text: 'Lead comes in' },
  { number: '02', text: 'CM calls, qualifies & logs to CRM' },
  { number: '03', text: 'You get the report' },
];

function HomeConnectsTeaser() {
  return (
    <section className="custom-section-alt">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* Mini hub visual */}
          <div className="w-full md:w-64 lg:w-80 shrink-0">
            <FadeIn delay={0.05} y={10}>
              <MiniHub />
            </FadeIn>
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <FadeIn>
              <p className="custom-eyebrow mb-3">Integrations</p>
              <h2 className="custom-h2 mb-4">One Brain. Every Tool, Connected.</h2>
              <p className="custom-lead mb-8">
                Your CRM, WhatsApp, calendar, email, and payment gateway — all talking to each other through one central system.
              </p>
            </FadeIn>

            {/* 3-step mini flow */}
            <FadeIn delay={0.1}>
              <div
                style={{
                  display: 'flex', gap: '0', flexWrap: 'wrap',
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  marginBottom: '1.5rem',
                }}
              >
                {STEPS.map((step, i) => (
                  <div
                    key={step.number}
                    style={{
                      flex: '1 1 0', minWidth: 120,
                      padding: '1rem',
                      borderRight: i < STEPS.length - 1 ? '1px solid var(--color-border)' : 'none',
                      display: 'flex', flexDirection: 'column', gap: '0.3rem',
                    }}
                  >
                    <span style={{ fontSize: 'var(--text-xs)', fontWeight: 800, color: 'var(--color-green-500)', letterSpacing: '0.06em' }}>
                      {step.number}
                    </span>
                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-grey-800)', lineHeight: 1.4 }}>
                      {step.text}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <Link to="/integrations" className="custom-btn custom-btn-secondary inline-flex items-center gap-2">
                See How It Connects
                <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeConnectsTeaser;
