import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '@components/motion/FadeIn';
import Stagger from '@components/motion/Stagger';
import Container from '@components/layout/Container';
import Icon from '@components/atoms/Icon';
import { useReducedMotion } from '@hooks/useReducedMotion';

const CAPABILITIES = [
  { icon: 'PhoneCall',    label: 'AI Voice Calling'   },
  { icon: 'BellRing',    label: 'Lead Follow-Up'     },
  { icon: 'MessageSquare',label: 'WhatsApp Auto'      },
  { icon: 'Mail',        label: 'Email Automation'   },
  { icon: 'Database',    label: 'CRM Logging'        },
  { icon: 'MapPin',      label: 'Field Tracking'     },
  { icon: 'BarChart3',   label: 'Live Analytics'     },
  { icon: 'Languages',   label: '15+ Languages'      },
];

function HomeWhatItDoes() {
  const reduced = useReducedMotion();

  return (
    <section className="custom-section">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Left column — text + icon grid */}
          <div className="flex-1 min-w-0">
            <FadeIn>
              <p className="custom-eyebrow mb-3">What It Does</p>
              <h2 className="custom-h2 mb-5">
                What Caller Monkey Does for You
              </h2>
              <p className="custom-lead mb-10">
                Caller Monkey handles every piece of your business communication that currently needs manual effort — automatically, 24/7.
              </p>
            </FadeIn>

            {/* 2×4 icon grid */}
            <Stagger className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {CAPABILITIES.map((cap, i) => (
                <Stagger.Child key={cap.icon}>
                  <motion.div
                    animate={reduced ? {} : { y: [0, -3, 0] }}
                    transition={reduced ? {} : { duration: 4 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      display: 'flex', flexDirection: 'column', alignItems: 'center',
                      gap: '0.5rem', textAlign: 'center',
                      padding: '1.25rem 0.75rem',
                      background: 'var(--color-bg-alt)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-lg)',
                    }}
                  >
                    <div
                      style={{
                        width: 44, height: 44, borderRadius: 'var(--radius-lg)',
                        background: 'var(--color-green-50)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}
                      aria-hidden="true"
                    >
                      <Icon name={cap.icon} size={22} strokeWidth={1.75} style={{ color: 'var(--color-green-600)' }} />
                    </div>
                    <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--color-grey-700)', lineHeight: 1.3 }}>
                      {cap.label}
                    </span>
                  </motion.div>
                </Stagger.Child>
              ))}
            </Stagger>
          </div>

          {/* Right column — pricing card (unchanged) */}
          <div className="lg:w-72 shrink-0">
            <FadeIn delay={0.15}>
              <div
                className="custom-card custom-card-feature text-center p-8"
                style={{ position: 'sticky', top: '5.5rem' }}
              >
                <p className="custom-eyebrow mb-3">Pricing</p>
                <div
                  className="custom-mono-stat mb-1"
                  style={{ fontSize: 'clamp(2.5rem, 4vw, 3rem)', color: 'var(--color-green-500)', lineHeight: 1 }}
                >
                  ₹15/min
                </div>
                <p className="text-sm mb-4" style={{ color: 'var(--color-text-muted)' }}>
                  AI calling — no monthly lock-in. Pay for what you use.
                </p>
                <hr className="custom-divider mb-4" />
                <div className="flex flex-col gap-2 text-left mb-6">
                  {['No setup fees', 'Live in 15 days', '15+ languages', 'No monthly contracts'].map((f) => (
                    <span key={f} className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-grey-700)' }}>
                      <Check size={14} strokeWidth={2.5} style={{ color: 'var(--color-green-500)' }} aria-hidden="true" />
                      {f}
                    </span>
                  ))}
                </div>
                <a href="/get-started#demo-form" className="custom-btn custom-btn-primary w-full justify-center">
                  Get a Free Demo
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeWhatItDoes;
