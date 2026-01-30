"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavBar() {
  const pathname = usePathname();
  
  const links = [
    { href: "/", label: "HOME" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/about", label: "CREW" },
    { href: "/location", label: "LOCATIONS" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-40 p-4 pointer-events-none md:top-0 md:bottom-auto">
      <div className="flex justify-center md:justify-end gap-2 pointer-events-auto">
         {links.map((link) => (
             <Link 
               key={link.href} 
               href={link.href}
               className={cn(
                   "font-oswald text-xl uppercase px-4 py-2 transition-all duration-300 transform skew-x-[-10deg]",
                   pathname === link.href 
                     ? "bg-acid-green text-asphalt shadow-[4px_4px_0px_#1a1a1a]" 
                     : "bg-asphalt text-zinc-400 hover:text-acid-green hover:-translate-y-1"
               )}
             >
                 {link.label}
             </Link>
         ))}
      </div>
    </nav>
  );
}
