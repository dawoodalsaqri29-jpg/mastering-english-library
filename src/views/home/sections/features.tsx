import { FEATURES } from "@/data/home/content";

import { Accent, Badge } from "../ui/atoms";
import { Reveal, STEP } from "../ui/reveal";

export const Features = () => (
  <section id="lessons" aria-labelledby="lessons-title" className="mx-auto max-w-[90rem] px-[5rem] py-24 max-[900px]:px-5 max-[900px]:py-14">
    <div className="flex items-end justify-between gap-12 max-[1200px]:flex-col max-[1200px]:items-center max-[1200px]:text-center">
      <Reveal className="flex max-w-[47.5rem] flex-col items-start gap-4 max-[1200px]:items-center">
        <Badge>how a lesson works</Badge>
        <h2 id="lessons-title" className="title-gradient text-[2.75rem] leading-[3.875rem] font-semibold tracking-[-0.125rem] max-[900px]:text-[1.875rem] max-[900px]:leading-[2.625rem]">
          One point, one page, <Accent>no noise</Accent>.
        </h2>
      </Reveal>
      <Reveal kind="fade" delay={2 * STEP} tag="p" className="max-w-[27.5rem] pb-3 text-[1rem] leading-[1.5rem] text-foreground-muted">
        Every free lesson is a web page and an A4 PDF: the worksheet first, then a separate page with the answers.
      </Reveal>
    </div>
    <ul className="mt-16 grid grid-cols-3 gap-5 max-[1200px]:grid-cols-1">
      {FEATURES.map((f, i) => (
        <Reveal key={f.index} tag="li" delay={i * STEP} className="flex flex-col gap-4 rounded-card border border-border-subtle bg-surface-card p-8 backdrop-blur-card">
          <span className="font-mono text-[0.875rem] tracking-[0.0625rem] text-accent">{f.index}</span>
          <h3 className="text-[1.625rem] leading-[2rem] font-medium tracking-[-0.0625rem] text-foreground">{f.title}</h3>
          <p className="text-[1rem] leading-[1.5rem] text-foreground-muted">{f.body}</p>
        </Reveal>
      ))}
    </ul>
  </section>
);
