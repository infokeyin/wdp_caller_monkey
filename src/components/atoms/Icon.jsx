import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@utils/classNames';

/**
 * Icon atom
 * Renders any lucide-react icon by name string.
 * Default size 20, stroke-width 1.75. Both can be overridden.
 *
 * Usage:
 *   <Icon name="Phone" />
 *   <Icon name="ArrowRight" size={16} strokeWidth={2} className="text-brand-green" />
 *
 * Props:
 *   name        Lucide icon name (PascalCase string, e.g. "PhoneCall")
 *   size        Icon size in px (default 20)
 *   strokeWidth Stroke width (default 1.75)
 *   className   Extra classes (mainly for colour)
 */
function Icon({ name, size = 20, strokeWidth = 1.75, className, ...rest }) {
  const LucideIcon = LucideIcons[name];

  if (!LucideIcon) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[Icon] Unknown lucide icon: "${name}"`);
    }
    return null;
  }

  return (
    <LucideIcon
      size={size}
      strokeWidth={strokeWidth}
      className={cn('shrink-0', className)}
      aria-hidden="true"
      {...rest}
    />
  );
}

export default Icon;
