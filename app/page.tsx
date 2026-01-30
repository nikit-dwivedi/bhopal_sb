"use client";

import { Instagram, Youtube, Mail } from "lucide-react";
import StaticIntro from "@/components/ui/StaticIntro";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ZineLayout from "@/components/layout/ZineLayout";
import TapeDeck from "@/components/project/TapeDeck";

export default function Home() {
  return (
    <main className="min-h-screen bg-asphalt selection:bg-acid-green selection:text-asphalt">
      <StaticIntro />
      <SmoothScroll>
        
        {/* HERO SECTION */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden border-b-4 border-concrete">
          {/* Video Background Placeholder */}
          <div className="absolute inset-0 z-0 opacity-40 grayscale contrast-125">
             <img 
               src="https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=1920&auto=format&fit=crop" 
               alt="Background Texture" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-asphalt/50 mix-blend-multiply" />
          </div>

          <div className="relative z-10 text-center mix-blend-hard-light">
             <h1 className="font-oswald text-[12vw] leading-none text-zinc-200 tracking-tighter animate-glitch">
               BHOPAL<br/>SB
             </h1>
             <p className="font-courier text-acid-green text-xl md:text-3xl mt-4 tracking-widest uppercase bg-asphalt inline-block px-4 rotate-2">
               EST. 20XX // SKATE. CREATE. DESTROY.
             </p>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-12 h-12 text-concrete" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* TAPE DECK (PROJECTS) */}
        <TapeDeck />

        <ZineLayout>
          {/* MANIFESTO */}
          <section className="relative bg-zinc-100 p-8 md:p-12 drop-shadow-2xl transform -rotate-1 torn-edge max-w-4xl mx-auto my-24">
             <h2 className="font-oswald text-6xl text-asphalt mb-8 uppercase">The Manifesto</h2>
             <div className="columns-1 md:columns-2 gap-8 font-courier text-asphalt text-lg leading-relaxed">
                <p className="mb-4">
                  We are not a club. We are a movement. Born from the streets of Bhopal, we ride concrete waves and paint the city in our own colors. 
                </p>
                <p className="mb-4 font-bold">
                  Skateboarding. BMX. Graffiti. Music. 
                </p>
                <p>
                  It's all noise until you make it a symphony. We build our own spots, film our own clips, and write our own rules. Welcome to the underground.
                </p>
             </div>
             <div className="mt-8 flex justify-end">
                <span className="font-oswald text-4xl text-spray-red -rotate-12 border-4 border-spray-red p-2 inline-block mask-stamp">
                  RAW & UNCUT
                </span>
             </div>
          </section>

          {/* FOOTER */}
          <footer className="border-t-4 border-concrete bg-zinc-900 p-12 md:p-24 text-center">
             <h3 className="font-oswald text-4xl text-zinc-500 mb-8 uppercase tracking-widest">Connect with the Chaos</h3>
             <div className="flex justify-center gap-8 mb-12">
                <a href="https://instagram.com/bhopal.sb" target="_blank" className="hover:text-acid-green transition-colors transform hover:scale-110">
                  <Instagram size={48} />
                </a>
                <a href="#" className="hover:text-spray-red transition-colors transform hover:scale-110">
                  <Youtube size={48} />
                </a>
                <a href="mailto:sk8bhopal@gmail.com" className="hover:text-zinc-100 transition-colors transform hover:scale-110">
                  <Mail size={48} />
                </a>
             </div>
             <p className="font-courier text-zinc-600 text-sm">
               © {new Date().getFullYear()} BHOPAL SB. ALL RIGHTS RESERVED. <br/>
               BUILT FOR THE STREETS.
             </p>
          </footer>
        </ZineLayout>
      </SmoothScroll>
    </main>
  );
}
