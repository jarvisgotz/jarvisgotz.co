import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/murals")({
  head: () => ({
    meta: [
      { title: "Murals — jarvisgötz.co" },
      { name: "description", content: "Large-scale hand-painted murals for homes, hotels, and hospitality spaces." },
      { property: "og:title", content: "Murals — jarvisgötz.co" },
      { property: "og:description", content: "Large-scale hand-painted murals for homes, hotels, and hospitality spaces." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MuralsPage,
});

function MuralsPage() {
  return (
    <section className="pt-40 md:pt-56 pb-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="heading-display text-foreground">murals</h1>
        <div className="divider-gold mx-auto mt-8" />
        <p className="mt-10 text-muted-foreground leading-relaxed">
          large-scale hand-painted walls, interior and exterior. add your own words and images here.
        </p>
      </div>
    </section>
  );
}
