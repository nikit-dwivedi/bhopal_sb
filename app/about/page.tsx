"use client";

import { CREW_DATA } from "@/lib/data";
import CrewCard from "@/components/crew/CrewCard";
import ZineLayout from "@/components/layout/ZineLayout";
import SmoothScroll from "@/components/ui/SmoothScroll";
import SplitText from "@/components/ui/SplitText";
import RevealSection from "@/components/ui/RevealSection";
import Marquee from "@/components/ui/Marquee";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-asphalt text-zinc-200">
      <SmoothScroll>
        <ZineLayout>
          {/* MANIFESTO SECTION */}
          <section className="text-center py-28 px-4 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-acid-green/5 rounded-full blur-[150px] pointer-events-none" />

            <SplitText
              as="h1"
              animation="slide-up"
              stagger={0.04}
              className="font-oswald text-7xl md:text-9xl text-acid-green mb-12 text-glow-green"
            >
              WHO WE ARE
            </SplitText>

            <RevealSection direction="up" delay={0.3}>
              <div className="max-w-3xl mx-auto font-courier text-lg md:text-xl leading-relaxed bg-zinc-900/80 backdrop-blur-sm p-8 transform -rotate-1 border border-zinc-800 torn-edge glow-border-green">
                <p className="mb-6">
                  Bhopal SB started as three kids with one broken board sharing a
                  single spot under the flyover.
                </p>
                <p className="mb-6">
                  Today, we are a collective of skaters, artists, and
                  noise-makers. We don&apos;t just ride the city; we re-write it.
                  Every ledge is a legacy. Every wall is a canvas.
                </p>
                <p className="font-bold text-spray-red text-glow-red">
                  NO COACHES. NO RULES. JUST SKATE.
                </p>
              </div>
            </RevealSection>
          </section>

          {/* Marquee Divider */}
          <div className="border-y border-zinc-800 py-3 overflow-hidden -mx-8">
            <Marquee speed={20} className="py-1 opacity-20">
              <span className="flex items-center gap-8 mx-8 font-oswald text-4xl uppercase tracking-widest text-zinc-700">
                <span>THE SQUAD</span>
                <span>◆</span>
                <span>THE SQUAD</span>
                <span>◆</span>
              </span>
            </Marquee>
          </div>

          {/* CREW GRID */}
          <section className="py-24">
            <RevealSection className="flex items-center justify-center mb-20">
              <SplitText
                as="h2"
                animation="glitch-in"
                className="font-oswald text-5xl md:text-7xl text-concrete uppercase bg-asphalt px-6 py-2"
              >
                THE SQUAD
              </SplitText>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
              {CREW_DATA.map((member, index) => (
                <CrewCard key={member.id} {...member} index={index} />
              ))}
            </div>
          </section>
        </ZineLayout>
      </SmoothScroll>
    </main>
  );
}
