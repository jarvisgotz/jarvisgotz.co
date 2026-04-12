import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-mural.jpg";
import mural1 from "@/assets/mural-1.jpg";
import mural2 from "@/assets/mural-2.jpg";
import mural3 from "@/assets/mural-3.jpg";
import mural4 from "@/assets/mural-4.jpg";
import mural5 from "@/assets/mural-5.jpg";
import mural6 from "@/assets/mural-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "jarvisgötz.co — Bespoke Large-Scale Murals" },
      { name: "description", content: "Commissioned large-scale murals for luxury residences, hotels, and commercial spaces. View our portfolio." },
      { property: "og:title", content: "jarvisgötz.co — Bespoke Large-Scale Murals" },
      { property: "og:description", content: "Commissioned large-scale murals for luxury residences, hotels, and commercial spaces." },
    ],
  }),
  component: HomePage,
});

const galleryItems = [
  { src: mural1, title: "Obsidian & Gold", location: "Private Residence, NYC", aspect: "tall" },
  { src: mural2, title: "Terracotta Flow", location: "Gallery Installation, LA", aspect: "wide" },
  { src: mural3, title: "Geometric Dusk", location: "Estate Exterior, Miami", aspect: "tall" },
  { src: mural4, title: "Burgundy Burst", location: "Hotel Lobby, Dubai", aspect: "wide" },
  { src: mural5, title: "Midnight Garden", location: "Restaurant, London", aspect: "tall" },
  { src: mural6, title: "Copper Storm", location: "Penthouse Loft, Chicago", aspect: "wide" },
];

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen flex items-end">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Artist painting a large-scale mural in a dramatic studio"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pb-16 md:pb-24">
          <p className="label-uppercase mb-4 text-accent">Bespoke Murals</p>
          <h1 className="heading-display max-w-3xl text-foreground">
            Art that transforms<br />architecture
          </h1>
          <div className="mt-8 flex gap-4">
            <Link to="/contact" className="btn-luxury">
              Commission a piece
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <div className="divider-gold" />
            <p className="label-uppercase">Selected Works</p>
          </div>

          <div className="columns-1 md:columns-2 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="gallery-item break-inside-avoid"
              >
                <img
                  src={item.src}
                  alt={`${item.title} — ${item.location}`}
                  className="w-full object-cover"
                  loading="lazy"
                  width={1024}
                  height={item.aspect === "tall" ? 1344 : 768}
                />
                <div className="gallery-overlay" />
                <div className="gallery-caption">
                  <p className="font-serif text-lg text-foreground">{item.title}</p>
                  <p className="label-uppercase mt-1 text-foreground/50">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section text-foreground">
            Every space deserves a masterpiece
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl mx-auto">
            We work with architects, interior designers, and private collectors to create
            one-of-a-kind murals tailored to your vision and space.
          </p>
          <div className="mt-10">
            <Link to="/contact" className="btn-luxury-outline">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
