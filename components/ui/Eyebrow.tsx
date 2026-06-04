import type { ReactNode } from 'react';

export default function Eyebrow({
  children,
  centered = false,
}: {
  children: ReactNode;
  centered?: boolean;
}) {
  return (
    <div className={`eyebrow mb-7 ${centered ? 'justify-center' : ''}`}>
      {children}
    </div>
  );
}
