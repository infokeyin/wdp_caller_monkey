import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FadeIn from '@components/motion/FadeIn';
import Container from '@components/layout/Container';
import { useReducedMotion } from '@hooks/useReducedMotion';

/* ── Integration nodes that orbit the CM hub ── */
const NODES = [
  { id: 'whatsapp',  label: 'WhatsApp',  color: '#25D366', bg: '#E6FBF0', angle: 0,   icon: (
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill={`#25D366`} />
  )},
  { id: 'crm',       label: 'CRM',        color: '#2C7BE5', bg: '#EBF3FF', angle: 51,  icon: (
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="#2C7BE5" />
  )},
  { id: 'calendar',  label: 'Calendar',   color: '#F4A623', bg: '#FEF6E7', angle: 102, icon: (
    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" fill="#F4A623" />
  )},
  { id: 'email',     label: 'Email',      color: '#D9342B', bg: '#FEE2E2', angle: 153, icon: (
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#D9342B" />
  )},
  { id: 'payments',  label: 'Payments',   color: '#7C3AED', bg: '#F5EEF8', angle: 204, icon: (
    <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" fill="#7C3AED" />
  )},
  { id: 'analytics', label: 'Analytics',  color: '#0891B2', bg: '#E0F7FA', angle: 255, icon: (
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" fill="#0891B2" />
  )},
  { id: 'leads',     label: 'Leads',      color: '#059669', bg: '#ECFDF5', angle: 306, icon: (
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="#059669" />
  )},
];

/* ── Hub diagram SVG ── */
function HubDiagram({ reduced }) {
  const cx = 200; // SVG centre x
  const cy = 200; // SVG centre y
  const r  = 140; // orbit radius

  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Caller Monkey integration hub diagram"
      style={{ width: '100%', maxWidth: 420, height: 'auto' }}
    >
      {/* Subtle orbit ring */}
      <circle cx={cx} cy={cy} r={r} stroke="#E5E5E5" strokeWidth="1" strokeDasharray="4 5" />

      {/* Spoke lines + animated traveling dots */}
      {NODES.map((node) => {
        const rad = (node.angle * Math.PI) / 180;
        const nx = cx + r * Math.cos(rad);
        const ny = cy + r * Math.sin(rad);
        const dotId = `dot-${node.id}`;

        return (
          <g key={node.id}>
            {/* Spoke */}
            <line
              x1={cx} y1={cy} x2={nx} y2={ny}
              stroke={node.color} strokeWidth="1" opacity="0.3"
              strokeDasharray="3 4"
            />

            {/* Traveling dot along spoke */}
            {!reduced && (
              <circle r="3.5" fill={node.color} opacity="0.9">
                <animateMotion
                  dur={`${2.2 + (node.angle % 7) * 0.18}s`}
                  repeatCount="indefinite"
                  begin={`${(node.angle / 360) * 2.5}s`}
                >
                  <mpath>
                    <path d={`M${cx},${cy} L${nx},${ny}`} />
                  </mpath>
                </animateMotion>
              </circle>
            )}

            {/* Node circle */}
            <circle cx={nx} cy={ny} r="28" fill={node.bg} stroke={node.color} strokeWidth="1.5" />

            {/* Node icon — 16×16 centred */}
            <svg x={nx - 10} y={ny - 10} width="20" height="20" viewBox="0 0 24 24">
              {node.icon}
            </svg>

            {/* Node label */}
            <text
              x={nx}
              y={ny + 40}
              textAnchor="middle"
              fontSize="9"
              fontWeight="700"
              fill="#4A4A4A"
              fontFamily="system-ui, sans-serif"
              letterSpacing="0.03em"
            >
              {node.label.toUpperCase()}
            </text>
          </g>
        );
      })}

      {/* Central CM hub */}
      <circle cx={cx} cy={cy} r="40" fill="#2DA744" />
      {/* Subtle inner ring */}
      <circle cx={cx} cy={cy} r="34" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <text
        x={cx} y={cy - 6}
        textAnchor="middle"
        fontSize="14"
        fontWeight="900"
        fill="white"
        fontFamily="system-ui, sans-serif"
      >
        CM
      </text>
      <text
        x={cx} y={cy + 10}
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="600"
        fill="rgba(255,255,255,0.75)"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.06em"
      >
        HUB
      </text>
    </svg>
  );
}

/* ── Main section ── */
function WorksWithHero() {
  const reduced = useReducedMotion();

  return (
    <section
      style={{
        position: 'relative', overflow: 'hidden',
        background: 'var(--color-bg)',
        paddingTop: 'clamp(3.5rem, 6vw, 6rem)',
        paddingBottom: 'clamp(2.5rem, 5vw, 5rem)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <Container>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 'clamp(2rem, 5vw, 5rem)',
          flexWrap: 'wrap',
        }}>

          {/* ── Left — text ── */}
          <div style={{ flex: '1 1 340px', minWidth: 0 }}>
            <FadeIn>
              <p className="custom-eyebrow mb-3">Integrations</p>
              <h1
                className="custom-h1 mb-5"
                style={{ maxWidth: 500 }}
              >
                One Brain. Every Tool Your Business Already Uses.
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="custom-lead mb-8" style={{ maxWidth: 460 }}>
                Caller Monkey connects to your CRM, WhatsApp Business, lead platforms, calendar, email, and payment gateway — all talking to each other through one central system.
              </p>
            </FadeIn>
            <FadeIn delay={0.18}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <Link to="/get-started#demo-form" className="custom-btn custom-btn-primary">
                  See It Live
                </Link>
                <Link to="/industries" className="custom-btn custom-btn-secondary">
                  Browse by Industry
                </Link>
              </div>
            </FadeIn>

            {/* Integration count badge */}
            <FadeIn delay={0.25}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                marginTop: '2rem',
                padding: '0.5rem 1rem',
                background: 'var(--color-green-50)',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-xs)', fontWeight: 700,
                color: 'var(--color-green-700)',
                letterSpacing: 'var(--tracking-wide)',
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: 'var(--color-green-500)', flexShrink: 0,
                }} />
                7+ platforms connected · Setup in 15 days
              </div>
            </FadeIn>
          </div>

          {/* ── Right — hub diagram ── */}
          <div style={{
            flex: '0 0 auto',
            width: 'clamp(280px, 40vw, 420px)',
            display: 'flex', justifyContent: 'center',
          }}>
            <FadeIn delay={0.08} y={16}>
              <motion.div
                animate={reduced ? {} : { y: [0, -6, 0] }}
                transition={reduced ? {} : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <HubDiagram reduced={reduced} />
              </motion.div>
            </FadeIn>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default WorksWithHero;
