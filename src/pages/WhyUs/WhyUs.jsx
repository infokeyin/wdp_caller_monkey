import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  Zap,
  Link2,
  BarChart3,
  Globe2,
  ShieldCheck,
  TrendingUp,
  Users,
  Clock,
  CheckCircle2,
  ArrowRight,
  Target,
  Lightbulb,
  Layers,
  Star,
} from 'lucide-react';
import PageLayout from '@components/layout/PageLayout';
import Container from '@components/layout/Container';
import FadeIn from '@components/motion/FadeIn';
import Stagger from '@components/motion/Stagger';
import { useReducedMotion } from '@hooks/useReducedMotion';

/* ═══════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════ */

const METRICS = [
  { value: '500+', label: 'Businesses Powered', icon: Users },
  { value: '< 2 min', label: 'Lead Response Time', icon: Clock },
  { value: '70+', label: 'Indian Languages', icon: Globe2 },
  { value: '99.9%', label: 'Platform Uptime', icon: ShieldCheck },
];

const DIFFERENTIATORS = [
  {
    Icon: Brain,
    color: '#2DA744',
    bg: '#E8F7EC',
    title: 'Advanced AI with Human-like Conversations',
    desc: "Our voice AI doesn't sound like a robot. It understands context, speaks naturally, and adapts to every customer — making every interaction feel real.",
  },
  {
    Icon: BarChart3,
    color: '#2C7BE5',
    bg: '#EBF3FF',
    title: 'Real-time Insights for Continuous Optimization',
    desc: 'Every call generates actionable data. Live dashboards show you response rates, conversion trends, and pipeline health — so you can act immediately.',
  },
  {
    Icon: Link2,
    color: '#9B59B6',
    bg: '#F5EEF8',
    title: 'Seamless Integration with Existing Systems',
    desc: 'We plug into your CRM, WhatsApp, email, calendar, and payment tools out of the box. No rip-and-replace. No long IT projects.',
  },
  {
    Icon: Zap,
    color: '#F4A623',
    bg: '#FEF6E7',
    title: 'Scalable Infrastructure for Any Business Size',
    desc: "Whether you're a 5-person startup or a 500-person enterprise, Caller Monkey scales instantly — no surge hiring, no additional overheads.",
  },
  {
    Icon: Globe2,
    color: '#0891B2',
    bg: '#E0F7FA',
    title: 'Built for the World — 70+ Languages supported',
    desc: 'English, Hindi, Tamil, Marathi, Telugu, Kannada and more. The only AI communication platform purpose-built for the diversity of Indian markets.',
  },
  {
    Icon: ShieldCheck,
    color: '#059669',
    bg: '#ECFDF5',
    title: 'Enterprise-grade Security & Reliability',
    desc: 'Every interaction is encrypted, logged, and auditable. 99.9% uptime SLA with enterprise compliance built in from day one.',
  },
];

const MISSION_POINTS = [
  { Icon: Target, text: 'Simplify customer communication using AI' },
  { Icon: TrendingUp, text: 'Help businesses scale without increasing operational costs' },
  { Icon: Star, text: 'Deliver consistent, high-quality customer experiences' },
  { Icon: Lightbulb, text: 'Empower teams with actionable insights and automation' },
];

const COMPARISON_ROWS = [
  { aspect: 'Lead Response Time', cm: '< 2 minutes, 24/7', others: '4–24 hours average' },
  { aspect: 'Follow-up Coverage', cm: '100% — automated', others: '60–70% (human-dependent)' },
  { aspect: 'Language Support', cm: '70+ Indian languages', others: 'English-only or limited' },
  { aspect: 'CRM Logging', cm: 'Automatic after every call', others: 'Manual entry, often missed' },
  { aspect: 'Go-live Time', cm: '15 days guaranteed', others: '3–6 months typical' },
  { aspect: 'Scalability', cm: 'Instant — no headcount', others: 'Hire + train + manage' },
  { aspect: 'Cost per Qualified Lead', cm: '40% lower', others: 'Baseline' },
];

