import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/SectionHeading";
import { useRef } from "react";

import devarakonda1 from "@/assets/videos/devarakonda1.mp4";
import devarakonda2 from "@/assets/videos/devarakonda2.mp4";
import narayanpur1 from "@/assets/videos/narayanpur1.mp4";
import narayanpur2 from "@/assets/videos/narayanpur2.mp4";
import kalwakurthy from "@/assets/videos/bacharam.mp4";

export const Route = createFileRoute("/videos")({
  component: MediaPage,
});

const mediaData = [
  {
    src: devarakonda1,
    title: "Devarakonda Venture",
    subtitle: "Sunshine enclave DTCP Approved Layout",
  },
  {
    src: devarakonda2,
    title: "Devarakonda Layout",
    subtitle: "Sunshine enclave DTCP Approved Layout",
  },
  {
    src: narayanpur1,
    title: "Narayanpur Project",
    subtitle: "RRR Green Farms Layout",
  },
  {
    src: narayanpur2,
    title: "Narayanpur Development",
    subtitle: "Site Progress View",
  },
  {
    src: kalwakurthy,
    title: "Kalwakurthy Venture",
    subtitle: "Kalwakurthy Layout & Site Overview",
  },
];

function MediaPage() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePlay = (currentIndex: number) => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentIndex) {
        video.pause();
      }
    });
  };

  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-brand">
        
        <div className="absolute inset-0 opacity-20">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={devarakonda1} type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-brand/80 via-brand/70 to-brand" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <div className="text-xs uppercase tracking-[0.35em] text-beige/70 mb-5">
            Media Gallery
          </div>

          <h1 className="font-display text-5xl md:text-7xl text-white leading-[1.05]">
            Project Videos & <span className="text-beige">Drone Visuals</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-beige/80 text-lg leading-relaxed">
            Explore our ventures, layouts and development progress through
            cinematic site videos and aerial drone captures.
          </p>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <SectionHeading
            eyebrow="Featured Videos"
            title="A closer look at our developments."
            align="center"
          />

          {/* GRID */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaData.map((video, index) => (
              <article
                key={index}
                className="group bg-card overflow-hidden hover-lift border border-border"
              >
                {/* VIDEO */}
                <div className="relative overflow-hidden">
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={video.src}
                    controls
                    playsInline
                    preload="metadata"
                    onPlay={() => handlePlay(index)}
                    className="w-full h-72 object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="font-display text-2xl text-brand">
                    {video.title}
                  </h3>

                  <p className="mt-3 text-sm tracking-[0.2em] text-muted-foreground">
                    {video.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </PageLayout>
  );
}