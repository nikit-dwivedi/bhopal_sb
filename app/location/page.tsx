"use client";

import ZineLayout from "@/components/layout/ZineLayout";
import SmoothScroll from "@/components/ui/SmoothScroll";
import SpotMap from "@/components/map/SpotMap";

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-asphalt text-zinc-100">
      <SmoothScroll>
        <ZineLayout>
           {/* Header */}
           <div className="text-center py-12 relative z-10 mix-blend-difference">
               <h1 className="font-oswald text-6xl md:text-9xl text-acid-green uppercase">
                   SPOT FINDER
               </h1>
               <p className="font-courier text-concrete text-xl mt-4 bg-black inline-block px-4 py-1 transform -rotate-1">
                   SKATE AT YOUR OWN RISK.
               </p>
           </div>

           {/* Map Container */}
           <div className="relative w-full h-[60vh] md:h-[70vh] border-4 border-concrete transform rotate-1 shadow-2xl overflow-hidden torn-edge">
               <SpotMap />
               
               {/* Overlay Elements */}
               <div className="absolute top-4 left-4 z-[400] bg-spray-red text-white p-2 font-oswald text-sm md:text-xl uppercase transform -rotate-2 shadow-lg">
                   LIVE FEED ●
               </div>
           </div>

           {/* Contact Section */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
               <div className="bg-zinc-900 p-8 border border-zinc-800 shadow-xl">
                   <h3 className="font-oswald text-4xl text-white mb-4">ADD A SPOT</h3>
                   <p className="font-courier text-concrete mb-6">
                       Found something new? Don&apos;t gatekeep. Send us the pin and a clip. We&apos;ll verify it.
                   </p>
                   <a href="https://instagram.com/bhopal.sb" target="_blank" className="inline-block bg-acid-green text-asphalt font-bold px-8 py-3 hover:bg-white transition-colors cursor-pointer">
                       DM INTEL &rarr;
                   </a>
               </div>

               <div className="flex flex-col justify-center items-end text-right">
                   <div className="flex items-center gap-4 mb-2">
                       <img src="/logo.jpg" alt="Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain grayscale invert mix-blend-screen" />
                       <h3 className="font-oswald text-4xl text-zinc-600">BHOPAL SB HQ</h3>
                   </div>
                   <p className="font-courier text-concrete">
                       Somewhere in the Old City.<br/>
                       Bhopal, MP 462001<br/>
                       <span className="text-spray-red">sk8bhopal@gmail.com</span>
                   </p>
               </div>
           </div>

        </ZineLayout>
      </SmoothScroll>
    </main>
  );
}
