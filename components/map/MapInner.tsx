"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { SPOTS_DATA } from "@/lib/spots_data";

// Fix for default Leaflet marker icons in Next.js
const icon = L.icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Component to handle map view updates
function MapUpdater({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, 14);
  }, [center, map]);
  return null;
}

export default function MapInner() {
  const centerPosition: [number, number] = [23.259933, 77.412615]; // Default center

  return (
    <div className="w-full h-full relative z-0">
         {/* CSS Filter for "Gritty" Mode */}
        <style jsx global>{`
          .leaflet-layer {
            filter: grayscale(100%) invert(100%) contrast(150%);
          }
           .leaflet-container {
            background: #1a1a1a;
           }
        `}</style>

      <MapContainer 
        center={centerPosition} 
        zoom={13} 
        scrollWheelZoom={false} 
        className="w-full h-full"
        style={{ background: "#1a1a1a" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {SPOTS_DATA.map((spot) => (
          <Marker 
            key={spot.id} 
            position={[spot.lat, spot.lng]} 
            icon={icon}
          >
            <Popup className="font-courier">
               <div className="p-2 min-w-[200px]">
                   <h3 className="font-oswald text-lg uppercase font-bold text-asphalt mb-1">{spot.name}</h3>
                   <div className="w-full aspect-video bg-gray-200 mb-2 relative overflow-hidden">
                       <img src={spot.image} alt={spot.name} className="w-full h-full object-cover" />
                       <div className="absolute top-0 right-0 bg-spray-red text-white text-xs px-1 font-bold">
                           RISK: {spot.risk}
                       </div>
                   </div>
                   <p className="text-xs text-concrete">{spot.description}</p>
                   <div className="mt-2 text-xs font-bold uppercase border-t border-gray-300 pt-1 flex justify-between">
                       <span>Type: {spot.type}</span>
                       <span>Diff: {spot.difficulty}</span>
                   </div>
               </div>
            </Popup>
          </Marker>
        ))}
        
        <MapUpdater center={centerPosition} />
      </MapContainer>
    </div>
  );
}
