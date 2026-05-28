import React from 'react';
import Icon from '@components/atoms/Icon';
import { cn } from '@utils/classNames';

/**
 * CapabilityCard
 * Icon + bold title + one-line description with a green accent top border.
 * Used in the Features page 10-item icon grid.
 */
function CapabilityCard({ icon, title, description, className }) {
  return (
    <div
      className={cn(
        'custom-card custom-card-hover custom-card-accent-top flex flex-col gap-4',
        className,
      )}
      style={{ borderTopColor: 'var(--color-green-500)' }}
    >
      {/* Icon container */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: 'var(--color-green-50)' }}
        aria-hidden="true"
      >
        <Icon name={icon} size={22} strokeWidth={1.75} style={{ color: 'var(--color-green-600)' }} />
      </div>

      <div>
        <h3 className="font-display font-bold mb-1.5" style={{ fontSize: 'var(--text-h4)', color: 'var(--color-grey-900)' }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default CapabilityCard;
