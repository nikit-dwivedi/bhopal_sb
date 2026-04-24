"use client";

import { motion } from "framer-motion";
import SmoothScroll from "@/components/ui/SmoothScroll";
import SplitText from "@/components/ui/SplitText";
import RevealSection from "@/components/ui/RevealSection";
import Marquee from "@/components/ui/Marquee";
import MagneticButton from "@/components/ui/MagneticButton";
import TiltCard from "@/components/ui/TiltCard";

const MERCH_ITEMS = [
  {
    id: "tee-1",
    name: "BHOPAL SB CORE TEE",
    price: "₹1,499",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    tag: "BESTSELLER",
    tagColor: "bg-acid-green text-asphalt",
  },
  {
    id: "hoodie-1",
    name: "STREET CHAOS HOODIE",
    price: "₹2,999",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
    tag: "NEW",
    tagColor: "bg-spray-red text-white",
  },
  {
    id: "cap-1",
    name: "SB SNAPBACK",
    price: "₹899",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c334e67a?q=80&w=800&auto=format&fit=crop",
    tag: "SOON",
    tagColor: "bg-concrete text-asphalt",
  },
  {
    id: "deck-1",
    name: "CUSTOM SB DECK",
    price: "₹4,999",
    image: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=800&auto=format&fit=crop",
    tag: "LIMITED",
    tagColor: "bg-acid-green text-asphalt",
  },
  {
    id: "tote-1",
    name: "DESTROY TOTE BAG",
    price: "₹699",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    tag: "SOON",
    tagColor: "bg-concrete text-asphalt",
  },
  {
    id: "sticker-1",
    name: "STICKER PACK x10",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=800&auto=format&fit=crop",
    tag: "HOT",
    tagColor: "bg-spray-red text-white",
  },
];

