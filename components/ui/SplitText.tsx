"use client";

import { motion, type Variants } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface SplitTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  stagger?: number;
  once?: boolean;
  animation?: "slide-up" | "fade" | "slide-rotate" | "glitch-in";
}

const containerVariants: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: {
      staggerChildren: stagger,
    },
  }),
};

const animations: Record<string, { hidden: any; visible: any }> = {
  "slide-up": {
    hidden: { y: "110%", opacity: 0, rotateX: 90 },
    visible: {
      y: "0%",
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  },
  fade: {
    hidden: { opacity: 0, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  "slide-rotate": {
    hidden: { y: "100%", opacity: 0, rotate: 8 },
    visible: {
      y: "0%",
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  },
  "glitch-in": {
    hidden: { x: -20, opacity: 0, skewX: 20 },
    visible: {
      x: 0,
      opacity: 1,
      skewX: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  },
};

export default function SplitText({
  children,
  className = "",
  as: Tag = "h2",
  delay = 0,
  stagger = 0.03,
  once = true,
  animation = "slide-up",
}: SplitTextProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    const MotionTag = motion[Tag];
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  const words = children.split(" ");
  const anim = animations[animation];
  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={`${className} overflow-hidden`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      custom={stagger}
      style={{ perspective: 600 }}
      transition={{ delay }}
    >
      {words.map((word, wIndex) => (
        <span key={wIndex} className="inline-block overflow-hidden mr-[0.3em]">
          {word.split("").map((char, cIndex) => (
            <motion.span
              key={`${wIndex}-${cIndex}`}
              variants={anim}
              className="inline-block will-change-transform"
              style={{ transformOrigin: "bottom center" }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </MotionTag>
  );
}
