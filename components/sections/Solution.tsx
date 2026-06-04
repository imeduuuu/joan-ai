'use client';

import { motion } from 'framer-motion';
import { revealItem, staggerParent, viewportOnce } from '@/lib/animations';
import { Section, SectionHeading } from '../ui/Section';

const steps = [
  {
    num: '01 · Capta',
    icon: '⌈',
    title: 'Recoge todo el ruido',
    body: 'WhatsApp, DMs de Instagram, campañas de Instagram Ads, email, Idealista, Fotocasa, formularios web. Un único embudo unificado, sin perder un solo mensaje.',
  },
  {
    num: '02 · Cualifica',
    icon: '✦',
    title: 'Habla como un humano',
    body: 'La IA conversa en castellano, catalán, inglés y francés. Pregunta presupuesto, zona, timing y motivación real. Sin sonar a bot.',
  },
  {
    num: '03 · Filtra',
    icon: '◆',
    title: 'Solo lo caliente llega',
    body: 'Cada lead recibe un scoring de 0 a 100. A tu móvil solo entran los que superan el umbral, con resumen ejecutivo listo para llamar.',
  },
];

export default function Solution() {
  return (
    <Section
      id="solucion"
      className="bg-gradient-to-b from-black to-[#141414]"
    >
      <SectionHeading
        eyebrow="Lo que he montado"
        sub="Un pipeline sobre WhatsApp Business, Claude AI y reglas afinadas para real estate de lujo. Cada lead atraviesa los tres niveles antes de llegarte a ti."
      >
        Tres capas que trabajan{' '}
        <em className="text-gradient italic">mientras duermes</em>.
      </SectionHeading>

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-[60px] grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {steps.map((s) => (
          <motion.div
            key={s.num}
            variants={revealItem}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[20px] border border-line bg-bone/[0.02] px-9 py-12 transition-colors duration-500 hover:border-champagne/30 hover:bg-bone/[0.04]"
          >
            <div className="mb-7 text-[11px] font-medium uppercase tracking-[0.2em] text-champagne">
              {s.num}
            </div>
            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-champagne/20 bg-gradient-to-br from-champagne/15 to-champagne/[0.04] text-2xl text-champagne-light">
              {s.icon}
            </div>
            <h3 className="mb-3.5 font-serif text-[28px] font-normal tracking-[-0.02em]">
              {s.title}
            </h3>
            <p className="text-[15px] leading-[1.65] text-muted">{s.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
