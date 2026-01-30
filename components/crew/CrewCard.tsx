"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CrewCardProps {
  name: string;
  stance: string;
  style: string;
  image: string;
  bio: string;
  index: number;
}

export default function CrewCard({ name, stance, style, image, bio, index }: CrewCardProps) {
  return (
    <motion.div
        initial={{ opacity: 0, rotate: index % 2 === 0 ? -10 : 10, scale: 0.8 }}
        whileInView={{ opacity: 1, rotate: index % 2 === 0 ? -2 : 2, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative group w-full max-w-sm mx-auto"
    >
      {/* Tape Effect */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-concrete/60 transform rotate-1 z-20" />

      {/* Polaroid Body */}
      <div className="bg-white p-4 pb-16 shadow-2xl transform transition-transform duration-300 group-hover:scale-105 group-hover:rotate-0">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/5] bg-gray-200">
           <img 
             src={image} 
             alt={name}
             className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
           />
           {/* Glitch Overlay on Hover */}
           <div className="absolute inset-0 bg-acid-green mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity" />
        </div>

        {/* Handwritten Text */}
        <div className="mt-4 font-courier text-asphalt">
           <h3 className="text-2xl font-bold uppercase tracking-tighter">{name}</h3>
           <div className="flex justify-between text-xs mt-2 border-t-2 border-asphalt pt-2">
             <span>Stance: {stance}</span>
             <span>Style: {style}</span>
           </div>
           <p className="mt-4 text-sm italic opacity-80">"{bio}"</p>
        </div>
      </div>
      
      {/* Sticker Element */}
       <div className={cn(
           "absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-spray-red flex items-center justify-center text-white font-oswald text-xs rotate-12 shadow-lg",
           index % 3 === 0 ? "bg-acid-green text-asphalt" : ""
       )}>
           BHOPAL<br/>SB
       </div>
    </motion.div>
  );
}
