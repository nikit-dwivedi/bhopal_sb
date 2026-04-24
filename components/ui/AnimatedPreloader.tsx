"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function AnimatedPreloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerating progress
        const increment = prev < 70 ? Math.random() * 15 : Math.random() * 8;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => setIsLoading(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  if (prefersReduced) {
    if (!isLoading) return null;
    return (
      <div className="fixed inset-0 z-[300] bg-asphalt flex items-center justify-center">
        <p className="font-oswald text-acid-green text-2xl">Loading...</p>
      </div>
    );
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[300] bg-asphalt flex flex-col items-center justify-center overflow-hidden"
          exit={{
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            transition: { duration: 0.8, ease: [0.7, 0, 0.84, 0], delay: 0.2 },
          }}
        >
          {/* Noise texture overlay */}
          <motion.div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
              backgroundRepeat: "repeat",
            }}
          />

          {/* Animated background shards */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full bg-acid-green/5 shard-1"
            animate={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-spray-red/5 shard-2"
            animate={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          />

          {/* Main logo text */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              className="overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              <h1 className="font-oswald text-6xl md:text-9xl text-acid-green uppercase tracking-tighter whitespace-nowrap">
                BHOPAL SB
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="font-courier text-concrete text-sm md:text-lg tracking-[0.5em] uppercase mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              SKATE. CREATE. DESTROY.
            </motion.p>

            {/* Progress bar */}
            <div className="mt-12 w-48 md:w-64 h-[2px] bg-zinc-800 relative overflow-hidden">
              <motion.div
                className="h-full bg-acid-green origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            </div>

            {/* Progress number */}
            <motion.span
              className="font-courier text-zinc-600 text-xs mt-3 tabular-nums"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {Math.round(progress)}%
            </motion.span>
          </div>

          {/* Corner accents */}
          <motion.div
            className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-acid-green/40"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-spray-red/40"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
