export const SPOTS_DATA = [
  {
    id: "spot-1",
    name: "The Flyover Ledge",
    lat: 23.259933, 
    lng: 77.412615,
    type: "Ledge",
    difficulty: "Medium",
    risk: "High (Cops)",
    image: "https://images.unsplash.com/photo-1496886077455-d45e58047913?q=80&w=800&auto=format&fit=crop",
    description: "Butter marble ledge under the chaos. Bust factor is high during rush hour."
  },
  {
    id: "spot-2",
    name: "Abandoned Mill",
    lat: 23.250000, 
    lng: 77.400000,
    type: "DIY",
    difficulty: "Hard",
    risk: "Low",
    image: "https://images.unsplash.com/photo-1595429035839-c99c298ffdde?q=80&w=800&auto=format&fit=crop",
    description: "Rough ground but perfect transition wall. Bring a broom."
  },
  {
    id: "spot-3",
    name: "VIP Road Gap",
    lat: 23.230000, 
    lng: 77.420000,
    type: "Gap",
    difficulty: "Pro",
    risk: "Medium",
    image: "https://images.unsplash.com/photo-1542318476-e1e345e62744?q=80&w=800&auto=format&fit=crop",
    description: "Huge stair set gap. You land in traffic. Do not miss."
  },
  {
    id: "spot-4",
    name: "Lake View Banks",
    lat: 23.240000, 
    lng: 77.390000,
    type: "Banks",
    difficulty: "Easy",
    risk: "Low",
    image: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?q=80&w=800&auto=format&fit=crop",
    description: "Smooth banks by the lake. Chill vibes for sunset sessions."
  }
] as const;
