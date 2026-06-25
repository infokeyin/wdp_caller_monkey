import { Link } from 'react-router-dom';
import FadeIn from '@components/motion/FadeIn';
import Container from '@components/layout/Container';
import { useReducedMotion } from '@hooks/useReducedMotion';
import cmLogo from '../../../props/logos/logo-240px.png';

/* ── Animation CSS ── */
const FLOW_CSS = `
@keyframes inthBar  { 0%,100% { transform: scaleY(.35); } 50% { transform: scaleY(1); } }
@keyframes inthRing { 0% { transform: scale(.55); opacity:.5; } 100% { transform: scale(1.9); opacity:0; } }
@keyframes inthCore { 0%,100% { transform: scale(1); } 50% { transform: scale(1.04); } }
@keyframes inthDot  { 0%,100% { opacity:.25; } 50% { opacity:1; } }
@keyframes inthPop  { 0%,18% { transform: scale(0); opacity:0; } 34% { transform: scale(1.18); opacity:1; } 50%,100% { transform: scale(1); opacity:1; } }
@keyframes inthFloat{ 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
.inth-anim .inth-bar  { transform-box:fill-box; transform-origin:bottom; animation: inthBar  1.1s ease-in-out infinite; }
.inth-anim .inth-ring { transform-box:fill-box; transform-origin:center; animation: inthRing 2.6s ease-out  infinite; }
.inth-anim .inth-core { transform-box:fill-box; transform-origin:center; animation: inthCore 3s   ease-in-out infinite; }
.inth-anim .inth-tdot { transform-box:fill-box; transform-origin:center; animation: inthDot  1.2s ease-in-out infinite; }
.inth-anim .inth-check{ transform-box:fill-box; transform-origin:center; animation: inthPop  3.4s ease-in-out infinite; }
.inth-anim .inth-pill { transform-box:fill-box; transform-origin:center; animation: inthFloat 3.6s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) {
  .inth-anim .inth-bar,.inth-anim .inth-ring,.inth-anim .inth-core,
  .inth-anim .inth-tdot,.inth-anim .inth-check,.inth-anim .inth-pill { animation: none; }
}
`;

const GREEN = '#2DA744';
const VOICE_BARS = [22, 22, 22, 22, 22, 22, 22, 22, 22];

/* 6 output cards spaced evenly — y values include TOP_PAD so pills never clip */
const TOP_PAD = 36;
const CARDS = [
  { y: 30  + TOP_PAD, color: '#25D366', label: 'WhatsApp',  sub: 'follow-up sent',    check: 0,    pathId: 'ip1' },
  { y: 115 + TOP_PAD, color: '#2C7BE5', label: 'CRM',        sub: 'contact logged',    check: 1.1,  pathId: 'ip2' },
  { y: 200 + TOP_PAD, color: '#F4A623', label: 'Calendar',   sub: 'meeting scheduled', check: null, pathId: 'ip3' },
  { y: 285 + TOP_PAD, color: '#D9342B', label: 'Email',      sub: 'digest sent',       check: 2.2,  pathId: 'ip4' },
  { y: 370 + TOP_PAD, color: '#7C3AED', label: 'Payments',   sub: 'invoice raised',    check: null, pathId: 'ip5' },
  { y: 455 + TOP_PAD, color: '#0891B2', label: 'Analytics',  sub: 'report updated',    check: 3.0,  pathId: 'ip6' },
];

/* SVG layout constants */
const SVG_W   = 620;
const SVG_H   = CARDS[CARDS.length - 1].y + 90;
const AIX     = 290;
const CY      = (CARDS[0].y + CARDS[CARDS.length - 1].y + 56) / 2;
const VOICE_X = 20;
const CARD_X  = 430;
const LOGO_R  = 52;

function FlowDot({ pathId, fill, dur, begin }) {
  return (
    <circle r={3.5} fill={fill}>
      <animateMotion dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite">
        <mpath href={`#${pathId}`} />
      </animateMotion>
    </circle>
  );
}

