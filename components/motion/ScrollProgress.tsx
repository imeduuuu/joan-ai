'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

/** Fixed champagne progress bar driven by page scroll. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[1000] h-0.5 w-full origin-left bg-gradient-to-r from-champagne to-champagne-light"
    />
  );
}
