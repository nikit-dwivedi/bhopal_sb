"use client";

import AnimatedPreloader from "@/components/ui/AnimatedPreloader";
import ScrollProgress from "@/components/ui/ScrollProgress";
import PageTransition from "@/components/ui/PageTransition";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnimatedPreloader />
      <ScrollProgress />
      <PageTransition>{children}</PageTransition>
    </>
  );
}
