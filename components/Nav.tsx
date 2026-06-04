'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#solucion', label: 'Solución' },
  { href: '#flujo', label: 'Flujo' },
  { href: '#instagram', label: 'Instagram' },
  { href: '#resultados', label: 'Resultados' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[100] flex items-center justify-between backdrop-blur-xl transition-all duration-500 ease-smooth ${
        scrolled
          ? 'border-b border-line bg-black/85 px-6 py-4 md:px-12'
          : 'border-b border-transparent bg-black/55 px-6 py-[22px] md:px-12'
      }`}
    >
      <a
        href="#top"
        className="flex items-center gap-2.5 font-serif text-[22px] font-medium tracking-tight text-bone no-underline"
      >
        <span className="h-2 w-2 rounded-full bg-champagne shadow-[0_0_16px_#c9a96a]" />
        Joan AI
      </a>

      <div className="hidden gap-10 md:flex">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm font-normal text-bone no-underline opacity-70 transition-opacity hover:opacity-100"
          >
            {l.label}
          </a>
        ))}
      </div>

      <a
        href="#contacto"
        className="rounded-full border border-line-strong px-5 py-2.5 text-[13px] font-medium text-bone no-underline transition-all duration-300 hover:border-champagne hover:bg-champagne hover:text-black"
      >
        Lo activamos
      </a>
    </nav>
  );
}
