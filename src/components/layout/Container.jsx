import React from 'react';
import { cn } from '@utils/classNames';

/**
 * Container
 * Applies max-width + horizontal padding. Variant controls the max-width tier.
 * All page content should sit inside a Container.
 *
 * Props:
 *   variant: 'default' | 'wide' | 'narrow'
 *   as: HTML element to render (default 'div')
 *   className: extra classes
 */
function Container({ variant = 'default', as: Tag = 'div', className, children, ...props }) {
  return (
    <Tag
      className={cn(
        'custom-container',
        variant === 'wide'   && 'custom-container-wide',
        variant === 'narrow' && 'custom-container-narrow',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Container;
