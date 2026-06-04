'use client';

import { motion } from 'framer-motion';
import { EASE_OUT, revealItem, staggerParent, viewportOnce } from '@/lib/animations';
import { Section, SectionHeading } from '../ui/Section';

function Bubble({
  out = false,
  time,
  children,
}: {
  out?: boolean;
  time: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`mb-2.5 max-w-[92%] px-3.5 py-2.5 text-[13px] leading-[1.45] ${
        out
          ? 'ml-auto rounded-[14px_14px_4px_14px] bg-[#005c4b] text-white'
          : 'rounded-[14px_14px_14px_4px] bg-[#1f2c34] text-[#e9edef]'
      }`}
    >
      {children}
      <span className="mt-1 block text-[10px] opacity-55">{time}</span>
    </div>
  );
}

const scores = [
  ['Presupuesto', '4M – 6M €'],
  ['Timing', 'Inmediato'],
  ['Perfil', 'Comprador final'],
  ['Origen fondos', 'Verificado'],
  ['Zona', 'Pedralbes · Sarrià'],
];

const notifs = [
  {
    tag: 'Lead caliente',
    time: '10:44',
    body: (
      <>
        <strong className="font-medium text-champagne-light">Sr. K.</strong> —
        Comprador final, 4-6M€, decisión esta semana. Quiere agendar visita
        Pedralbes.
      </>
    ),
  },
  {
    tag: 'Sugerencia IA',
    time: '10:44',
    body: 'Llamar antes de las 12:00. Mencionar jardín privado y vistas a Collserola — fueron los dos drivers.',
  },
  {
    tag: 'Próximo paso',
    time: 'auto',
    body: 'Visita propuesta para el jueves 16:00. Confirmar con un toque.',
  },
];

const cardClass =
  'relative overflow-hidden rounded-[20px] border border-line bg-carbon p-7';
const labelClass =
  'mb-[22px] flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-champagne';

export default function Flow() {
  return (
    <Section id="flujo" className="bg-jet">
      <SectionHeading
        sans
        eyebrow="El flujo en directo"
        sub="Esto es exactamente lo que ocurre, paso a paso, cada vez que entra un lead en tu pipeline."
      >
        De{' '}
        <em className="text-gradient font-normal not-italic">
          «hola, vi tu villa»
        </em>{' '}
        a notificación cualificada en menos de un minuto.
      </SectionHeading>

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-[60px] grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[1fr_40px_1fr_40px_1fr]"
      >
        {/* Entrada */}
        <motion.div variants={revealItem} className={cardClass}>
          <div className={labelClass}>Entrada</div>
          <Bubble time="10:42">
            Hola, vi la villa de Pedralbes en Idealista. ¿Aún disponible?
          </Bubble>
          <Bubble out time="10:42">
            Buenos días. Sí, la propiedad sigue disponible. ¿Le importa si le
            hago tres preguntas rápidas para enviarle la información más
            relevante?
          </Bubble>
          <Bubble time="10:43">Claro, dime.</Bubble>
          <Bubble out time="10:43">
            ¿Cuál es su rango de presupuesto y el horizonte temporal de la
            operación?
          </Bubble>
        </motion.div>

        <Arrow />

        {/* Cualificación IA */}
        <motion.div variants={revealItem} className={cardClass}>
          <div className={labelClass}>Cualificación IA</div>
          {scores.map(([k, v]) => (
            <div
              key={k}
              className="flex justify-between border-b border-line py-[9px] text-[13px] last:border-none"
            >
              <span>{k}</span>
              <span className="font-medium text-champagne-light">{v}</span>
            </div>
          ))}
          <div className="my-4 h-2 w-full overflow-hidden rounded-full bg-white/5">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '92%' }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.6, ease: EASE_OUT, delay: 0.3 }}
              className="h-full rounded-full bg-gradient-to-r from-champagne-dim to-champagne"
            />
          </div>
          <div className="text-right font-serif text-[13px] font-medium italic text-champagne-light">
            Score 92 / 100
          </div>
        </motion.div>

        <Arrow />

        {/* Notificación */}
        <motion.div variants={revealItem} className={cardClass}>
          <div className={labelClass}>Notificación a tu móvil</div>
          {notifs.map((n, i) => (
            <div
              key={i}
              className="mb-3 rounded-lg border-l-[3px] border-champagne bg-bone/[0.04] px-4 py-3.5 text-[13px] last:mb-0"
            >
              <div className="mb-2 flex justify-between text-[10px] font-medium uppercase tracking-[0.1em] text-muted">
                <span className="text-champagne">{n.tag}</span>
                <span>{n.time}</span>
              </div>
              <div className="leading-[1.5] text-bone">{n.body}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}

function Arrow() {
  return (
    <motion.div
      variants={revealItem}
      className="flex items-center justify-center text-[22px] text-champagne-dim max-lg:rotate-90 max-lg:py-2"
    >
      &rarr;
    </motion.div>
  );
}
