import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@components/motion/FadeIn';
import Icon from '@components/atoms/Icon';
import Container from '@components/layout/Container';
import { integrationCategories } from '@data/integrations';
import { useReducedMotion } from '@hooks/useReducedMotion';

// ViewBox: 0 0 560 520, center: (280, 260), radius: 190
const CENTER = { x: 280, y: 260 };
const RADIUS  = 185;
const VB_W    = 560;
const VB_H    = 520;

// 8 nodes evenly at 45° CW from top
function nodePos(index, total = 8, r = RADIUS) {
  const angleDeg = (360 / total) * index - 90; // -90 = start from top
  const rad = angleDeg * (Math.PI / 180);
  return {
    x: CENTER.x + r * Math.cos(rad),
    y: CENTER.y + r * Math.sin(rad),
  };
}

// Assign categories to spokes in order
const SPOKE_CATEGORIES = integrationCategories.slice(0, 8);

function WorksWithHub() {
  const reduced = useReducedMotion();

  return (
    <section className="custom-section-alt">
      <Container>
        <FadeIn>
          <p className="custom-eyebrow mb-3 text-center">Integration Map</p>
          <h2 className="custom-h2 text-center mb-4">Every Integration, One View</h2>
          <p className="custom-lead text-center mb-12 max-w-xl mx-auto">
            Caller Monkey sits at the centre. Every platform you use connects to it, and through it, to each other.
          </p>
        </FadeIn>

        {/* Hub visual */}
        <FadeIn delay={0.1}>
          <div className="relative w-full max-w-2xl mx-auto" style={{ aspectRatio: `${VB_W}/${VB_H}` }}>

            {/* SVG — lines only */}
            <svg
              viewBox={`0 0 ${VB_W} ${VB_H}`}
              className="absolute inset-0 w-full h-full"
              aria-hidden="true"
              fill="none"
            >
              {/* Faint outer ring */}
              <circle
                cx={CENTER.x} cy={CENTER.y} r={RADIUS}
                stroke="var(--color-grey-200)"
                strokeWidth={1}
                strokeDasharray="4 6"
              />

              {/* Spoke lines */}
              {SPOKE_CATEGORIES.map((cat, i) => {
                const pos = nodePos(i);
                return (
                  <motion.line
                    key={cat.id}
                    x1={CENTER.x} y1={CENTER.y}
                    x2={pos.x}    y2={pos.y}
                    stroke={cat.color}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    opacity={0.45}
                    initial={reduced ? { opacity: 0.45 } : { pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.45 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={reduced ? {} : { duration: 0.55, delay: 0.3 + i * 0.1, ease: [0.25, 1, 0.5, 1] }}
                  />
                );
              })}

              {/* Center node */}
              <circle cx={CENTER.x} cy={CENTER.y} r={46} fill="var(--color-green-500)" />
              <circle cx={CENTER.x} cy={CENTER.y} r={52} fill="none"
                stroke="var(--color-green-400)" strokeWidth={1} opacity={0.5} />
              <text
                x={CENTER.x} y={CENTER.y - 7}
                textAnchor="middle" dominantBaseline="middle"
                fill="white" fontFamily="'Cabinet Grotesk', sans-serif"
                fontWeight="900" fontSize="13"
              >
                Caller
              </text>
              <text
                x={CENTER.x} y={CENTER.y + 11}
                textAnchor="middle" dominantBaseline="middle"
                fill="white" fontFamily="'Cabinet Grotesk', sans-serif"
                fontWeight="900" fontSize="13"
              >
                Monkey
              </text>
            </svg>

            {/* Spoke icon nodes — absolutely positioned */}
            {SPOKE_CATEGORIES.map((cat, i) => {
              const pos = nodePos(i);
              const leftPct = (pos.x / VB_W) * 100;
              const topPct  = (pos.y / VB_H) * 100;

              const labelStyle = {
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                marginTop: '4px',
                color: 'var(--color-grey-600)',
                fontSize: '0.7rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
              };

              return (
                <motion.div
                  key={cat.id}
                  // Fixed 48×48 box — translate(-50%,-50%) centres the ICON on the SVG point
                  style={{
                    position: 'absolute',
                    left: `${leftPct}%`,
                    top: `${topPct}%`,
                    width: 48,
                    height: 48,
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={reduced ? {} : { y: [0, -5, 0] }}
                  transition={reduced ? {} : { duration: 5.5 + i * 0.6, repeat: Infinity, delay: i * 1.0, ease: 'easeInOut' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl bg-white shadow-md border flex items-center justify-center"
                    style={{
                      borderColor: `${cat.color}40`,
                      boxShadow: `0 4px 12px ${cat.color}18`,
                    }}
                    aria-label={cat.category}
                  >
                    <Icon name={cat.icon} size={22} strokeWidth={1.75} style={{ color: cat.color }} />
                  </div>
                  {/* Label — absolutely positioned below icon, never shifts parent width */}
                  <span style={labelStyle}>{cat.category.split(' ')[0]}</span>
                </motion.div>
              );
            })}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

export default WorksWithHub;
