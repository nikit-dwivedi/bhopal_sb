"use client";

import ZineLayout from "@/components/layout/ZineLayout";
import SmoothScroll from "@/components/ui/SmoothScroll";
import SpotMap from "@/components/map/SpotMap";
import SplitText from "@/components/ui/SplitText";
import RevealSection from "@/components/ui/RevealSection";
import MagneticButton from "@/components/ui/MagneticButton";
import Marquee from "@/components/ui/Marquee";

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-asphalt text-zinc-100">
      <SmoothScroll>
        <ZineLayout>
          {/* Header */}
          <div className="text-center py-16 relative z-10 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-acid-green/5 rounded-full blur-[120px] pointer-events-none" />

            <SplitText
              as="h1"
              animation="slide-up"
              stagger={0.04}
              className="font-oswald text-6xl md:text-9xl text-acid-green uppercase text-glow-green"
            >
              SPOT FINDER
            </SplitText>
            <RevealSection direction="up" delay={0.4}>
              <p className="font-courier text-concrete text-xl mt-6 bg-zinc-900/50 backdrop-blur-sm inline-block px-6 py-2 border border-zinc-800">
                SKATE AT YOUR OWN RISK.
              </p>
            </RevealSection>
          </div>

          {/* Map Container */}
          <RevealSection direction="scale" delay={0.2}>
            <div className="relative w-full h-[60vh] md:h-[70vh] border border-zinc-800 shadow-2xl overflow-hidden glow-border-green">
              <SpotMap />

              {/* Overlay Elements */}
              <div className="absolute top-4 left-4 z-[400] bg-spray-red text-white p-3 font-oswald text-sm md:text-xl uppercase transform -rotate-2 shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                LIVE FEED
              </div>
            </div>
          </RevealSection>

          {/* Marquee Divider */}
          <div className="border-y border-zinc-800 py-3 overflow-hidden -mx-8 my-16">
            <Marquee speed={25} className="py-1 opacity-20">
              <span className="flex items-center gap-8 mx-8 font-oswald text-3xl uppercase tracking-widest text-zinc-700">
                <span>FIND YOUR SPOT</span>
                <span>◆</span>
                <span>SKATE EVERYWHERE</span>
                <span>◆</span>
              </span>
            </Marquee>
          </div>

          {/* Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <RevealSection direction="left">
              <div className="bg-zinc-900/80 backdrop-blur-sm p-10 border border-zinc-800 glow-border-green">
                <h3 className="font-oswald text-4xl text-white mb-4">ADD A SPOT</h3>
                <p className="font-courier text-concrete mb-8 leading-relaxed">
                  Found something new? Don&apos;t gatekeep. Send us the pin and
                  a clip. We&apos;ll verify it.
                </p>
                <MagneticButton
                  as="a"
                  href="https://instagram.com/bhopal.sb"
                  target="_blank"
                  className="inline-block font-oswald uppercase tracking-wider border-2 border-acid-green/40 text-acid-green px-8 py-4 btn-fill-hover transition-all duration-300 hover:border-acid-green"
                >
                  DM INTEL →
                </MagneticButton>
              </div>
            </RevealSection>

            <RevealSection direction="right" delay={0.2}>
              <div className="flex flex-col justify-center items-end text-right h-full">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/logo.jpg"
                    alt="Logo"
                    className="w-14 h-14 object-contain grayscale invert mix-blend-screen rounded-full border border-zinc-800"
                  />
                  <h3 className="font-oswald text-4xl text-zinc-500">BHOPAL SB HQ</h3>
                </div>
                <p className="font-courier text-concrete leading-relaxed">
                  Somewhere in the Old City.
                  <br />
                  Bhopal, MP 462001
                  <br />
                  <span className="text-spray-red text-glow-red">
                    sk8bhopal@gmail.com
                  </span>
                </p>
              </div>
            </RevealSection>
          </div>
        </ZineLayout>
      </SmoothScroll>
    </main>
  );
}
