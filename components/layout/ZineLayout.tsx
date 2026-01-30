import React from "react";
import { cn } from "@/lib/utils";

interface ZineLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function ZineLayout({ children, className }: ZineLayoutProps) {
  return (
    <div className={cn("relative p-4 md:p-8 max-w-7xl mx-auto", className)}>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] z-0 overflow-hidden">
         {/* Texture Overlay (Grit) */}
         <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      </div>
      
      <div className="relative z-10 flex flex-col gap-16 md:gap-32">
        {React.Children.map(children, (child, index) => {
           // Alternate rough rotation for direct children sections
           const rotation = index % 2 === 0 ? '-rotate-1' : 'rotate-1';
           return (
             <div className={cn("transform transition-transform duration-500 hover:rotate-0", rotation)}>
               {child}
             </div>
           );
        })}
      </div>
    </div>
  );
}
