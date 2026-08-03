import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/weddings")({
  head: () => ({
    meta: [
      { title: "Weddings — jarvisgötz.co" },
      { name: "description", content: "Live wedding painting and bespoke pieces for the day and the years after." },
      { property: "og:title", content: "Weddings — jarvisgötz.co" },
      { property: "og:description", content: "Live wedding painting and bespoke pieces for the day and the years after." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WeddingsPage,
});

function WeddingsPage() {
  return (
    <section className="pt-40 md:pt-56 pb-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="heading-display text-foreground">weddings</h1>
        <div className="divider-gold mx-auto mt-8" />
        <p className="mt-10 text-muted-foreground leading-relaxed">
          live painting and bespoke commissions for the day itself. add your own words and images here.
        </p>
      </div>
    </section>
  );
}
