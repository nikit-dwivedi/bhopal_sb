"use client";

import InteractiveList from "@/components/project/InteractiveList";
import SmoothScroll from "@/components/ui/SmoothScroll";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-asphalt text-zinc-100">
      <SmoothScroll>
         <div className="py-24 px-4 container mx-auto">
             <header className="mb-24 text-center relative">
                 <h1 className="font-oswald text-[15vw] leading-[0.8] text-outline-acid opacity-10 absolute top-0 left-0 w-full pointer-events-none select-none">
                     ARCHIVES
                 </h1>
                 <div className="relative z-10 pt-16">
                    <h2 className="font-oswald text-6xl md:text-8xl text-zinc-100">
                        THE TAPES
                    </h2>
                    <p className="font-courier text-concrete mt-4 max-w-lg mx-auto">
                        Documenting the chaos. Select a tape to play.
                    </p>
                 </div>
             </header>

             <InteractiveList />
             
         </div>
      </SmoothScroll>
    </main>
  );
}
