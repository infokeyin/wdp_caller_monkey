import { useState } from 'react';
import FadeIn from '@components/motion/FadeIn';
import FAQItem from '@components/molecules/FAQItem';
import Container from '@components/layout/Container';
import { cn } from '@utils/classNames';

/**
 * FAQSection
 * Wraps a list of FAQItems with a heading and intro text.
 * Manages open/close state — only one item open at a time.
 *
 * Props:
 *   headline    Section heading (default "Common Questions")
 *   intro       Optional intro paragraph
 *   faqs        Array of { question, answer } objects
 *   variant     Section background — 'default' | 'alt'
 *   className   Extra wrapper classes
 */
function FAQSection({
  headline  = 'Common Questions',
  intro,
  faqs      = [],
  variant   = 'default',
  className,
}) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      className={cn(
        variant === 'alt' ? 'custom-section-alt' : 'custom-section',
        className
      )}
    >
      <Container>
        {/* Heading block */}
        <FadeIn>
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="custom-h2 mb-4">{headline}</h2>
            {intro && (
              <p className="custom-lead">{intro}</p>
            )}
          </div>
        </FadeIn>

        {/* FAQ items */}
        <div className="flex flex-col gap-3 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <FadeIn key={idx} delay={idx * 0.04}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === idx}
                onToggle={() => handleToggle(idx)}
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FAQSection;
