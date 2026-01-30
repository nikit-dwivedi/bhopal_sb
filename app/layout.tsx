import type { Metadata } from "next";
import { Oswald, Courier_Prime } from "next/font/google";
import NavBar from "@/components/layout/NavBar";
import DistortionCursor from "@/components/ui/DistortionCursor";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const courier = Courier_Prime({
  variable: "--font-courier",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhopal SB - Skate. Create. Destroy.",
  description: "The official digital zine of Bhopal SB crew. Skateboarding, BMX, Music, Graffiti.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${courier.variable} antialiased bg-asphalt text-zinc-100 font-courier hidden-scrollbar`}
      >
        <DistortionCursor />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
