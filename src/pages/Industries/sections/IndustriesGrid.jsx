import React from 'react';
import FadeIn from '@components/motion/FadeIn';
import Stagger from '@components/motion/Stagger';
import IndustryCard from '@components/molecules/IndustryCard';
import Container from '@components/layout/Container';
import { industries } from '@data/industries';
import { useCases } from '@data/useCases';

const USE_CASE_IDS = new Set(useCases.map((u) => u.industryId));

// Accent colour per industry id — drives card top border + icon tint
const ACCENT = {
  'real-estate':   'var(--ind-real-estate)',
  'finance':       'var(--ind-finance)',
  'healthcare':    'var(--ind-healthcare)',
  'education':     'var(--ind-education)',
  'retail':        'var(--ind-retail)',
  'manufacturing': 'var(--ind-manufacturing)',
  'insurance':     'var(--ind-insurance)',
  'jewellery':     'var(--ind-jewellery)',
  'logistics':     'var(--ind-logistics)',
  'restaurants':   'var(--ind-restaurants)',
  'political':     'var(--ind-political)',
  'government':    'var(--ind-government)',
};

function IndustriesGrid() {
  return (
    <section id="industries-grid" className="custom-section-alt">
      <Container>
        <FadeIn>
          <p className="custom-eyebrow mb-3 text-center">12 Industries</p>
          <h2 className="custom-h2 text-center mb-4">Who We Work With</h2>
          <p className="custom-lead text-center mb-12 max-w-2xl mx-auto">
            From high-volume lead management to field team tracking. Caller Monkey adapts to your industry's communication needs.
          </p>
        </FadeIn>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind) => {
            const hasUseCase = USE_CASE_IDS.has(ind.id);
            return (
              <Stagger.Child key={ind.id}>
                <IndustryCard
                  icon={ind.icon}
                  name={ind.name}
                  description={ind.description}
                  to={hasUseCase ? `#story-${ind.id}` : undefined}
                  accentColor={ACCENT[ind.id]}
                  className="h-full"
                />
              </Stagger.Child>
            );
          })}
        </Stagger>

        <FadeIn delay={0.2}>
          <p className="text-center text-sm mt-10" style={{ color: 'var(--color-text-muted)' }}>
            Don't see your industry?{' '}
            <a href="/get-started#demo-form" style={{ color: 'var(--color-green-600)', fontWeight: 600 }}>
              Talk to us — if your business makes calls, we can help.
            </a>
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}

export default IndustriesGrid;
