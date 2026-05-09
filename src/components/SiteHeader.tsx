import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="size-10 rounded-sm border border-beige/40 flex items-center justify-center font-display text-beige">
            A8
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg text-beige tracking-wide">AVENUE 8</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-beige/70">Infra · Builders</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm uppercase tracking-[0.18em] text-beige/80 hover:text-beige transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 after:bg-beige after:transition-all hover:after:w-full"
              activeProps={{ className: "text-beige after:w-full" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 text-xs uppercase tracking-[0.2em] border border-beige/50 text-beige hover:bg-beige hover:text-brand transition-all duration-300"
        >
          Enquire
        </Link>

        <button
          className="md:hidden text-beige p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-dark mt-3 mx-6 p-6 animate-fade-in">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-beige uppercase tracking-[0.18em] text-sm"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
