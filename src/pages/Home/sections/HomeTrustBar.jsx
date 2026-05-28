import React from 'react';
import Icon from '@components/atoms/Icon';

const ITEMS = [
  { icon: 'Building2',      label: 'Real Estate'    },
  { icon: 'HeartPulse',     label: 'Healthcare'     },
  { icon: 'TrendingUp',     label: 'Finance'        },
  { icon: 'ShoppingCart',   label: 'Retail'         },
  { icon: 'GraduationCap',  label: 'Education'      },
  { icon: 'Factory',        label: 'Manufacturing'  },
  { icon: 'Truck',          label: 'Logistics'      },
  { icon: 'Shield',         label: 'Insurance'      },
  { icon: 'UtensilsCrossed',label: 'Hospitality'   },
  { icon: 'Landmark',       label: 'Government'     },
];

// Doubled for seamless loop
const TRACK = [...ITEMS, ...ITEMS];

function HomeTrustBar() {
  return (
    <div
      style={{ background: 'var(--color-bg-alt)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', overflow: 'hidden', paddingBlock: '0.875rem' }}
      aria-label="Industries served by Caller Monkey"
    >
      <p className="sr-only">Trusted by businesses in: Real Estate, Healthcare, Finance, Retail, Education, Manufacturing, Logistics, Insurance, Hospitality, Government</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Static label */}
        <span
          style={{
            paddingInline: '1.25rem',
            fontSize: 'var(--text-xs)', fontWeight: 700,
            letterSpacing: 'var(--tracking-wide)',
            textTransform: 'uppercase',
            color: 'var(--color-grey-500)',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            borderRight: '1px solid var(--color-border)',
            paddingRight: '1.5rem',
          }}
          aria-hidden="true"
        >
          Trusted in
        </span>

        {/* Scrolling track */}
        <div style={{ overflow: 'hidden', flex: 1 }}>
          <div className="custom-ticker-track" aria-hidden="true">
            {TRACK.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  paddingInline: '1.25rem',
                  borderRight: '1px solid var(--color-border)',
                  whiteSpace: 'nowrap',
                }}
              >
                <Icon
                  name={item.icon}
                  size={14}
                  strokeWidth={2}
                  style={{ color: 'var(--color-green-500)', flexShrink: 0 }}
                  aria-hidden="true"
                />
                <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-grey-600)' }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTrustBar;
