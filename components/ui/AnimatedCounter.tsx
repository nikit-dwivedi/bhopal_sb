"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  label?: string;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
  label = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReduced = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 100,
    duration: duration * 1000,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, target, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (v) => {
      setDisplayValue(Math.round(v));
    });
    return unsubscribe;
  }, [springValue]);

  if (prefersReduced) {
    return (
      <div ref={ref} className={className}>
        <span className="font-oswald text-5xl md:text-7xl text-acid-green">
          {prefix}{target}{suffix}
        </span>
        {label && <span className="block font-courier text-concrete text-sm mt-2 uppercase tracking-widest">{label}</span>}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <motion.span
        className="font-oswald text-5xl md:text-7xl text-acid-green inline-block tabular-nums"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {prefix}{displayValue}{suffix}
      </motion.span>
      {label && (
        <motion.span
          className="block font-courier text-concrete text-sm mt-2 uppercase tracking-widest"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {label}
        </motion.span>
      )}
    </div>
  );
}
