'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

type CounterProps = {
  target: number;
  decimals?: number;
  duration?: number;
};

/** Counts from 0 → target once it scrolls into view. Ease-out cubic. */
export default function Counter({
  target,
  decimals = 0,
  duration = 1800,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) frame = requestAnimationFrame(tick);
      else setValue(target);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {decimals > 0 ? value.toFixed(decimals) : Math.floor(value)}
    </span>
  );
}
