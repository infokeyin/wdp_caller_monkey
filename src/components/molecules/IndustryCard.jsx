import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@components/atoms/Icon';
import { cn } from '@utils/classNames';

/**
 * IndustryCard
 * Industry icon + name + short description.
 * Optional `to` prop wraps the whole card in a Link.
 * `accentColor` drives the top border + icon bg tint.
 */
function IndustryCard({ icon, name, description, to, accentColor, className }) {
  const accent = accentColor || 'var(--color-green-500)';
  const accentBg = accentColor ? `${accentColor}14` : 'var(--color-green-50)';
  const accentIcon = accentColor || 'var(--color-green-600)';

  const inner = (
    <div
      className={cn('custom-card custom-card-hover custom-card-accent-top flex flex-col gap-4', className)}
      style={{ borderTopColor: accent }}
    >
      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: accentBg }}
        aria-hidden="true"
      >
        <Icon name={icon} size={22} strokeWidth={1.75} style={{ color: accentIcon }} />
      </div>

      <div className="min-w-0">
        <h3
          className="font-display font-bold mb-1.5"
          style={{ fontSize: 'var(--text-h4)', color: 'var(--color-grey-900)' }}
        >
          {name}
        </h3>
        <p className="text-sm" style={{ color: 'var(--color-text-muted)', lineHeight: 1.55 }}>
          {description}
        </p>
      </div>
    </div>
  );

  if (to) {
    return (
      <Link to={to} className="block focus-visible:outline-none custom-focus-ring rounded-xl">
        {inner}
      </Link>
    );
  }

  return inner;
}

export default IndustryCard;
