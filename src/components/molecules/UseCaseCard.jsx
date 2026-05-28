import React from 'react';
import Tag from '@components/atoms/Tag';
import { cn } from '@utils/classNames';

/**
 * UseCaseCard
 * Real customer story card: business-type badge + challenge headline +
 * solution paragraph.
 *
 * Used on the Industries page in a vertical list. Cards alternate
 * text-left / text-right on desktop for visual rhythm (zigzag layout).
 *
 * Props:
 *   businessType  String badge label (e.g. "Loan DSA (North India)")
 *   challenge     Bold headline — the problem they faced
 *   solution      Paragraph — how Caller Monkey solved it
 *   layout        'left' | 'right' — which side the text sits on desktop
 *   index         Card index (used to auto-compute layout if not provided)
 */
function UseCaseCard({ businessType, challenge, solution, layout, index = 0 }) {
  const side = layout ?? (index % 2 === 0 ? 'left' : 'right');

  return (
    <div
      className={cn(
        'custom-card flex flex-col md:flex-row gap-8 items-start',
        side === 'right' && 'md:flex-row-reverse'
      )}
    >
      {/* Coloured accent strip */}
      <div
        className="hidden md:block w-1.5 shrink-0 self-stretch rounded-full"
        style={{ background: 'var(--color-green-500)', minHeight: 80 }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="flex-1 min-w-0">
        <Tag className="mb-4">{businessType}</Tag>

        <h3
          className="font-display font-bold mb-3"
          style={{ fontSize: 'var(--text-h3)', color: 'var(--color-grey-900)', lineHeight: 'var(--leading-snug)' }}
        >
          {challenge}
        </h3>

        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)', lineHeight: 'var(--leading-relaxed)' }}>
          {solution}
        </p>
      </div>
    </div>
  );
}

export default UseCaseCard;
