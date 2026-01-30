"use client";

import { CREW_DATA } from "@/lib/data";
import CrewCard from "@/components/crew/CrewCard";
import ZineLayout from "@/components/layout/ZineLayout";
import StaticIntro from "@/components/ui/StaticIntro"; // Optional reuse
import SpeedWobble from "@/components/ui/SpeedWobble";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-asphalt text-zinc-200">
      <SpeedWobble>
        <ZineLayout>
           {/* MANIFESTO SECTION */}
           <section className="text-center py-20 px-4">
               <h1 className="font-oswald text-8xl md:text-9xl text-acid-green animate-glitch mb-8">
                   WHO WE ARE
               </h1>
               <div className="max-w-3xl mx-auto font-courier text-lg md:text-xl leading-relaxed bg-zinc-900/80 p-8 transform -rotate-1 drop-shadow-xl border border-concrete torn-edge">
                  <p className="mb-6">
                    Bhopal SB started as three kids with one broken board sharing a single spot under the flyover. 
                  </p>
                  <p className="mb-6">
                    Today, we are a collective of skaters, artists, and noise-makers. We don't just ride the city; we re-write it. Every ledge is a legacy. Every wall is a canvas.
                  </p>
                  <p className="font-bold text-spray-red">
                    NO COACHES. NO RULES. JUST SKATE.
                  </p>
               </div>
           </section>

           {/* CREW GRID */}
           <section className="py-20">
               <div className="flex items-center justify-center mb-16">
                   <span className="bg-concrete text-asphalt font-oswald text-4xl px-4 py-2 rotate-2 transform">
                       THE SQUAD
                   </span>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                  {CREW_DATA.map((member, index) => (
                      <CrewCard key={member.id} {...member} index={index} />
                  ))}
               </div>
           </section>
        </ZineLayout>
      </SpeedWobble>
    </main>
  );
}
