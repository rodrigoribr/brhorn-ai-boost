import type { ReactNode } from "react";

export const Eyebrow = ({ children, className = "text-projeto" }: { children: ReactNode; className?: string }) => (
  <p className={`font-mono text-xs uppercase tracking-[0.14em] ${className}`}>{children}</p>
);

export const H2 = ({ children, className = "text-nanquim" }: { children: ReactNode; className?: string }) => (
  <h2 className={`mt-4 max-w-3xl font-display text-4xl font-normal leading-tight sm:text-5xl ${className}`}>
    {children}
  </h2>
);
