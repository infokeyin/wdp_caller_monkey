import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { cn } from '@utils/classNames';

/**
 * Button — the ONLY way to render a button in this codebase.
 * Never use a raw <button> with custom Tailwind chains.
 *
 * Props:
 *   variant      'primary' | 'secondary' | 'ghost' | 'whatsapp'   (default 'primary')
 *   size         'sm' | 'md' | 'lg'                                (default 'md')
 *   as           'button' | 'a' | Link                             (default 'button')
 *   href         URL string — used when as='a'
 *   to           React Router path — used when as=Link
 *   icon         Lucide icon component to render inline
 *   iconPosition 'left' | 'right'                                  (default 'left')
 *   loading      Show spinner + disable interaction
 *   disabled     Native disabled
 *   className    Extra classes (appended)
 *   children     Button label
 */
const Button = forwardRef(function Button(
  {
    variant      = 'primary',
    size         = 'md',
    as           = 'button',
    href,
    to,
    icon: Icon,
    iconPosition = 'left',
    loading      = false,
    disabled     = false,
    className,
    children,
    ...rest
  },
  ref
) {
  const cls = cn(
    'custom-btn',
    variant === 'primary'   && 'custom-btn-primary',
    variant === 'secondary' && 'custom-btn-secondary',
    variant === 'ghost'     && 'custom-btn-ghost',
    variant === 'whatsapp'  && 'custom-btn-whatsapp',
    size === 'sm'           && 'custom-btn-sm',
    size === 'lg'           && 'custom-btn-lg',
    (disabled || loading)   && 'opacity-55 cursor-not-allowed pointer-events-none',
    className
  );

  const iconEl   = Icon && !loading ? <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} strokeWidth={2} aria-hidden="true" /> : null;
  const spinnerEl = loading ? <Loader2 size={16} strokeWidth={2} className="animate-spin" aria-hidden="true" /> : null;

  const inner = (
    <>
      {loading && spinnerEl}
      {!loading && iconPosition === 'left'  && iconEl}
      {children}
      {!loading && iconPosition === 'right' && iconEl}
    </>
  );

  if (as === Link || to) {
    return (
      <Link ref={ref} to={to || '/'} className={cls} {...rest}>
        {inner}
      </Link>
    );
  }

  if (as === 'a' || href) {
    return (
      <a ref={ref} href={href} className={cls} {...rest}>
        {inner}
      </a>
    );
  }

  return (
    <button ref={ref} type={rest.type || 'button'} disabled={disabled || loading} className={cls} {...rest}>
      {inner}
    </button>
  );
});

export default Button;
