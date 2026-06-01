import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Clock, PhoneCall, Users, TrendingUp } from 'lucide-react';
import FadeIn from '@components/motion/FadeIn';
import Container from '@components/layout/Container';
import appConfig from '@config/appConfig';
import { useReducedMotion } from '@hooks/useReducedMotion';

/* ── Dot-grid background ── */
function DotGrid() {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        opacity: 0.18, pointerEvents: 'none',
      }}
    >
      <defs>
        <pattern id="ww-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#2DA744" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#ww-dots)" />
    </svg>
  );
}

/* ── Glow blob ── */
function GlowBlob({ style }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(45,167,68,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
        ...style,
      }}
    />
  );
}

/* ── Trust stats — the 4 removed from HomeCTA ── */
const TRUST_ITEMS = [
  { Icon: Clock,      stat: '< 2 min', label: 'Lead response time'         },
  { Icon: PhoneCall,  stat: '68–72%',  label: 'Call pick-up rate'          },
  { Icon: Users,      stat: '500+',    label: 'Businesses served'          },
  { Icon: TrendingUp, stat: '15 days', label: 'Go-live guarantee'          },
];

/* ── Animated waveform bars ── */
const WAVE = [4, 8, 14, 20, 26, 20, 14, 8, 4, 8, 16, 22, 18, 10, 4];

function WaveStrip({ reduced }) {
  return (
    <div
      aria-hidden="true"
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 5, marginBottom: '2.5rem', opacity: 0.4,
      }}
    >
      {WAVE.map((h, i) => (
        <div
          key={i}
          className={reduced ? '' : 'custom-wave-bar'}
          style={{
            width: 4, height: h * 1.6,
            background: 'var(--color-green-400)',
            borderRadius: 4,
            animationDelay: `${i * 0.07}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Section ── */
function WorksWithCTA() {
  const reduced = useReducedMotion();
  const waLink = `https://wa.me/${appConfig.contactInfo.whatsapp}?text=${encodeURIComponent("Hi! I'd like to see a live Caller Monkey walkthrough.")}`;

  return (
    <section
      aria-label="Call to action"
      style={{
        position: 'relative', overflow: 'hidden',
        background: 'var(--color-bg-dark)',
        paddingBlock: 'clamp(4rem, 8vw, 7rem)',
      }}
    >
      <DotGrid />
      <GlowBlob style={{ width: 480, height: 480, top: '-120px', left: '-80px' }} />
      <GlowBlob style={{ width: 360, height: 360, bottom: '-80px', right: '-60px' }} />

      <Container style={{ position: 'relative', zIndex: 1 }}>

        {/* Waveform */}
        <WaveStrip reduced={reduced} />

        {/* Headline */}
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <span style={{
              display: 'inline-block',
              fontSize: 'var(--text-xs)', fontWeight: 700,
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase',
              color: 'var(--color-green-400)',
              marginBottom: '1rem',
            }}>
              Live 30-min walkthrough
            </span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 3vw + 1rem, 2.75rem)',
              fontWeight: 800, color: '#fff',
              lineHeight: 1.15, letterSpacing: 'var(--tracking-tight)',
              maxWidth: 580, margin: '0 auto 1rem',
            }}>
              See all of this connected, live, in your tools.
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: 500, margin: '0 auto',
            }}>
              30 minutes. Your tools, your industry. We'll show you exactly how Caller Monkey connects to the systems you already use.
            </p>
          </div>
        </FadeIn>

        {/* Buttons */}
        <FadeIn delay={0.1}>
          <div style={{
            display: 'flex', flexWrap: 'wrap',
            alignItems: 'center', justifyContent: 'center',
            gap: '0.875rem', marginBottom: '3.5rem',
          }}>
            <Link
              to="/get-started#demo-form"
              className="custom-btn custom-btn-primary custom-btn-lg"
            >
              Request a Live Walkthrough
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </Link>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="custom-btn custom-btn-outline custom-btn-lg"
            >
              <MessageCircle size={18} strokeWidth={2} aria-hidden="true" style={{ color: '#25D366' }} />
              Chat on WhatsApp
            </a>
          </div>
        </FadeIn>

        {/* Trust stats */}
        <FadeIn delay={0.18}>
          <div style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '2rem',
          }}>
            {TRUST_ITEMS.map(({ Icon, stat, label }, i) => (
              <div
                key={label}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  padding: '0.5rem 2.5rem', gap: '0.35rem',
                  borderRight: i < TRUST_ITEMS.length - 1
                    ? '1px solid rgba(255,255,255,0.1)' : 'none',
                }}
              >
                <Icon size={16} strokeWidth={1.75}
                  style={{ color: 'var(--color-green-400)', marginBottom: 2 }}
                  aria-hidden="true"
                />
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                  fontWeight: 700, color: '#fff', lineHeight: 1,
                }}>
                  {stat}
                </span>
                <span style={{
                  fontSize: 'var(--text-xs)',
                  color: 'rgba(255,255,255,0.5)',
                  textAlign: 'center', lineHeight: 1.3,
                }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

      </Container>
    </section>
  );
}

export default WorksWithCTA;
