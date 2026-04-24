"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import TiltCard from "@/components/ui/TiltCard";

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
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="relative group w-full max-w-sm mx-auto"
    >
      <TiltCard tiltAmount={12} className="cursor-pointer">
        {/* Tape Effect */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-concrete/50 transform rotate-1 z-20 backdrop-blur-sm" />

        {/* Polaroid Body */}
        <div className="bg-white p-4 pb-16 shadow-2xl transform transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(204,255,0,0.1)]">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/5] bg-gray-200">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            {/* Glitch Overlay on Hover */}
            <div className="absolute inset-0 bg-acid-green mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            
            {/* Scan line effect */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
              }}
            />
          </div>

          {/* Handwritten Text */}
          <div className="mt-4 font-courier text-asphalt">
            <h3 className="text-2xl font-bold uppercase tracking-tighter">{name}</h3>
            <div className="flex justify-between text-xs mt-2 border-t-2 border-asphalt pt-2">
              <span>Stance: {stance}</span>
              <span>Style: {style}</span>
            </div>
            <p className="mt-4 text-sm italic opacity-80">&quot;{bio}&quot;</p>
          </div>
        </div>

        {/* Sticker Element */}
        <div className={cn(
          "absolute -bottom-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center text-white font-oswald text-xs rotate-12 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-0",
          index % 3 === 0 ? "bg-acid-green text-asphalt shadow-[0_0_20px_rgba(204,255,0,0.3)]" : "bg-spray-red shadow-[0_0_20px_rgba(255,0,51,0.3)]"
        )}>
          BHOPAL<br />SB
        </div>
      </TiltCard>
    </motion.div>
  );
}
