import React from 'react';
import { Check } from 'lucide-react';
import Button from '@components/atoms/Button';
import Badge from '@components/atoms/Badge';
import { cn } from '@utils/classNames';

/**
 * PlanCard
 * Displays a single starting plan (not a pricing tier — a "where to begin").
 * Featured plan (Growth) gets custom-card-feature + "Most Popular" badge.
 *
 * Props:
 *   name        Plan name (e.g. "Starter — AI Voice Core")
 *   audience    "Best for" blurb
 *   features    Array of feature strings
 *   featured    Boolean — enables green border + Most Popular badge
 *   ctaLabel    CTA button text (default "Talk to Our Team")
 *   ctaTo       Link path (default "/get-started#demo-form")
 */
function PlanCard({
  name,
  audience,
  features  = [],
  featured  = false,
  ctaLabel  = 'Talk to Our Team',
  ctaTo     = '/get-started#demo-form',
  className,
}) {
  return (
    <div
      className={cn(
        'custom-card flex flex-col gap-5 relative',
        featured && 'custom-card-feature',
        className
      )}
    >
      {/* Most Popular ribbon */}
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="warning" size="md">Most Popular</Badge>
        </div>
      )}

      {/* Plan header */}
      <div className={cn('pt-1', featured && 'pt-4')}>
        <h3
          className="font-display font-bold mb-2"
          style={{ fontSize: 'var(--text-h4)', color: 'var(--color-grey-900)' }}
        >
          {name}
        </h3>
        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
          <span className="font-semibold" style={{ color: 'var(--color-grey-700)' }}>Best for: </span>
          {audience}
        </p>
      </div>

      {/* Divider */}
      <hr className="custom-divider" />

      {/* Features */}
      <ul className="flex flex-col gap-2.5 flex-1">
        {features.map((feat, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--color-grey-700)' }}>
            <Check
              size={16}
              strokeWidth={2.5}
              className="shrink-0 mt-0.5"
              style={{ color: 'var(--color-green-500)' }}
              aria-hidden="true"
            />
            {feat}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        as="a"
        href={ctaTo}
        variant={featured ? 'primary' : 'secondary'}
        className="w-full justify-center mt-2"
      >
        {ctaLabel}
      </Button>
    </div>
  );
}

export default PlanCard;
