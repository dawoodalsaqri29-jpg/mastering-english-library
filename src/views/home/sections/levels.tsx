import { LEVEL_TILES } from "@/data/home/content";

import { Reveal, STEP } from "../ui/reveal";

export const Levels = () => (
  <section id="levels" aria-label="Levels and skills" className="mx-auto max-w-[90rem] px-[5rem] py-16 max-[900px]:px-5">
    <Reveal kind="fade" tag="p" className="font-mono text-[0.875rem] leading-[1.25rem] text-foreground-muted">
      four levels, six skills, one library
    </Reveal>
    <div className="relative mt-8">
      <div aria-hidden className="absolute top-[1.875rem] right-[1.875rem] left-[1.875rem] border-t-2 border-dashed border-border-subtle" />
      <ul className="relative flex justify-between gap-4 max-[900px]:flex-wrap max-[900px]:justify-start">
        {LEVEL_TILES.map((tile, i) => (
          <Reveal key={tile.code} tag="li" delay={i * STEP} className="flex w-20 flex-col items-center gap-3">
            <span
              className={`grid size-[3.75rem] place-items-center rounded-2xl border font-mono text-[0.875rem] tracking-[0.0625rem] backdrop-blur-sm ${
                i < 4 ? "border-accent bg-surface-card text-accent" : "glass-fill border-border-subtle text-foreground-muted"
              }`}
            >
              {tile.code}
            </span>
            <span className="text-center font-mono text-[0.875rem] leading-[1.25rem] text-foreground-muted">{tile.label}</span>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);
