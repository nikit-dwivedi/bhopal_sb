"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useRef } from "react";

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
      {/* Define SVG Filters */}
      <svg className="hidden">
        <defs>
          <filter id="halftone">
            <feColorMatrix type="matrix" values="0.2126 0.7152 0.0722 0 0
                  0.2126 0.7152 0.0722 0 0
                  0.2126 0.7152 0.0722 0 0
                  0 0 0 1 0" />
            <feComponentTransfer>
              <feFuncR type="discrete" tableValues="0 1" />
              <feFuncG type="discrete" tableValues="0 1" />
              <feFuncB type="discrete" tableValues="0 1" />
            </feComponentTransfer>
          </filter>
          <filter id="image-distort">
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" seed="2" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {items.map((item, index) => (
        <GalleryImage key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}

function GalleryImage({ item, index }: { item: ImageItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="relative group break-inside-avoid"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tape Effect */}
      <div className={cn(
        "absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-concrete/60 transform z-20 shadow-sm backdrop-blur-sm",
        index % 2 === 0 ? "rotate-2" : "-rotate-3"
      )} />

      <div className="overflow-hidden border border-zinc-800 bg-asphalt transition-all duration-500 hover:border-acid-green/30 hover:shadow-[0_0_30px_rgba(204,255,0,0.05)]">
        <div className="relative overflow-hidden">
          <img
            ref={imgRef}
            src={item.src}
            alt={item.alt}
            className="w-full h-auto object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-700 ease-out group-hover:scale-105"
            style={{
              filter: isHovered ? "none" : "url(#halftone)",
              transition: "filter 0.5s ease, transform 0.7s ease",
            }}
          />

          {/* Distortion overlay on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none mix-blend-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.15 : 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "linear-gradient(45deg, rgba(204,255,0,0.2), rgba(255,0,51,0.1))",
            }}
          />

          {/* RGB shift effect on hover */}
          <div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-screen"
            style={{
              background: isHovered
                ? "linear-gradient(90deg, rgba(255,0,0,0.05) 0%, rgba(0,255,0,0.05) 50%, rgba(0,0,255,0.05) 100%)"
                : "none",
            }}
          />

          {/* Scan lines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.03) 3px, rgba(0,0,0,0.03) 6px)",
            }}
          />
        </div>

        {/* Caption on Hover */}
        <div className="absolute bottom-0 left-0 w-full bg-asphalt/90 backdrop-blur-sm p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out border-t border-zinc-800">
          <p className="font-courier text-xs text-acid-green uppercase tracking-widest text-center text-glow-green">
            Bhopal SB // {item.alt}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
