import Link from "next/link";

import { LIBRARY_URL, NAV_LINKS } from "@/data/home/content";

import { LimeButton } from "../ui/atoms";

export const Nav = () => (
  <header className="fixed inset-x-0 top-0 z-40 bg-nav-surface backdrop-blur-md">
    <div className="mx-auto flex h-[5.5rem] max-w-[90rem] items-center justify-between px-[5rem] max-[900px]:h-16 max-[900px]:px-5">
      <Link href="/" className="flex items-center gap-3 text-[1.25rem] leading-[1.75rem] font-medium tracking-[-0.0625rem] text-foreground">
        <span aria-hidden className="grid size-7 place-items-center rounded-[0.5625rem] bg-accent font-mono text-[0.75rem] text-on-accent">
          ME
        </span>
        Mastering English
      </Link>
      <nav aria-label="Primary" className="max-[900px]:hidden">
        <ul className="flex gap-10 text-[0.875rem] leading-[1.25rem] whitespace-nowrap text-foreground-muted">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="transition-colors duration-[var(--duration-fast)] ease-entrance hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <LimeButton href={`${LIBRARY_URL}library.html`}>Start free</LimeButton>
    </div>
  </header>
);
