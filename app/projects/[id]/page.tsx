"use client";

import { use } from "react";
import { PROJECT_DATA } from "@/lib/data";
import MasonryWall from "@/components/gallery/MasonryWall";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import RevealSection from "@/components/ui/RevealSection";
import MagneticButton from "@/components/ui/MagneticButton";

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
      <SmoothScroll>
        {/* Back Button */}
        <div className="fixed top-24 left-8 z-50">
          <MagneticButton strength={0.2}>
            <Link
              href="/projects"
              className="flex items-center gap-2 font-oswald text-xl hover:text-acid-green transition-colors bg-asphalt/80 backdrop-blur-sm px-4 py-2 border border-zinc-800"
            >
              <ArrowLeft size={18} /> BACK
            </Link>
          </MagneticButton>
        </div>

        <div className="container mx-auto py-32 px-4">
          {/* HEADER */}
          <RevealSection className="mb-20">
            <div className="border-b border-zinc-800 pb-8">
              <span className="font-courier text-concrete text-lg">{project.date}</span>
              <SplitText
                as="h1"
                animation="slide-up"
                stagger={0.04}
                delay={0.2}
                className="font-oswald text-6xl md:text-9xl text-white uppercase tracking-tighter mb-4 text-glow-green"
              >
                {project.title}
              </SplitText>
              <RevealSection direction="up" delay={0.5}>
                <p className="font-courier text-xl max-w-2xl text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </RevealSection>
            </div>
          </RevealSection>

          {/* MAIN VIDEO */}
          <RevealSection direction="scale" delay={0.3}>
            <div className="aspect-video w-full bg-black mb-24 border border-zinc-800 shadow-2xl relative overflow-hidden group glow-border-green">
              <div className="absolute inset-0 bg-acid-green/5 pointer-events-none mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
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
          </RevealSection>

          {/* GALLERY */}
          <RevealSection delay={0.2}>
            <div className="mb-24">
              <SplitText
                as="h2"
                animation="glitch-in"
                className="font-oswald text-4xl mb-12 border-l-4 border-acid-green pl-6 text-glow-green"
              >
                PHOTO DUMP
              </SplitText>
              <MasonryWall items={project.images as any} />
            </div>
          </RevealSection>
        </div>
      </SmoothScroll>
    </main>
  );
}
