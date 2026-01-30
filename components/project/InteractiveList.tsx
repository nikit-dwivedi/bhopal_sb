"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { PROJECT_DATA } from "@/lib/data";

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
                       initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                       animate={{ opacity: 0.6, scale: 1, filter: "blur(0px)" }}
                       exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                       transition={{ duration: 0.4 }}
                       className="w-[50vw] h-[50vw] object-cover rounded-full mix-blend-hard-light"
                   />
               )}
           </AnimatePresence>
       </div>

       {/* List */}
       <div className="relative z-10 container mx-auto px-4">
           {PROJECT_DATA.map((project, index) => (
               <Link 
                  key={project.id} 
                  href={`/projects/${project.id}`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="block group border-b border-concrete/30 py-8 md:py-12 relative overflow-hidden"
               >
                   <div className="flex items-baseline justify-between transition-transform duration-300 group-hover:translate-x-4">
                       <span className="font-courier text-concrete text-sm md:text-xl">0{index + 1}</span>
                       <h2 className="font-oswald text-5xl md:text-8xl text-zinc-100 uppercase group-hover:text-acid-green transition-colors">
                           {project.title}
                       </h2>
                       <span className="font-courier text-zinc-500 text-xs md:text-sm hidden md:inline-block">
                           {project.date}
                       </span>
                   </div>
                   {/* Hover Stripe */}
                   <div className="absolute bottom-0 left-0 w-full h-[1px] bg-spray-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
               </Link>
           ))}
       </div>
    </div>
  );
}
