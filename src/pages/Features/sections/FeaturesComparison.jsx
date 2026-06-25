import { X, Check } from 'lucide-react';
import FadeIn from '@components/motion/FadeIn';
import Stagger from '@components/motion/Stagger';
import Container from '@components/layout/Container';

const ROWS = [
  { other: 'Basic calling bot', cm: 'Full AI communication system' },
  { other: 'English-only', cm: '70+ languages, Hinglish ready' },
  { other: 'Tools that work in isolation', cm: 'Calls, WhatsApp, CRM, email — one system' },
  { other: 'Months to go live', cm: 'Live in 15 days, guaranteed' },
  { other: 'High monthly retainers', cm: 'Pay only what you use' },
  { other: 'One-size-fits-all', cm: 'Built for Indian field teams & markets' },
  { other: 'Dashboard but no decisions', cm: 'Shows what to fix, not just numbers' },
  { other: 'Requires your IT team', cm: 'We handle all setup and training' },
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
