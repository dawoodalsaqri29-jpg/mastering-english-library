import { PACKS, STORE_URL, WHATSAPP_URL } from "@/data/home/content";

import { Accent, Badge, LimeButton } from "../ui/atoms";
import { Reveal, STEP } from "../ui/reveal";

export const Packs = () => (
  <section id="packs" aria-labelledby="packs-title" className="mx-auto max-w-[90rem] px-[5rem] pb-24 max-[900px]:px-5 max-[900px]:pb-14">
    <div className="flex items-end justify-between gap-12 max-[1200px]:flex-col max-[1200px]:items-start">
      <Reveal className="flex flex-col items-start gap-4">
        <Badge>PDF packs</Badge>
        <h2 id="packs-title" className="title-gradient text-[2.75rem] leading-[3.875rem] font-semibold tracking-[-0.125rem] max-[900px]:text-[1.875rem] max-[900px]:leading-[2.625rem]">
          Go further with <Accent>the packs</Accent>.
        </h2>
      </Reveal>
      <Reveal kind="fade" delay={STEP} tag="p" className="max-w-[27.5rem] pb-3 text-[1rem] leading-[1.5rem] text-foreground-muted">
        Store prices below. Teachers can ask for a class set on{" "}
        <a href={WHATSAPP_URL} className="text-accent underline-offset-4 hover:underline">
          WhatsApp
        </a>
        .
      </Reveal>
    </div>
    <ul className="mt-12 grid grid-cols-4 gap-4 max-[1200px]:grid-cols-2 max-[580px]:grid-cols-1">
      {PACKS.map((p, i) => (
        <Reveal key={p.title} tag="li" delay={(i % 4) * STEP}>
          <a
            href={p.href}
            className="flex h-full flex-col gap-3 rounded-card border border-border-subtle bg-surface-card p-6 backdrop-blur-card transition-colors duration-[var(--duration-fast)] ease-entrance hover:border-accent"
          >
            <span className="font-mono text-[0.875rem] leading-[1.25rem] text-foreground-muted">{p.level}</span>
            <span className="text-[1.25rem] leading-[1.75rem] font-medium tracking-[-0.0625rem] text-foreground">{p.title}</span>
            <span className="mt-auto text-[2rem] leading-[2.5rem] font-semibold tracking-[-0.0625rem] text-foreground">{p.price}</span>
          </a>
        </Reveal>
      ))}
    </ul>
    <Reveal kind="fade" delay={STEP} className="mt-10 flex justify-center">
      <LimeButton href={STORE_URL} large>
        See every pack in the store
      </LimeButton>
    </Reveal>
  </section>
);
