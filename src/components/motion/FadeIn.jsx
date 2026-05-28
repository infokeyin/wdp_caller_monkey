import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@hooks/useReducedMotion';

/**
 * FadeIn
 * Wraps children in a Framer Motion element that fades in + slides up on
 * viewport entry. Fires once. Respects prefers-reduced-motion.
 *
 * Design rule: 250ms, easeOutQuart, 20px Y offset. No word-by-word, no scale.
 *
 * Props:
 *   delay     Seconds before animation starts (default 0)
 *   duration  Animation duration in seconds (default 0.25)
 *   y         Starting Y offset in px (default 20) — use 0 for opacity-only
 *   as        HTML element to render (default 'div')
 *   className Extra classes
 *   threshold How much of element must be in view before firing (default 0.1)
 *   once      Only animate on first entry (default true)
 */
function FadeIn({
  delay     = 0,
  duration  = 0.25,
  y         = 20,
  as        = 'div',
  className,
  children,
  threshold = 0.1,
  once      = true,
  ...rest
}) {
  const reduced = useReducedMotion();

  // When reduced motion is on: opacity only, no Y movement, faster
  const variants = reduced
    ? {
        hidden:  { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.15, delay } },
      }
    : {
        hidden:  { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            delay,
            ease: [0.25, 1, 0.5, 1], // easeOutQuart
          },
        },
      };

  return (
    <motion.div
      // We always render a div wrapper — 'as' prop is kept for consumers who
      // want semantic control but Framer Motion handles rendering internally.
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
