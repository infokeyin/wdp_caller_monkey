import React from 'react';
import { Check } from 'lucide-react';
import FadeIn from '@components/motion/FadeIn';
import Stagger from '@components/motion/Stagger';
import Icon from '@components/atoms/Icon';
import Container from '@components/layout/Container';
import { integrationCategories } from '@data/integrations';

function CategoryCard({ cat }) {
  return (
    <div className="custom-card h-full flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: `${cat.color}15` }}
          aria-hidden="true"
        >
          <Icon name={cat.icon} size={20} strokeWidth={1.75} style={{ color: cat.color }} />
        </div>
        <h3
          className="font-display font-bold"
          style={{ fontSize: 'var(--text-h4)', color: 'var(--color-grey-900)' }}
        >
          {cat.category}
        </h3>
      </div>

      <p className="text-sm" style={{ color: 'var(--color-text-muted)', lineHeight: 'var(--leading-relaxed)' }}>
        {cat.description}
      </p>

      <hr className="custom-divider" />

      {/* Tools list */}
      <ul className="flex flex-col gap-2 flex-1">
        {cat.tools.map((tool) => (
          <li key={tool.name} className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-grey-700)' }}>
              <Check size={13} strokeWidth={2.5} style={{ color: cat.color }} aria-hidden="true" />
              {tool.name}
            </span>
            {tool.note && (
              <span
                className="text-xs font-medium whitespace-nowrap"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {tool.note}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function WorksWithList() {
  return (
    <section id="integrations" className="custom-section">
      <Container>
        <FadeIn>
          <p className="custom-eyebrow mb-3 text-center">All Integrations</p>
          <h2 className="custom-h2 text-center mb-4">30+ Platforms. Zero Ripping and Replacing.</h2>
          <p className="custom-lead text-center mb-12 max-w-2xl mx-auto">
            Every integration listed below is available from day one. We handle all technical setup — API keys, webhooks, authentication, and testing — before going live.
          </p>
        </FadeIn>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {integrationCategories.map((cat) => (
            <Stagger.Child key={cat.id}>
              <CategoryCard cat={cat} />
            </Stagger.Child>
          ))}
        </Stagger>

        <FadeIn delay={0.2}>
          <p className="text-center text-sm mt-10" style={{ color: 'var(--color-text-muted)' }}>
            Don't see your tool?{' '}
            <a href="/get-started#demo-form" style={{ color: 'var(--color-green-600)', fontWeight: 600 }}>
              Ask us — most CRMs are supported via API.
            </a>
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}

export default WorksWithList;
