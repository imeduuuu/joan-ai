'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { reveal, viewportOnce } from '@/lib/animations';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'header' | 'footer';
};

/** Fade + rise into view, once, on scroll. */
export default function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}
