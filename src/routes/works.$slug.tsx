import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getGalleryItem, galleryItems, type GalleryItem } from "@/lib/gallery";

export const Route = createFileRoute("/works/$slug")({
  head: ({ params }) => {
    const item = getGalleryItem(params.slug);
    const title = item ? `${item.title} — jarvisgötz.co` : "work — jarvisgötz.co";
    const desc = item?.description ?? "bespoke mural commission.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        ...(item ? [{ property: "og:image", content: item.src }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const item = getGalleryItem(params.slug);
    if (!item) throw notFound();
    return item;
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <h1 className="heading-display text-foreground">work not found</h1>
        <div className="mt-8">
          <Link to="/" className="btn-luxury-outline">return home</Link>
        </div>
      </div>
    </div>
  ),
  component: WorkPage,
});

function WorkPage() {
  const item = Route.useLoaderData() as GalleryItem;

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        src={item.src}
        alt={`${item.title} — ${item.location}`}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-black/55 via-black/10 to-transparent" />

      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10">
        <Link to="/" className="label-uppercase text-white/90 hover:text-white transition-colors">
          ← back
        </Link>
      </div>

      <div className="absolute inset-y-0 right-0 z-10 flex items-center justify-end px-6 md:px-12">
        <div className="max-w-sm text-white">
          <p className="label-uppercase mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>
            {item.location}
          </p>
          <h1 className="heading-section" style={{ color: "white" }}>
            {item.title}
          </h1>
          <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
            {item.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export const _allSlugs = galleryItems.map((g) => g.slug);
