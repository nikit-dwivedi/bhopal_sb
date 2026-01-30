"use client";

import SpeedWobble from "@/components/ui/SpeedWobble";
import { Mail, Instagram, MapPin } from "lucide-react";

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-asphalt text-zinc-100">
      <SpeedWobble>
         <div className="relative h-screen flex flex-col items-center justify-center p-4">
            
            {/* BACKGROUND MAP (GLITCHED) */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                {/* CSS Filters do the heavy lifting here to make Google Maps look "Punk" */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117283.07686561127!2d77.32599742460334!3d23.25468817926227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1714412345678!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(1.2)' }} 
                  loading="lazy" 
                ></iframe>
            </div>

            {/* CONTENT OVERLAY */}
            <div className="relative z-10 max-w-2xl w-full bg-asphalt/90 p-8 md:p-12 border-4 border-concrete backdrop-blur-sm transform rotate-1 shadow-2xl">
               <h1 className="font-oswald text-6xl md:text-7xl text-white mb-2 tracking-tighter">
                   SPOT CHECK
               </h1>
               <div className="h-1 w-24 bg-spray-red mb-8" />
               
               <p className="font-courier text-lg mb-8 text-zinc-300">
                   We are everywhere and nowhere. Catch us at the Skate Park, the Flyover Ledges, or deep in the Old City.
               </p>

               <div className="space-y-6 font-oswald text-2xl">
                   <div className="flex items-center gap-4 text-acid-green">
                       <MapPin /> <span>BHOPAL, MP, INDIA</span>
                   </div>
                   <div className="flex items-center gap-4 hover:text-spray-red transition-colors cursor-pointer">
                       <Instagram /> <span>@BHOPAL.SB</span>
                   </div>
                   <div className="flex items-center gap-4 hover:text-spray-red transition-colors cursor-pointer">
                       <Mail /> <span>SK8BHOPAL@GMAIL.COM</span>
                   </div>
               </div>

               <div className="mt-12">
                   <a 
                     href="https://instagram.com/direct/t/bhopal.sb" 
                     target="_blank"
                     className="block w-full bg-spray-red text-white font-oswald text-4xl py-4 text-center hover:bg-white hover:text-asphalt transition-colors uppercase tracking-widest border-2 border-transparent hover:border-asphalt skew-x-[-10deg]"
                   >
                       HIT THE DM
                   </a>
               </div>
            </div>

         </div>
      </SpeedWobble>
    </main>
  );
}
