import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Building2, FileCheck, MapPin, ShieldCheck, Sparkles, Star, Zap } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { Counter } from "@/components/Counter";
import heroImg from "@/assets/hero.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avenue 8 Infra — Premium Plots & Villas in Telangana" },
      { name: "description", content: "Avenue 8 Infra Builders & Developers — 100+ trusted projects across Telangana. Premium plots, independent houses and residential developments since 2020." },
      { property: "og:title", content: "Avenue 8 Infra — Premium Plots & Villas in Telangana" },
      { property: "og:description", content: "Building trusted spaces for modern living across Telangana." },
    ],
  }),
  component: HomePage,
});

const features = [
  { icon: ShieldCheck, title: "Legal & Verified", desc: "Every property fully approved with clear, verified title documents." },
  { icon: MapPin, title: "Prime Locations", desc: "Strategic, high-growth corridors across the Telangana region." },
  { icon: Building2, title: "Modern Infrastructure", desc: "Wide internal roads, drainage, parks and lifestyle amenities." },
  { icon: Sparkles, title: "Transparent Deals", desc: "Honest pricing, no hidden fees, complete clarity throughout." },
  { icon: Award, title: "Customer Trust", desc: "Hundreds of satisfied owners and a five-year track record." },
  { icon: Zap, title: "Fast Documentation", desc: "Streamlined registration and handover, end-to-end support." },
];

const projects = [
  { img: project1, title: "Avenue Heights Villas", location: "Shadnagar, Telangana", type: "Independent Houses", price: "From ₹ 95 L" },
  { img: project2, title: "Avenue Greens Layout", location: "Kothur, Telangana", type: "Residential Plots", price: "From ₹ 18 L" },
  { img: project3, title: "Avenue Pearl Residency", location: "LB Nagar, Telangana", type: "Premium Villas", price: "From ₹ 1.4 Cr" },
];

const testimonials = [
  { name: "Ramesh Kumar", role: "Plot Owner, Kothur", quote: "From site visit to registration, every step was transparent. Avenue 8 delivered exactly what was promised." },
  { name: "Lakshmi Devi", role: "Villa Owner, LB Nagar", quote: "The build quality and finishing of our independent house exceeded expectations. Truly a premium experience." },
  { name: "Suresh Reddy", role: "Investor", quote: "I’ve invested in three of their layouts. Prime locations, clean paperwork, and reliable returns." },
];

