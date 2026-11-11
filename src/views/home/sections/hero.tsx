import { LIBRARY_URL } from "@/data/home/content";

import { Accent, Badge, GlassButton, LimeButton } from "../ui/atoms";
import { Reveal, STEP } from "../ui/reveal";

const QUESTIONS = [
  { q: "I ___ to Muscat three times.", a: "have been", ok: true },
  { q: "She ___ her keys yesterday.", a: "lost", ok: true },
  { q: "We ___ here since 2020.", a: "lived", ok: false, fix: "have lived" },
] as const;

export const Hero = () => (
  <section id="hero" className="relative mx-auto grid min-h-[calc(100svh-5.5rem)] max-w-[90rem] grid-cols-[1fr_32rem] items-center gap-16 px-[5rem] py-16 max-[1200px]:grid-cols-1 max-[900px]:px-5 max-[900px]:py-10">
    <div className="flex flex-col items-start gap-6">
      <Reveal>
        <Badge>free library · B1 to C2</Badge>
      </Reveal>
      <Reveal kind="focus" delay={STEP} tag="h1" className="title-gradient max-w-[36rem] text-[4.5rem] leading-[5.25rem] font-semibold tracking-[-0.125rem] max-[1200px]:text-[2.75rem] max-[1200px]:leading-[3.25rem] max-[580px]:text-[2rem] max-[580px]:leading-[2.5rem]">
        English that finally <Accent>sticks</Accent>.
      </Reveal>
      <Reveal kind="fade" delay={2 * STEP} tag="p" className="max-w-[29rem] text-[1.125rem] leading-[1.75rem] text-foreground-muted">
        72 free lessons for Arabic speakers. Read, practise, check your answers, then print the A4 worksheet for class.
      </Reveal>
      <Reveal delay={3 * STEP} className="flex flex-wrap gap-3">
        <LimeButton href={`${LIBRARY_URL}library.html`} large>
          Start free
        </LimeButton>
        <GlassButton href={`${LIBRARY_URL}level-ar.html`}>Find your level, 2 minutes</GlassButton>
      </Reveal>
      <Reveal kind="fade" delay={4 * STEP} tag="p" className="font-mono text-[0.875rem] leading-[1.25rem] text-foreground-muted">
        free / no sign-up / printable A4 worksheets
      </Reveal>
    </div>

    {/* The lesson window: one real exercise, checked. */}
    <Reveal delay={5 * STEP} tag="figure" className="rounded-[1.75rem] border border-border-subtle bg-surface-card p-6 shadow-float backdrop-blur-[1.5rem]">
      <figcaption className="flex items-center justify-between border-b border-border-subtle pb-4">
        <span className="text-[1rem] leading-[1.5rem] text-foreground-muted">Present perfect or past simple?</span>
        <span className="rounded-lg border border-border-subtle px-2.5 py-1 font-mono text-[0.75rem] text-foreground-muted">B1 · grammar</span>
      </figcaption>
      <ol className="mt-4 flex flex-col gap-3">
        {QUESTIONS.map((item, i) => (
          <Reveal key={item.q} tag="li" delay={6 * STEP + i * STEP} className="rounded-2xl border border-border-subtle bg-surface-glass px-4 py-3">
            <p className="text-[1rem] leading-[1.5rem] text-foreground">{item.q}</p>
            <p className="mt-1 font-mono text-[0.875rem] leading-[1.25rem]">
              <span className={item.ok ? "text-accent" : "text-foreground-dim line-through"}>{item.a}</span>
              {"fix" in item && <span className="ml-3 text-accent">→ {item.fix}</span>}
            </p>
          </Reveal>
        ))}
      </ol>
      <p className="mt-4 font-mono text-[0.875rem] leading-[1.25rem] text-foreground-dim">2 of 3 right · answers on page 2</p>
    </Reveal>
  </section>
);
