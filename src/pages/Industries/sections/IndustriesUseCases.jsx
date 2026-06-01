import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '@components/motion/FadeIn';
import Container from '@components/layout/Container';
import Icon from '@components/atoms/Icon';
import { useCases } from '@data/useCases';
import { industries } from '@data/industries';
import { useReducedMotion } from '@hooks/useReducedMotion';

const industryMap = Object.fromEntries(industries.map((ind) => [ind.id, ind]));

const ACCENT = {
  'real-estate': '#E07B39', 'finance': '#2C7BE5', 'healthcare': '#E91E63',
  'education': '#9B59B6',   'retail':  '#F4A623', 'insurance':  '#2DA744',
};

const EXTRAS = {
  'real-estate': { problem: '40% of leads missed — team too busy or after hours.', stat: '3×',   statLabel: 'site visit bookings',      chips: ['24/7 lead response', 'Auto site visit booking', 'WhatsApp follow-up'] },
  'finance':     { problem: '60% of new leads never received a callback.',          stat: '4×',   statLabel: 'deals closed, same team',  chips: ['AI lead qualification', 'CRM auto-logging', 'Warm handoff'] },
  'healthcare':  { problem: '35% of inbound appointment calls were missed.',        stat: '58%',  statLabel: 'more appointments booked', chips: ['24/7 answering', 'WhatsApp confirmation', '40% fewer no-shows'] },
  'education':   { problem: 'Counsellors reached only 30% of leads in week one.',   stat: '35%',  statLabel: 'higher conversion rate',   chips: ['Instant lead call', 'Demo class booking', 'WhatsApp details'] },
  'retail':      { problem: 'Hours spent manually calling 400+ retailers per cycle.',stat: '60%', statLabel: 'faster order collection',  chips: ['Scheduled AI calls', 'Order + payment nudge', '100% follow-up'] },
  'insurance':   { problem: '25% policy lapse rate from missed follow-ups.',         stat: '8%',  statLabel: 'lapse rate (was 25%)',     chips: ['30/15/7 day reminders', 'WhatsApp alerts', 'Auto follow-up'] },
};

function StoryCard({ story, index }) {
  const reduced = useReducedMotion();
  const ind = industryMap[story.industryId];
  const ex = EXTRAS[story.industryId];
  const color = ACCENT[story.industryId] ?? '#2DA744';
  const bg = `${color}10`;

  return (
    <div id={`story-${story.industryId}`} className="scroll-mt-24"
      style={{ background: index % 2 === 0 ? 'var(--color-bg)' : 'var(--color-bg-alt)', paddingBlock: 'clamp(2.5rem,4vw,4rem)', borderBottom: '1px solid var(--color-border)' }}>
      <Container>
        <FadeIn>
          <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', alignItems: 'center', gap: 'clamp(2rem,5vw,4rem)' }}>

            {/* Stat column */}
            <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', minWidth: 150 }}>
              <motion.div animate={reduced ? {} : { y: [0, -5, 0] }} transition={reduced ? {} : { duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ width: 68, height: 68, borderRadius: 'var(--radius-xl)', background: bg, border: `1.5px solid ${color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 8px 24px ${color}18` }} aria-hidden="true">
                {ind && <Icon name={ind.icon} size={30} strokeWidth={1.5} style={{ color }} />}
              </motion.div>
              {ex && (
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(2rem,4vw,2.5rem)', fontWeight: 900, color, lineHeight: 1 }}>{ex.stat}</div>
                  <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-text-muted)', marginTop: '0.25rem', maxWidth: 130 }}>{ex.statLabel}</div>
                </div>
              )}
              <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color, background: bg, padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-full)', border: `1px solid ${color}33` }}>
                {story.businessType}
              </span>
            </div>

            {/* Content column */}
            <div style={{ flex: '1 1 280px', minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.625rem' }}>
                <div style={{ width: 4, height: 22, borderRadius: 2, background: color, flexShrink: 0 }} />
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-h3)', color: 'var(--color-grey-900)', margin: 0 }}>{ind?.name}</h2>
              </div>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)', lineHeight: 'var(--leading-relaxed)', marginBottom: '1.25rem' }}>
                {ex?.problem ?? story.challenge}
              </p>
              {ex && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {ex.chips.map((chip) => (
                    <span key={chip} style={{ padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-full)', background: bg, fontSize: 'var(--text-xs)', fontWeight: 600, color, border: `1px solid ${color}33` }}>{chip}</span>
                  ))}
                </div>
              )}
              <a href="/get-started#demo-form"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: 'var(--text-sm)', fontWeight: 700, color, textDecoration: 'none', transition: 'gap 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.gap = '0.7rem'}
                onMouseLeave={e => e.currentTarget.style.gap = '0.4rem'}>
                Get a similar result <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}

function IndustriesUseCases() {
  return (
    <div id="use-cases">
      <div style={{ background: 'var(--color-bg-alt)', paddingBlock: 'clamp(2.5rem,4vw,3.5rem)', borderBottom: '1px solid var(--color-border)' }}>
        <Container variant="narrow">
          <FadeIn>
            <p className="custom-eyebrow mb-3 text-center">Customer Stories</p>
            <h2 className="custom-h2 text-center mb-0">Real Businesses. Real Results.</h2>
          </FadeIn>
        </Container>
      </div>
      {useCases.map((story, i) => <StoryCard key={story.id} story={story} index={i} />)}
    </div>
  );
}

export default IndustriesUseCases;
