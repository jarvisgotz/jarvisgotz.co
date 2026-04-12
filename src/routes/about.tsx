import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ollie — jarvisgötz.co" },
      { name: "description", content: "Meet the artist behind jarvisgötz.co — large-scale murals for refined spaces." },
      { property: "og:title", content: "About Ollie — jarvisgötz.co" },
      { property: "og:description", content: "Meet the artist behind jarvisgötz.co." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-6 mb-8">
          <div className="divider-gold" />
          <p className="label-uppercase">About</p>
        </div>

        <h1 className="heading-section text-foreground mb-6">
          about me
        </h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            [Your story goes here — who you are, your background, what drives your work.
            Replace this with a few paragraphs about yourself.]
          </p>
          <p>
            [Talk about your approach to murals, your artistic philosophy,
            the types of spaces you love working in, and what makes your work unique.]
          </p>
          <p>
            [Mention any notable projects, clients, or press if you'd like.
            Keep the tone confident but approachable.]
          </p>
        </div>
      </div>
    </div>
  );
}
