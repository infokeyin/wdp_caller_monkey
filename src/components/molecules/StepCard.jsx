import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@utils/classNames';

/**
 * StepCard
 * Numbered setup step: badge + title + what-happens blurb + result paragraph.
 * Used in the "How Going Live Works" section on the Get Started page.
 *
 * Props:
 *   number       Step number (1, 2, 3)
 *   title        Step title (e.g. "Connect")
 *   whatHappens  Body — what we do during this step
 *   result       What the business gets at the end
 *   icon         Optional Lucide icon name
 */
function StepCard({ number, title, whatHappens, result, icon, className }) {
  return (
    <div className={cn('custom-card flex flex-col gap-4 relative', className)}>
      {/* Step number badge */}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 font-mono font-bold text-sm"
          style={{ background: 'var(--color-green-500)', color: '#fff' }}
          aria-label={`Step ${number}`}
        >
          {number}
        </div>
        <h3
          className="font-display font-bold"
          style={{ fontSize: 'var(--text-h4)', color: 'var(--color-grey-900)' }}
        >
          {title}
        </h3>
      </div>

      {/* What happens */}
      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)', lineHeight: 'var(--leading-relaxed)' }}>
        {whatHappens}
      </p>

      {/* Result */}
      {result && (
        <div
          className="flex items-start gap-2 p-3 rounded-lg text-sm font-medium"
          style={{ background: 'var(--color-green-50)', color: 'var(--color-green-700)' }}
        >
          <ArrowRight size={15} strokeWidth={2} className="shrink-0 mt-0.5" aria-hidden="true" />
          {result}
        </div>
      )}
    </div>
  );
}

export default StepCard;
