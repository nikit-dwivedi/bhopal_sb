"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function DistortionCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Mobile check within effect to ensure window is available
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
       if ((e.target as HTMLElement).tagName === "A" || (e.target as HTMLElement).closest("a") || (e.target as HTMLElement).closest("button")) {
         setIsHovering(true);
       } else {
         setIsHovering(false);
       }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Don't render on server or if mobile (requires hydration check ideally, but this is simple)
  // For strict hydration match, we'd use a mounted state, but CSS/JS check is okay for this effect
  
  return (
    <>
      {/* SVG Filter Definition */}
      <svg className="fixed top-0 left-0 w-0 h-0 pointer-events-none">
        <filter id="cursor-distort">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
        </filter>
      </svg>

      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          backgroundColor: "#ccff00", // acid-green
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          filter: isHovering ? "url(#cursor-distort)" : "none",
        }}
      />
    </>
  );
}
