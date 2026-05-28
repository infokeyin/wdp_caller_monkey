import React from 'react';
import FadeIn from '@components/motion/FadeIn';
import Stagger from '@components/motion/Stagger';
import PlanCard from '@components/molecules/PlanCard';
import Container from '@components/layout/Container';

const PLANS = [
  {
    name: 'Starter — AI Voice Core',
    audience: 'Businesses starting with AI communication for the first time, or moving from manual calling.',
    featured: false,
    features: [
      'AI calling in your business voice and language',
      '15+ Indian languages supported',
      'Lead follow-up engine (multiple automated call attempts)',
      'Customer reminder system (appointment, payment, renewal)',
      'Basic CRM logging via webhook or API',
      'WhatsApp follow-up on missed or unanswered calls',
      'Basic call analytics dashboard',
    ],
  },
  {
    name: 'Growth — + CRM & Lead Engine',
    audience: 'Sales-heavy businesses wanting full pipeline automation and zero lead drop.',
    featured: true,
    features: [
      'Everything in Starter',
      'Full CRM integration (Zoho, Salesforce, HubSpot, Freshsales, LeadSquared)',
      'Lead platform connections (IndiaMart, JustDial, 99acres, Facebook, Google)',
      'Automated lead qualification and intent scoring',
      'Advanced analytics and pipeline reports',
      'Priority support',
    ],
  },
  {
    name: 'Operations — + Team & Business Tools',
    audience: 'Businesses with field teams, multi-location operations, or large employee bases.',
    featured: false,
    features: [
      'Everything in Growth',
      'Employee communication broadcasts (voice and WhatsApp)',
      'Field team attendance via AI voice call',
      'GPS-verified field reporting and manager dashboard',
      'Email automation based on call outcomes',
      'WhatsApp Business API full integration',
      'Full operations dashboard',
    ],
  },
];

function GetStartedPlans() {
  return (
    <section className="custom-section-alt" id="plans">
      <Container>
        <FadeIn>
          <p className="custom-eyebrow mb-3 text-center">Starting Points</p>
          <h2 className="custom-h2 text-center mb-4">Where Do You Want to Start?</h2>
          <p className="custom-lead text-center mb-12 max-w-2xl mx-auto">
            Three starting points. All include setup, training, and support. All scale as your business grows.
          </p>
        </FadeIn>

        <Stagger className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan) => (
            <Stagger.Child key={plan.name}>
              <PlanCard
                {...plan}
                ctaLabel="Talk to Our Team"
                ctaTo="/get-started#demo-form"
                className="h-full"
              />
            </Stagger.Child>
          ))}
        </Stagger>

        <FadeIn delay={0.2}>
          <p className="text-center text-sm mt-10" style={{ color: 'var(--color-text-muted)' }}>
            Not sure which to pick?{' '}
            <a href="#demo-form" style={{ color: 'var(--color-green-600)', fontWeight: 600 }}>
              Book a free 30-minute walkthrough →
            </a>
            {' '}We will recommend the right starting point for your business.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}

export default GetStartedPlans;
