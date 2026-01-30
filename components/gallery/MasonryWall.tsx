"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ImageItem {
  id: string;
  src: string;
  alt: string;
  aspect: "square" | "portrait" | "landscape";
}

interface MasonryWallProps {
  items: ImageItem[];
}

export default function MasonryWall({ items }: MasonryWallProps) {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 p-4">
      {/* Define Halftone Filter */}
      <svg className="hidden">
        <defs>
          <filter id="halftone">
            <feColorMatrix type="matrix" values="0.2126 0.7152 0.0722 0 0
                  0.2126 0.7152 0.0722 0 0
                  0.2126 0.7152 0.0722 0 0
                  0 0 0 1 0" />
             {/* This is a simplified contrast/grain generic, real halftone is standard SVG dot pattern usually. 
                 Using a high contrast threshold trick here for 'User-friendly' crazy. */}
             <feComponentTransfer>
                 <feFuncR type="discrete" tableValues="0 1"/>
                 <feFuncG type="discrete" tableValues="0 1"/>
                 <feFuncB type="discrete" tableValues="0 1"/>
             </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative group break-inside-avoid"
        >
          {/* Tape Effect */}
          <div className={cn(
              "absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-concrete/80 transform -rotate-2 z-20 shadow-sm",
              index % 2 === 0 ? "rotate-2" : "-rotate-3"
          )} />

          <div className="overflow-hidden border-2 border-asphalt bg-asphalt">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-auto object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-300 ease-in-out"
              style={{ filter: "url(#halftone)" }} // Apply initial crazy filter
            />
            {/* Hover Burn Overlay */}
            <div className="absolute inset-0 bg-spray-red mix-blend-color-burn opacity-0 group-hover:opacity-40 transition-opacity duration-200" />
            
            {/* Caption on Hover */}
            <div className="absolute bottom-0 left-0 w-full bg-asphalt/90 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-courier text-xs text-acid-green uppercase tracking-widest text-center">
                    Bhopal SB // {item.id}
                </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
