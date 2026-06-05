import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Desktop masthead */}
        <div className="hidden md:flex flex-col items-center pt-8 pb-10 gap-6">
          <Link
            to="/"
            className="font-serif text-3xl lg:text-4xl tracking-tight text-foreground"
          >
            jarvisgötz.co
          </Link>
          <nav className="flex items-center gap-12">
            <Link
              to="/"
              className="label-uppercase text-base text-foreground/60 hover:text-foreground transition-colors duration-300"
              activeProps={{ className: "label-uppercase text-base text-accent" }}
            >
              Gallery
            </Link>
            <Link
              to="/about"
              className="label-uppercase text-base text-foreground/60 hover:text-foreground transition-colors duration-300"
              activeProps={{ className: "label-uppercase text-base text-accent" }}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="label-uppercase text-base text-foreground/60 hover:text-foreground transition-colors duration-300"
              activeProps={{ className: "label-uppercase text-base text-accent" }}
            >
              Inquire
            </Link>
          </nav>
        </div>

        {/* Mobile bar */}
        <div className="md:hidden relative flex items-center justify-center h-16">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="absolute left-0 flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-foreground transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1' : ''}`} />
            <span className={`block w-5 h-px bg-foreground transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-0.5' : ''}`} />
          </button>
          <Link to="/" className="font-serif text-xl tracking-tight text-foreground">
            jarvisgötz.co
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background px-6 py-8 flex flex-col items-center gap-6">
          <Link
            to="/"
            className="label-uppercase text-foreground/60 hover:text-foreground"
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/about"
            className="label-uppercase text-foreground/60 hover:text-foreground"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="label-uppercase text-foreground/60 hover:text-foreground"
            onClick={() => setMenuOpen(false)}
          >
            Inquire
          </Link>
        </div>
      )}
    </header>
  );
}
