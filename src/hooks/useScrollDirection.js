import { useState, useEffect, useRef } from 'react';

/**
 * useScrollDirection
 * Returns 'up' or 'down' based on the user's scroll direction.
 * Also returns `scrollY` for threshold-based behaviours.
 */
export function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState('up');
  const [scrollY, setScrollY]     = useState(0);
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    const threshold = 8; // px — prevents micro-jitter

    const handleScroll = () => {
      const current = window.scrollY;
      setScrollY(current);

      if (Math.abs(current - lastScrollY.current) < threshold) return;

      setScrollDir(current > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = current;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollDir, scrollY };
}
