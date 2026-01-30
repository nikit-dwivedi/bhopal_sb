"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils"; // Assuming you have standard utils, if not I'll define local

export default function StaticIntro() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisible) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const drawStatic = () => {
      const w = canvas.width;
      const h = canvas.height;
      const idata = ctx.createImageData(w, h); // Create fresh buffer
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;

      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.5) {
            buffer32[i] = 0xff000000; // Black fully opaque
        } else {
            buffer32[i] = 0xffffffff; // White fully opaque
        }
      }

      ctx.putImageData(idata, 0, 0);
      animationFrameId = requestAnimationFrame(drawStatic);
    };

    drawStatic();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div 
        className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer bg-asphalt"
        onClick={() => setIsVisible(false)}
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-10 mix-blend-overlay pointer-events-none"
      />
      <div className="relative z-10 text-center font-oswald uppercase animate-pulse">
        <h1 className="text-9xl text-acid-green drop-shadow-lg tracking-tighter">
            BREAK THE NOISE
        </h1>
        <p className="font-courier text-concrete mt-4 text-xl">Click to Jam</p>
      </div>
    </div>
  );
}
