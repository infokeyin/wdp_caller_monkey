import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * useHashScroll
 * Smoothly scrolls to the element whose id matches the URL hash whenever
 * the hash changes (client-side navigation via React Router).
 *
 * Handles the common case where the target element may render slightly
 * after the route change (e.g. lazy-loaded sections) by retrying once
 * after a short delay.
 */
export function useHashScroll() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace('#', '');

    const scroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    // Try immediately, then retry after 200 ms to handle lazy renders
    scroll();
    const timer = setTimeout(scroll, 200);
    return () => clearTimeout(timer);
  }, [hash, pathname]);
}
