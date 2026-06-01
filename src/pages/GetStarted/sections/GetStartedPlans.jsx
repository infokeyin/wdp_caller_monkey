import React from 'react';
import FadeIn from '@components/motion/FadeIn';
import Stagger from '@components/motion/Stagger';
import PlanCard from '@components/molecules/PlanCard';
import Container from '@components/layout/Container';

const PLANS = [
  {
    name: 'Starter — AI Voice Core',
    audience: 'First-time AI adoption, moving from manual calling.',
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
    audience: 'Sales-heavy teams — full pipeline automation, zero dropped leads.',
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
    audience: 'Field teams, multi-location ops, large employee bases.',
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
          <h2 className="custom-h2 text-center mb-10">Where Do You Want to Start?</h2>
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
          <p className="text-center text-sm mt-8" style={{ color: 'var(--color-text-muted)' }}>
            Not sure?{' '}
            <a href="#demo-form" style={{ color: 'var(--color-green-600)', fontWeight: 600 }}>
              Book the free walkthrough →
            </a>
            {' '}We'll recommend the right fit.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}

export default GetStartedPlans;
