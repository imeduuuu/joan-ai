'use client';

import { motion } from 'framer-motion';
import { EASE_SMOOTH, revealItem, staggerParent, viewportOnce } from '@/lib/animations';
import { Section, SectionHeading } from '../ui/Section';

const items = [
  { glyph: '⬢', name: 'Claude AI', role: 'Razonamiento & cualificación' },
  { glyph: '◐', name: 'WhatsApp Business', role: 'Canal principal' },
  { glyph: '⌬', name: 'Pipeline propio', role: 'Scoring & routing' },
  { glyph: '◈', name: 'CRM integrado', role: 'Histórico & seguimiento' },
];

export default function Stack() {
  return (
    <Section className="bg-jet">
      <SectionHeading
        eyebrow="Bajo el capó"
        sub="Las piezas que sostienen el sistema. Sin humo, sin nombres comerciales inventados."
      >
        Stack <em className="text-gradient italic">discreto</em>, decisiones
        honestas.
      </SectionHeading>

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-[60px] grid grid-cols-2 gap-5 lg:grid-cols-4"
      >
        {items.map((it) => (
          <motion.div
            key={it.name}
            variants={revealItem}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.4, ease: EASE_SMOOTH }}
            className="rounded-2xl border border-line bg-bone/[0.02] px-6 py-9 text-center transition-colors duration-400 hover:border-champagne/25 hover:bg-bone/[0.04]"
          >
            <span className="mb-[18px] block font-serif text-[32px] text-champagne">
              {it.glyph}
            </span>
            <div className="mb-1.5 font-serif text-[17px] font-medium tracking-[-0.01em]">
              {it.name}
            </div>
            <div className="text-[12px] leading-[1.5] tracking-[0.04em] text-muted">
              {it.role}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
