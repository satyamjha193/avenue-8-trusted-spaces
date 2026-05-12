import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/SectionHeading";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Avenue 8 Infra" },
      { name: "description", content: "Explore our signature plots, independent houses and premium villa developments across Telangana." },
      { property: "og:title", content: "Projects — Avenue 8 Infra" },
      { property: "og:description", content: "Premium plots, independent houses and villa developments across Telangana." },
    ],
  }),
  component: ProjectsPage,
});

const all = [
  { img: project1, title: "Avenue Heights Villas", location: "Shadnagar, Telangana", type: "Independent Houses", price: "From ₹ 95 L", desc: "Twin-villa community with private gardens and modern interiors." },
  { img: project2, title: "Avenue Greens Layout", location: "Kothur, Telangana", type: "Residential Plots", price: "From ₹ 18 L", desc: "DTCP-approved plots in a fast-developing growth corridor." },
  { img: project3, title: "Avenue Pearl Residency", location: "LB Nagar, Telangana", type: "Premium Villas", price: "From ₹ 1.4 Cr", desc: "Gated villa community with pool, clubhouse and concierge." },
  { img: gallery2, title: "Avenue Skyline Estates", location: "Maheshwaram, Telangana", type: "Residential Plots", price: "From ₹ 22 L", desc: "Master-planned plots beside upcoming infrastructure projects." },
  { img: gallery3, title: "Avenue Crest Homes", location: "Adibatla, Telangana", type: "Independent Houses", price: "From ₹ 1.1 Cr", desc: "Boutique cluster of contemporary homes near IT corridor." },
  { img: gallery1, title: "Avenue Royale Apartments", location: "LB Nagar, Telangana", type: "Premium Apartments", price: "From ₹ 78 L", desc: "Refined 3 BHK residences with curated amenities." },
];

function ProjectsPage() {
  return (
    <PageLayout>
      <section className="relative pt-44 pb-24 bg-brand text-beige overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src={project3} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand/90 to-brand" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-beige/70 mb-5">Our Portfolio</div>
          <h1 className="font-display text-5xl md:text-7xl text-white text-balance max-w-4xl">
            Signature developments across Telangana.
          </h1>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Featured Projects" title="A curated selection from our 100+ developments." />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {all.map((p) => (
              <article key={p.title} className="group bg-card hover-lift overflow-hidden">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.4s]" />
                  <div className="absolute top-4 left-4 bg-brand/90 text-beige text-[10px] uppercase tracking-[0.2em] px-3 py-1.5">{p.type}</div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl text-brand">{p.title}</h3>
                  <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={14} /> {p.location}
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                    <span className="font-display text-lg text-brand">{p.price}</span>
                    <Link to="/contact" className="text-xs uppercase tracking-[0.25em] text-brand inline-flex items-center gap-2 hover:gap-3 transition-all">
                      Enquire <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

{/* MEDIA CTA */}
<section className="py-20 bg-secondary/30">
  <div className="mx-auto max-w-7xl px-6 text-center">

    <h2 className="font-display text-3xl md:text-4xl text-brand">
      Want to see our work in motion?
    </h2>

    <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
      Explore walkthroughs, site progress videos, drone shots and real project visuals from our developments.
    </p>

    <Link
      to="/videos"
      className="mt-10 inline-flex items-center gap-3 bg-brand text-beige px-8 py-4 text-sm uppercase tracking-[0.25em] hover:gap-5 hover:bg-brand/90 transition-all"
    >
      Look at our site videos
      <ArrowRight size={16} />
    </Link>

  </div>
</section>

    </PageLayout>
  );
}
