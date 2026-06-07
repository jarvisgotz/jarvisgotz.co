export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <p className="label-uppercase text-foreground/40">
          {new Date().getFullYear()} jarvisgötz.co
        </p>
      </div>
    </footer>
  );
}
