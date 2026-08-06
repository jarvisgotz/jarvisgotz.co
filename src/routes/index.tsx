import { createFileRoute, Link } from "@tanstack/react-router";
import { heroImages } from "@/lib/gallery";
import { Slideshow } from "@/components/Slideshow";


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

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Slideshow
            images={heroImages}
            alt="Artist painting a large-scale mural in a dramatic studio"
            className="w-full h-full"
            interval={5000}
            loading="eager"
            width={1920}
            height={1080}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-foreground text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
            whether on a custom build canvas or directly onto your walls, we will
            tailor your vision to your space.
          </p>
          <div className="mt-10">
            <Link to="/contact" className="btn-luxury-outline">
              start a conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
