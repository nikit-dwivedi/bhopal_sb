"use client";
import { Instagram, Youtube, Mail } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import StaticIntro from "@/components/ui/StaticIntro";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ZineLayout from "@/components/layout/ZineLayout";
import TapeDeck from "@/components/project/TapeDeck";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -45]);

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-asphalt selection:bg-acid-green selection:text-asphalt overflow-clip font-courier"
    >
      <StaticIntro />
      <SmoothScroll>
        {/* HERO SECTION - FRAGMENTED CUBISM */}
        <section className="relative h-[120vh] w-full flex items-center justify-center overflow-hidden border-b-4 border-concrete hw-accelerate bg-asphalt">
          {/* Abstract Background Planes */}
          <motion.div
            style={{ y: y1, rotate: rotate1 }}
            className="absolute z-0 w-3/4 h-3/4 bg-acid-green/20 shard-1 right-[-10%] top-[-10%] hw-accelerate"
          />
          <motion.div
            style={{ y: y2, rotate: rotate2 }}
            className="absolute z-0 w-1/2 h-1/2 bg-spray-red/20 shard-2 left-[-5%] bottom-[-5%] hw-accelerate"
          />

          {/* Core Visual Shards */}
          <div className="absolute inset-0 z-10 opacity-70 flex items-center justify-center isolate mix-blend-difference pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                transition: { duration: 10, repeat: Infinity, ease: "linear" },
              }}
              className="absolute w-[60%] h-[80%] shard-3 bg-zinc-800 hw-accelerate"
            >
              <Image
                src="https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=1920&auto=format&fit=crop"
                alt="Skateboarding Texture"
                fill
                priority
                className="object-cover grayscale contrast-[150%] brightness-75 filter hw-accelerate"
              />
            </motion.div>
          </div>

          {/* Shattered Typography & Logo */}
          <div className="w-full text-center flex flex-col items-center mt-20">
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring" }}
              className="relative z-20 w-[70vw] md:w-[40vw] aspect-square rounded-full overflow-hidden filter contrast-[120%] mb-12 mix-blend-screen animate-float hw-accelerate border-4 border-dashed border-acid-green/30"
            >
              <Image
                src="/logo.jpg"
                alt="Bhopal SB Logo"
                fill
                priority
                className="object-contain animate-glitch"
              />
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              className="relative z-30 flex flex-col items-center -mt-24 pointer-events-none hw-accelerate mix-blend-difference"
            >
              <h1 className="font-oswald text-6xl md:text-9xl text-spray-red tracking-tighter uppercase leading-none shard-1 bg-asphalt p-4 border-2 border-concrete transform -rotate-6">
                BHOPAL
              </h1>
              <h1 className="font-oswald text-7xl md:text-[12rem] text-acid-green tracking-widest uppercase leading-none transform translate-x-12 rotate-3 shard-2 bg-asphalt p-2 -mt-4">
                SB
              </h1>
              <p className="mt-8 font-courier text-concrete text-sm md:text-xl tracking-[0.5em] uppercase bg-asphalt/80 px-6 py-2 border-l-4 border-spray-red backdrop-blur-sm">
                EST. 20XX // SKATE. CREATE. DESTROY.
              </p>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 z-40"
          >
            <div className="w-[1px] h-24 bg-gradient-to-b from-acid-green to-transparent" />
          </motion.div>
        </section>

        {/* TAPE DECK (PROJECTS) */}
        <TapeDeck />

        <ZineLayout>
          {/* MANIFESTO - FRAGMENTED TYPOGRAPHY */}
          <section className="relative min-h-screen py-32 flex items-center justify-center overflow-hidden">
            {/* Decorative Background Planes */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-10 w-64 h-64 border-4 border-concrete/20 shard-1 animate-[spin_30s_linear_infinite]" />
              <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-acid-green/5 shard-2 transform rotate-45" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
              {/* Deconstructed Headline */}
              <div className="relative mb-24 h-48 md:h-64 flex items-center justify-center hw-accelerate">
                <motion.h2
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="absolute left-0 lg:left-24 top-0 font-oswald text-7xl md:text-[8rem] text-spray-red uppercase opacity-80 mix-blend-screen"
                >
                  The
                </motion.h2>
                <motion.h2
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="absolute right-0 lg:right-24 bottom-0 font-oswald text-7xl md:text-[10rem] text-concrete uppercase z-10 shard-1 bg-asphalt px-8 transform -rotate-3 border-r-8 border-acid-green"
                >
                  Manifesto
                </motion.h2>
              </div>

              {/* Scattered Text Blocks */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative hw-accelerate">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="md:col-span-5 md:col-start-2 bg-zinc-900 border border-zinc-800 p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500 relative"
                >
                  <div className="absolute top-0 left-0 w-4 h-full bg-spray-red" />
                  <p className="font-courier text-concrete text-lg md:text-xl leading-relaxed pl-6">
                    We are not a club. We are a movement. Born from the streets
                    of Bhopal, we ride concrete waves and paint the city in our
                    own colors.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="md:col-span-4 md:col-start-8 mt-12 md:-mt-12 bg-acid-green text-asphalt p-8 shard-3 transform -rotate-2 hover:rotate-1 transition-transform duration-300 shadow-[20px_20px_0px_#1a1a1a,-5px_-5px_0px_#ff0033]"
                >
                  <p className="font-oswald text-2xl uppercase font-bold tracking-wide">
                    Skateboarding.
                    <br />
                    BMX.
                    <br />
                    Graffiti.
                    <br />
                    Music.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="md:col-span-8 md:col-start-4 mt-16 md:mt-24 bg-asphalt border-2 border-dashed border-concrete p-10 transform rotate-1"
                >
                  <p className="font-courier text-zinc-300 text-xl leading-relaxed text-right">
                    It&apos;s all noise until you make it a symphony. We build
                    our own spots, film our own clips, and write our own rules.{" "}
                    <span className="text-acid-green font-bold bg-zinc-800 px-2 py-1 inline-block mt-2">
                      Welcome to the underground.
                    </span>
                  </p>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05, rotate: -5 }}
                className="mt-32 flex justify-center"
              >
                <span className="font-oswald text-5xl md:text-7xl text-asphalt bg-spray-red -rotate-6 p-4 inline-block shadow-[10px_10px_0px_#ccff00]">
                  RAW & UNCUT
                </span>
              </motion.div>
            </div>
          </section>

          {/* FOOTER - ABSTRACT ASYMMETRY */}
          <footer className="relative border-t-8 border-spray-red bg-asphalt p-12 md:p-32 overflow-hidden hw-accelerate flex flex-col items-center">
            {/* Giant Background Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
              <span className="font-oswald text-[20vw] leading-none text-concrete whitespace-nowrap">
                BHOPAL SB
              </span>
            </div>

            <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row justify-between items-end gap-12">
              <div className="flex-1">
                <h3 className="font-oswald text-5xl md:text-7xl text-acid-green mb-8 uppercase tracking-tighter mix-blend-difference transform -rotate-2">
                  Connect with
                  <br />
                  the Chaos
                </h3>
                <div className="flex gap-6 mb-12">
                  <a
                    href="https://instagram.com/bhopal.sb"
                    target="_blank"
                    className="bg-zinc-900 border border-zinc-800 p-4 hover:bg-spray-red hover:text-asphalt transition-all transform hover:-translate-y-2 hover:rotate-6"
                  >
                    <Instagram size={32} />
                  </a>
                  <a
                    href="#"
                    className="bg-zinc-900 border border-zinc-800 p-4 hover:bg-concrete hover:text-asphalt transition-all transform hover:-translate-y-2 hover:-rotate-3"
                  >
                    <Youtube size={32} />
                  </a>
                  <a
                    href="mailto:sk8bhopal@gmail.com"
                    className="bg-zinc-900 border border-zinc-800 p-4 hover:bg-acid-green hover:text-asphalt transition-all transform hover:-translate-y-2 hover:rotate-3"
                  >
                    <Mail size={32} />
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-end text-right">
                <div className="relative w-24 h-24 mb-6 transform rotate-12 shard-1 overflow-hidden border-2 border-concrete">
                  <Image
                    src="/logo.jpg"
                    alt="Logo"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <p className="font-courier text-zinc-500 text-sm md:text-base tracking-widest max-w-[200px]">
                  © {new Date().getFullYear()} BHOPAL SB.
                  <br />
                  <span className="text-acid-green">
                    BUILT FOR THE STREETS.
                  </span>
                </p>
              </div>
            </div>
          </footer>
        </ZineLayout>
      </SmoothScroll>
    </main>
  );
}
