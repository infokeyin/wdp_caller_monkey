import { Link } from 'react-router-dom';
import FadeIn from '@components/motion/FadeIn';
import { useReducedMotion } from '@hooks/useReducedMotion';
import cmLogo from '../../../props/logos/logo-240px.png';

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

/* ── Animation keyframes ── */
const FLOW_CSS = `
@keyframes hmBar   { 0%,100% { transform: scaleY(.35); } 50% { transform: scaleY(1); } }
@keyframes hmRing  { 0% { transform: scale(.55); opacity:.5; } 100% { transform: scale(1.9); opacity:0; } }
@keyframes hmCore  { 0%,100% { transform: scale(1); } 50% { transform: scale(1.04); } }
@keyframes hmDot   { 0%,100% { opacity:.25; } 50% { opacity:1; } }
@keyframes hmPop   { 0%,18% { transform:scale(0);opacity:0; } 34% { transform:scale(1.18);opacity:1; } 50%,100% { transform:scale(1);opacity:1; } }
@keyframes hmFloat { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-4px); } }
.hm-anim .hm-bar  { transform-box:fill-box;transform-origin:bottom;animation:hmBar  1.1s ease-in-out infinite; }
.hm-anim .hm-ring { transform-box:fill-box;transform-origin:center;animation:hmRing 2.6s ease-out  infinite; }
.hm-anim .hm-core { transform-box:fill-box;transform-origin:center;animation:hmCore 3s   ease-in-out infinite; }
.hm-anim .hm-tdot { transform-box:fill-box;transform-origin:center;animation:hmDot  1.2s ease-in-out infinite; }
.hm-anim .hm-check{ transform-box:fill-box;transform-origin:center;animation:hmPop  3.4s ease-in-out infinite; }
.hm-anim .hm-pill { transform-box:fill-box;transform-origin:center;animation:hmFloat 3.6s ease-in-out infinite; }
@media(prefers-reduced-motion:reduce){
  .hm-anim .hm-bar,.hm-anim .hm-ring,.hm-anim .hm-core,
  .hm-anim .hm-tdot,.hm-anim .hm-check,.hm-anim .hm-pill { animation:none; }
}
`;

const GREEN = '#2DA744';

