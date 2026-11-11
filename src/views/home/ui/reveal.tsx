"use client";

import type { ReactNode } from "react";

import { Inview } from "@/components/animation/springs/in-view";
import type { Tags } from "@/types/springs";

/** The two presets every motion on the page uses (ms-free spring physics). */
export const SPRING = { tension: 280, friction: 32 };
export const SPRING_SOFT = { tension: 120, friction: 26 };
/** The stagger between siblings, in ms. */
export const STEP = 70;

const KINDS = {
  rise: { from: { opacity: 0, y: 24 }, to: { opacity: 1, y: 0 }, config: SPRING },
  fade: { from: { opacity: 0 }, to: { opacity: 1 }, config: SPRING_SOFT },
  focus: {
    from: { opacity: 0, filter: "blur(10px)" },
    to: { opacity: 1, filter: "blur(0px)" },
    config: SPRING_SOFT,
  },
} as const;

type RevealProps = {
  kind?: keyof typeof KINDS;
  delay?: number;
  tag?: Tags;
  className?: string;
  children: ReactNode;
};

/** A once-only entrance: rise (opacity + 24px), fade, or focus (out of a blur). */
export const Reveal = ({ kind = "rise", delay = 0, tag = "div", className, children }: RevealProps) => {
  const preset = KINDS[kind];
  return (
    <Inview
      tag={tag}
      mode="once"
      from={preset.from}
      to={preset.to}
      config={preset.config}
      delayIn={delay}
      className={className}
    >
      {children}
    </Inview>
  );
};
