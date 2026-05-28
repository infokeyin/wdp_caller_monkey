import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';
import FadeIn from '@components/motion/FadeIn';
import Stagger from '@components/motion/Stagger';
import Container from '@components/layout/Container';

const ROWS = [
  { problem: 'Leads not called back in time',       solution: 'Every lead called within 2 minutes' },
  { problem: 'Follow-ups forgotten or skipped',     solution: '100% follow-up, tracked & logged'   },
  { problem: 'Hours spent on manual call notes',    solution: 'Every call logged in CRM, auto'      },
  { problem: 'Customers ghost after first no-show', solution: 'AI follows up until response'        },
  { problem: 'Field attendance tracked manually',   solution: 'AI voice attendance + daily report'  },
  { problem: 'Reminders rely on someone remembering', solution: 'Payment & appointment alerts, auto'},
];

function ProblemRow({ problem, solution, index }) {
  return (
    <Stagger.Child>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          gap: '0.75rem',
          background: 'var(--color-bg-elevated)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.1rem 1.25rem',
        }}
      >
        {/* Problem side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <div
            style={{
              width: 32, height: 32, borderRadius: 'var(--radius-full)',
              background: 'rgba(217,52,43,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}
          >
            <XCircle size={16} strokeWidth={2} style={{ color: 'var(--color-error)' }} aria-hidden="true" />
          </div>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.45 }}>
            {problem}
          </p>
        </div>

        {/* Arrow divider */}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M4 10h12M12 6l4 4-4 4" stroke="var(--color-green-400)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        {/* Solution side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <div
            style={{
              width: 32, height: 32, borderRadius: 'var(--radius-full)',
              background: 'var(--color-green-50)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}
          >
            <CheckCircle2 size={16} strokeWidth={2} style={{ color: 'var(--color-green-600)' }} aria-hidden="true" />
          </div>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-green-700)', fontWeight: 600, lineHeight: 1.45 }}>
            {solution}
          </p>
        </div>
      </div>
    </Stagger.Child>
  );
}

function HomeProblem() {
  return (
    <section className="custom-section-alt">
      <Container>
        <FadeIn>
          <h2 className="custom-h2 mb-3 max-w-2xl">
            Your business is growing. Your communication is not keeping up.
          </h2>
          <p className="custom-lead mb-10 max-w-xl">
            Every day, leads are lost and follow-ups missed — not from lack of effort, but because communication still needs manual work at every step.
          </p>
        </FadeIn>

        <Stagger className="flex flex-col gap-3">
          {ROWS.map((row, i) => (
            <ProblemRow key={i} index={i} {...row} />
          ))}
        </Stagger>

        <FadeIn delay={0.2}>
          <p className="text-base font-semibold text-center mt-10" style={{ color: 'var(--color-grey-600)' }}>
            This is not about replacing your team — it is about closing the gaps that cost you revenue every day.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}

export default HomeProblem;
