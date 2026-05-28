import React from 'react';
import { ArrowRight } from 'lucide-react';
import FadeIn from '@components/motion/FadeIn';
import Tag from '@components/atoms/Tag';
import Container from '@components/layout/Container';
import { useCases } from '@data/useCases';
import { industries } from '@data/industries';
import { cn } from '@utils/classNames';

// Map industryId → industry meta for display
const industryMap = Object.fromEntries(industries.map((ind) => [ind.id, ind]));

function StoryCard({ story, index }) {
  const ind    = industryMap[story.industryId];
  const isEven = index % 2 === 0;

  return (
    <div
      id={`story-${story.industryId}`}
      className={cn(
        'scroll-mt-24 custom-section',
        isEven ? '' : ''
      )}
      style={{ background: isEven ? 'var(--color-bg)' : 'var(--color-bg-alt)', paddingBlock: 'clamp(3rem,4vw,4.5rem)' }}
    >
      <Container>
        <FadeIn>
          <div className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-start ${isEven ? '' : 'lg:flex-row-reverse'}`}>

            {/* Left accent panel */}
            <div className="shrink-0 lg:w-56 flex flex-col gap-4 items-start">
              <Tag>{story.businessType}</Tag>

              {/* Result callout */}
              {story.result && (
                <div
                  className="p-4 rounded-xl w-full"
                  style={{ background: 'var(--color-green-50)', border: '1px solid var(--color-green-200)' }}
                >
                  <p className="text-xs font-semibold mb-1 uppercase tracking-wide" style={{ color: 'var(--color-green-700)' }}>
                    Result
                  </p>
                  <p className="text-sm font-bold" style={{ color: 'var(--color-green-800)', lineHeight: 'var(--leading-snug)' }}>
                    {story.result}
                  </p>
                </div>
              )}

              {/* Industry label */}
              {ind && (
                <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
                  {ind.name}
                </p>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h2 className="custom-h3 mb-5" style={{ color: 'var(--color-grey-900)' }}>
                {story.challenge}
              </h2>

              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--color-text-muted)' }}>
                  What changed with Caller Monkey
                </p>
                <p className="text-base" style={{ color: 'var(--color-grey-700)', lineHeight: 'var(--leading-relaxed)' }}>
                  {story.solution}
                </p>
              </div>

              <a
                href="/get-started#demo-form"
                className="inline-flex items-center gap-2 text-sm font-semibold custom-focus-ring"
                style={{ color: 'var(--color-green-600)' }}
              >
                Get a similar result for your business
                <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}

function IndustriesUseCases() {
  return (
    <div id="use-cases">
      <div className="custom-section custom-section-alt" style={{ paddingBottom: '2rem' }}>
        <Container variant="narrow">
          <FadeIn>
            <p className="custom-eyebrow mb-3 text-center">Customer Stories</p>
            <h2 className="custom-h2 text-center mb-4">Real Businesses. Real Results.</h2>
            <p className="custom-lead text-center">
              These are not case studies written by a marketing team. These are outcomes reported by businesses using Caller Monkey today.
            </p>
          </FadeIn>
        </Container>
      </div>

      {useCases.map((story, i) => (
        <StoryCard key={story.id} story={story} index={i} />
      ))}
    </div>
  );
}

export default IndustriesUseCases;
