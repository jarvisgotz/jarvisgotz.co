import { createFileRoute, Link } from "@tanstack/react-router";
const heroAsset = { url: "/hero-mural.jpg" };
import { galleryItems } from "@/lib/gallery";

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
          <img
            src={heroAsset.url}
            alt="Artist painting a large-scale mural in a dramatic studio"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 text-center text-white">
          
          <h1 className="heading-display max-w-4xl mx-auto text-white/75 font-bold text-6xl md:text-8xl lg:text-9xl leading-[1.05] tracking-[0.2em]">
            art that transforms<br />architecture
          </h1>
          <div className="mt-10 flex justify-center gap-4">
            <Link to="/contact" aria-label="commission a piece!" className="funky-star-btn group">
              <svg viewBox="0 0 240 240" className="funky-star-svg" aria-hidden="true">
                <path
                  d="M118 14 C128 46, 146 60, 182 52 C170 80, 178 102, 222 110 C188 124, 188 148, 214 184 C176 178, 158 196, 152 226 C134 200, 110 198, 78 222 C82 188, 66 170, 24 168 C58 148, 62 124, 30 96 C68 100, 90 86, 92 46 C100 60, 108 60, 118 14 Z"
                  className="funky-star-path"
                />
              </svg>
              <svg viewBox="0 0 320 320" className="funky-star-sparks" aria-hidden="true">
                <g className="spark spark-1"><path d="M40 60 L52 72 M46 54 L46 78 M34 66 L58 66" /></g>
                <g className="spark spark-2"><path d="M280 50 L292 62 M286 44 L286 68 M274 56 L298 56" /></g>
                <g className="spark spark-3"><path d="M30 230 L42 242 M36 224 L36 248 M24 236 L48 236" /></g>
                <g className="spark spark-4"><path d="M290 250 L302 262 M296 244 L296 268 M284 256 L308 256" /></g>
                <g className="spark spark-5"><path d="M160 8 L160 26 M151 17 L169 17" /></g>
                <g className="spark spark-6"><path d="M160 296 L160 314 M151 305 L169 305" /></g>
              </svg>
              <span className="funky-star-label">commission<br/>a piece!</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <div className="divider-gold" />
            <p className="label-uppercase text-3xl">selected works</p>
          </div>

          <div className="columns-1 md:columns-2 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {galleryItems.map((item) => (
              <Link
                key={item.slug}
                to="/works/$slug"
                params={{ slug: item.slug }}
                className="gallery-item break-inside-avoid block cursor-pointer"
                aria-label={`view ${item.title} — ${item.location}`}
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
                  <p className="font-serif text-3xl md:text-4xl text-foreground">{item.title}</p>
                  <p className="label-uppercase mt-2 text-foreground/50 text-lg md:text-xl">{item.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section text-foreground">
            every space deserves a masterpiece
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl mx-auto">
            i work with architects, interior designers, and private collectors to create
            one-of-a-kind murals tailored to your vision and space.
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
