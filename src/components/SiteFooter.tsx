import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative bg-brand text-beige mt-24 overflow-hidden">
      {/* Curvy top wave */}
      <div className="absolute -top-px left-0 right-0 leading-[0] pointer-events-none">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="block w-full h-[80px] md:h-[140px] -translate-y-[1px] fill-background"
          aria-hidden="true"
        >
          <path d="M0,96 C240,160 480,0 720,48 C960,96 1200,160 1440,80 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-20 -right-24 size-[420px] rounded-full bg-beige/5 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-0 -left-24 size-[360px] rounded-full bg-beige/5 blur-3xl animate-float-slow" />

      <div className="relative mx-auto max-w-7xl px-6 pt-40 md:pt-56 pb-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <div className="font-display text-2xl mb-3">AVENUE 8 INFRA</div>
          <div className="text-xs uppercase tracking-[0.3em] text-beige/60 mb-6">Builders & Developers</div>
          <p className="text-beige/75 leading-relaxed">
            Crafting trusted spaces for modern living across Telangana since 2020.
            Premium plots, independent houses and residential developments.
          </p>
          <div className="flex gap-3 mt-8">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="size-11 rounded-full border border-beige/30 flex items-center justify-center hover:bg-beige hover:text-brand hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Social"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-beige/60 mb-5">Navigate</div>
          <ul className="space-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/projects", label: "Projects" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="group inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-beige after:transition-all group-hover:after:w-full">
                    {l.label}
                  </span>
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-beige/60 mb-5">Reach Us</div>
          <ul className="space-y-3 text-sm text-beige/80">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>LB Nagar, Hyderabad, Telangana</span>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0" />
              <span>+91 00000 00000</span>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <span>info@avenue8infra.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-beige/15">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-beige/60">
          <div>© {new Date().getFullYear()} Avenue 8 Infra Builders & Developers. All rights reserved.</div>
          <div>Crafted with precision in Telangana.</div>
        </div>
      </div>
    </footer>
  );
}