/* ═══════════════════════════════════════════════════════════
   SECTION 1 — HERO
═══════════════════════════════════════════════════════════ */
function WhyUsHero({ reduced }) {
  return (
    <section
      style={{
        background: 'var(--color-bg)',
        paddingBlock: 'clamp(5rem, 10vw, 9rem)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <Container style={{ textAlign: 'center' }}>
        <FadeIn>
          <span
            style={{
              display: 'inline-block',
              fontSize: 'var(--text-xs)',
              fontWeight: 700,
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase',
              color: 'var(--color-green-600)',
              marginBottom: '1.25rem',
              padding: '0.35rem 0.875rem',
              background: 'var(--color-green-50)',
              border: '1px solid var(--color-green-200)',
              borderRadius: 'var(--radius-full)',
            }}
          >
            Why Caller Monkey
          </span>

          <h1
            className="custom-display"
            style={{
              color: 'var(--color-grey-950)',
              maxWidth: 760,
              margin: '0 auto 1.5rem',
              fontSize: 'clamp(2.25rem, 4vw + 1rem, 3.75rem)',
            }}
          >
            Building the Future of Intelligent Customer Communication
          </h1>

          <p
            style={{
              color: 'var(--color-text-muted)',
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: 580,
              margin: '0 auto 2.5rem',
            }}
          >
            We empower businesses with AI-driven voice automation to deliver faster, smarter, and
            more meaningful customer interactions — at scale.
          </p>

          <div
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', justifyContent: 'center' }}
          >
            <Link
              to="/get-started#demo-form"
              className="custom-btn custom-btn-primary custom-btn-lg"
            >
              Get a Free Demo
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </Link>
            <Link to="/features" className="custom-btn custom-btn-secondary custom-btn-lg">
              Explore Features
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════
   SECTION 2 — KEY METRICS BAR
═══════════════════════════════════════════════════════════ */
function MetricsBar() {
  return (
    <section
      style={{
        background: 'var(--color-green-500)',
        paddingBlock: 'clamp(2rem, 4vw, 3rem)',
      }}
    >
      <Container>
        <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map(({ value, label, icon: Icon }) => (
            <Stagger.Child key={label}>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255,255,255,0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 0.75rem',
                  }}
                  aria-hidden="true"
                >
                  <Icon size={22} strokeWidth={1.75} style={{ color: '#fff' }} />
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    color: '#fff',
                    lineHeight: 1,
                    marginBottom: '0.3rem',
                  }}
                >
                  {value}
                </div>
                <p
                  style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.8)', margin: 0 }}
                >
                  {label}
                </p>
              </div>
            </Stagger.Child>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 3 — WHO WE ARE
═══════════════════════════════════════════════════════════ */
function WhoWeAre() {
  return (
    <section className="custom-section">
      <Container>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(2.5rem, 6vw, 5rem)',
            alignItems: 'center',
          }}
        >
          {/* Left — text */}
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <FadeIn>
              <p className="custom-eyebrow mb-3">Who We Are</p>
              <h2 className="custom-h2 mb-5" style={{ maxWidth: 480 }}>
                Technology With Purpose. Communication at Scale.
              </h2>
              <p
                style={{
                  color: 'var(--color-text-muted)',
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  marginBottom: '1.25rem',
                }}
              >
                We are a technology-driven company focused on redefining how businesses communicate
                with their customers. In an increasingly digital world, customer expectations are
                evolving — demanding faster responses, personalized experiences, and seamless
                interactions across every touchpoint.
              </p>
              <p
                style={{
                  color: 'var(--color-text-muted)',
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  marginBottom: '1.25rem',
                }}
              >
                Our mission is to bridge this gap through advanced AI-powered voice automation. By
                combining cutting-edge artificial intelligence with deep industry understanding, we
                enable organizations to handle customer conversations with efficiency, intelligence,
                and consistency.
              </p>
              <p
                style={{
                  color: 'var(--color-grey-700)',
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  fontWeight: 600,
                }}
              >
                We believe that every interaction matters — and our goal is to ensure that no
                customer query goes unanswered, no opportunity is missed, and no experience falls
                short.
              </p>
            </FadeIn>
          </div>

          {/* Right — visual card stack */}
          <div style={{ flex: '1 1 280px', minWidth: 0, position: 'relative' }}>
            <FadeIn delay={0.08}>
              {/* Vision card */}
              <div
                style={{
                  background: 'var(--color-bg-elevated)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-green-500)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem',
                  marginBottom: '1rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    marginBottom: '0.875rem',
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--color-green-50)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    aria-hidden="true"
                  >
                    <Target
                      size={20}
                      strokeWidth={1.75}
                      style={{ color: 'var(--color-green-600)' }}
                    />
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-grey-900)',
                      margin: 0,
                    }}
                  >
                    Our Vision
                  </p>
                </div>
                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-grey-600)',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  To become a global leader in AI-powered communication solutions, transforming the
                  way businesses connect with their customers through intelligent, scalable, and
                  human-like interactions.
                </p>
              </div>

              {/* Mission card */}
              <div
                style={{
                  background: 'var(--color-bg-alt)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 'var(--radius-md)',
                      background: '#EBF3FF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    aria-hidden="true"
                  >
                    <Layers size={20} strokeWidth={1.75} style={{ color: '#2C7BE5' }} />
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-grey-900)',
                      margin: 0,
                    }}
                  >
                    Our Mission
                  </p>
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.625rem',
                  }}
                >
                  {MISSION_POINTS.map(({ Icon, text }) => (
                    <li
                      key={text}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}
                    >
                      <Icon
                        size={15}
                        strokeWidth={2}
                        style={{ color: 'var(--color-green-500)', flexShrink: 0, marginTop: 3 }}
                        aria-hidden="true"
                      />
                      <span
                        style={{
                          fontSize: 'var(--text-sm)',
                          color: 'var(--color-grey-700)',
                          lineHeight: 1.5,
                        }}
                      >
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 4 — WHAT MAKES US DIFFERENT (6-card grid)
═══════════════════════════════════════════════════════════ */
function Differentiators({ reduced }) {
  return (
    <section className="custom-section-alt">
      <Container>
        <FadeIn>
          <p className="custom-eyebrow mb-3 text-center">What Makes Us Different</p>
          <h2
            className="custom-h2 mb-4 text-center"
            style={{ maxWidth: 560, margin: '0 auto 1rem' }}
          >
            Built Different. Proven to Perform.
          </h2>
          <p
            className="custom-lead mb-12 text-center"
            style={{
              maxWidth: 520,
              margin: '0 auto 3rem',
              fontSize: 'var(--text-base)',
              color: 'var(--color-text-muted)',
            }}
          >
            Every feature of Caller Monkey was designed with one question in mind: what does it
            actually take for Indian businesses to win at customer communication?
          </p>
        </FadeIn>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIFFERENTIATORS.map((d, i) => (
            <Stagger.Child key={d.title}>
              <motion.div
                whileHover={reduced ? {} : { y: -5, boxShadow: `0 16px 36px ${d.color}1A` }}
                transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                style={{
                  background: 'var(--color-bg-elevated)',
                  border: '1px solid var(--color-border)',
                  borderTop: `3px solid ${d.color}`,
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  cursor: 'default',
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 'var(--radius-md)',
                    background: d.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: `1px solid ${d.color}28`,
                  }}
                  aria-hidden="true"
                >
                  <d.Icon size={22} strokeWidth={1.75} style={{ color: d.color }} />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: 'var(--text-base)',
                      color: 'var(--color-grey-900)',
                      marginBottom: '0.5rem',
                      lineHeight: 1.35,
                    }}
                  >
                    {d.title}
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {d.desc}
                  </p>
                </div>
              </motion.div>
            </Stagger.Child>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 5 — COMPARISON TABLE
═══════════════════════════════════════════════════════════ */
function ComparisonTable() {
  return (
    <section className="custom-section">
      <Container>
        <FadeIn>
          <p className="custom-eyebrow mb-3 text-center">Side by Side</p>
          <h2
            className="custom-h2 mb-4 text-center"
            style={{ maxWidth: 520, margin: '0 auto 1rem' }}
          >
            Why Businesses Choose Caller Monkey
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: 'var(--color-text-muted)',
              fontSize: 'var(--text-base)',
              marginBottom: '3rem',
              maxWidth: 460,
              marginInline: 'auto',
            }}
          >
            See how Caller Monkey stacks up against traditional communication approaches across
            every dimension that matters.
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div style={{ overflowX: 'auto' }}>
            <table className="custom-table" style={{ minWidth: 560 }}>
              <thead>
                <tr>
                  <th style={{ width: '36%' }}>What We Compare</th>
                  <th
                    style={{ color: 'var(--color-green-600)', background: 'var(--color-green-50)' }}
                  >
                    ✦ Caller Monkey
                  </th>
                  <th>Others / Manual</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.aspect}>
                    <td style={{ fontWeight: 600, color: 'var(--color-grey-800)' }}>
                      {row.aspect}
                    </td>
                    <td
                      style={{
                        background: i % 2 === 0 ? 'rgba(45,167,68,0.04)' : undefined,
                        color: 'var(--color-green-700)',
                        fontWeight: 600,
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <CheckCircle2
                          size={14}
                          strokeWidth={2.5}
                          style={{ color: 'var(--color-green-500)', flexShrink: 0 }}
                          aria-hidden="true"
                        />
                        {row.cm}
                      </span>
                    </td>
                    <td style={{ color: 'var(--color-grey-500)', fontSize: 'var(--text-sm)' }}>
                      {row.others}
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

/* ═══════════════════════════════════════════════════════════
   SECTION 6 — CLOSING STATEMENT + CTA
═══════════════════════════════════════════════════════════ */
function WhyUsCTA({ reduced }) {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-bg-dark)',
        paddingBlock: 'clamp(4rem, 8vw, 7rem)',
      }}
    >
      {/* ── Layer 1: Large spaced dot grid ── */}
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.22,
          pointerEvents: 'none',
        }}
      >
        <defs>
          <pattern id="wu-cta-lg" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#2DA744" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wu-cta-lg)" />
      </svg>

      {/* ── Layer 2: Small tighter dot grid (offset) ── */}
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.09,
          pointerEvents: 'none',
        }}
      >
        <defs>
          <pattern id="wu-cta-sm" x="24" y="24" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#ffffff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wu-cta-sm)" />
      </svg>

      {/* ── Animated ring ornaments ── */}
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          overflow: 'visible',
        }}
      >
        {/* Top-left ring */}
        <circle cx="8%" cy="18%" r="72" fill="none" stroke="#2DA744" strokeWidth="1" opacity="0.18">
          <animate attributeName="r" values="72;84;72" dur="7s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.18;0.08;0.18" dur="7s" repeatCount="indefinite" />
        </circle>
        <circle cx="8%" cy="18%" r="48" fill="none" stroke="#2DA744" strokeWidth="0.75" opacity="0.12" />

        {/* Bottom-right ring */}
        <circle cx="92%" cy="80%" r="90" fill="none" stroke="#2C7BE5" strokeWidth="1" opacity="0.14">
          <animate attributeName="r" values="90;104;90" dur="9s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.14;0.06;0.14" dur="9s" repeatCount="indefinite" />
        </circle>
        <circle cx="92%" cy="80%" r="56" fill="none" stroke="#2C7BE5" strokeWidth="0.75" opacity="0.10" />

        {/* Centre faint ring */}
        <circle cx="50%" cy="50%" r="160" fill="none" stroke="#2DA744" strokeWidth="0.5" strokeDasharray="6 10" opacity="0.08">
          <animateTransform attributeName="transform" type="rotate" from="0 50% 50%" to="360 50% 50%" dur="40s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* ── Glow blobs ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 680,
          height: 560,
          top: '-160px',
          left: '-100px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(45,167,68,0.20) 0%, transparent 68%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 500,
          height: 500,
          bottom: '-100px',
          right: '-80px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(44,123,229,0.16) 0%, transparent 68%)',
          pointerEvents: 'none',
        }}
      />
      {/* Centre subtle green core */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 320,
          height: 320,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(45,167,68,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <FadeIn>
          {/* Quote mark */}
          <div
            aria-hidden="true"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '5rem',
              lineHeight: 0.8,
              color: 'var(--color-green-500)',
              opacity: 0.35,
              marginBottom: '0.5rem',
              userSelect: 'none',
            }}
          >
            "
          </div>

          <h2
            className="custom-h2"
            style={{
              color: '#fff',
              maxWidth: 680,
              margin: '0 auto 1.5rem',
              fontSize: 'clamp(1.6rem, 2.5vw + 1rem, 2.5rem)',
              lineHeight: 1.2,
            }}
          >
            We are not just building technology — we are shaping the future of customer engagement.
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: 'var(--text-lg)',
              maxWidth: 580,
              margin: '0 auto 2.5rem',
              lineHeight: 'var(--leading-relaxed)',
            }}
          >
            With our AI solutions, businesses can move faster, operate smarter, and deliver
            experiences that truly make a difference.
          </p>

          <div
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', justifyContent: 'center' }}
          >
            <Link
              to="/get-started#demo-form"
              className="custom-btn custom-btn-primary custom-btn-lg"
            >
              Start the Conversation
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </Link>
            <Link to="/features" className="custom-btn custom-btn-outline custom-btn-lg">
              See All Features
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE ASSEMBLY
═══════════════════════════════════════════════════════════ */
function WhyUs() {
  const reduced = useReducedMotion();

  return (
    <PageLayout
      title="Why Caller Monkey | AI Voice Communication for Indian Businesses"
      description="Discover why 500+ businesses across India choose Caller Monkey for AI-powered voice automation, real-time insights, and seamless CRM integration."
    >
      <WhyUsHero reduced={reduced} />
      <MetricsBar />
      <WhoWeAre />
      <Differentiators reduced={reduced} />
      <ComparisonTable />
      <WhyUsCTA reduced={reduced} />
    </PageLayout>
  );
}

export default WhyUs;
