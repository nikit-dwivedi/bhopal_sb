"use client";

import InteractiveList from "@/components/project/InteractiveList";
import SmoothScroll from "@/components/ui/SmoothScroll";
import SplitText from "@/components/ui/SplitText";
import RevealSection from "@/components/ui/RevealSection";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-asphalt text-zinc-100">
      <SmoothScroll>
        <div className="py-24 px-4 container mx-auto">
          <header className="mb-24 text-center relative">
            <h1 className="font-oswald text-[15vw] leading-[0.8] text-outline-acid opacity-[0.04] absolute top-0 left-0 w-full pointer-events-none select-none">
              ARCHIVES
            </h1>
            <div className="relative z-10 pt-16">
              <SplitText
                as="h2"
                animation="slide-up"
                stagger={0.05}
                className="font-oswald text-6xl md:text-8xl text-zinc-100 text-glow-green"
              >
                THE TAPES
              </SplitText>
              <RevealSection direction="up" delay={0.4}>
                <p className="font-courier text-concrete mt-6 max-w-lg mx-auto text-lg">
                  Documenting the chaos. Select a tape to play.
                </p>
              </RevealSection>
            </div>
          </header>

          <InteractiveList />
        </div>
      </SmoothScroll>
    </main>
  );
}
