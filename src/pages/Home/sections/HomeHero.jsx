import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '@components/motion/FadeIn';
import { useReducedMotion } from '@hooks/useReducedMotion';

/* ── Subtle waveform watermark ── */
const BARS = [
  3, 5, 9, 14, 20, 26, 20, 14, 9, 5, 3, 5, 11, 19, 27, 19, 11, 5, 3, 5, 9, 17, 23, 17, 9, 5, 3,
];
function Waveform() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 5, opacity: 0.06 }}>
        {BARS.map((h, i) => (
          <div
            key={i}
            className="custom-wave-bar"
            style={{
              width: 4,
              height: h * 2.2,
              background: 'var(--color-green-500)',
              borderRadius: 4,
              animationDelay: `${i * 0.055}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Animation styles (loops gated behind .aiq-anim + reduced-motion query) ── */
const FLOW_CSS = `
@keyframes aiqBar { 0%,100% { transform: scaleY(.35); } 50% { transform: scaleY(1); } }
@keyframes aiqRing { 0% { transform: scale(.55); opacity:.5; } 100% { transform: scale(1.9); opacity:0; } }
@keyframes aiqCore { 0%,100% { transform: scale(1); } 50% { transform: scale(1.05); } }
@keyframes aiqDot { 0%,100% { opacity:.25; } 50% { opacity:1; } }
@keyframes aiqPop { 0%,18% { transform: scale(0); opacity:0; } 34% { transform: scale(1.18); opacity:1; } 50%,82% { transform: scale(1); opacity:1; } 100% { transform: scale(1); opacity:1; } }
@keyframes aiqFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
@keyframes aiqStat { 0%,100% { transform: scaleY(.4); } 50% { transform: scaleY(1); } }
.aiq-anim .aiq-bar { transform-box: fill-box; transform-origin: bottom; animation: aiqBar 1.1s ease-in-out infinite; }
.aiq-anim .aiq-ring { transform-box: fill-box; transform-origin: center; animation: aiqRing 2.6s ease-out infinite; }
.aiq-anim .aiq-core { transform-box: fill-box; transform-origin: center; animation: aiqCore 3s ease-in-out infinite; }
.aiq-anim .aiq-tdot { transform-box: fill-box; transform-origin: center; animation: aiqDot 1.2s ease-in-out infinite; }
.aiq-anim .aiq-check { transform-box: fill-box; transform-origin: center; animation: aiqPop 3.4s ease-in-out infinite; }
.aiq-anim .aiq-pill { transform-box: fill-box; transform-origin: center; animation: aiqFloat 3.6s ease-in-out infinite; }
.aiq-anim .aiq-statbar { transform-box: fill-box; transform-origin: bottom; animation: aiqStat 1.3s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) {
  .aiq-anim .aiq-bar, .aiq-anim .aiq-ring, .aiq-anim .aiq-core, .aiq-anim .aiq-tdot,
  .aiq-anim .aiq-check, .aiq-anim .aiq-pill, .aiq-anim .aiq-statbar { animation: none; }
}
`;

const GREEN = 'var(--color-green-500)';

/* ── A single flowing data dot that rides a connector path ── */
function FlowDot({ path, fill, dur, begin }) {
  return (
    <circle r={3} fill={fill}>
      <animateMotion dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite">
        <mpath href={`#${path}`} />
      </animateMotion>
    </circle>
  );
}

const VOICE_BARS = [22, 22, 22, 22, 22, 22, 22, 22, 22];

const CARDS = [
  { y: 78, icon: '#25D366', glyph: 'chat', title: 'WhatsApp', sub: 'follow-up sent', checkDelay: 0 },
  { y: 158, icon: '#2C7BE5', glyph: 'user', title: 'CRM', sub: 'contact logged', checkDelay: 1.1 },
  { y: 238, icon: '#1F8A48', glyph: 'bars', title: 'Team', sub: 'activity tracked' },
];

function CardGlyph({ type }) {
  if (type === 'chat') {
    return (
      <>
        <rect x={390} y={100} width={16} height={11} rx={4} fill="#FFFFFF" />
        <path d="M393 111 L393 116 L398 111 Z" fill="#FFFFFF" />
      </>
    );
  }
  if (type === 'user') {
    return (
      <>
        <circle cx={398} cy={182} r={4.2} fill="#FFFFFF" />
        <path d="M391 195 Q398 188 405 195 Z" fill="#FFFFFF" />
      </>
    );
  }
  return [0, 1, 2].map((i) => (
    <rect
      key={i}
      className="aiq-statbar"
      x={390 + i * 6}
      y={262}
      width={3.5}
      height={12}
      rx={1.5}
      fill="#FFFFFF"
      style={{ animationDelay: `${i * 0.25}s` }}
    />
  ));
}

/* ── Full illustration: voice → AI core → channels ── */
function AIFlowScene({ reduced }) {
  return (
    <svg
      viewBox="0 0 500 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A live voice call flows into an AI engine that automatically sends a WhatsApp follow-up, logs the contact in the CRM, and tracks team activity"
      style={{ width: '100%', height: 'auto' }}
    >
      <defs>
        <pattern id="aqd" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#E7E9EC" />
        </pattern>
        <filter id="aqShadow" x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#1F2937" floodOpacity="0.08" />
        </filter>
      </defs>

      <style>{FLOW_CSS}</style>

      <rect width="500" height="360" fill="url(#aqd)" />

      <g className={reduced ? undefined : 'aiq-anim'}>
        {/* connectors */}
        <path id="ap0" d="M120 186 L210 186" stroke="#DDE1E5" strokeWidth={1.5} />
        <path id="ap1" d="M290 186 C322 186 336 106 372 106" stroke="#DDE1E5" strokeWidth={1.5} />
        <path id="ap2" d="M290 186 L372 186" stroke="#DDE1E5" strokeWidth={1.5} />
        <path id="ap3" d="M290 186 C322 186 336 266 372 266" stroke="#DDE1E5" strokeWidth={1.5} />

        {/* flowing data dots (skipped entirely when reduced) */}
        {!reduced && (
          <>
            <FlowDot path="ap0" fill={GREEN} dur={1.8} begin={0} />
            <FlowDot path="ap0" fill={GREEN} dur={1.8} begin={0.9} />
            <FlowDot path="ap1" fill="#25D366" dur={2.2} begin={0} />
            <FlowDot path="ap1" fill="#25D366" dur={2.2} begin={1.1} />
            <FlowDot path="ap2" fill="#2C7BE5" dur={2.2} begin={0.5} />
            <FlowDot path="ap2" fill="#2C7BE5" dur={2.2} begin={1.6} />
            <FlowDot path="ap3" fill="#1F8A48" dur={2.4} begin={0.8} />
          </>
        )}

        {/* incoming voice card */}
        <g filter="url(#aqShadow)">
          <rect x={24} y={150} width={94} height={72} rx={16} fill="#FFFFFF" stroke="#ECEEF0" strokeWidth={1} />
        </g>
        <circle className="aiq-tdot" cx={40} cy={167} r={3.5} fill={GREEN} />
        <text x={50} y={170} fontFamily="'Inter Tight', sans-serif" fontSize="9" fontWeight="500" fill="#2B333C">
          Voice AI
        </text>
        {VOICE_BARS.map((h, i) => (
          <rect
            key={i}
            className="aiq-bar"
            x={41 + i * 6.5}
            y={205 - h}
            width={3}
            height={h}
            rx={1.5}
            fill={GREEN}
            style={{ animationDelay: `${i * 0.09}s` }}
          />
        ))}
        <text x={71} y={217} textAnchor="middle" fontFamily="'Inter Tight', sans-serif" fontSize="7.5" fill="#9AA0A6">
          incoming call
        </text>

        {/* AI core */}
        <circle className="aiq-ring" cx={250} cy={186} r={40} stroke={GREEN} strokeWidth={2} style={{ animationDelay: '0s' }} />
        <circle className="aiq-ring" cx={250} cy={186} r={40} stroke={GREEN} strokeWidth={2} style={{ animationDelay: '1.3s' }} />
        <g className="aiq-core" filter="url(#aqShadow)">
          <circle cx={250} cy={186} r={40} fill={GREEN} />
          <circle cx={250} cy={176} r={18} fill="#FFFFFF" opacity={0.12} />
          <path d="M250 162 L257 179 L274 186 L257 193 L250 210 L243 193 L226 186 L243 179 Z" fill="#FFFFFF" />
        </g>
        <text x={250} y={248} textAnchor="middle" fontFamily="'Inter Tight', sans-serif" fontSize="10" fontWeight="500" fill="#2B333C">
          AI engine
        </text>

        {/* output channel cards */}
        {CARDS.map((c, i) => (
          <g key={i}>
            <g filter="url(#aqShadow)">
              <rect x={372} y={c.y} width={124} height={56} rx={14} fill="#FFFFFF" stroke="#ECEEF0" strokeWidth={1} />
            </g>
            <rect x={384} y={c.y + 14} width={28} height={28} rx={9} fill={c.icon} />
            <CardGlyph type={c.glyph} />
            <text x={420} y={c.y + 25} fontFamily="'Inter Tight', sans-serif" fontSize="10" fontWeight="500" fill="#2B333C">
              {c.title}
            </text>
            <text x={420} y={c.y + 39} fontFamily="'Inter Tight', sans-serif" fontSize="8" fill="#9AA0A6">
              {c.sub}
            </text>
            {c.checkDelay !== undefined && (
              <g className="aiq-check" style={{ animationDelay: `${c.checkDelay}s` }}>
                <circle cx={476} cy={c.y + 22} r={8} fill={GREEN} />
                <path
                  d={`M472.5 ${c.y + 22} L475 ${c.y + 24.5} L479.5 ${c.y + 19.5}`}
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            )}
          </g>
        ))}

        {/* floating stat pills */}
        <g transform="translate(96 34)">
          <g className="aiq-pill" style={{ animationDelay: '0s' }} filter="url(#aqShadow)">
            <rect x={-43} y={-18} width={84} height={34} rx={11} fill="#FFFFFF" stroke="#EBEDEF" strokeWidth={1} />
            <text x={0} y={-2} textAnchor="middle" fontFamily="'Cabinet Grotesk', sans-serif" fontSize="14" fontWeight="800" fill={GREEN}>
              24/7
            </text>
            <text x={0} y={10} textAnchor="middle" fontFamily="'Inter Tight', sans-serif" fontSize="8" fill="#9AA0A6">
              always on
            </text>
          </g>
        </g>
        <g transform="translate(414 30)">
          <g className="aiq-pill" style={{ animationDelay: '1.2s' }} filter="url(#aqShadow)">
            <rect x={-48} y={-18} width={94} height={34} rx={11} fill="#FFFFFF" stroke="#EBEDEF" strokeWidth={1} />
            <text x={0} y={-2} textAnchor="middle" fontFamily="'Cabinet Grotesk', sans-serif" fontSize="14" fontWeight="800" fill={GREEN}>
              200 hrs
            </text>
            <text x={0} y={10} textAnchor="middle" fontFamily="'Inter Tight', sans-serif" fontSize="8" fill="#9AA0A6">
              saved / month
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
}

/* ── Page Section ── */
function HomeHero() {
  const reduced = useReducedMotion();
  return (
    <section
      className="custom-section"
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'clamp(3rem,5vw,5rem)',
        paddingBottom: 'clamp(3rem,5vw,5rem)',
      }}
    >
      <Waveform />
      <div className="custom-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-16">
          {/* Text — 55% */}
          <div className="flex-1 min-w-0" style={{ flexBasis: '55%' }}>
            <FadeIn>
              <h1 className="custom-display mb-6">
                AI That Runs Your Business Communication,{' '}
                <span style={{ color: 'var(--color-green-500)' }}>End to End.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="custom-lead mb-8">
                One platform for AI calls, WhatsApp follow-ups, CRM logging, and team tracking —
                running 24/7 without manual work.
              </p>
            </FadeIn>
            <FadeIn delay={0.18}>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/get-started#demo-form"
                  className="custom-btn custom-btn-primary custom-btn-lg"
                >
                  Get a Free Demo
                </Link>
                <Link to="/features" className="custom-btn custom-btn-secondary custom-btn-lg">
                  See How It Works
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Illustration — 45% */}
          <div className="w-full md:w-auto" style={{ flexBasis: '45%', maxWidth: 540 }}>
            <FadeIn delay={0.05} y={12}>
              <AIFlowScene reduced={reduced} />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
