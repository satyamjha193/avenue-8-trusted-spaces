import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/SectionHeading";
import aboutImg from "@/assets/about.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import { Compass, HeartHandshake, Target } from "lucide-react";
import shafiImg from "@/assets/Leaders/md-shafi.jpeg";
import ganeshImg from "@/assets/Leaders/durgaganesh.jpeg";
import deverakonda1 from "@/assets/videos/devarakonda1.mp4";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Avenue 8 Infra Builders & Developers" },
      { name: "description", content: "Founded in 2020 in Telangana, Avenue 8 Infra has delivered 100+ trusted residential projects across the region." },
      { property: "og:title", content: "About Avenue 8 Infra" },
      { property: "og:description", content: "Our story, mission and the people behind Avenue 8 Infra." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageLayout>
      <section className="relative pt-44 pb-24 bg-brand text-beige overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src={gallery2} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand/90 to-brand" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-beige/70 mb-5 animate-fade-up">About Us</div>
          <h1 className="font-display text-5xl md:text-7xl text-white text-balance max-w-4xl animate-fade-up delay-100">
            A Telangana story of trust, craft and modern living.
          </h1>
        </div>
      </section>

      <section className="py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <video
            src={deverakonda1}
            autoPlay
            muted
            loop
            playsInline
            className="w-full aspect-[7/5] object-cover shadow-luxe"
          >
            Your browser does not support the video tag.
          </video>
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="From a single development to a trusted Telangana name."
              description="Avenue 8 Infra Builders & Developers was founded in 2020 with a simple commitment — to bring transparent, well-crafted real estate to families across Telangana. In just five years we have completed over 100 successful projects spanning premium plots, independent houses and modern residential developments."
            />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Headquartered in LB Nagar, our team combines architectural sensibility with a deep
              understanding of the Telangana landscape — delivering spaces that feel considered,
              enduring and genuinely livable.
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 gradient-beige">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8">
          {[
            { Icon: Target, title: "Our Mission", desc: "To deliver legally sound, beautifully designed homes and plots that empower families to invest with confidence." },
            { Icon: Compass, title: "Our Vision", desc: "To be Telangana's most trusted name in residential development — defined by integrity and architectural quality." },
            { Icon: HeartHandshake, title: "Our Promise", desc: "Transparent dealings, prime locations, and lifelong support for every customer who chooses us." },
          ].map((c) => (
            <div key={c.title} className="bg-card p-10 hover-lift">
              <c.Icon className="text-brand mb-6" size={28} />
              <h3 className="font-display text-2xl text-brand mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* //Leadership  */}

      <section className="py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Leadership"
            title="The people behind Avenue 8."
            align="center"
          />

        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              name: "Mr. MD. Shafi",
              role: "Chief Executive Officer",
              bio: "Leading Avenue 8 Infra with a vision for transparent, future-ready residential developments across Telangana.",
              image: shafiImg,
            },
            {
              name: "Mr. Durga Ganesh",
              role: "Marketing Director",
              bio: "Connecting families with their ideal plots and homes through honest, attentive advisory.",
              image: ganeshImg,
            },
          ].map((p) => (
            <div
              key={p.name}
              className="bg-secondary/40 p-10 hover-lift rounded-2xl"
            >
              {/* Profile Image */}
              <div className="size-24 rounded-full overflow-hidden mb-6 border-4 border-brand/20">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-display text-2xl text-brand">
                {p.name}
              </h3>

              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
                {p.role}
              </div>

              <p className="mt-5 text-muted-foreground leading-relaxed">
                {p.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
      </section>

    </PageLayout>
  );
}
