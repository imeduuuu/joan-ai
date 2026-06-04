import Reveal from '../motion/Reveal';

export default function Testimonial() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-[100px] md:px-12 md:py-[200px]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(201,169,106,0.08), transparent 60%)',
        }}
      />
      <div className="relative z-[2] mx-auto max-w-container">
        <Reveal>
          <blockquote className="relative mx-auto max-w-[1000px] text-center font-serif text-[clamp(28px,3.6vw,48px)] font-light leading-[1.25] tracking-[-0.02em]">
            <span className="pointer-events-none absolute -left-8 -top-[90px] hidden font-serif text-[220px] leading-none text-champagne opacity-[0.18] md:block">
              &ldquo;
            </span>
            Joan, llevamos meses hablando de esto en cada cena. Lo he construido.
            Está listo, está afinado para ti, y solo necesita que digas{' '}
            <em className="text-gradient italic">cuándo empezamos</em>.
          </blockquote>
        </Reveal>
        <Reveal>
          <div className="relative z-[2] flex items-center justify-center gap-4" style={{ marginTop: '60px' }}>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-champagne to-champagne-dim font-serif text-[22px] font-medium text-black">
              E
            </div>
            <div className="text-left">
              <div className="font-serif text-[18px] font-medium">Eduardo</div>
              <div className="text-[13px] text-muted">Quien te lo ha montado</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
