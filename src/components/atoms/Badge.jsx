import React from 'react';
import { cn } from '@utils/classNames';

/**
 * Badge atom
 * Compact, rounded label for status or categories.
 * Distinct from Tag — used for inline emphasis (e.g. "Most Popular", "Beta").
 *
 * Props:
 *   variant  'default' | 'green' | 'warning' | 'dark' | 'info'
 *   size     'sm' | 'md'
 */
function Badge({ variant = 'default', size = 'md', className, children, ...rest }) {
  const base = 'inline-flex items-center gap-1 rounded-full font-semibold whitespace-nowrap';

  const sizeMap = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs',
  };

  const variantMap = {
    default: 'bg-grey-100 text-grey-700',
    green:   'bg-brand-green-50 text-brand-green-dark',
    warning: 'bg-amber-50 text-amber-700',
    dark:    'bg-grey-900 text-grey-50',
    info:    'bg-blue-50 text-blue-700',
  };

  return (
    <span
      className={cn(base, sizeMap[size], variantMap[variant], className)}
      {...rest}
    >
      {children}
    </span>
  );
}

export default Badge;
