import { useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useReducedMotion } from '@hooks/useReducedMotion';
import { cn } from '@utils/classNames';

/**
 * FAQItem
 * Accessible accordion item. One open at a time is managed by the
 * parent FAQSection (pass isOpen + onToggle).
 *
 * Semantics: <button> with aria-expanded / aria-controls on the trigger,
 * <div role="region" aria-labelledby> on the panel. This is more
 * animatable than native <details>/<summary> while being equally accessible.
 *
 * Props:
 *   question  FAQ question string
 *   answer    FAQ answer string
 *   isOpen    Whether this item is currently open
 *   onToggle  () => void — called when header is clicked
 */
function FAQItem({ question, answer, isOpen = false, onToggle }) {
  const reduced   = useReducedMotion();
  const triggerId = useId();
  const panelId   = useId();

  return (
    <div
      className={cn(
        'border rounded-xl overflow-hidden transition-colors duration-200',
        isOpen
          ? 'border-brand-green bg-brand-green-50'
          : 'border-grey-200 bg-white hover:border-grey-400'
      )}
    >
      {/* Trigger */}
      <button
        id={triggerId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left custom-focus-ring"
        style={{ cursor: 'pointer' }}
      >
        <span
          className="font-display font-semibold pr-4"
          style={{
            fontSize: 'var(--text-base)',
            color: isOpen ? 'var(--color-green-700)' : 'var(--color-grey-900)',
          }}
        >
          {question}
        </span>

        <span
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200"
          style={{
            background: isOpen ? 'var(--color-green-500)' : 'var(--color-grey-100)',
          }}
          aria-hidden="true"
        >
          {isOpen
            ? <Minus size={14} strokeWidth={2.5} color="#fff" />
            : <Plus  size={14} strokeWidth={2.5} style={{ color: 'var(--color-grey-500)' }} />
          }
        </span>
      </button>

      {/* Animated answer panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            key="answer"
            initial={reduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
            exit={reduced  ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              className="px-6 pb-5 text-sm leading-relaxed"
              style={{ color: 'var(--color-text-muted)', lineHeight: 'var(--leading-relaxed)' }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FAQItem;
