"use client";

import { use } from "react"; // Next.js 15+ unwrapping, safe for 16 too
import { PROJECT_DATA } from "@/lib/data";
import MasonryWall from "@/components/gallery/MasonryWall";
import SpeedWobble from "@/components/ui/SpeedWobble";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = PROJECT_DATA.find((p) => p.id === id);

  if (!project) {
      return (
          <div className="h-screen flex items-center justify-center bg-asphalt text-acid-green font-oswald text-4xl">
              PROJECT NOT FOUND
          </div>
      );
  }

  return (
    <main className="min-h-screen bg-asphalt text-zinc-100">
       <SpeedWobble>
          {/* Back Button */}
          <div className="fixed top-8 left-8 z-50">
             <Link href="/projects" className="flex items-center gap-2 font-oswald text-xl hover:text-acid-green transition-colors bg-asphalt/80 px-4 py-2">
                 <ArrowLeft /> BACK
             </Link>
          </div>

          <div className="container mx-auto py-24 px-4">
             {/* HEADER */}
             <div className="mb-16 border-b-4 border-spray-red pb-8">
                 <span className="font-courier text-concrete">{project.date}</span>
                 <h1 className="font-oswald text-6xl md:text-8xl text-white uppercase tracking-tighter mb-4">
                     {project.title}
                 </h1>
                 <p className="font-courier text-xl max-w-2xl text-zinc-400">
                     {project.description}
                 </p>
             </div>

             {/* MAIN VIDEO */}
             <div className="aspect-video w-full bg-black mb-24 border-2 border-concrete shadow-2xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-acid-green/10 pointer-events-none mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                 <iframe 
                    width="100%" 
                    height="100%" 
                    src={project.videoUrl} 
                    title={project.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                 />
             </div>

             {/* GALLERY */}
             <div className="mb-24">
                 <h2 className="font-oswald text-4xl mb-8 border-l-8 border-acid-green pl-4">
                     PHOTO DUMP
                 </h2>
                 <MasonryWall items={project.images as any} />
             </div>
          </div>
       </SpeedWobble>
    </main>
  );
}
