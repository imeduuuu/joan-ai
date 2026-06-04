import type { ReactNode } from 'react';
import Reveal from '../motion/Reveal';
import Eyebrow from './Eyebrow';

export function Section({
  id,
  children,
  className = '',
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative px-6 py-[100px] md:px-12 md:py-40 ${className}`}
    >
      <div className="relative z-[2] mx-auto max-w-container">{children}</div>
    </section>
  );
}

/** Eyebrow + h2 + optional sub-paragraph, each revealed on scroll. */
export function SectionHeading({
  eyebrow,
  children,
  sub,
  sans = false,
  centered = false,
}: {
  eyebrow: string;
  children: ReactNode;
  sub?: ReactNode;
  sans?: boolean;
  centered?: boolean;
}) {
  const h2Class = sans
    ? 'max-w-[940px] font-sans text-[clamp(34px,4.6vw,64px)] font-extralight leading-[1.08] tracking-[-0.025em]'
    : 'max-w-[940px] font-serif text-[clamp(40px,5.5vw,76px)] font-light leading-[1.02] tracking-[-0.03em]';

  return (
    <>
      <Reveal>
        <Eyebrow centered={centered}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal>
        <h2 className={`${h2Class} ${centered ? 'mx-auto text-center' : ''}`}>
          {children}
        </h2>
      </Reveal>
      {sub && (
        <Reveal>
          <p
            className={`mt-7 max-w-[660px] text-[19px] font-light leading-[1.55] text-muted ${
              centered ? 'mx-auto text-center' : ''
            }`}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </>
  );
}
