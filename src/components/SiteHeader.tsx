import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/LOGO-AVENUE8INFRA.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/videos", label: "Videos" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

useEffect(() => {
  let lastScrollY = window.scrollY;

  const onScroll = () => {
    const currentScrollY = window.scrollY;

    setScrolled(currentScrollY > 24);

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  return () => window.removeEventListener("scroll", onScroll);
}, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled ? "glass-dark py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-3 group min-w-0"
        >
          <img
            src={logo}
            alt="Avenue 8 Infra Logo"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain shrink-0"
          />

          <div className="leading-tight min-w-0">
            <div className="font-display text-sm sm:text-base md:text-lg text-beige tracking-wide truncate">
              AVENUE 8 INFRA
            </div>

            <div className="text-[8px] sm:text-[10px] uppercase tracking-[0.18em] text-beige/70 truncate">
              Builders & Developers
            </div>
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