function HomePage() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Luxury residential community in Telangana"
            width={1920}
            height={1080}
            className="w-full h-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/40 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 text-beige/85 text-xs uppercase tracking-[0.3em] mb-8 animate-fade-up">
              <span className="h-px w-10 bg-beige/60" />
              Established 2020 · Telangana
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.25rem] leading-[1.02] text-white text-balance animate-fade-up delay-100">
              Building Trusted <em className="not-italic text-beige">Spaces</em> for Modern Living
            </h1>
            <p className="mt-8 text-lg text-beige/85 max-w-xl leading-relaxed animate-fade-up delay-200">
              Premium residential plots, independent houses and thoughtfully designed
              residential developments across the Telangana region.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up delay-300">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 bg-beige text-brand px-7 py-4 text-sm uppercase tracking-[0.2em] hover:bg-white transition-all"
              >
                Explore Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-beige/60 text-beige px-7 py-4 text-sm uppercase tracking-[0.2em] hover:bg-beige hover:text-brand transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Floating stats */}
          <div className="mt-20 md:absolute md:bottom-12 md:right-6 md:mt-0 grid grid-cols-3 gap-3 md:gap-4 max-w-2xl animate-fade-up delay-500">
            {[
              { v: "100+", l: "Projects Completed" },
              { v: "2020", l: "Trusted Since" },
              { v: "Telangana", l: "Proudly Local" },
            ].map((s) => (
              <div key={s.l} className="glass px-5 py-5 text-white">
                <div className="font-display text-2xl md:text-3xl text-beige">{s.v}</div>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] mt-1 text-beige/80">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Modern residential building by Avenue 8 Infra"
              loading="lazy"
              width={1280}
              height={1280}
              className="w-full aspect-[4/5] object-cover shadow-luxe"
            />
            <div className="absolute -bottom-8 -right-4 md:-right-8 glass-dark px-8 py-6 text-beige max-w-xs">
              <div className="font-display text-3xl">5+ Years</div>
              <div className="text-xs uppercase tracking-[0.2em] text-beige/70 mt-1">of Crafted Excellence</div>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="About Avenue 8"
              title="A Telangana-rooted vision for refined, modern living."
              description="Since 2020 we have shaped over 100 successful projects — from elegant residential plots to premium independent houses. Our work is grounded in transparency, architectural integrity and an enduring commitment to the families who call our spaces home."
            />
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border-l-2 border-brand/30 pl-5">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">CEO</div>
                <div className="font-display text-xl text-brand mt-1">MD. Shafi</div>
              </div>
              <div className="border-l-2 border-brand/30 pl-5">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Marketing</div>
                <div className="font-display text-xl text-brand mt-1">Mr. Durga Ganesh</div>
              </div>
            </div>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-3 text-brand text-sm uppercase tracking-[0.25em] border-b border-brand pb-1 hover:gap-5 transition-all"
            >
              Our Story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-28 gradient-beige">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <SectionHeading
              eyebrow="Featured Projects"
              title="Signature developments, designed to endure."
            />
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 text-brand text-sm uppercase tracking-[0.25em] hover:gap-5 transition-all"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p) => (
              <article key={p.title} className="group bg-card hover-lift overflow-hidden">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.4s] ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-brand/90 text-beige text-[10px] uppercase tracking-[0.2em] px-3 py-1.5">
                    {p.type}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl text-brand">{p.title}</h3>
                  <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={14} /> {p.location}
                  </div>
                  <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
                    <span className="font-display text-lg text-brand">{p.price}</span>
                    <Link to="/contact" className="text-xs uppercase tracking-[0.25em] text-brand inline-flex items-center gap-2 hover:gap-3 transition-all">
                      View Details <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A foundation built on trust, craft and clarity."
            align="center"
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {features.map((f) => (
              <div key={f.title} className="bg-background p-10 hover:bg-secondary/40 transition-colors group">
                <div className="size-14 border border-brand/20 flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-beige transition-all">
                  <f.icon size={22} />
                </div>
                <h3 className="font-display text-xl text-brand mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="py-28 bg-brand text-beige relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={gallery2} alt="" loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/95 to-brand/70" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-beige/70 mb-4">By The Numbers</div>
            <h2 className="font-display text-4xl md:text-5xl text-white text-balance">
              Five years of measured, meaningful growth.
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { v: 100, s: "+", l: "Projects Delivered" },
              { v: 500, s: "+", l: "Happy Clients" },
              { v: 5, s: "+", l: "Years of Experience" },
              { v: 12, s: "+", l: "Prime Locations" },
            ].map((s) => (
              <div key={s.l} className="border-t border-beige/25 pt-6">
                <div className="font-display text-5xl md:text-6xl text-white">
                  <Counter to={s.v} suffix={s.s} />
                </div>
                <div className="text-xs uppercase tracking-[0.25em] text-beige/75 mt-3">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Testimonials" title="Voices from our community." align="center" />
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <figure key={t.name} className="bg-secondary/40 p-10 hover-lift">
                <div className="flex gap-1 text-brand mb-5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <blockquote className="font-display text-lg text-brand leading-snug">“{t.quote}”</blockquote>
                <figcaption className="mt-8 pt-5 border-t border-border">
                  <div className="font-medium text-brand">{t.name}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-28 gradient-beige">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Gallery" title="A glimpse of our crafted spaces." />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            <img src={gallery1} loading="lazy" className="row-span-2 w-full h-full object-cover aspect-[3/4] md:aspect-auto hover-lift" alt="Luxury interior" />
            <img src={project1} loading="lazy" className="w-full aspect-square object-cover hover-lift" alt="Modern villa" />
            <img src={gallery2} loading="lazy" className="w-full aspect-square object-cover hover-lift" alt="Aerial view of community" />
            <img src={gallery3} loading="lazy" className="row-span-2 w-full h-full object-cover aspect-[3/4] md:aspect-auto hover-lift" alt="Villa entrance" />
            <img src={project3} loading="lazy" className="w-full aspect-square object-cover hover-lift" alt="Pool and villas" />
            <img src={project2} loading="lazy" className="w-full aspect-square object-cover hover-lift" alt="Plotted layout" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <FileCheck className="mx-auto text-brand mb-6" size={32} />
          <h2 className="font-display text-4xl md:text-5xl text-brand text-balance">
            Ready to find a place to call your own?
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Speak with our team for a curated walk-through of available plots and homes.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-brand text-beige px-9 py-4 text-sm uppercase tracking-[0.25em] hover:bg-brand/90 transition-colors"
          >
            Schedule a Visit <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
