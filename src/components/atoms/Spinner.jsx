import { Loader2 } from 'lucide-react';
import { cn } from '@utils/classNames';

/**
 * Spinner atom
 * Spinning loader icon. Used inside Button (loading state) or standalone.
 *
 * Props:
 *   size      Icon size in px (default 20)
 *   className Extra classes (mainly colour)
 */
function Spinner({ size = 20, className, ...rest }) {
  return (
    <Loader2
      size={size}
      strokeWidth={2}
      className={cn('animate-spin', className)}
      aria-label="Loading"
      {...rest}
    />
  );
}

export default Spinner;
