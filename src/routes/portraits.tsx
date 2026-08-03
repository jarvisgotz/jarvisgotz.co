import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portraits")({
  head: () => ({
    meta: [
      { title: "Portraits — jarvisgötz.co" },
      { name: "description", content: "Commissioned portrait paintings — people, pets, and places, painted to order." },
      { property: "og:title", content: "Portraits — jarvisgötz.co" },
      { property: "og:description", content: "Commissioned portrait paintings — people, pets, and places, painted to order." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortraitsPage,
});

function PortraitsPage() {
  return (
    <section className="pt-40 md:pt-56 pb-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="heading-display text-foreground">portraits</h1>
        <div className="divider-gold mx-auto mt-8" />
        <p className="mt-10 text-muted-foreground leading-relaxed">
          commissioned portraits of people, pets, and places. add your own words and images here.
        </p>
      </div>
    </section>
  );
}
