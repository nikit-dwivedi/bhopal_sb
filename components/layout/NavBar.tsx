"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function NavBar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 150);
    setScrolled(latest > 50);
  });

  const links = [
    { href: "/", label: "HOME" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/about", label: "CREW" },
    { href: "/location", label: "LOCATIONS" },
    { href: "/merch", label: "MERCH" },
  ];

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 w-full z-[90] px-6 py-4 transition-colors duration-500",
          scrolled
            ? "bg-asphalt/80 backdrop-blur-xl border-b border-zinc-800/50"
            : "bg-transparent"
        )}
        initial={{ y: 0 }}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <MagneticButton strength={0.15} as="div">
            <Link
              href="/"
              className="font-oswald text-2xl md:text-3xl text-acid-green tracking-tighter uppercase hover:text-glow-green transition-all duration-300"
            >
              BHOPAL<span className="text-spray-red">SB</span>
            </Link>
          </MagneticButton>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <MagneticButton key={link.href} strength={0.2} as="div">
                <Link
                  href={link.href}
                  className={cn(
                    "relative font-oswald text-sm uppercase px-4 py-2 tracking-wider transition-all duration-300 group",
                    pathname === link.href
                      ? "text-acid-green"
                      : "text-zinc-400 hover:text-zinc-100"
                  )}
                >
                  {link.label}

                  {/* Active indicator — animated underline */}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-acid-green"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Hover underline */}
                  <span className="absolute bottom-0 left-2 right-2 h-[1px] bg-zinc-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </MagneticButton>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-[110] text-zinc-100 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[80] bg-asphalt/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "font-oswald text-5xl uppercase tracking-tight transition-colors duration-300",
                    pathname === link.href
                      ? "text-acid-green text-glow-green"
                      : "text-zinc-300 hover:text-acid-green"
                  )}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            {/* Decorative Elements */}
            <motion.div
              className="absolute bottom-12 font-courier text-zinc-700 text-xs tracking-[0.5em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              SKATE · CREATE · DESTROY
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
