import Counter from '../motion/Counter';
import { Stagger, StaggerItem } from '../motion/Stagger';
import { Section, SectionHeading } from '../ui/Section';

const cells = [
  {
    value: <><Counter target={78} />%</>,
    desc: 'de los leads se enfrían si no reciben respuesta en los primeros 5 minutos.',
  },
  {
    value: <><Counter target={12} />h</>,
    desc: 'tarda de media un agente en responder a un formulario fuera de horario comercial.',
  },
  {
    value: <>1 / <Counter target={9} /></>,
    desc: 'contactos termina convirtiendo en visita. Los otros ocho consumen tiempo sin generar ingresos.',
  },
];

export default function Problem() {
  return (
    <Section id="problema" className="bg-black">
      <SectionHeading
        eyebrow="Por qué te lo propongo"
        sub="No es falta de talento. Es matemática: tus compradores hablan con tres agencias a la vez, y la que responde primero —y mejor— se lleva la cita. El resto, es ruido que te roba tiempo."
      >
        Un buen agente como tú <em className="text-gradient italic">pierde</em> el
        70% de sus oportunidades antes de saber que existían.
      </SectionHeading>

      <Stagger className="mt-[60px] grid grid-cols-1 gap-px overflow-hidden rounded border border-line bg-[rgba(245,241,234,0.08)] md:grid-cols-3">
        {cells.map((c, i) => (
          <StaggerItem key={i} className="bg-black px-10 py-14">
            <div className="mb-[22px] font-serif text-[clamp(56px,6vw,92px)] font-light leading-none tracking-[-0.04em] text-gradient-dim">
              {c.value}
            </div>
            <div className="text-[15px] leading-[1.6] text-muted">{c.desc}</div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
