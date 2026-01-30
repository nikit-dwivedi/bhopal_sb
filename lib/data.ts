export const CREW_DATA = [
  {
    id: "crew-1",
    name: "Ravi 'Stall'",
    stance: "Regular",
    style: "Street/Tech",
    image: "https://images.unsplash.com/photo-1549479367-938a16dbd755?q=80&w=800&auto=format&fit=crop",
    bio: "Sleeps in the park. Eats concrete for breakfast.",
  },
  {
    id: "crew-2",
    name: "Sam 'Air'",
    stance: "Goofy",
    style: "Vert/Bowl",
    image: "https://images.unsplash.com/photo-1520045864981-8d4715414512?q=80&w=800&auto=format&fit=crop",
    bio: "Gravity is just a suggestion.",
  },
  {
    id: "crew-3",
    name: "Vikram 'Vandal'",
    stance: "Regular",
    style: "Graffiti/Cruiser",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800&auto=format&fit=crop",
    bio: "Paints the spots we skate.",
  },
  {
    id: "crew-4",
    name: "Anjali 'Shred'",
    stance: "Goofy",
    style: "Freestyle",
    image: "https://images.unsplash.com/photo-1563641793744-8d9dc8697669?q=80&w=800&auto=format&fit=crop",
    bio: "Dancing on the board.",
  },
] as const;

export const PROJECT_DATA = [
  {
    id: "cement-factory",
    title: "Cement Factory",
    date: "Dec 2025",
    cover: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    description: "Found an abandoned cement factory. Security kicked us out after 20 minutes. Got the clip though.",
    images: [
        { id: "p1", src: "https://images.unsplash.com/photo-1621360841012-3f6567d4f95e?q=80&w=800&auto=format&fit=crop", alt: "Kickflip", aspect: "square" },
        { id: "p2", src: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=800&auto=format&fit=crop", alt: "Grind", aspect: "landscape" },
        { id: "p3", src: "https://images.unsplash.com/photo-1563641793744-8d9dc8697669?q=80&w=800&auto=format&fit=crop", alt: "Chill", aspect: "portrait" },
    ]
  },
  {
    id: "night-moves",
    title: "Night Moves",
    date: "Nov 2025",
    cover: "https://images.unsplash.com/photo-1563641793744-8d9dc8697669?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "3AM sessions in the city center. No traffic, just vibes.",
    images: [
        { id: "n1", src: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800&auto=format&fit=crop", alt: "Neon", aspect: "portrait" },
        { id: "n2", src: "https://images.unsplash.com/photo-1520045864981-8d4715414512?q=80&w=800&auto=format&fit=crop", alt: "Shadows", aspect: "square" },
    ]
  },
  {
    id: "diy-build",
    title: "The DIY Build",
    date: "Oct 2025",
    cover: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "We bought 20 bags of concrete and built a quarter pipe under the bridge.",
    images: [
        { id: "d1", src: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?q=80&w=800&auto=format&fit=crop", alt: "Mixing", aspect: "portrait" },
        { id: "d2", src: "https://images.unsplash.com/photo-1621360841012-3f6567d4f95e?q=80&w=800&auto=format&fit=crop", alt: "Finished", aspect: "landscape" },
    ]
  },
] as const;
