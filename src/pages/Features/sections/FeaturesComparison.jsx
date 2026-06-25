import { X, Check } from 'lucide-react';
import FadeIn from '@components/motion/FadeIn';
import Stagger from '@components/motion/Stagger';
import Container from '@components/layout/Container';

const ROWS = [
  { other: 'Basic calling bot only',              cm: 'Full Voice Agent — qualifies, follows up, books' },
  { other: 'WhatsApp not integrated',             cm: 'WhatsApp Automation built in' },
  { other: 'Telegram not supported',              cm: 'Team broadcasts on Telegram, instantly' },
  { other: 'Meta leads go to a spreadsheet',      cm: 'Meta leads → instant AI call in < 2 min' },
  { other: 'Google leads handled manually',       cm: 'Google leads captured and called automatically' },
  { other: 'Website form leads sit for hours',    cm: 'Website leads trigger an AI call immediately' },
  { other: 'Manual CRM data entry',               cm: 'CRM auto-updated after every interaction' },
  { other: 'Scheduling done by your team',        cm: 'AI books appointments during the call' },
  { other: 'Email sent manually or not at all',   cm: 'Email triggered automatically by call outcome' },
  { other: 'Quotation sent days later',           cm: 'Quotation + payment link sent right after the call' },
  { other: 'English-only',                        cm: '70+ languages, Hinglish ready' },
  { other: 'Leads wait hours for a call',         cm: "Autocall dials every lead the moment it arrives" },
  { other: 'Follow-up relies on your team',       cm: '5+ follow-up attempts, fully automated' },
  { other: 'Dashboard with no decisions',         cm: 'Analytics that show exactly where revenue is lost' },
  { other: 'High monthly retainers',              cm: 'Pay as you Go — no contract, no lock-in' },
];

function FeaturesComparison() {
  return (
    <section className="custom-section-dark" id="comparison">
      <Container>
        <FadeIn>
          <h2 className="custom-h2 text-center mb-2" style={{ color: '#fff' }}>
            Others vs Caller Monkey
          </h2>
          <p
            style={{
              textAlign: 'center',
              marginBottom: '3rem',
              color: 'rgba(255,255,255,0.55)',
              fontSize: 'var(--text-base)',
            }}
          >
            Not all AI calling systems are built the same.
          </p>
        </FadeIn>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ROWS.map(({ other, cm }, i) => (
            <Stagger.Child key={i}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* Others — left */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    padding: '0.875rem 1rem',
                    background: 'rgba(255,255,255,0.04)',
                  }}
                >
                  <X
                    size={14}
                    strokeWidth={2.5}
                    style={{ color: '#D9342B', flexShrink: 0, marginTop: 2 }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'rgba(255,255,255,0.45)',
                      lineHeight: 1.4,
                    }}
                  >
                    {other}
                  </span>
                </div>
                {/* CM — right */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    padding: '0.875rem 1rem',
                    background: 'rgba(45,167,68,0.10)',
                    borderLeft: '1px solid rgba(45,167,68,0.2)',
                  }}
                >
                  <Check
                    size={14}
                    strokeWidth={2.5}
                    style={{ color: '#2DA744', flexShrink: 0, marginTop: 2 }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'rgba(255,255,255,0.88)',
                      fontWeight: 600,
                      lineHeight: 1.4,
                    }}
                  >
                    {cm}
                  </span>
                </div>
              </div>
            </Stagger.Child>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

export default FeaturesComparison;
