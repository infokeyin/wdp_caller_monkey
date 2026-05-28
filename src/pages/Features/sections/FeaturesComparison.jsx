import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';
import FadeIn from '@components/motion/FadeIn';
import Container from '@components/layout/Container';

const ROWS = [
  [
    'A calling bot that makes automated calls',
    'A full AI communication system that connects your entire business',
  ],
  [
    'English-only or limited language support',
    '15+ Indian languages including Hinglish, built for real India',
  ],
  [
    'Tools that work in isolation',
    'A single system connecting calls, WhatsApp, CRM, email, attendance, and more',
  ],
  [
    'Takes months to get started',
    'Live in 15 days, guaranteed',
  ],
  [
    'Charges high monthly retainers',
    'Pay-per-minute from ₹15/min — use only what you need',
  ],
  [
    'Treats businesses of all sizes the same',
    'Designed for Indian businesses: field teams, multilingual customers, complex follow-up chains',
  ],
  [
    'Gives you a dashboard but not decisions',
    'Shows you what is working, what is not, and what to fix',
  ],
  [
    'Requires technical setup by your IT team',
    'We handle all setup, integration, and training — you just approve the scripts',
  ],
];

function FeaturesComparison() {
  return (
    <section className="custom-section-dark" id="comparison">
      <Container>
        <FadeIn>
          <h2 className="custom-h2 text-center mb-4" style={{ color: '#fff' }}>
            What Others Offer vs What Caller Monkey Delivers
          </h2>
          <p className="custom-lead text-center mb-12 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Not all AI calling systems are built the same. Here is what sets Caller Monkey apart.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="overflow-x-auto rounded-xl">
            <table className="custom-table" style={{ background: 'var(--color-grey-900)' }}>
              <caption className="sr-only">Comparison: generic AI tools vs Caller Monkey</caption>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'var(--color-grey-950)', color: 'var(--color-grey-400)' }}>
                    <span className="flex items-center gap-2">
                      <XCircle size={16} strokeWidth={2} style={{ color: 'var(--color-error)' }} aria-hidden="true" />
                      What Others Offer
                    </span>
                  </th>
                  <th scope="col" style={{ background: 'var(--color-grey-950)', color: 'var(--color-green-400)' }}>
                    <span className="flex items-center gap-2">
                      <CheckCircle2 size={16} strokeWidth={2} aria-hidden="true" />
                      What Caller Monkey Delivers
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map(([other, cm], i) => (
                  <tr key={i} style={{ borderColor: 'var(--color-grey-700)' }}>
                    <td style={{ color: 'var(--color-grey-400)', borderColor: 'var(--color-grey-700)' }}>
                      {other}
                    </td>
                    <td style={{ color: 'var(--color-green-400)', fontWeight: 600, borderColor: 'var(--color-grey-700)' }}>
                      {cm}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

export default FeaturesComparison;
