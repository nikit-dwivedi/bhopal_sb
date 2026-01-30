"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function SpotMap() {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/map/MapInner"), {
        loading: () => (
            <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-concrete animate-pulse">
                <p className="font-oswald text-2xl tracking-widest">LOCATING SATELLITES...</p>
            </div>
        ),
        ssr: false,
      }),
    []
  );

  return <Map />;
}
