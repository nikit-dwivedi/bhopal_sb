"use client";

import { motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";
import React, { ReactNode } from "react";

export default function SpeedWobble({ children }: { children: ReactNode }) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });

  const skewX = useTransform(smoothVelocity, [-3000, 3000], [-10, 10]); 
  
  // Dynamic blur based on speed magnitude
  const filter = useTransform(smoothVelocity, (v) => {
    const blurValue = Math.min(Math.abs(v) / 500, 4); // Cap blur at 4px
    return `blur(${blurValue}px)`;
  });

  return (
    <motion.div style={{ skewX, filter }} className="will-change-transform">
      {children}
    </motion.div>
  );
}
