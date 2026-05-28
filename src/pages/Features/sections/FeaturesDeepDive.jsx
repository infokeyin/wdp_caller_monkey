import React from 'react';
import FadeIn from '@components/motion/FadeIn';
import Icon from '@components/atoms/Icon';
import Container from '@components/layout/Container';
import { capabilities } from '@data/capabilities';

/**
 * Expanded detail for each capability.
 * whyMatters and usedFor are appended to the base description.
 */
const DETAILS = {
  'voice-calling': {
    whyMatters: 'Most businesses lose 60–70% of their leads simply because no one calls back quickly enough. A lead that is not called within 5 minutes is 21× less likely to convert.',
    usedFor: ['Lead qualification on inbound enquiries', 'Cold outreach to prospect lists', 'Re-engagement of dormant customers'],
  },
  'whatsapp': {
    whyMatters: 'WhatsApp has a 98% open rate in India. When a call goes unanswered, Caller Monkey automatically sends a WhatsApp message to keep the conversation alive.',
    usedFor: ['Post-call follow-up with property brochures or loan details', 'Appointment confirmation and directions', 'Payment link sharing and receipt delivery'],
  },
  'crm': {
    whyMatters: 'Manual CRM entry is never done completely. Caller Monkey logs every call, outcome, and next step automatically — giving you a full, accurate picture of your pipeline at any moment.',
    usedFor: ['Auto-logging lead status after every AI call', 'Syncing with Salesforce, Zoho CRM, Freshsales, and more', 'Triggering CRM workflows based on call outcome'],
  },
  'lead-follow-up': {
    whyMatters: 'Studies show 80% of sales require 5 or more follow-up touches. Almost no business can do this manually at scale. Caller Monkey does it automatically — without needing reminders.',
    usedFor: ['Multi-step follow-up after first call, across 3–7 days', 'Escalation to senior sales rep after X failed attempts', 'Re-engagement of leads that went cold 30–90 days ago'],
  },
  'reminders': {
    whyMatters: 'No-shows, missed payments, and lapsed renewals cost Indian businesses crores every year. Caller Monkey sends the right reminder at the right time, automatically.',
    usedFor: ['Appointment reminders for clinics and service businesses', 'EMI and payment due date alerts', 'Policy renewal and subscription expiry calls'],
  },
  'attendance': {
    whyMatters: 'For businesses with field teams — DSAs, delivery staff, sales executives — manual attendance is unreliable and easy to fake. Voice-verified attendance with GPS gives you accurate, tamper-proof records.',
    usedFor: ['Daily voice check-in for field sales teams', 'GPS location confirmation for on-site executives', 'Auto-generated attendance report sent to manager daily'],
  },
  'employee-comm': {
    whyMatters: 'For large or distributed teams, communicating policy changes, training schedules, or urgent updates via WhatsApp groups means critical information gets buried. AI voice broadcasts ensure everyone hears it.',
    usedFor: ['Daily briefings for call centre or field teams', 'Training reminders and module completion nudges', 'Emergency communication to all staff in seconds'],
  },
  'email': {
    whyMatters: 'The right email, sent at the right moment, dramatically increases conversion. Caller Monkey triggers emails based on call outcomes — not time delays.',
    usedFor: ['Property brochure or loan offer after a qualified call', 'Thank-you email after a successful appointment booking', 'Escalation email to senior manager if lead is unresponsive'],
  },
  'analytics': {
    whyMatters: 'Most business owners run on gut feel. Caller Monkey shows you exactly where leads are being lost, which team members are converting, and where to focus next week\'s effort.',
    usedFor: ['Daily call volume and outcome dashboard', 'Team performance comparison by region or executive', 'Campaign-level response rate tracking'],
  },
  'multilanguage': {
    whyMatters: 'India is not one market. A customer in Punjab speaks differently from one in Tamil Nadu. Caller Monkey matches the language to the customer — increasing pick-up rates and trust.',
    usedFor: ['Hindi and Hinglish for North India outreach', 'Tamil, Telugu, Kannada for South India campaigns', 'Marathi, Gujarati, Bengali for regional business communication'],
  },
};

function DeepDiveCard({ cap, isEven }) {
  const detail = DETAILS[cap.id];

  return (
    <div
      id={cap.id}
      className="custom-section"
      style={{
        background: isEven ? 'var(--color-bg)' : 'var(--color-bg-alt)',
        paddingBlock: 'clamp(3rem, 4vw, 4.5rem)',
      }}
    >
      <Container>
        <FadeIn>
          <div className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-start ${isEven ? '' : 'lg:flex-row-reverse'}`}>

            {/* Icon block */}
            <div className="shrink-0 lg:w-52 flex flex-col items-center lg:items-start gap-4 lg:pt-2">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: 'var(--color-green-50)' }}
                aria-hidden="true"
              >
                <Icon name={cap.icon} size={30} strokeWidth={1.75} style={{ color: 'var(--color-green-600)' }} />
              </div>
              <div className="hidden lg:flex flex-col gap-1">
                {detail?.usedFor?.map((use) => (
                  <span key={use} className="flex items-start gap-2 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    <span className="text-green-500 mt-0.5 shrink-0" aria-hidden="true">→</span>
                    {use}
                  </span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h2 className="custom-h3 mb-4" style={{ color: 'var(--color-grey-900)' }}>
                {cap.title}
              </h2>
              <p className="text-base mb-4" style={{ color: 'var(--color-text-muted)', lineHeight: 'var(--leading-relaxed)' }}>
                {cap.description}
              </p>
              {detail?.whyMatters && (
                <div
                  className="p-4 rounded-xl mb-4"
                  style={{ background: 'var(--color-green-50)', borderLeft: '3px solid var(--color-green-500)' }}
                >
                  <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-green-700)' }}>
                    Why it matters
                  </p>
                  <p className="text-sm" style={{ color: 'var(--color-green-900)', lineHeight: 'var(--leading-relaxed)' }}>
                    {detail.whyMatters}
                  </p>
                </div>
              )}
              {/* Mobile use-cases */}
              {detail?.usedFor && (
                <div className="flex flex-col gap-1.5 lg:hidden">
                  {detail.usedFor.map((use) => (
                    <span key={use} className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                      <span style={{ color: 'var(--color-green-500)' }} aria-hidden="true">→</span>
                      {use}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}

function FeaturesDeepDive() {
  return (
    <div id="features-deep-dive">
      {capabilities.map((cap, i) => (
        <DeepDiveCard key={cap.id} cap={cap} isEven={i % 2 === 0} />
      ))}
    </div>
  );
}

export default FeaturesDeepDive;
