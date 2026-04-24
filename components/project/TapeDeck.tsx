"use client";

import { useRef, useEffect, useState  } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { PROJECT_DATA } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function TapeDeck() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [xEnd, setXEnd] = useState("-50%");
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;

    const minWidth = 375;
    const maxWidth = 1920;

    const minTranslate = -70;
    const maxTranslate = -45;

    const clampedWidth = Math.min(
      Math.max(width, minWidth),
      maxWidth
    );

    const value =
      minTranslate +
      ((clampedWidth - minWidth) /
        (maxWidth - minWidth)) *
        (maxTranslate - minTranslate);

    setXEnd(`${value}%`);
  };

  handleResize();

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

  // Tighter scroll sync: 300vh height, transform only to -50% to prevent overscroll into void
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 90 });
  
  // Transform x based on content width approximation. 
  // We have Title (40vw) + 3 Tapes (60vh each ~ 30vw) + End (50vw) approx.
  // Let's being conservative to keep content on screen.
  const x = useTransform(
  smoothProgress,
  [0, 1],
  ["0%", xEnd]
);
  
  // Parallax background layers
  const bgX = useTransform(smoothProgress, [0, 1], ["0%", "10%"]);
  const stickerRotate = useTransform(smoothProgress, [0, 1], [0, 180]);

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-zinc-900 border-y-8 border-concrete overflow-clip">
      
      {/* BACKGROUND CHAOS - GRAFFITI WALL */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-150" />
      
      {/* Moving Graffiti Text */}
      <motion.div style={{ x: bgX }} className="absolute inset-0 z-0 flex flex-col justify-between opacity-10 font-marker text-[15vw] leading-none whitespace-nowrap text-zinc-500 select-none overflow-hidden">
        <div className="translate-x-[-10%]">SKATE CREATE DESTROY</div>
        <div className="translate-x-[-20%] text-outline-acid">NO RULES JUST RIDE</div>
        <div className="translate-x-[-5%]">BHOPAL SB FOREVER</div>
      </motion.div>

      {/* STICKY CONTAINER */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden perspective-1000">
        
        {/* Floating Sticker (Parallax) */}
        <motion.div 
          style={{ rotate: stickerRotate }} 
          className="absolute bottom-20 right-20 z-10 w-40 h-40 bg-spray-red rounded-full flex items-center justify-center font-oswald text-2xl text-white mix-blend-hard-light shadow-2xl skew-y-12"
        >
          <span className="animate-pulse">REC ●</span>
        </motion.div>

        <motion.div style={{ x }} className="flex gap-12 px-12 items-center">
           {/* Section Title Card - Tilted */}
           <div className="flex-shrink-0 w-[80vw] md:w-[40vw] flex flex-col justify-center p-12 bg-asphalt transform rotate-2 border-4 border-acid-green shadow-[12px_12px_0px_#8c8c8c] z-20">
               <h2 className="font-oswald text-[12vw] md:text-[8vw] leading-[0.8] text-white uppercase torn-edge">
                   THE<br/>TAPES
               </h2>
               <div className="mt-6 flex flex-wrap gap-2 font-courier text-sm text-asphalt">
                   <span className="bg-acid-green px-2 py-1 transform -rotate-2">#STREET</span>
                   <span className="bg-white px-2 py-1 transform rotate-1">#RAW</span>
                   <span className="bg-spray-red text-white px-2 py-1 transform -rotate-1">#UNCUT</span>
               </div>
           </div>

           {/* Tape Items - MESSY PILE */}
           {PROJECT_DATA.map((project, index) => {
               // Randomize rotation for chaos
               const randomRotate = index % 2 === 0 ? "rotate-6 hover:rotate-2" : "-rotate-3 hover:-rotate-1";
               const randomMargin = index === 1 ? "-mt-24" : "mt-0"; // Stagger height
               
               return (
                <Link 
                  key={project.id} 
                  href={`/projects/${project.id}`}
                  className={cn(
                      "relative group flex-shrink-0 w-[80vw] md:w-[60vh] aspect-[16/10] bg-zinc-800 shadow-2xl transition-all duration-500 hover:z-50 hover:scale-110",
                      randomRotate,
                      randomMargin
                  )}
                >
                  {/* Tape Texture Overlay */}
                  <div className="absolute inset-0 z-20 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-30 mix-blend-overlay pointer-events-none" />
                  
                  {/* Image with Glitch Filter */}
                  <img 
                    src={project.cover} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0 contrast-125 border-4 border-transparent group-hover:border-acid-green"
                  />
                  
                  {/* Scribble Overlay */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-40 bg-spray-red/10 mix-blend-color-burn" />

                  {/* Messy Tape Label */}
                  <div className="absolute bottom-4 right-4 w-2/3 bg-white transform -rotate-2 shadow-lg p-2 flex flex-col items-center justify-center z-30 group-hover:bottom-1/2 group-hover:right-1/2 group-hover:translate-x-1/2 group-hover:translate-y-1/2 transition-all duration-300">
                     <div className="font-marker text-2xl md:text-3xl text-black uppercase font-bold tracking-tighter">
                         {project.title}
                     </div>
                  </div>
                </Link>
               );
           })}

            {/* End Card - Giant Text */}
           <div className="flex-shrink-0 w-[120vw] flex flex-col items-start justify-center relative translate-y-12 pl-12">
               <span className="font-courier text-concrete text-xl mb-2">END OF REEL.</span>
               <Link href="/projects" className="font-oswald text-[10vw] leading-none text-white hover:text-acid-green transition-colors underline decoration-spray-red decoration-8 underline-offset-8">
                   ARCHIVES &rarr;
               </Link>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
