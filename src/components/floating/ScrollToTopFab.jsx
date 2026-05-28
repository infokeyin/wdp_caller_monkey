import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useReducedMotion } from '@hooks/useReducedMotion';

/**
 * ScrollToTopFab
 * Appears when window.scrollY > 600. Sits just above the WhatsApp bubble.
 * Dark grey circle, white arrow. Smooth scroll to top on click.
 * Fade + slide-in from below via Framer Motion.
 */
function ScrollToTopFab() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top-fab"
          onClick={scrollTop}
          aria-label="Scroll back to top"
          className="fixed z-40 flex items-center justify-center rounded-full custom-focus-ring"
          style={{
            width: 44,
            height: 44,
            bottom: '5.5rem', // sits above the 56px WhatsApp bubble + gap
            right: '1.5rem',
            background: 'var(--color-grey-900)',
            boxShadow: 'var(--shadow-lg)',
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
        >
          <ArrowUp size={18} strokeWidth={2.5} color="#fff" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTopFab;
