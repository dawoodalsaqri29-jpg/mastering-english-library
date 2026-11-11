import { LIBRARY_URL, STORE_URL, WHATSAPP_URL } from "@/data/home/content";

import { Reveal, STEP } from "../ui/reveal";

const COLUMNS = [
  {
    title: "learn",
    links: [
      { label: "Free lessons", href: `${LIBRARY_URL}library.html` },
      { label: "Levels", href: `${LIBRARY_URL}levels.html` },
      { label: "Find your level", href: `${LIBRARY_URL}level-ar.html` },
    ],
  },
  {
    title: "teach",
    links: [
      { label: "For teachers", href: `${LIBRARY_URL}teachers.html` },
      { label: "Class sets", href: `${LIBRARY_URL}teachers.html#class-sets` },
    ],
  },
  {
    title: "store",
    links: [
      { label: "PDF store", href: STORE_URL },
      { label: "WhatsApp", href: WHATSAPP_URL },
    ],
  },
] as const;

export const Footer = () => (
  <footer id="footer" aria-label="Site footer" className="mx-auto max-w-[90rem] px-[5rem] pt-8 pb-12 max-[900px]:px-5">
    <div className="grid grid-cols-[1fr_1.4fr] gap-5 max-[900px]:grid-cols-1">
      <Reveal className="flex flex-col justify-between gap-10 rounded-[1.5rem] border border-border-subtle bg-surface-card p-8 backdrop-blur-card">
        <span className="flex items-center gap-3 text-[1.25rem] leading-[1.75rem] font-medium tracking-[-0.0625rem]">
          <span aria-hidden className="grid size-7 place-items-center rounded-[0.5rem] bg-accent font-mono text-[0.75rem] text-on-accent">
            ME
          </span>
          Mastering English Library
        </span>
        <p className="max-w-[22.5rem] text-[1.125rem] leading-[1.75rem] text-foreground">
          Free English lessons for Arabic speakers, from B1 to C2.
        </p>
      </Reveal>
      <Reveal delay={STEP} className="flex flex-col gap-4 rounded-[1.5rem] bg-accent p-10 text-on-accent shadow-float max-[580px]:p-6">
        <p className="font-mono text-[0.875rem] leading-[1.25rem] opacity-50">what now</p>
        <h2 className="text-[2.25rem] leading-[3.25rem] font-semibold tracking-[-0.0625rem] max-[580px]:text-[1.75rem] max-[580px]:leading-[2.25rem]">
          Pick the lesson you <em className="font-serif text-[1.1em] font-normal italic">dread</em> most.
        </h2>
        <p className="max-w-[40rem] text-[1rem] leading-[1.5rem] opacity-60">
          Start with the point you always get wrong. It takes one page, and the answers are on the next.
        </p>
        <a
          href={`${LIBRARY_URL}library.html`}
          className="mt-2 inline-flex h-12 w-fit items-center rounded-full bg-on-accent px-6 text-[0.875rem] font-medium text-accent"
        >
          Open the free lessons
        </a>
      </Reveal>
    </div>
    <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border-subtle pt-10 max-[580px]:grid-cols-1">
      {COLUMNS.map((col, i) => (
        <Reveal key={col.title} delay={i * STEP} className="flex flex-col gap-3">
          <span className="font-mono text-[0.875rem] text-foreground-dim">{col.title}</span>
          <ul className="flex flex-col gap-2 text-[0.875rem] text-foreground-muted">
            {col.links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors duration-[var(--duration-fast)] ease-entrance hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
    <p className="mt-12 flex justify-between border-t border-border-subtle pt-6 font-mono text-[0.875rem] text-foreground-dim max-[580px]:flex-col max-[580px]:gap-2">
      <span>2026, Mastering English Library</span>
      <span>background video: Stone Arch, GetLayers</span>
    </p>
  </footer>
);
