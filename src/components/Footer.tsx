export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-serif text-sm text-foreground/40">
          © {new Date().getFullYear()} jarvisgötz.co
        </p>
        <p className="label-uppercase text-foreground/30">
          Bespoke murals for discerning spaces
        </p>
      </div>
    </footer>
  );
}
