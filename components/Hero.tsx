'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { EASE_OUT } from '@/lib/animations';
import Button from './ui/Button';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE_OUT } },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  // Parallax: drift + slow zoom on the villa backdrop.
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <header
      ref={ref}
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-[100px] pt-[140px] md:px-12"
    >
      {/* Ambient champagne glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse at 75% 25%, rgba(201,169,106,0.20), transparent 55%), radial-gradient(ellipse at 25% 75%, rgba(201,169,106,0.08), transparent 50%), linear-gradient(180deg, #0a0a0a 0%, #141414 50%, #0a0a0a 100%)',
        }}
      />
      {/* Villa photograph with parallax */}
      <motion.div
        style={{
          y,
          scale,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=2000&q=85')",
        }}
        className="absolute inset-0 z-[1] bg-cover bg-center opacity-[0.32] [filter:grayscale(15%)_contrast(1.1)]"
      />
      {/* Legibility gradient */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,10,10,0.45) 0%, rgba(10,10,10,0.55) 50%, rgba(10,10,10,0.95) 100%)',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-[5] mx-auto w-full max-w-container"
      >
        <motion.div
          variants={item}
          className="mb-9 inline-flex items-center gap-2.5 rounded-full border border-champagne/30 bg-champagne/[0.08] px-[18px] py-2 text-xs font-medium uppercase tracking-[0.1em] text-champagne-light"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-champagne animate-pulse" />
          Propuesta para Joan · Real Estate de Lujo
        </motion.div>

        <motion.h1
          variants={item}
          className="mb-9 max-w-[1100px] font-serif text-[clamp(48px,8vw,112px)] font-light leading-[0.98] tracking-[-0.04em]"
        >
          Joan, esto es lo
          <br />
          que <em className="text-gradient font-normal italic">te he construido.</em>
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-[640px] text-[clamp(17px,1.5vw,21px)] font-light leading-[1.55] text-muted"
          style={{ marginBottom: '52px' }}
        >
          Un sistema que responde, cualifica y filtra cada lead en menos de 60
          segundos. Tú solo levantas el teléfono cuando hay una venta esperando
          al otro lado.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4">
          <Button href="#flujo" variant="primary" arrow>
            Ver cómo funciona
          </Button>
          <Button href="#resultados" variant="ghost">
            Lo que ganas
          </Button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-12 left-1/2 z-[5] flex -translate-x-1/2 flex-col items-center gap-3.5 text-[11px] uppercase tracking-[0.2em] text-muted">
        <span>Desliza</span>
        <span className="h-11 w-px origin-top animate-scrollLine bg-gradient-to-b from-transparent via-champagne to-transparent" />
      </div>
    </header>
  );
}