function IntegrationFlowScene({ reduced }) {
  return (
    <svg
      viewBox={`0 0 ${SVG_W} ${SVG_H}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      role="img"
      aria-label="Incoming leads flow through Caller Monkey into WhatsApp, CRM, Calendar, Email, Payments and Analytics"
      style={{ width: '100%', height: 'auto' }}
    >
      <defs>
        <pattern id="inthDots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#E7E9EC" />
        </pattern>
        <filter id="inthShadow" x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#1F2937" floodOpacity="0.08" />
        </filter>
        <clipPath id="logoClip">
          <circle cx={AIX} cy={CY} r={LOGO_R} />
        </clipPath>
      </defs>

      <style>{FLOW_CSS}</style>
      <rect width={SVG_W} height={SVG_H} fill="url(#inthDots)" />

      <g className={reduced ? undefined : 'inth-anim'}>

        {/* ── Connector: Lead card → hub ── */}
        <path
          id="ip0"
          d={`M${VOICE_X + 108} ${CY} L${AIX - LOGO_R - 2} ${CY}`}
          stroke="#DDE1E5"
          strokeWidth={1.5}
        />
        {!reduced && (
          <>
            <FlowDot pathId="ip0" fill={GREEN} dur={1.8} begin={0} />
            <FlowDot pathId="ip0" fill={GREEN} dur={1.8} begin={0.9} />
          </>
        )}

        {/* ── Connectors: hub → each card ── */}
        {CARDS.map((c) => {
          const cardMidY = c.y + 28;
          return (
            <path
              key={c.pathId}
              id={c.pathId}
              d={`M${AIX + LOGO_R + 2} ${CY} C${AIX + 120} ${CY} ${CARD_X - 50} ${cardMidY} ${CARD_X} ${cardMidY}`}
              stroke="#DDE1E5"
              strokeWidth={1.5}
            />
          );
        })}

        {/* ── Animated flow dots ── */}
        {!reduced && CARDS.map((c, i) => (
          <FlowDot key={c.pathId} pathId={c.pathId} fill={c.color} dur={2.2 + i * 0.15} begin={i * 0.4} />
        ))}

        {/* ── Incoming Lead card ── */}
        <g filter="url(#inthShadow)">
          <rect x={VOICE_X} y={CY - 42} width={108} height={84} rx={18} fill="#FFFFFF" stroke="#ECEEF0" strokeWidth={1} />
        </g>
        <circle className="inth-tdot" cx={VOICE_X + 18} cy={CY - 24} r={4} fill={GREEN} />
        <text x={VOICE_X + 30} y={CY - 20} fontFamily="'Inter Tight', sans-serif" fontSize="10" fontWeight="600" fill="#2B333C">
          Incoming Lead
        </text>
        {VOICE_BARS.map((h, i) => (
          <rect
            key={i}
            className="inth-bar"
            x={VOICE_X + 20 + i * 7.5}
            y={CY + 20 - h}
            width={3.5}
            height={h}
            rx={1.5}
            fill={GREEN}
            style={{ animationDelay: `${i * 0.09}s` }}
          />
        ))}
        <text x={VOICE_X + 54} y={CY + 34} textAnchor="middle" fontFamily="'Inter Tight', sans-serif" fontSize="8" fill="#9AA0A6">
          calling now
        </text>

        {/* ── CM logo hub ── */}
        {/* Pulsing rings */}
        <circle className="inth-ring" cx={AIX} cy={CY} r={LOGO_R} stroke={GREEN} strokeWidth={2} style={{ animationDelay: '0s' }} />
        <circle className="inth-ring" cx={AIX} cy={CY} r={LOGO_R} stroke={GREEN} strokeWidth={2} style={{ animationDelay: '1.3s' }} />
        {/* White backing circle */}
        <g className="inth-core" filter="url(#inthShadow)">
          <circle cx={AIX} cy={CY} r={LOGO_R} fill="#FFFFFF" stroke="#E5E7EB" strokeWidth={1.5} />
          {/* Logo image clipped to circle */}
          <image
            href={cmLogo}
            x={AIX - LOGO_R}
            y={CY - LOGO_R}
            width={LOGO_R * 2}
            height={LOGO_R * 2}
            clipPath="url(#logoClip)"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>

        {/* ── Output integration cards ── */}
        {CARDS.map((c) => (
          <g key={c.label}>
            <g filter="url(#inthShadow)">
              <rect x={CARD_X} y={c.y} width={172} height={56} rx={14} fill="#FFFFFF" stroke="#ECEEF0" strokeWidth={1} />
            </g>
            <circle cx={CARD_X + 20} cy={c.y + 28} r={12} fill={c.color} opacity={0.15} />
            <circle cx={CARD_X + 20} cy={c.y + 28} r={7} fill={c.color} />
            <text x={CARD_X + 38} y={c.y + 24} fontFamily="'Inter Tight', sans-serif" fontSize="11" fontWeight="600" fill="#2B333C">
              {c.label}
            </text>
            <text x={CARD_X + 38} y={c.y + 40} fontFamily="'Inter Tight', sans-serif" fontSize="8.5" fill="#9AA0A6">
              {c.sub}
            </text>
            {c.check !== null && (
              <g className="inth-check" style={{ animationDelay: `${c.check}s` }}>
                <circle cx={CARD_X + 156} cy={c.y + 24} r={9} fill={GREEN} />
                <path
                  d={`M${CARD_X + 152} ${c.y + 24} L${CARD_X + 155} ${c.y + 27} L${CARD_X + 160} ${c.y + 21}`}
                  stroke="#FFFFFF"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            )}
          </g>
        ))}

        {/* ── "24/7 always on" stat pill only ── */}
        <g transform={`translate(${VOICE_X + 54} ${CARDS[0].y - 36})`}>
          <g className="inth-pill" style={{ animationDelay: '0s' }} filter="url(#inthShadow)">
            <rect x={-46} y={-20} width={90} height={36} rx={12} fill="#FFFFFF" stroke="#EBEDEF" strokeWidth={1} />
            <text x={0} y={-3} textAnchor="middle" fontFamily="'Cabinet Grotesk', sans-serif" fontSize="15" fontWeight="800" fill={GREEN}>24/7</text>
            <text x={0} y={11} textAnchor="middle" fontFamily="'Inter Tight', sans-serif" fontSize="8.5" fill="#9AA0A6">always on</text>
          </g>
        </g>

      </g>
    </svg>
  );
}

function WorksWithHero() {
  const reduced = useReducedMotion();

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-bg)',
        paddingTop: 'clamp(5rem, 8vw, 8rem)',
        paddingBottom: 'clamp(2.5rem, 5vw, 5rem)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '60fr 40fr',
            alignItems: 'center',
            gap: 'clamp(2rem, 4vw, 4rem)',
          }}
        >
          {/* ── Left — text ── */}
          <div style={{ minWidth: 0 }}>
            <FadeIn>
              <p className="custom-eyebrow mb-3">Integrations</p>
              <h1 className="custom-h1 mb-5" style={{ maxWidth: 500 }}>
                One orchestrator, handles every tool, your business needs.
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="custom-lead mb-8" style={{ maxWidth: 460 }}>
                Caller Monkey connects to your CRM, WhatsApp Business, lead platforms, calendar,
                email, and payment gateway — all talking to each other through one central system.
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
            <FadeIn delay={0.25}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '2rem',
                  padding: '0.5rem 1rem',
                  background: 'var(--color-green-50)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  color: 'var(--color-green-700)',
                  letterSpacing: 'var(--tracking-wide)',
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-green-500)', flexShrink: 0 }} />
                6+ platforms connected · Setup in 15 days
              </div>
            </FadeIn>
          </div>

          {/* ── Right — larger flow diagram ── */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FadeIn delay={0.08} y={16} style={{ width: '100%' }}>
              <IntegrationFlowScene reduced={reduced} />
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WorksWithHero;
