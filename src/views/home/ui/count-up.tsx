"use client";

import { animated, useSpring } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

import { useMotionOff } from "@/hooks/use-motion-off";

/** Counts 0 → value once the number is on screen (1.4 s ease-out). */
export const CountUp = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [seen, setSeen] = useState(false);
  const motionOff = useMotionOff();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSeen(true);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const { n } = useSpring({
    n: seen || motionOff ? value : 0,
    immediate: motionOff,
    config: { duration: 1400, easing: (t: number) => 1 - (1 - t) ** 3 },
  });

  return (
    <span ref={ref} className="tabular-nums">
      <span className="sr-only">
        {value}
        {suffix}
      </span>
      <animated.span aria-hidden>{n.to((v) => `${Math.round(v)}${suffix}`)}</animated.span>
    </span>
  );
};
