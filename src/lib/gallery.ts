import mural1 from "@/assets/mural-1.jpg";
import mural2 from "@/assets/mural-2.jpg";
import mural3 from "@/assets/mural-3.jpg";
import mural4 from "@/assets/mural-4.jpg";
import mural5 from "@/assets/mural-5.jpg";
import mural6 from "@/assets/mural-6.jpg";

export type GalleryItem = {
  slug: string;
  src: string;
  title: string;
  location: string;
  aspect: "tall" | "wide";
  description: string;
};

export const galleryItems: GalleryItem[] = [
  {
    slug: "obsidian-and-gold",
    src: mural1,
    title: "Obsidian & Gold",
    location: "Private Residence, NYC",
    aspect: "tall",
    description:
      "a commissioned piece for a private collector in manhattan. obsidian black grounds the composition, threaded with hand-leafed gold accents that catch the light through the day.",
  },
  {
    slug: "terracotta-flow",
    src: mural2,
    title: "Terracotta Flow",
    location: "Gallery Installation, LA",
    aspect: "wide",
    description:
      "an installation piece exploring movement in warm earth tones. terracotta and ochre flow across the wall, anchoring the gallery's main viewing room.",
  },
  {
    slug: "geometric-dusk",
    src: mural3,
    title: "Geometric Dusk",
    location: "Estate Exterior, Miami",
    aspect: "tall",
    description:
      "an exterior mural for a private estate. geometric forms in deep dusk tones soften the architecture and respond to the changing florida light.",
  },
  {
    slug: "burgundy-burst",
    src: mural4,
    title: "Burgundy Burst",
    location: "Hotel Lobby, Dubai",
    aspect: "wide",
    description:
      "a statement piece for a luxury hotel lobby. layered burgundy bursts greet guests on arrival, scaled to hold the full double-height wall.",
  },
  {
    slug: "midnight-garden",
    src: mural5,
    title: "Midnight Garden",
    location: "Restaurant, London",
    aspect: "tall",
    description:
      "an intimate dining room mural. botanical forms emerge from deep midnight blues, painted to feel discovered rather than displayed.",
  },
  {
    slug: "copper-storm",
    src: mural6,
    title: "Copper Storm",
    location: "Penthouse Loft, Chicago",
    aspect: "wide",
    description:
      "a penthouse commission inspired by lake michigan in autumn. copper and slate move across the wall in a single sweeping gesture.",
  },
];

export const getGalleryItem = (slug: string) =>
  galleryItems.find((item) => item.slug === slug);
