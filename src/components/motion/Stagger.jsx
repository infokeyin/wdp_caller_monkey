import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@hooks/useReducedMotion';

/**
 * Stagger
 * Parent wrapper that staggers the entrance of direct children.
 * Use Stagger.Child to mark each child that should animate.
 *
 * Design rule: stagger offset 80ms, delayChildren 100ms.
 *
 * Props (Stagger):
 *   stagger       Seconds between each child's start (default 0.08)
 *   delayChildren Delay before first child starts (default 0.1)
 *   className     Extra classes on the wrapper element
 *   as            HTML element (default 'div')
 *   threshold     Viewport threshold before triggering (default 0.05)
 *
 * Usage:
 *   <Stagger>
 *     <Stagger.Child key="a"><Card /></Stagger.Child>
 *     <Stagger.Child key="b"><Card /></Stagger.Child>
 *   </Stagger>
 */
function Stagger({
  stagger       = 0.08,
  delayChildren = 0.1,
  className,
  as            = 'div',
  threshold     = 0.05,
  children,
  ...rest
}) {
  const reduced = useReducedMotion();

  // In reduced-motion mode, all children appear at once with a simple opacity.
  const containerVariants = reduced
    ? {
        hidden:  { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.15 } },
      }
    : {
        hidden:  {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren,
          },
        },
      };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={containerVariants}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger.Child
 * Marks an individual item as a stagger target.
 * The parent Stagger controls the timing; this just provides the child variant.
 */
function StaggerChild({ className, children, y = 20, ...rest }) {
  const reduced = useReducedMotion();

  const childVariants = reduced
    ? {
        hidden:  { opacity: 0 },
        visible: { opacity: 1 },
      }
    : {
        hidden:  { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.25,
            ease: [0.25, 1, 0.5, 1],
          },
        },
      };

  return (
    <motion.div className={className} variants={childVariants} {...rest}>
      {children}
    </motion.div>
  );
}

Stagger.Child = StaggerChild;

export default Stagger;
