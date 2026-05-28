import { useEffect } from 'react';

/**
 * useLockBodyScroll
 * Locks body scroll when `isLocked` is true (e.g. mobile menu open).
 * Cleans up on unmount automatically.
 */
export function useLockBodyScroll(isLocked) {
  useEffect(() => {
    if (!isLocked) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isLocked]);
}
