import { Reveal, STEP } from "../ui/reveal";

export const Statement = () => (
  <section id="statement" aria-labelledby="statement-title" className="mx-auto max-w-[90rem] px-[5rem] max-[900px]:px-5">
    <Reveal className="flex flex-col items-center gap-6 rounded-plate bg-accent px-10 py-24 text-center text-on-accent max-[900px]:px-5 max-[900px]:py-14">
      <p className="font-mono text-[0.875rem] leading-[1.25rem] opacity-60">[ what we are actually building ]</p>
      <Reveal kind="focus" delay={STEP} tag="h2" className="max-w-[56rem] text-[2.75rem] leading-[3.875rem] font-semibold tracking-[-0.125rem] max-[900px]:text-[1.75rem] max-[900px]:leading-[2.25rem]">
        <span id="statement-title">
          The best lesson is the one <em className="font-serif text-[1.15em] font-normal italic">you actually finish</em>.
        </span>
      </Reveal>
      <span aria-hidden className="grid size-[4.75rem] place-items-center rounded-[1.5rem] bg-on-accent font-mono text-[1.125rem] text-accent">
        ME
      </span>
    </Reveal>
  </section>
);
