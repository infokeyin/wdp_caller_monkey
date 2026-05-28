import { useInView } from 'react-intersection-observer';

/**
 * useInViewport
 * Thin wrapper around react-intersection-observer.
 * Returns [ref, inView] — attach ref to the element you want to observe.
 *
 * Options:
 *   threshold  - 0–1, how much of the element must be visible (default 0.1)
 *   triggerOnce - only fire once (default true — animations play once)
 *   rootMargin  - CSS margin string (default '-10% 0px')
 */
export function useInViewport({
  threshold   = 0.1,
  triggerOnce = true,
  rootMargin  = '-10% 0px',
} = {}) {
  return useInView({ threshold, triggerOnce, rootMargin });
}
