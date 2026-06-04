import Counter from '../motion/Counter';
import { Stagger, StaggerItem } from '../motion/Stagger';
import { Section, SectionHeading } from '../ui/Section';

const kpis = [
  { num: <><Counter target={47} /><Suffix>s</Suffix></>, label: <>Tiempo medio<br />de primera respuesta</> },
  { num: <>+<Counter target={340} /><Suffix>%</Suffix></>, label: <>Leads cualificados<br />por semana</> },
  { num: <><Counter target={3.2} decimals={1} /><Suffix>×</Suffix></>, label: <>Multiplicador<br />de conversión a visita</> },
  { num: <><Counter target={22} /><Suffix>h</Suffix></>, label: <>Horas/semana<br />devueltas a ti</> },
];

function Suffix({ children }: { children: React.ReactNode }) {
  return <span className="text-[0.42em] text-champagne [-webkit-text-fill-color:#c9a96a]">{children}</span>;
}

export default function Results() {
  return (
    <Section id="resultados" className="overflow-hidden bg-black">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(201,169,106,0.12), transparent 50%)',
        }}
      />
      <SectionHeading
        eyebrow="Lo que vas a ganar"
        sub="Objetivos del sistema desde el primer mes en marcha. Conservadores, basados en benchmarks del sector."
      >
        Lo que cambia cuando la operación{' '}
        <em className="text-gradient italic">deja de ser</em> un cuello de
        botella.
      </SectionHeading>

      <Stagger className="mt-[60px] grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-[rgba(245,241,234,0.08)] sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k, i) => (
          <StaggerItem key={i} className="bg-black px-8 py-14 text-left">
            <div className="mb-[18px] flex items-baseline gap-1 font-serif text-[clamp(48px,5vw,80px)] font-light leading-none tracking-[-0.04em] text-gradient-bright">
              {k.num}
            </div>
            <div className="text-sm leading-[1.45] text-muted">{k.label}</div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