export default function MerchPage() {
  return (
    <main className="min-h-screen bg-asphalt text-zinc-100 overflow-hidden">
      <SmoothScroll>
        {/* ═══════════════════════════════════════════════════
            HERO — MERCH LAUNCH
            ═══════════════════════════════════════════════════ */}
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center py-32 px-4 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 gradient-mesh opacity-40 pointer-events-none" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-acid-green/5 rounded-full blur-[180px] pointer-events-none animated-blob" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-spray-red/5 rounded-full blur-[150px] pointer-events-none animated-blob" style={{ animationDelay: "4s" }} />

          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 12 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="absolute top-32 right-8 md:right-32 z-20"
          >
            <div className="bg-spray-red text-white font-oswald text-lg md:text-2xl uppercase px-6 py-3 rounded-full shadow-[0_0_30px_rgba(255,0,51,0.4)] animate-pulse">
              COMING SOON
            </div>
          </motion.div>

          <SplitText
            as="h1"
            animation="slide-up"
            stagger={0.04}
            className="font-oswald text-7xl md:text-[10rem] text-acid-green uppercase tracking-tighter leading-[0.85] text-center text-glow-green relative z-10"
          >
            MERCH DROP
          </SplitText>

          <RevealSection direction="up" delay={0.5} className="relative z-10">
            <p className="font-courier text-concrete text-lg md:text-xl mt-8 max-w-xl text-center leading-relaxed">
              Rep the streets. Wear the chaos. Our first official merchandise
              drop is loading — tees, hoodies, decks, and more.
            </p>
          </RevealSection>

          {/* Email signup teaser */}
          <RevealSection direction="up" delay={0.8} className="mt-12 relative z-10">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center border border-zinc-700 bg-zinc-900/80 backdrop-blur-sm px-6 py-4 w-full sm:w-auto">
                <span className="font-courier text-zinc-500 text-sm">
                  DROP NOTIFICATION? →
                </span>
              </div>
              <MagneticButton
                as="a"
                href="https://instagram.com/bhopal.sb"
                target="_blank"
                className="inline-flex items-center gap-2 font-oswald text-lg uppercase tracking-wider border-2 border-acid-green text-acid-green px-8 py-4 btn-fill-hover transition-all duration-300 whitespace-nowrap"
              >
                FOLLOW @BHOPAL.SB
              </MagneticButton>
            </div>
          </RevealSection>
        </section>

        {/* ═══════════════════════════════════════════════════
            MARQUEE TICKER
            ═══════════════════════════════════════════════════ */}
        <div className="border-y border-zinc-800 py-4 overflow-hidden">
          <Marquee speed={20} className="py-2">
            <span className="flex items-center gap-8 mx-8 font-oswald text-3xl md:text-5xl uppercase tracking-wider">
              <span className="text-acid-green">MERCH</span>
              <span className="text-zinc-700">◆</span>
              <span className="text-concrete">DROPPING SOON</span>
              <span className="text-zinc-700">◆</span>
              <span className="text-spray-red">LIMITED EDITION</span>
              <span className="text-zinc-700">◆</span>
              <span className="text-acid-green">BHOPAL SB</span>
              <span className="text-zinc-700">◆</span>
              <span className="text-concrete">STREET WEAR</span>
              <span className="text-zinc-700">◆</span>
            </span>
          </Marquee>
        </div>

        {/* ═══════════════════════════════════════════════════
            PRODUCT GRID
            ═══════════════════════════════════════════════════ */}
        <section className="py-24 px-4 max-w-7xl mx-auto">
          <RevealSection className="mb-16 text-center">
            <SplitText
              as="h2"
              animation="glitch-in"
              className="font-oswald text-5xl md:text-7xl text-concrete uppercase"
            >
              THE COLLECTION
            </SplitText>
            <p className="font-courier text-zinc-600 mt-4 text-sm uppercase tracking-widest">
              Preview only · Prices are estimates
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {MERCH_ITEMS.map((item, index) => (
              <RevealSection key={item.id} direction="up" delay={index * 0.1}>
                <TiltCard tiltAmount={8}>
                  <div className="group relative bg-zinc-900/80 border border-zinc-800 overflow-hidden cursor-pointer transition-all duration-500 hover:border-acid-green/30 hover:shadow-[0_0_40px_rgba(204,255,0,0.05)]">
                    {/* Image */}
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-transparent to-transparent opacity-60" />

                      {/* Tag */}
                      <div className={`absolute top-4 left-4 ${item.tagColor} font-oswald text-xs uppercase px-3 py-1 tracking-wider`}>
                        {item.tag}
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-acid-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

                      {/* Scan lines on hover */}
                      <div
                        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background:
                            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)",
                        }}
                      />
                    </div>

                    {/* Info */}
                    <div className="p-6">
                      <h3 className="font-oswald text-xl text-zinc-100 uppercase tracking-tight group-hover:text-acid-green transition-colors duration-300">
                        {item.name}
                      </h3>
                      <div className="flex justify-between items-center mt-3">
                        <span className="font-courier text-acid-green text-lg text-glow-green">
                          {item.price}
                        </span>
                        <span className="font-courier text-zinc-600 text-xs uppercase tracking-widest group-hover:text-acid-green/60 transition-colors">
                          NOTIFY ME →
                        </span>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </RevealSection>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            BOTTOM CTA
            ═══════════════════════════════════════════════════ */}
        <section className="py-32 px-4 text-center relative grain-overlay">
          <div className="absolute inset-0 gradient-mesh opacity-30 pointer-events-none" />

          <RevealSection className="relative z-10">
            <SplitText
              as="h2"
              animation="slide-rotate"
              className="font-oswald text-5xl md:text-8xl text-zinc-100 uppercase tracking-tighter mb-8"
            >
              DONT MISS THE DROP
            </SplitText>
            <p className="font-courier text-concrete text-lg max-w-md mx-auto mb-12">
              Follow us on Instagram to be the first to know when the merch goes
              live. Limited runs only.
            </p>
            <MagneticButton
              as="a"
              href="https://instagram.com/bhopal.sb"
              target="_blank"
              className="inline-flex items-center gap-3 font-oswald text-xl uppercase tracking-wider bg-acid-green text-asphalt px-10 py-5 transition-all duration-300 hover:shadow-[0_0_40px_rgba(204,255,0,0.3)] hover:scale-105"
            >
              @BHOPAL.SB
            </MagneticButton>
          </RevealSection>
        </section>
      </SmoothScroll>
    </main>
  );
}
