import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-brand text-beige">
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-4">
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
                className="size-10 border border-beige/30 flex items-center justify-center hover:bg-beige hover:text-brand transition-colors"
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
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-beige/60 mb-5">Reach Us</div>
          <ul className="space-y-3 text-sm text-beige/80">
            <li className="flex gap-3"><MapPin size={16} className="mt-0.5 shrink-0" /> LB Nagar, Hyderabad, Telangana</li>
            <li className="flex gap-3"><Phone size={16} className="mt-0.5 shrink-0" /> +91 00000 00000</li>
            <li className="flex gap-3"><Mail size={16} className="mt-0.5 shrink-0" /> info@avenue8infra.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-beige/15">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-beige/60">
          <div>© {new Date().getFullYear()} Avenue 8 Infra Builders & Developers. All rights reserved.</div>
          <div>Crafted with precision in Telangana.</div>
        </div>
      </div>
    </footer>
  );
}
