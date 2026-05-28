import React from 'react';
import FadeIn from '@components/motion/FadeIn';
import Stagger from '@components/motion/Stagger';
import StepCard from '@components/molecules/StepCard';
import Container from '@components/layout/Container';

const STEPS = [
  {
    number: 1,
    title: 'Connect',
    whatHappens: 'We connect Caller Monkey to your existing phone number, CRM, WhatsApp Business, lead platforms, and any other tools you already use. Our team handles all technical setup — you do not need an IT team.',
    result: 'Your system is live. AI starts handling calls from Day 1.',
  },
  {
    number: 2,
    title: 'Train',
    whatHappens: 'You share your call scripts, common questions, objection responses, product details, and how you want to communicate with customers. Our team builds the AI on top of your inputs and gets your approval before going live.',
    result: 'Every call sounds like your best salesperson — in your language, your style.',
  },
  {
    number: 3,
    title: 'Scale',
    whatHappens: 'As your business grows, we add more integrations, automate more workflows, and expand the system — attendance tracking, email automation, employee communication, detailed analytics. You tell us what to add next.',
    result: 'Your communication scales without adding headcount.',
  },
];

function GetStartedHowLive() {
  return (
    <section className="custom-section" id="how-it-works">
      <Container>
        <FadeIn>
          <p className="custom-eyebrow mb-3 text-center">How Going Live Works</p>
          <h2 className="custom-h2 text-center mb-4">Live in 15 Working Days</h2>
          <p className="custom-lead text-center mb-12 max-w-2xl mx-auto">
            From the day you share your scripts and advance payment to the day your AI is handling real calls. 15 working days, guaranteed.
          </p>
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step) => (
            <Stagger.Child key={step.number}>
              <StepCard {...step} />
            </Stagger.Child>
          ))}
        </Stagger>

        <FadeIn delay={0.2}>
          <div
            className="mt-10 p-5 rounded-xl text-center max-w-xl mx-auto"
            style={{ background: 'var(--color-green-50)', border: '1px solid var(--color-green-200)' }}
          >
            <p className="font-semibold" style={{ color: 'var(--color-green-700)' }}>
              Timeline: 15 working days from payment and materials received.
            </p>
            <p className="text-sm mt-1" style={{ color: 'var(--color-green-600)' }}>
              Our team handles all setup, integration, and testing. You just approve the scripts.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

export default GetStartedHowLive;
