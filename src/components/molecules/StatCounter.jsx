import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useReducedMotion } from '@hooks/useReducedMotion';
import { cn } from '@utils/classNames';

/**
 * easeOutQuart — matches the CSS token --ease-out-quart
 */
function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4);
}

/**
 * StatCounter
 * Counts from 0 → target when the element enters the viewport.
 * Counter-up uses requestAnimationFrame over 1200ms with easeOutQuart.
 * Number renders in JetBrains Mono. Fires once.
 * Respects prefers-reduced-motion (shows final value immediately).
 *
 * Props:
 *   value   Target number (numeric)   e.g. 100
 *   prefix  String before number      e.g. '<' or '₹'
 *   suffix  String after number       e.g. '%' or '+' or ' days'
 *   label   Label below the number    e.g. 'Follow-up coverage'
 *   decimals Number of decimal places (default 0)
 *   duration Animation duration in ms (default 1200)
 */
function StatCounter({
  value,
  prefix   = '',
  suffix   = '',
  label,
  decimals  = 0,
  duration  = 1200,
  className,
}) {
  const reduced       = useReducedMotion();
  const [count, setCount] = useState(reduced ? value : 0);
  const rafRef        = useRef(null);
  const startTimeRef  = useRef(null);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;
    if (reduced) { setCount(value); return; }

    // Cancel any previous animation
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = easeOutQuart(progress);
      setCount(parseFloat((eased * value).toFixed(decimals)));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [inView, value, duration, decimals, reduced]);

  const displayValue = decimals > 0
    ? count.toFixed(decimals)
    : Math.floor(count).toLocaleString('en-IN');

  return (
    <div
      ref={ref}
      className={cn('flex flex-col items-center text-center gap-2', className)}
    >
      {/* The big number */}
      <div
        className="custom-mono-stat"
        style={{
          fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
          lineHeight: 1,
          color: 'var(--color-green-500)',
          letterSpacing: '-0.03em',
        }}
        aria-live="polite"
        aria-atomic="true"
      >
        {prefix}{displayValue}{suffix}
      </div>

      {/* Label */}
      {label && (
        <p
          className="text-sm font-semibold"
          style={{ color: 'var(--color-text-muted)', maxWidth: 160 }}
        >
          {label}
        </p>
      )}
    </div>
  );
}

export default StatCounter;
