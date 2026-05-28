import React from 'react';
import FadeIn from '@components/motion/FadeIn';
import Stagger from '@components/motion/Stagger';
import CapabilityCard from '@components/molecules/CapabilityCard';
import Container from '@components/layout/Container';
import { capabilities } from '@data/capabilities';

function FeaturesGrid() {
  return (
    <section id="features-grid" className="custom-section-alt">
      <Container>
        <FadeIn>
          <p className="custom-eyebrow mb-3 text-center">What It Does</p>
          <h2 className="custom-h2 text-center mb-4">Ten everyday jobs. One connected system.</h2>
          <p className="custom-lead text-center mb-12 max-w-2xl mx-auto">
            Every item below is something your business already needs to do. Caller Monkey does all of them automatically, around the clock, without manual input.
          </p>
        </FadeIn>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-5">
          {capabilities.map((cap) => (
            <Stagger.Child key={cap.id}>
              <a
                href={`#${cap.id}`}
                className="block h-full focus-visible:outline-none custom-focus-ring rounded-xl"
                aria-label={`Learn more about ${cap.title}`}
              >
                <CapabilityCard
                  icon={cap.icon}
                  title={cap.title}
                  description={cap.description}
                  className="h-full"
                />
              </a>
            </Stagger.Child>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

export default FeaturesGrid;
