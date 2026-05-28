import { useState, useEffect } from 'react';

/**
 * useReducedMotion
 * Returns true if the user has set prefers-reduced-motion: reduce.
 * Use this to skip or simplify JS-driven animations (Framer Motion, counters).
 * CSS animations are handled separately via the media query in index.css.
 */
export function useReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e) => setPrefersReduced(e.matches);

    // Use addEventListener if available, else addListener (older Safari)
    if (mq.addEventListener) {
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    } else {
      mq.addListener(handler);
      return () => mq.removeListener(handler);
    }
  }, []);

  return prefersReduced;
}
