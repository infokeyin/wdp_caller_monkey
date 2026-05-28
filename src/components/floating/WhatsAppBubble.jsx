import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWhatsAppLink } from '@hooks/useWhatsAppLink';
import { useReducedMotion } from '@hooks/useReducedMotion';
import { whatsappMessages, defaultWhatsappMessage } from '@data/whatsappMessages';

/**
 * WhatsAppBubble
 * Fixed bottom-right WhatsApp CTA. Gentle pulse capped to 6 cycles.
 * Per-page prefilled message. Hidden below 360px viewport width.
 * No pulse when prefers-reduced-motion is set.
 */
function WhatsAppBubble() {
  const location  = useLocation();
  const reduced   = useReducedMotion();
  const [pulseKey, setPulseKey] = useState(0);

  // Re-trigger pulse on each scroll (capped by CSS animation-iteration-count: 6)
  useEffect(() => {
    const handleScroll = () => setPulseKey((k) => k + 1);
    window.addEventListener('scroll', handleScroll, { passive: true, once: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pulseKey]);

  const message = whatsappMessages[location.pathname] ?? defaultWhatsappMessage;
  const href    = useWhatsAppLink(message);

  return (
    <AnimatePresence>
      <motion.a
        key="wa-bubble"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group fixed bottom-6 right-6 z-40 flex items-center justify-center rounded-full"
        style={{
          width: 56,
          height: 56,
          background: 'var(--color-whatsapp)',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.35)',
          // Hide on very small viewports
          display: 'flex',
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulse ring — only when not reduced motion */}
        {!reduced && (
          <span
            key={pulseKey}
            className="custom-anim-pulse-wa absolute inset-0 rounded-full"
            aria-hidden="true"
          />
        )}

        <MessageCircle
          size={26}
          strokeWidth={2}
          fill="white"
          stroke="white"
          className="relative z-10"
        />

        {/* Tooltip */}
        <span
          className="absolute right-full mr-3 whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-semibold text-white pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: 'var(--color-grey-900)' }}
          aria-hidden="true"
        >
          Chat with us on WhatsApp
        </span>
      </motion.a>
    </AnimatePresence>
  );
}

export default WhatsAppBubble;
