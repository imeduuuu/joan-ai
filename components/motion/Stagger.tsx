'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { revealItem, staggerParent, viewportOnce } from '@/lib/animations';

type StaggerProps = {
  children: ReactNode;
  className?: string;
};

/** Parent container that reveals its <StaggerItem> children in sequence. */
export function Stagger({ children, className }: StaggerProps) {
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div className={className} variants={revealItem}>
      {children}
    </motion.div>
  );
}
