'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { EASE_SMOOTH } from '@/lib/animations';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  arrow?: boolean;
  className?: string;
  external?: boolean;
};

const base =
  'group inline-flex items-center gap-2.5 rounded-full border px-8 py-[18px] text-[15px] font-medium no-underline';

const styles = {
  primary:
    'border-transparent bg-bone text-black hover:bg-champagne hover:shadow-[0_20px_50px_-15px_rgba(201,169,106,0.5)]',
  ghost:
    'border-line-strong text-bone hover:border-bone hover:bg-bone/5',
};

export default function Button({
  href,
  children,
  variant = 'primary',
  arrow = false,
  className = '',
  external = false,
}: ButtonProps) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${base} ${styles[variant]} ${className}`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.4, ease: EASE_SMOOTH }}
    >
      {children}
      {arrow && (
        <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5">
          &rarr;
        </span>
      )}
    </motion.a>
  );
}
