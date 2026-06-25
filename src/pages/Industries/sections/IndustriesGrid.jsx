import { motion } from 'framer-motion';
import FadeIn from '@components/motion/FadeIn';
import Stagger from '@components/motion/Stagger';
import Icon from '@components/atoms/Icon';
import Container from '@components/layout/Container';
import { industries } from '@data/industries';
import { useCases } from '@data/useCases';
import { useReducedMotion } from '@hooks/useReducedMotion';

const USE_CASE_IDS = new Set(useCases.map((u) => u.industryId));

const ACCENT_HEX = {
  'customer-support':    '#2DA744',
  ecommerce:             '#F4A623',
  healthcare:            '#E91E63',
  finance:               '#2C7BE5',
  travel:                '#0891B2',
  education:             '#9B59B6',
  'real-estate':         '#E07B39',
  hr:                    '#7C3AED',
  insurance:             '#2DA744',
  manufacturing:         '#0891B2',
  legal:                 '#374151',
  automotive:            '#D97706',
  logistics:             '#5D4037',
  government:            '#4CAF50',
  hospitality:           '#E07B39',
  entertainment:         '#9B59B6',
  agriculture:           '#6B9E3E',
  energy:                '#F59E0B',
  nonprofits:            '#E11D48',
  retail:                '#F4A623',
  telecom:               '#2C7BE5',
  gaming:                '#7C3AED',
  events:                '#0891B2',
  construction:          '#D97706',
  fitness:               '#2DA744',
  recruitment:           '#374151',
  'food-beverage':       '#D32F2F',
  fashion:               '#E91E63',
  'security-it':         '#1565C0',
  tourism:               '#0891B2',
  'property-management': '#E07B39',
  publishing:            '#9B59B6',
  'professional-services': '#2C7BE5',
  transportation:        '#5D4037',
  saas:                  '#2DA744',
};

function IndustriesGrid() {
  const reduced = useReducedMotion();

  return (
    <section id="industries-grid" className="custom-section-alt">
      <Container>
        <FadeIn>
          <p className="custom-eyebrow mb-3 text-center">Industries We Serve</p>
          <h2 className="custom-h2 text-center mb-10">Who We Work With</h2>
        </FadeIn>

        <Stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((ind) => {
            const color = ACCENT_HEX[ind.id] ?? '#2DA744';
            const bg = `${color}14`;
            const hasUseCase = USE_CASE_IDS.has(ind.id);

            return (
              <Stagger.Child key={ind.id}>
                <motion.a
                  href={hasUseCase ? `#story-${ind.id}` : '#industries-grid'}
                  whileHover={reduced ? {} : { y: -4, boxShadow: `0 12px 28px ${color}22` }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    padding: '1.25rem 1rem',
                    background: 'var(--color-bg-elevated)',
                    border: '1px solid var(--color-border)',
                    borderTop: `3px solid ${color}`,
                    borderRadius: 'var(--radius-lg)',
                    textDecoration: 'none',
                    height: '100%',
                  }}
                  aria-label={ind.name}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 'var(--radius-md)',
                      background: bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    <Icon name={ind.icon} size={20} strokeWidth={1.75} style={{ color }} />
                  </div>

                  {/* Name */}
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-grey-900)',
                      lineHeight: 1.3,
                      margin: 0,
                    }}
                  >
                    {ind.name}
                  </p>

                  {/* Has use case indicator */}
                  {hasUseCase && (
                    <span
                      style={{
                        alignSelf: 'flex-start',
                        fontSize: 'var(--text-xs)',
                        fontWeight: 700,
                        color,
                        background: bg,
                        padding: '0.15rem 0.5rem',
                        borderRadius: 'var(--radius-full)',
                        border: `1px solid ${color}33`,
                      }}
                    >
                      Case study ↓
                    </span>
                  )}
                </motion.a>
              </Stagger.Child>
            );
          })}
        </Stagger>

        {/* Footer note */}
        <FadeIn delay={0.2}>
          <p
            style={{
              textAlign: 'center',
              marginTop: '2rem',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-muted)',
            }}
          >
            Don't see your industry?{' '}
            <a
              href="/get-started#demo-form"
              style={{ color: 'var(--color-green-600)', fontWeight: 600 }}
            >
              Talk to us — if you make calls, we can help.
            </a>
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}

export default IndustriesGrid;
