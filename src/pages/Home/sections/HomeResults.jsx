import { TrendingUp, Target, DollarSign } from 'lucide-react';
import FadeIn from '@components/motion/FadeIn';
import Stagger from '@components/motion/Stagger';
import StatCounter from '@components/molecules/StatCounter';
import Container from '@components/layout/Container';

const STATS = [
  { value: 2, prefix: '<', suffix: ' mins', label: 'Lead response time' },
  { value: 100, suffix: '%', label: 'Follow-up coverage' },
  { value: 15, suffix: ' days', label: 'Go-live guarantee' },
  { value: 70, suffix: '+', label: 'Indian languages supported' },
];

const OUTCOMES = [
  {
    Icon: TrendingUp,
    stat: '92%',
    label: 'Response rate',
    note: 'vs 35–45% with in-house teams',
    color: '#2DA744',
  },
  {
    Icon: Target,
    stat: '3.2×',
    label: 'Lead-to-appointment ratio',
    note: 'Higher than manual outreach',
    color: '#2C7BE5',
  },
  {
    Icon: DollarSign,
    stat: '40% lower',
    label: 'Cost per qualified lead',
    note: 'vs a dedicated calling team',
    color: '#F4A623',
  },
];

function HomeResults() {
  return (
    <section className="custom-section">
      <Container>
        <FadeIn>
          <p className="custom-eyebrow mb-3 text-center">Results</p>
          <h2 className="custom-h2 mb-10 text-center">
            What Businesses Experience After Going Live.
          </h2>
        </FadeIn>

        {/* 4 animated stat counters */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-14 p-8 rounded-2xl"
          style={{ background: 'var(--color-bg-alt)', border: '1px solid var(--color-border)' }}
        >
          {STATS.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>

        {/* 3 highlighted outcome cards */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {OUTCOMES.map(({ Icon, stat, label, note, color }) => (
            <Stagger.Child key={label}>
              <div
                className="custom-card custom-card-accent-top"
                style={{ borderTopColor: color, textAlign: 'center', padding: '2rem 1.5rem' }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 'var(--radius-xl)',
                    background: `${color}14`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                  }}
                  aria-hidden="true"
                >
                  <Icon size={24} strokeWidth={1.75} style={{ color }} />
                </div>
                <p
                  className="custom-mono-stat"
                  style={{
                    fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                    color,
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                  }}
                >
                  {stat}
                </p>
                <p
                  style={{
                    fontWeight: 700,
                    color: 'var(--color-grey-800)',
                    marginBottom: '0.35rem',
                    fontSize: 'var(--text-sm)',
                  }}
                >
                  {label}
                </p>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                  {note}
                </p>
              </div>
            </Stagger.Child>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

export default HomeResults;
