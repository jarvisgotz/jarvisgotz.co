import { Link } from "@tanstack/react-router";

export function Header() {


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
          <nav className="flex items-center gap-10">
            <Link
              to="/"
              className="label-uppercase text-base text-foreground/60 hover:text-foreground transition-colors duration-300"
              activeProps={{ className: "label-uppercase text-base text-accent" }}
            >
              Home
            </Link>
            <Link
              to="/portraits"
              className="label-uppercase text-base font-semibold text-foreground/70 hover:text-foreground transition-colors duration-300"
              activeProps={{ className: "label-uppercase text-base font-semibold text-accent" }}
            >
              Portraits
            </Link>
            <Link
              to="/murals"
              className="label-uppercase text-base font-semibold text-foreground/70 hover:text-foreground transition-colors duration-300"
              activeProps={{ className: "label-uppercase text-base font-semibold text-accent" }}
            >
              Murals
            </Link>
            <Link
              to="/weddings"
              className="label-uppercase text-base font-semibold text-foreground/70 hover:text-foreground transition-colors duration-300"
              activeProps={{ className: "label-uppercase text-base font-semibold text-accent" }}
            >
              Weddings
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

        {/* Mobile masthead */}
        <div className="md:hidden flex flex-col items-center pt-6 pb-5 gap-4">
          <Link to="/" className="font-serif text-3xl tracking-tight text-foreground">
            jarvisgötz.co
          </Link>
          <nav className="flex items-center justify-center gap-x-3">
            <Link
              to="/"
              className="label-uppercase text-[0.72rem] tracking-[0.12em] whitespace-nowrap text-foreground/60"
              activeProps={{ className: "label-uppercase text-[0.72rem] tracking-[0.12em] whitespace-nowrap text-accent" }}
            >
              Home
            </Link>
            <Link
              to="/portraits"
              className="label-uppercase text-[0.72rem] tracking-[0.12em] whitespace-nowrap font-semibold text-foreground/70"
              activeProps={{ className: "label-uppercase text-[0.72rem] tracking-[0.12em] whitespace-nowrap font-semibold text-accent" }}
            >
              Portraits
            </Link>
            <Link
              to="/murals"
              className="label-uppercase text-[0.72rem] tracking-[0.12em] whitespace-nowrap font-semibold text-foreground/70"
              activeProps={{ className: "label-uppercase text-[0.72rem] tracking-[0.12em] whitespace-nowrap font-semibold text-accent" }}
            >
              Murals
            </Link>
            <Link
              to="/weddings"
              className="label-uppercase text-[0.72rem] tracking-[0.12em] whitespace-nowrap font-semibold text-foreground/70"
              activeProps={{ className: "label-uppercase text-[0.72rem] tracking-[0.12em] whitespace-nowrap font-semibold text-accent" }}
            >
              Weddings
            </Link>
            <Link
              to="/contact"
              className="label-uppercase text-[0.72rem] tracking-[0.12em] whitespace-nowrap text-foreground/60"
              activeProps={{ className: "label-uppercase text-[0.72rem] tracking-[0.12em] whitespace-nowrap text-accent" }}
            >
              Inquire
            </Link>
          </nav>
        </div>
      </div>

    </header>
  );
}
