"use client";
import { Instagram, Youtube, Mail, ArrowDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ZineLayout from "@/components/layout/ZineLayout";
import TapeDeck from "@/components/project/TapeDeck";
import SplitText from "@/components/ui/SplitText";
import Marquee from "@/components/ui/Marquee";
import RevealSection from "@/components/ui/RevealSection";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Home() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 0.8], [1, 1.1]);
  const heroBlur = useTransform(heroScroll, [0, 0.8], [0, 10]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-asphalt selection:bg-acid-green selection:text-asphalt overflow-clip font-courier"
    >
      <SmoothScroll>
        {/* ═══════════════════════════════════════════════════
            HERO SECTION — CINEMATIC VIDEO + TEXT REVEAL
            ═══════════════════════════════════════════════════ */}
        <section
          ref={heroRef}
          className="relative h-[120vh] w-full flex items-center justify-center overflow-hidden"
        >
          {/* Video Background */}
          <motion.div
            className="absolute inset-0 z-0"
            style={{ opacity: heroOpacity, scale: heroScale }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=1920&auto=format&fit=crop"
            >
              <source
                src="https://www.pexels.com/download/video/13062515/"
                type="video/mp4"
              />
            </video>

            {/* Video overlay gradient */}
            <div className="absolute inset-0 video-overlay" />

            {/* Film grain */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
          </motion.div>

          {/* Animated gradient mesh background */}
          <div className="absolute inset-0 z-[1] gradient-mesh opacity-60 pointer-events-none" />

          {/* Animated Background Blobs */}
          <motion.div
            style={{ y: y1 }}
            className="absolute z-[2] w-[500px] h-[500px] bg-acid-green/10 animated-blob right-[-10%] top-[-10%] blur-3xl pointer-events-none hw-accelerate"
          />
          <motion.div
            style={{ animationDelay: "3s", y: y2 }}
            className="absolute z-[2] w-[400px] h-[400px] bg-spray-red/10 animated-blob left-[-5%] bottom-[-5%] blur-3xl pointer-events-none hw-accelerate"
          />

          {/* Core Content */}
          <div className="relative z-10 w-full text-center flex flex-col items-center px-4">
            {/* Logo with glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 1.2,
                delay: 1.2,
                type: "spring",
                stiffness: 100,
              }}
              className="relative w-[50vw] md:w-[25vw] aspect-square rounded-full overflow-hidden mb-8 animate-glow-pulse"
            >
              <Image
                src="/logo.jpg"
                alt="Bhopal SB Logo"
                fill
                priority
                className="object-contain"
              />
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full border-2 border-acid-green/20 animate-[glow-pulse_3s_ease-in-out_infinite]" />
            </motion.div>

            {/* Main Title — Split Text */}
            <div className="flex flex-col items-center gap-2">
              <SplitText
                as="h1"
                animation="slide-up"
                delay={1.5}
                stagger={0.05}
                className="font-oswald text-7xl md:text-[10rem] text-acid-green tracking-tighter uppercase leading-[0.85] text-glow-green"
              >
                BHOPAL
              </SplitText>

              <SplitText
                as="h1"
                animation="slide-rotate"
                delay={1.8}
                stagger={0.06}
                className="font-oswald text-8xl md:text-[14rem] text-spray-red tracking-widest uppercase leading-[0.75] text-glow-red"
              >
                SB
              </SplitText>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.8 }}
              className="mt-8 font-courier text-concrete text-sm md:text-lg tracking-[0.5em] uppercase"
            >
              EST. 20XX // SKATE. CREATE. DESTROY.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.6 }}
              className="mt-12"
            >
              <MagneticButton
                as="a"
                href="#projects"
                className="inline-flex items-center gap-3 font-oswald text-lg uppercase tracking-wider border-2 border-acid-green/40 text-acid-green px-8 py-4 btn-fill-hover transition-all duration-300 hover:border-acid-green glow-border-green"
              >
                ENTER THE CHAOS <ChevronRight size={18} />
              </MagneticButton>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-3"
          >
            <span className="font-courier text-zinc-600 text-xs tracking-widest uppercase">
              Scroll
            </span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-acid-green/60 to-transparent" />
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════
            MARQUEE TICKER — Between Hero and TapeDeck
            ═══════════════════════════════════════════════════ */}
        <div id="projects" className="relative border-y border-zinc-800 py-4 bg-zinc-900/50 overflow-hidden">
          <Marquee speed={25} className="py-2">
            <span className="flex items-center gap-8 mx-8 font-oswald text-2xl md:text-4xl uppercase tracking-wider">
              <span className="text-acid-green">SKATE</span>
              <span className="text-zinc-700">◆</span>
              <span className="text-concrete">CREATE</span>
              <span className="text-zinc-700">◆</span>
              <span className="text-spray-red">DESTROY</span>
              <span className="text-zinc-700">◆</span>
              <span className="text-acid-green">BHOPAL SB</span>
              <span className="text-zinc-700">◆</span>
              <span className="text-concrete">RAW &amp; UNCUT</span>
              <span className="text-zinc-700">◆</span>
            </span>
          </Marquee>
        </div>

        {/* TAPE DECK (PROJECTS) */}
        <TapeDeck />

        {/* ═══════════════════════════════════════════════════
            STATS COUNTER STRIP
            ═══════════════════════════════════════════════════ */}
        <section className="relative py-20 md:py-28 border-y border-zinc-800 bg-zinc-900/30 grain-overlay">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
            <AnimatedCounter target={4} suffix="+" label="Crew Members" />
            <AnimatedCounter target={3} label="Projects" />
            <AnimatedCounter target={4} label="Skate Spots" />
            <AnimatedCounter
              target={2025}
              prefix=""
              label="Est. Year"
              className="tabular-nums"
            />
          </div>
        </section>

        <ZineLayout>
          {/* ═══════════════════════════════════════════════════
              MANIFESTO — SCROLL-PINNED STORYTELLING
              ═══════════════════════════════════════════════════ */}
          <section className="relative min-h-screen py-32 flex items-center justify-center overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-10 w-64 h-64 border border-zinc-800/40 shard-1 animate-[spin_60s_linear_infinite]" />
              <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-acid-green/3 shard-2 transform rotate-45" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-spray-red/3 rounded-full blur-[120px] animated-blob" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
              {/* Deconstructed Headline */}
              <div className="relative mb-24 h-48 md:h-64 flex items-center justify-center hw-accelerate">
                <RevealSection direction="left" className="absolute left-0 lg:left-24 top-0">
                  <span className="font-oswald text-7xl md:text-[8rem] text-spray-red uppercase opacity-80 text-glow-red">
                    The
                  </span>
                </RevealSection>
                <RevealSection direction="right" delay={0.2} className="absolute right-0 lg:right-24 bottom-0">
                  <span className="font-oswald text-7xl md:text-[10rem] text-concrete uppercase z-10 bg-asphalt px-8 transform -rotate-3 border-r-8 border-acid-green inline-block">
                    Manifesto
                  </span>
                </RevealSection>
              </div>

              {/* Scattered Text Blocks */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative hw-accelerate">
                <RevealSection
                  direction="left"
                  delay={0.1}
                  className="md:col-span-5 md:col-start-2"
                >
                  <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500 relative glow-border-green">
                    <div className="absolute top-0 left-0 w-1 h-full bg-spray-red" />
                    <p className="font-courier text-concrete text-lg md:text-xl leading-relaxed pl-6">
                      We are not a club. We are a movement. Born from the streets
                      of Bhopal, we ride concrete waves and paint the city in our
                      own colors.
                    </p>
                  </div>
                </RevealSection>

                <RevealSection
                  direction="right"
                  delay={0.2}
                  className="md:col-span-4 md:col-start-8 mt-12 md:-mt-12"
                >
                  <div className="bg-acid-green text-asphalt p-8 shard-3 transform -rotate-2 hover:rotate-1 transition-transform duration-300 shadow-[20px_20px_0px_#1a1a1a,-5px_-5px_0px_#ff0033]">
                    <p className="font-oswald text-2xl uppercase font-bold tracking-wide">
                      Skateboarding.
                      <br />
                      BMX.
                      <br />
                      Graffiti.
                      <br />
                      Music.
                    </p>
                  </div>
                </RevealSection>

                <RevealSection
                  direction="up"
                  delay={0.3}
                  className="md:col-span-8 md:col-start-4 mt-16 md:mt-24"
                >
                  <div className="bg-asphalt border border-zinc-800 p-10 transform rotate-1 backdrop-blur-sm">
                    <p className="font-courier text-zinc-300 text-xl leading-relaxed text-right">
                      It&apos;s all noise until you make it a symphony. We build
                      our own spots, film our own clips, and write our own rules.{" "}
                      <span className="text-acid-green font-bold bg-zinc-800 px-2 py-1 inline-block mt-2 text-glow-green">
                        Welcome to the underground.
                      </span>
                    </p>
                  </div>
                </RevealSection>
              </div>

              <RevealSection direction="scale" delay={0.4} className="mt-32 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="font-oswald text-5xl md:text-7xl text-asphalt bg-spray-red -rotate-6 p-4 inline-block shadow-[10px_10px_0px_#ccff00] text-glow-red">
                    RAW &amp; UNCUT
                  </span>
                </motion.div>
              </RevealSection>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════
              SECOND MARQUEE — Before Footer
              ═══════════════════════════════════════════════════ */}
          <div className="border-y border-zinc-800 py-3 bg-transparent overflow-hidden -mx-8">
            <Marquee speed={35} direction="right" className="py-2 opacity-30">
              <span className="flex items-center gap-12 mx-12 font-oswald text-6xl md:text-8xl uppercase tracking-tighter text-zinc-700">
                <span>BHOPAL SB</span>
                <span className="text-4xl">★</span>
                <span>BHOPAL SB</span>
                <span className="text-4xl">★</span>
              </span>
            </Marquee>
          </div>

          {/* ═══════════════════════════════════════════════════
              FOOTER — IMMERSIVE EXPERIENCE
              ═══════════════════════════════════════════════════ */}
          <footer className="relative border-t border-zinc-800 bg-asphalt p-12 md:p-32 overflow-hidden hw-accelerate flex flex-col items-center grain-overlay">
            {/* Giant Background Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="font-oswald text-[20vw] leading-none text-concrete whitespace-nowrap"
              >
                BHOPAL SB
              </motion.span>
            </div>

            {/* Gradient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-acid-green/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-5xl">
              {/* Title */}
              <RevealSection className="mb-16">
                <SplitText
                  as="h3"
                  animation="slide-up"
                  stagger={0.04}
                  className="font-oswald text-5xl md:text-8xl text-acid-green uppercase tracking-tighter text-glow-green text-center"
                >
                  Connect with the Chaos
                </SplitText>
              </RevealSection>

              <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-16">
                <RevealSection direction="left" delay={0.2}>
                  <div className="flex gap-4">
                    {[
                      {
                        icon: Instagram,
                        href: "https://instagram.com/bhopal.sb",
                        hoverColor: "hover:bg-spray-red hover:shadow-[0_0_30px_rgba(255,0,51,0.3)]",
                      },
                      {
                        icon: Youtube,
                        href: "#",
                        hoverColor: "hover:bg-concrete hover:shadow-[0_0_30px_rgba(140,140,140,0.3)]",
                      },
                      {
                        icon: Mail,
                        href: "mailto:sk8bhopal@gmail.com",
                        hoverColor: "hover:bg-acid-green hover:shadow-[0_0_30px_rgba(204,255,0,0.3)]",
                      },
                    ].map(({ icon: Icon, href, hoverColor }, i) => (
                      <MagneticButton key={i} strength={0.3}>
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          className={`bg-zinc-900 border border-zinc-800 p-5 transition-all duration-300 hover:text-asphalt hover:-translate-y-2 ${hoverColor}`}
                        >
                          <Icon size={28} />
                        </a>
                      </MagneticButton>
                    ))}
                  </div>
                </RevealSection>

                <RevealSection direction="right" delay={0.3}>
                  <div className="flex flex-col items-center md:items-end text-center md:text-right">
                    <div className="relative w-20 h-20 mb-4 overflow-hidden rounded-full border border-zinc-800 glow-border-green">
                      <Image
                        src="/logo.jpg"
                        alt="Logo"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <p className="font-courier text-zinc-500 text-sm tracking-widest max-w-[250px]">
                      © {new Date().getFullYear()} BHOPAL SB.
                      <br />
                      <span className="text-acid-green text-glow-green">
                        BUILT FOR THE STREETS.
                      </span>
                    </p>
                  </div>
                </RevealSection>
              </div>
            </div>
          </footer>
        </ZineLayout>
      </SmoothScroll>
    </main>
  );
}
