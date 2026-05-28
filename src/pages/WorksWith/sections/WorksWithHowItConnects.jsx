import React from 'react';
import { ArrowRight } from 'lucide-react';
import FadeIn from '@components/motion/FadeIn';
import Stagger from '@components/motion/Stagger';
import Icon from '@components/atoms/Icon';
import Container from '@components/layout/Container';

const STEPS = [
  {
    step: '01',
    icon: 'Zap',
    color: '#F4A623',
    title: 'Lead arrives',
    body: 'A new lead comes in from IndiaMart, Facebook, your website, or any other source. Caller Monkey receives it instantly via webhook or native integration.',
  },
  {
    step: '02',
    icon: 'PhoneCall',
    color: '#2DA744',
    title: 'AI calls within 2 minutes',
    body: "Caller Monkey calls the lead in your business's voice and language. It qualifies them, answers questions, and handles the conversation end to end.",
  },
  {
    step: '03',
    icon: 'Database',
    color: '#2C7BE5',
    title: 'CRM updated automatically',
    body: 'Every call outcome — qualification status, interest level, next action — is logged in your CRM without any manual entry from your team.',
  },
  {
    step: '04',
    icon: 'MessageSquare',
    color: '#25D366',
    title: 'WhatsApp follow-up sent',
    body: "If the call is unanswered or the lead needs more information, Caller Monkey sends a personalised WhatsApp message automatically — with your brochure, pricing, or next step.",
  },
];

// Connector arrow between steps (desktop only)
function StepConnector({ color }) {
  return (
    <div className="hidden lg:flex items-center self-start mt-14">
      <ArrowRight size={22} strokeWidth={1.75} style={{ color, opacity: 0.4 }} aria-hidden="true" />
    </div>
  );
}

function WorksWithHowItConnects() {
  return (
    <section className="custom-section-alt" id="how-it-connects">
      <Container>
        <FadeIn>
          <p className="custom-eyebrow mb-3 text-center">How It Works</p>
          <h2 className="custom-h2 text-center mb-4">
            What Happens When a Lead Comes In
          </h2>
          <p className="custom-lead text-center mb-12 max-w-2xl mx-auto">
            A real example: lead from IndiaMart → qualified by AI → logged in CRM → followed up on WhatsApp. All in under 3 minutes, without anyone on your team lifting a finger.
          </p>
        </FadeIn>

        {/* Flow steps */}
        <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-3">
          {STEPS.map((s, i) => (
            <React.Fragment key={s.step}>
              <Stagger className="flex-1 min-w-0">
                <Stagger.Child>
                  <div
                    className="custom-card h-full flex flex-col gap-4"
                    style={{ borderTop: `3px solid ${s.color}` }}
                  >
                    {/* Step badge */}
                    <div className="flex items-center gap-3">
                      <span
                        className="font-mono text-xs font-bold px-2 py-1 rounded"
                        style={{ background: `${s.color}15`, color: s.color }}
                      >
                        {s.step}
                      </span>
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: `${s.color}15` }}
                        aria-hidden="true"
                      >
                        <Icon name={s.icon} size={16} strokeWidth={2} style={{ color: s.color }} />
                      </div>
                    </div>
                    <h3
                      className="font-display font-bold"
                      style={{ fontSize: 'var(--text-h4)', color: 'var(--color-grey-900)' }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-sm flex-1" style={{ color: 'var(--color-text-muted)', lineHeight: 'var(--leading-relaxed)' }}>
                      {s.body}
                    </p>
                  </div>
                </Stagger.Child>
              </Stagger>
              {i < STEPS.length - 1 && (
                <StepConnector color={STEPS[i + 1].color} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Timeline note */}
        <FadeIn delay={0.2}>
          <div
            className="mt-10 p-5 rounded-xl text-center"
            style={{ background: 'var(--color-green-50)', border: '1px solid var(--color-green-200)' }}
          >
            <p className="font-semibold" style={{ color: 'var(--color-green-700)' }}>
              Total time: under 3 minutes from lead submission to WhatsApp message sent.
            </p>
            <p className="text-sm mt-1" style={{ color: 'var(--color-green-600)' }}>
              Running 24 hours a day, 7 days a week, for every single lead.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

export default WorksWithHowItConnects;
