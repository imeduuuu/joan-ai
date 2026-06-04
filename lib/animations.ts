import type { Variants } from 'framer-motion';

// Slow, expensive easing — never bouncy.
export const EASE_SMOOTH = [0.16, 1, 0.3, 1] as const;
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

// Scroll reveal: fade + 40px rise.
export const reveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: EASE_OUT },
  },
};

// Smaller rise for staggered children.
export const revealItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_OUT },
  },
};

// Parent that staggers its children into view.
export const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

// Shared viewport config for whileInView (reveal once, slightly early).
export const viewportOnce = { once: true, margin: '0px 0px -60px 0px' } as const;
