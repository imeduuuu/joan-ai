'use client';

import { motion } from 'framer-motion';
import { EASE_SMOOTH, revealItem, staggerParent, viewportOnce } from '@/lib/animations';
import { Section, SectionHeading } from '../ui/Section';

const igMsgs = [
  { in: true, text: 'Hola! Vi el ático de Diagonal Mar en stories' },
  { in: true, text: '¿Sigue en venta?' },
  { in: false, text: 'Hola Alex. Sí, sigue disponible. ¿Estás buscando para vivir o como inversión?' },
  { in: true, text: 'Para vivir. Vuelvo a Barcelona en septiembre.' },
  { in: false, text: '¿Rango de presupuesto y prefieres Diagonal Mar o miramos también Pedralbes?' },
];

const leadRows = [
  ['Nombre', 'Carla M.'],
  ['Ciudad', 'Ginebra'],
  ['Presupuesto', '3M+ €'],
  ['Origen', 'Lead Ad Instagram'],
];

export default function Instagram() {
  return (
    <Section id="instagram" className="overflow-hidden bg-black">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 15% 30%, rgba(249,206,52,0.06), transparent 45%), radial-gradient(ellipse at 85% 70%, rgba(238,42,123,0.06), transparent 45%)',
        }}
      />
      <SectionHeading
        eyebrow="Instagram, también"
        sub="No solo WhatsApp. La IA opera dentro de Instagram: responde mensajes privados al instante y captura cada lead que entra desde tus anuncios. Sin DMs sin abrir, sin formularios olvidados."
      >
        Tus DMs y tus campañas, contestados{' '}
        <em className="text-gradient italic">antes de que tú los veas</em>.
      </SectionHeading>

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-[60px] grid grid-cols-1 gap-7 md:grid-cols-2"
      >
        {/* DM card */}
        <IgCard label={<><Badge>Instagram</Badge> · DM en automático</>}>
          <div className="rounded-[18px] border border-white/[0.06] bg-[#050505] p-[18px]">
            <div className="mb-4 flex items-center gap-3 border-b border-white/[0.06] pb-3.5">
              <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-0.5">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#1a1a1a] font-serif text-[15px] text-white">
                  A
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold tracking-[-0.01em] text-white">
                  @alex_bcn_
                </div>
                <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-[#4dd865] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#4dd865]">
                  Activo ahora
                </div>
              </div>
            </div>
            <div>
              {igMsgs.map((m, i) => (
                <div
                  key={i}
                  className={`mb-1.5 w-fit max-w-[86%] rounded-[18px] px-3.5 py-2.5 text-[13px] leading-[1.4] text-white ${
                    m.in
                      ? 'rounded-bl-[4px] bg-[#262626]'
                      : 'ml-auto rounded-br-[4px] bg-gradient-to-br from-[#5851db] via-[#833ab4] to-[#c13584]'
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>
            <div className="mt-3.5 text-center text-[10px] tracking-[0.05em] text-white/40">
              Gestionado por IA · Respuesta media 38 s · 24/7
            </div>
          </div>
        </IgCard>

        {/* Lead Ad card */}
        <IgCard
          label={<><Badge>Instagram Ads</Badge> · Captura de campaña</>}
        >
          <div className="mb-[18px] rounded-2xl border border-[#ee2a7b]/[0.18] bg-gradient-to-br from-[#f9ce34]/10 via-[#ee2a7b]/[0.08] to-[#6228d7]/[0.12] p-[22px]">
            <div className="mb-3.5 inline-block text-[10px] uppercase tracking-[0.1em] text-white/55">
              Patrocinado · 2 100 impresiones / 48 h
            </div>
            <div className="mb-2.5 font-serif text-[19px] font-medium leading-[1.25] tracking-[-0.01em] text-white">
              Villa en Pedralbes — 1 200 m² · Vistas a Barcelona
            </div>
            <div className="mb-3.5 text-[12.5px] leading-[1.5] text-white/50">
              Acceso privado · 6 dormitorios · Piscina infinita y jardín. Visita
              concertada en 24 h.
            </div>
            <div className="inline-block rounded-full bg-white px-4 py-[7px] text-[11px] font-semibold tracking-[0.02em] text-black">
              Ver propiedad
            </div>
          </div>
          <div className="flex items-start gap-3.5 rounded-r-[10px] border-l-[3px] border-[#ee2a7b] bg-bone/[0.03] px-[18px] py-4">
            <div className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-[0_0_12px_rgba(238,42,123,0.4)]" />
            <div className="flex-1 text-[13px]">
              <div className="mb-2 text-[12px] font-medium uppercase tracking-[0.08em] text-bone">
                Lead capturado · hace 4 min
              </div>
              {leadRows.map(([k, v]) => (
                <div key={k} className="flex justify-between py-[5px] text-muted">
                  <span>{k}</span>
                  <strong className="font-medium text-bone">{v}</strong>
                </div>
              ))}
              <div className="flex justify-between py-[5px] text-muted">
                <span>Score IA</span>
                <strong className="font-medium text-champagne-light">
                  87 / 100
                </strong>
              </div>
            </div>
          </div>
        </IgCard>
      </motion.div>
    </Section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text font-semibold tracking-[0.12em] text-transparent">
      {children}
    </span>
  );
}

function IgCard({
  label,
  children,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={revealItem}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.5, ease: EASE_SMOOTH }}
      className="relative overflow-hidden rounded-3xl border border-line bg-carbon p-8 transition-colors duration-500 hover:border-[#ee2a7b]/25"
    >
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] opacity-85" />
      <div className="mb-6 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
        {label}
      </div>
      {children}
    </motion.div>
  );
}
