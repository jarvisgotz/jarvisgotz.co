import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Inquire — jarvisgötz.co" },
      { name: "description", content: "Commission a bespoke mural for your space. Tell me about your project." },
      { property: "og:title", content: "Inquire — jarvisgötz.co" },
      { property: "og:description", content: "Commission a bespoke mural for your space." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-20 px-6 md:px-12">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-6 mb-8">
          <div className="divider-gold" />
          <p className="label-uppercase">get in touch</p>
        </div>

        <h1 className="heading-section text-foreground mb-4">
          tell me about your project
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-12">
          whether you have a clear vision or need guidance, i'd love to hear from you.
          share some details and i'll respond within 48 hours.
        </p>

        {submitted ? (
          <div className="py-16 text-center">
            <div className="divider-gold mx-auto mb-8" />
            <h2 className="font-serif text-2xl text-foreground mb-4">thank you</h2>
            <p className="text-muted-foreground">
              i've received your inquiry and will be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="label-uppercase block mb-2">name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="your name"
                  className="input-luxury"
                />
              </div>
              <div>
                <label className="label-uppercase block mb-2">email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="input-luxury"
                />
              </div>
            </div>

            <div>
              <label className="label-uppercase block mb-2">project type</label>
              <select
                name="projectType"
                required
                className="input-luxury appearance-none cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled>select one</option>
                <option value="residential">private residence</option>
                <option value="commercial">commercial space</option>
                <option value="hospitality">hotel / restaurant</option>
                <option value="public">public installation</option>
                <option value="other">other</option>
              </select>
            </div>

            <div>
              <label className="label-uppercase block mb-2">tell me more</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="describe your space, vision, and timeline..."
                className="input-luxury resize-none"
              />
            </div>

            <div className="pt-4">
              <button type="submit" className="btn-luxury w-full md:w-auto">
                send inquiry
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
