import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useReducedMotion } from '@hooks/useReducedMotion';

/**
 * PageTransition
 * Simple opacity fade between route changes, 180ms.
 * Wrap around the <Routes> in App.jsx, keyed by pathname.
 *
 * Design rule: opacity only, no slide/scale. If reduced-motion: no transition.
 */
function PageTransition({ children }) {
  const location = useLocation();
  const reduced  = useReducedMotion();

  if (reduced) return <>{children}</>;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransition;
