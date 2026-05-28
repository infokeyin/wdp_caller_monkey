import React from 'react';
import { cn } from '@utils/classNames';

/**
 * Section
 * Wraps page content sections with consistent vertical padding and optional
 * background variant. Every page section should use this.
 *
 * Props:
 *   variant: 'default' | 'alt' | 'dark' | 'narrow'
 *   id: for anchor links
 *   as: HTML element (default 'section')
 *   className: extra classes
 */
function Section({ variant = 'default', id, as: Tag = 'section', className, children, ...props }) {
  return (
    <Tag
      id={id}
      className={cn(
        variant === 'default' && 'custom-section',
        variant === 'alt'     && 'custom-section-alt',
        variant === 'dark'    && 'custom-section-dark',
        variant === 'narrow'  && 'custom-section',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Section;
