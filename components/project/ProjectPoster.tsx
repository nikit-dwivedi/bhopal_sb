"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";

interface ProjectPosterProps {
  id: string;
  title: string;
  date: string;
  cover: string;
}

export default function ProjectPoster({ id, title, date, cover }: ProjectPosterProps) {
  return (
    <Link href={`/projects/${id}`} className="block relative group overflow-hidden bg-asphalt aspect-[3/4] cursor-pointer">
       {/* Background Image */}
       <img 
         src={cover} 
         alt={title}
         className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110 transform"
       />

       {/* Glitch Slices (CSS trick) */}
       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none mix-blend-hard-light bg-acid-green/20" />

       {/* Overlay Content */}
       <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 bg-gradient-to-t from-asphalt to-transparent">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
             <span className="inline-block bg-spray-red text-white text-xs font-courier px-2 py-1 mb-2">
               {date}
             </span>
             <h2 className="font-oswald text-5xl text-white uppercase leading-[0.85] tracking-tighter drop-shadow-lg group-hover:text-acid-green transition-colors">
               {title}
             </h2>
          </div>
       </div>

       {/* Play Button Overlay */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
          <div className="w-20 h-20 bg-acid-green rounded-full flex items-center justify-center shadow-xl">
             <Play className="text-asphalt ml-1" size={32} fill="currentColor" />
          </div>
       </div>
    </Link>
  );
}
