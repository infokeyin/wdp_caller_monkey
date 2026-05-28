import React from 'react';
import { cn } from '@utils/classNames';

/**
 * Tag atom
 * Wraps the custom-tag / custom-tag-dark / custom-tag-warning classes.
 * Used for eyebrow-style category labels (e.g. industry name on a card).
 *
 * Props:
 *   variant  'default' | 'dark' | 'warning'
 */
function Tag({ variant = 'default', className, children, ...rest }) {
  return (
    <span
      className={cn(
        'custom-tag',
        variant === 'dark'    && 'custom-tag-dark',
        variant === 'warning' && 'custom-tag-warning',
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}

export default Tag;
