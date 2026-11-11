import { NUMBERS } from "@/data/home/content";

import { Accent, Badge } from "../ui/atoms";
import { CountUp } from "../ui/count-up";
import { Reveal, STEP } from "../ui/reveal";

export const Numbers = () => (
  <section id="numbers" aria-labelledby="numbers-title" className="mx-auto max-w-[90rem] px-[5rem] py-24 max-[900px]:px-5 max-[900px]:py-14">
    <Reveal className="flex flex-col items-start gap-4">
      <Badge>what is inside</Badge>
      <h2 id="numbers-title" className="title-gradient text-[2.75rem] leading-[3.875rem] font-semibold tracking-[-0.125rem] max-[900px]:text-[1.875rem] max-[900px]:leading-[2.625rem]">
        Counted, <Accent>not guessed</Accent>.
      </h2>
    </Reveal>
    <ul className="mt-12 grid grid-cols-3 border-t border-border-subtle max-[900px]:grid-cols-1">
      {NUMBERS.map((n, i) => (
        <Reveal key={n.label} tag="li" delay={i * 2 * STEP} className="flex flex-col gap-2 border-border-subtle pt-8 pr-8 max-[900px]:border-b max-[900px]:pb-8">
          <span className="font-mono text-[0.875rem] leading-[1.25rem] text-foreground-muted">{n.label}</span>
          <span className="text-[3.5rem] leading-[3.75rem] font-semibold tracking-[-0.125rem] text-foreground">
            <CountUp value={n.value} suffix={n.suffix} />
          </span>
          <span className="font-mono text-[0.875rem] leading-[1.25rem] text-foreground-muted">{n.caption}</span>
        </Reveal>
      ))}
    </ul>
  </section>
);
