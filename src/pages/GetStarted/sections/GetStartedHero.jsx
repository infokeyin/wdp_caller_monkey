import React from 'react';
import FadeIn from '@components/motion/FadeIn';
import Container from '@components/layout/Container';

function GetStartedHero() {
  return (
    <section
      className="custom-section"
      style={{
        background: 'linear-gradient(160deg, var(--color-green-50) 0%, var(--color-bg) 60%)',
        paddingTop: 'clamp(3rem, 5vw, 5rem)',
        paddingBottom: 'clamp(2rem, 4vw, 4rem)',
      }}
    >
      <Container variant="narrow">
        <FadeIn>
          <p className="custom-eyebrow mb-4 text-center">Get Started</p>
          <h1 className="custom-display text-center mb-6">
            Pick Where to Begin. Add More as You Grow.
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="custom-lead text-center mb-3">
            You do not have to start with everything. Most businesses begin with AI Voice Calling and add more as they see results.
          </p>
          <p className="custom-lead text-center">
            From ₹15 per minute. Live in 15 working days. No lock-in.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}

export default GetStartedHero;
