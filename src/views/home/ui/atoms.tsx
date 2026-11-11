import type { ReactNode } from "react";

/** The pill label with a lime marker dot. */
export const Badge = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-badge py-[0.3125rem] pr-[0.8125rem] pl-[0.6875rem] text-[0.875rem] leading-[1.25rem] font-medium tracking-[0.025rem] text-foreground-muted shadow-float">
    <span aria-hidden className="size-1.5 rounded-full bg-accent-marker" />
    {children}
  </span>
);

/** Primary action: lime pill. */
export const LimeButton = ({ href, children, large = false }: { href: string; children: ReactNode; large?: boolean }) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center rounded-full bg-accent px-6 font-medium whitespace-nowrap text-on-accent shadow-float transition-opacity duration-[var(--duration-fast)] ease-entrance hover:opacity-90 ${large ? "h-12 text-[1rem] leading-[1.5rem]" : "h-10 text-[0.875rem] leading-[1.25rem]"}`}
  >
    {children}
  </a>
);

/** Secondary action: glass pill. */
export const GlassButton = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    className="glass-fill inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border-glass px-6 text-[1rem] leading-[1.5rem] font-medium whitespace-nowrap text-foreground shadow-float backdrop-blur-[2px] transition-colors duration-[var(--duration-fast)] ease-entrance hover:border-foreground"
  >
    {children}
  </a>
);

/** Display title text: gradient, with one serif italic accent word passed as `accent`. */
export const Accent = ({ children }: { children: ReactNode }) => (
  <em className="font-serif text-[1.1em] leading-none font-normal text-title-accent italic [-webkit-text-fill-color:currentColor]">
    {children}
  </em>
);