/* ── Input sources (left side) ── */
const INPUTS = [
  {
    id: 'fb',
    label: 'Facebook',
    sub: 'lead received',
    color: '#1877F2',
    pathId: 'hi1',
    icon: (
      <path
        d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
        stroke="#1877F2"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    id: 'insta',
    label: 'Instagram',
    sub: 'DM captured',
    color: '#E1306C',
    pathId: 'hi2',
    icon: (
      <>
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          stroke="#E1306C"
          strokeWidth="1.8"
          fill="none"
        />
        <circle cx="12" cy="12" r="4" stroke="#E1306C" strokeWidth="1.8" fill="none" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="#E1306C" />
      </>
    ),
  },
  {
    id: 'call',
    label: 'Phone Call',
    sub: 'inbound call',
    color: '#059669',
    pathId: 'hi3',
    icon: (
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
        stroke="#059669"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
];

/* ── Output channels (right side) ── */
const OUTPUTS = [
  { id: 'crm', label: 'CRM', sub: 'contact logged', color: '#2C7BE5', check: 0, pathId: 'ho1' },
  {
    id: 'email',
    label: 'Email',
    sub: 'follow-up sent',
    color: '#D9342B',
    check: 1.1,
    pathId: 'ho2',
  },
  {
    id: 'followup',
    label: 'Follow-up',
    sub: 'call scheduled',
    color: '#25D366',
    check: null,
    pathId: 'ho3',
  },
  {
    id: 'calendar',
    label: 'Calendar',
    sub: 'meeting booked',
    color: '#F4A623',
    check: 2.2,
    pathId: 'ho4',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    sub: 'report updated',
    color: '#0891B2',
    check: null,
    pathId: 'ho5',
  },
];

/* SVG layout */
const SVG_W = 580;
const IN_X = 20; // input cards left edge
const IN_W = 110; // input card width
const AIX = 280; // hub centre x
const LOGO_R = 50; // hub radius
const OUT_X = 390; // output cards left edge
const OUT_W = 170; // output card width
const CARD_H = 52;
const IN_GAP = 90; // vertical spacing between input cards
const OUT_GAP = 82;
const TOP_PAD = 36; // extra top room so pills never clip
const IN_START = 60 + TOP_PAD;
const OUT_START = 20 + TOP_PAD;
const CY = IN_START + (IN_GAP * (INPUTS.length - 1)) / 2 + CARD_H / 2;
const SVG_H = Math.max(
  IN_START + IN_GAP * (INPUTS.length - 1) + CARD_H + 50,
  OUT_START + OUT_GAP * (OUTPUTS.length - 1) + CARD_H + 50
);

function FlowDot({ pathId, fill, dur, begin }) {
  return (
    <circle r={3} fill={fill}>
      <animateMotion dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite">
        <mpath href={`#${pathId}`} />
      </animateMotion>
    </circle>
  );
}

function AIFlowScene({ reduced }) {
  return (
    <svg
      viewBox={`0 0 ${SVG_W} ${SVG_H}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      role="img"
      aria-label="Facebook, Instagram and phone leads flow into Caller Monkey which automatically triggers CRM, email, follow-up, calendar and analytics"
      style={{ width: '100%', height: 'auto' }}
    >
      <defs>
        <pattern id="hmdots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#E7E9EC" />
        </pattern>
        <filter id="hmShadow" x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#1F2937" floodOpacity="0.07" />
        </filter>
        <clipPath id="hmLogoClip">
          <circle cx={AIX} cy={CY} r={LOGO_R} />
        </clipPath>
      </defs>

      <style>{FLOW_CSS}</style>
      <rect width={SVG_W} height={SVG_H} fill="url(#hmdots)" />

      <g className={reduced ? undefined : 'hm-anim'}>
        {/* ── Input connectors: each source → hub ── */}
        {INPUTS.map((inp, i) => {
          const iy = IN_START + i * IN_GAP + CARD_H / 2;
          return (
            <path
              key={inp.pathId}
              id={inp.pathId}
              d={`M${IN_X + IN_W} ${iy} C${AIX - 80} ${iy} ${AIX - 80} ${CY} ${AIX - LOGO_R - 2} ${CY}`}
              stroke="#DDE1E5"
              strokeWidth={1.5}
            />
          );
        })}

        {/* ── Output connectors: hub → each channel ── */}
        {OUTPUTS.map((out, i) => {
          const oy = OUT_START + i * OUT_GAP + CARD_H / 2;
          return (
            <path
              key={out.pathId}
              id={out.pathId}
              d={`M${AIX + LOGO_R + 2} ${CY} C${AIX + 80} ${CY} ${AIX + 80} ${oy} ${OUT_X} ${oy}`}
              stroke="#DDE1E5"
              strokeWidth={1.5}
            />
          );
        })}

        {/* ── Flow dots ── */}
        {!reduced && (
          <>
            {INPUTS.map((inp, i) => (
              <FlowDot
                key={inp.pathId}
                pathId={inp.pathId}
                fill={inp.color}
                dur={2.0 + i * 0.2}
                begin={i * 0.6}
              />
            ))}
            {OUTPUTS.map((out, i) => (
              <FlowDot
                key={out.pathId}
                pathId={out.pathId}
                fill={out.color}
                dur={2.2 + i * 0.15}
                begin={i * 0.4}
              />
            ))}
          </>
        )}

        {/* ── Input source cards (left) ── */}
        {INPUTS.map((inp, i) => {
          const iy = IN_START + i * IN_GAP;
          return (
            <g key={inp.id}>
              <g filter="url(#hmShadow)">
                <rect
                  x={IN_X}
                  y={iy}
                  width={IN_W}
                  height={CARD_H}
                  rx={13}
                  fill="#FFFFFF"
                  stroke="#ECEEF0"
                  strokeWidth={1}
                />
              </g>
              {/* Icon bg */}
              <circle cx={IN_X + 22} cy={iy + CARD_H / 2} r={13} fill={inp.color} opacity={0.12} />
              <svg
                x={IN_X + 11}
                y={iy + CARD_H / 2 - 10}
                width={22}
                height={22}
                viewBox="0 0 24 24"
              >
                {inp.icon}
              </svg>
              <text
                x={IN_X + 40}
                y={iy + 22}
                fontFamily="'Inter Tight',sans-serif"
                fontSize="9.5"
                fontWeight="600"
                fill="#2B333C"
              >
                {inp.label}
              </text>
              <text
                x={IN_X + 40}
                y={iy + 36}
                fontFamily="'Inter Tight',sans-serif"
                fontSize="7.5"
                fill="#9AA0A6"
              >
                {inp.sub}
              </text>
              {/* Pulse dot */}
              <circle
                className="hm-tdot"
                cx={IN_X + 96}
                cy={iy + 12}
                r={3.5}
                fill={inp.color}
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            </g>
          );
        })}

        {/* ── CM Logo hub ── */}
        <circle
          className="hm-ring"
          cx={AIX}
          cy={CY}
          r={LOGO_R}
          stroke={GREEN}
          strokeWidth={2}
          style={{ animationDelay: '0s' }}
        />
        <circle
          className="hm-ring"
          cx={AIX}
          cy={CY}
          r={LOGO_R}
          stroke={GREEN}
          strokeWidth={2}
          style={{ animationDelay: '1.3s' }}
        />
        <g className="hm-core" filter="url(#hmShadow)">
          <circle cx={AIX} cy={CY} r={LOGO_R} fill="#FFFFFF" stroke="#E5E7EB" strokeWidth={1.5} />
          <image
            href={cmLogo}
            x={AIX - LOGO_R}
            y={CY - LOGO_R}
            width={LOGO_R * 2}
            height={LOGO_R * 2}
            clipPath="url(#hmLogoClip)"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>

        {/* ── Output channel cards (right) ── */}
        {OUTPUTS.map((out, i) => {
          const oy = OUT_START + i * OUT_GAP;
          return (
            <g key={out.id}>
              <g filter="url(#hmShadow)">
                <rect
                  x={OUT_X}
                  y={oy}
                  width={OUT_W}
                  height={CARD_H}
                  rx={13}
                  fill="#FFFFFF"
                  stroke="#ECEEF0"
                  strokeWidth={1}
                />
              </g>
              <circle cx={OUT_X + 20} cy={oy + CARD_H / 2} r={11} fill={out.color} opacity={0.15} />
              <circle cx={OUT_X + 20} cy={oy + CARD_H / 2} r={6} fill={out.color} />
              <text
                x={OUT_X + 36}
                y={oy + 22}
                fontFamily="'Inter Tight',sans-serif"
                fontSize="10"
                fontWeight="600"
                fill="#2B333C"
              >
                {out.label}
              </text>
              <text
                x={OUT_X + 36}
                y={oy + 36}
                fontFamily="'Inter Tight',sans-serif"
                fontSize="8"
                fill="#9AA0A6"
              >
                {out.sub}
              </text>
              {out.check !== null && (
                <g className="hm-check" style={{ animationDelay: `${out.check}s` }}>
                  <circle cx={OUT_X + OUT_W - 14} cy={oy + 22} r={9} fill={GREEN} />
                  <path
                    d={`M${OUT_X + OUT_W - 18} ${oy + 22} L${OUT_X + OUT_W - 15} ${oy + 25} L${OUT_X + OUT_W - 10} ${oy + 19}`}
                    stroke="#FFF"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              )}
            </g>
          );
        })}

        {/* ── Stat pills ── */}
        <g transform={`translate(${IN_X + IN_W / 2} ${IN_START - 46})`}>
          <g className="hm-pill" style={{ animationDelay: '0s' }} filter="url(#hmShadow)">
            <rect
              x={-44}
              y={-18}
              width={86}
              height={34}
              rx={11}
              fill="#FFFFFF"
              stroke="#EBEDEF"
              strokeWidth={1}
            />
            <text
              x={0}
              y={-2}
              textAnchor="middle"
              fontFamily="'Cabinet Grotesk',sans-serif"
              fontSize="13"
              fontWeight="800"
              fill={GREEN}
            >
              24/7
            </text>
            <text
              x={0}
              y={11}
              textAnchor="middle"
              fontFamily="'Inter Tight',sans-serif"
              fontSize="8"
              fill="#9AA0A6"
            >
              always on
            </text>
          </g>
        </g>
        <g transform={`translate(${OUT_X + OUT_W / 2} ${IN_START - 46})`}>
          <g className="hm-pill" style={{ animationDelay: '1.4s' }} filter="url(#hmShadow)">
            <rect
              x={-54}
              y={-18}
              width={106}
              height={34}
              rx={11}
              fill="#FFFFFF"
              stroke="#EBEDEF"
              strokeWidth={1}
            />
            <text
              x={0}
              y={-2}
              textAnchor="middle"
              fontFamily="'Cabinet Grotesk',sans-serif"
              fontSize="13"
              fontWeight="800"
              fill={GREEN}
            >
              100%
            </text>
            <text
              x={0}
              y={11}
              textAnchor="middle"
              fontFamily="'Inter Tight',sans-serif"
              fontSize="8"
              fill="#9AA0A6"
            >
              follow-up coverage
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
}

function HomeHero() {
  const reduced = useReducedMotion();
  return (
    <section
      className="custom-section"
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'clamp(5rem, 8vw, 8rem)',
        paddingBottom: 'clamp(3rem,5vw,5rem)',
      }}
    >
      <Waveform />
      <div className="custom-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] items-center gap-4 md:gap-8 lg:gap-12">
          {/* Text — 55% */}
          <div style={{ minWidth: 0 }} className="order-2 lg:order-1">
            <FadeIn>
              <h1 className="custom-display mb-6 text-4xl md:text-5xl lg:text-6xl">
                <span style={{ color: 'var(--color-green-500)' }}>
                  Autonomous Lead Conversion System
                </span>{' '}
                that runs your business communication End to End
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
                  className="custom-btn custom-btn-primary custom-btn-sm md:custom-btn-lg"
                >
                  Get a Free Demo
                </Link>
                <Link to="/features" 
                className="custom-btn custom-btn-secondary custom-btn-sm md:custom-btn-lg"
                >
                  See How It Works
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Illustration — 45% */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            className="order-1 lg:order-2"
          >
            <FadeIn delay={0.05} y={12} style={{ width: '100%' }}>
              <AIFlowScene reduced={reduced} />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
