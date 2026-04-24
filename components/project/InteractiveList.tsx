"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { PROJECT_DATA } from "@/lib/data";
import RevealSection from "@/components/ui/RevealSection";

export default function InteractiveList() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const activeImage = PROJECT_DATA.find((p) => p.id === hoveredProject)?.cover;

  return (
    <div className="relative py-20">
      {/* Background Image Floater */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center opacity-20 md:opacity-100">
        <AnimatePresence mode="wait">
          {activeImage && (
            <motion.img
              key={activeImage}
              src={activeImage}
              initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
              animate={{ opacity: 0.5, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-[50vw] h-[50vw] object-cover rounded-full mix-blend-hard-light"
            />
          )}
        </AnimatePresence>
      </div>

      {/* List */}
      <div className="relative z-10 container mx-auto px-4">
        {PROJECT_DATA.map((project, index) => (
          <RevealSection key={project.id} direction="up" delay={index * 0.1}>
            <Link
              href={`/projects/${project.id}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="block group border-b border-zinc-800/50 py-8 md:py-14 relative overflow-hidden"
            >
              <div className="flex items-baseline justify-between transition-all duration-500 group-hover:translate-x-6">
                <span className="font-courier text-zinc-600 text-sm md:text-xl tabular-nums">
                  0{index + 1}
                </span>
                <h2 className="font-oswald text-5xl md:text-8xl text-zinc-100 uppercase group-hover:text-acid-green transition-colors duration-300 group-hover:text-glow-green">
                  {project.title}
                </h2>
                <span className="font-courier text-zinc-600 text-xs md:text-sm hidden md:inline-block group-hover:text-acid-green/60 transition-colors">
                  {project.date}
                </span>
              </div>

              {/* Hover Line — Animated with glow */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-acid-green via-spray-red to-acid-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left shadow-[0_0_10px_rgba(204,255,0,0.3)]" />

              {/* Arrow indicator */}
              <motion.span
                className="absolute right-4 top-1/2 -translate-y-1/2 text-acid-green opacity-0 group-hover:opacity-100 transition-all duration-300 font-oswald text-2xl"
                initial={false}
              >
                →
              </motion.span>
            </Link>
          </RevealSection>
        ))}
      </div>
    </div>
  );
}
