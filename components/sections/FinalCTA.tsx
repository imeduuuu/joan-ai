'use client';

import { motion } from 'framer-motion';
import { EASE_SMOOTH } from '@/lib/animations';
import Reveal from '../motion/Reveal';
import Eyebrow from '../ui/Eyebrow';

export default function FinalCTA() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden px-6 pb-[80px] pt-[120px] text-center md:px-12 md:pb-[140px] md:pt-[200px]"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1408 100%)' }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(201,169,106,0.16), transparent 60%)',
        }}
      />
      <div className="relative z-[2] mx-auto max-w-[920px]">
        <Reveal>
          <Eyebrow centered>Joan</Eyebrow>
        </Reveal>
        <Reveal>
          <h2 className="mx-auto mb-8 font-serif text-[clamp(48px,6.5vw,92px)] font-light leading-[1.02] tracking-[-0.03em]">
            ¿Lo <em className="text-gradient italic">activamos</em>?
          </h2>
        </Reveal>
        <Reveal>
          <p className="mx-auto mb-14 max-w-[580px] text-[19px] leading-[1.55] text-muted">
            Yo me ocupo del setup, integraciones y entrenamiento del modelo con
            tus propiedades. En 14 días estás recibiendo leads cualificados sin
            tocar un botón. Tú solo dime cuándo.
          </p>
        </Reveal>
        <Reveal>
          <motion.a
            href="https://wa.me/34680365779"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.4, ease: EASE_SMOOTH }}
            className="group inline-flex items-center gap-2.5 rounded-full bg-champagne px-11 py-[22px] text-base font-medium text-black no-underline hover:bg-champagne-light hover:shadow-[0_24px_60px_-10px_rgba(201,169,106,0.5)]"
          >
            Espero que te haya gustado
            <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5">
              &rarr;
            </span>
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
