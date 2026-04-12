import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-serif text-lg md:text-xl tracking-tight text-foreground">
          jarvisgötz.co
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          <Link
            to="/"
            className="label-uppercase text-foreground/60 hover:text-foreground transition-colors duration-300"
            activeProps={{ className: "label-uppercase text-accent" }}
          >
            Gallery
          </Link>
          <Link
            to="/about"
            className="label-uppercase text-foreground/60 hover:text-foreground transition-colors duration-300"
            activeProps={{ className: "label-uppercase text-accent" }}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="label-uppercase text-foreground/60 hover:text-foreground transition-colors duration-300"
            activeProps={{ className: "label-uppercase text-accent" }}
          >
            Inquire
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-foreground transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1' : ''}`} />
          <span className={`block w-5 h-px bg-foreground transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-0.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-8 flex flex-col gap-6">
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
