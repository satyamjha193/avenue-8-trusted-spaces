import { r as reactExports, W as jsxRuntimeExports } from "./server-D-kI76To.js";
import { P as PageLayout, S as SectionHeading } from "./SectionHeading-D3c41Dgk.js";
import { d as deverakonda1 } from "./devarakonda1-CqBFyXr6.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-DfyRs1nj.js";
const devarakonda2 = "/avenue-8-trusted-spaces/assets/devarakonda2-C7qFjLVl.mp4";
const narayanpur1 = "/avenue-8-trusted-spaces/assets/narayanpur1-MpFALmj5.mp4";
const narayanpur2 = "/avenue-8-trusted-spaces/assets/narayanpur2-CW7J8fi4.mp4";
const bacharam = "/avenue-8-trusted-spaces/assets/bacharam-B8Kpyuy-.mp4";
const mediaData = [{
  src: deverakonda1,
  title: "Devarakonda Venture",
  subtitle: "Premium Open Plots"
}, {
  src: devarakonda2,
  title: "Devarakonda Layout",
  subtitle: "Nature & Infrastructure"
}, {
  src: narayanpur1,
  title: "Narayanpur Project",
  subtitle: "Drone Perspective"
}, {
  src: narayanpur2,
  title: "Narayanpur Development",
  subtitle: "Site Progress View"
}, {
  src: bacharam,
  title: "Bacharam Venture",
  subtitle: "Premium Investment Zone"
}];
function MediaPage() {
  const videoRefs = reactExports.useRef([]);
  const handlePlay = (currentIndex) => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentIndex) {
        video.pause();
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-36 pb-24 overflow-hidden bg-brand", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("video", { autoPlay: true, muted: true, loop: true, playsInline: true, className: "w-full h-full object-cover", children: /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: deverakonda1, type: "video/mp4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-brand/80 via-brand/70 to-brand" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-7xl px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.35em] text-beige/70 mb-5", children: "Media Gallery" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-7xl text-white leading-[1.05]", children: [
          "Project Videos & ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-beige", children: "Drone Visuals" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl mx-auto text-beige/80 text-lg leading-relaxed", children: "Explore our ventures, layouts and development progress through cinematic site videos and aerial drone captures." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Featured Videos", title: "A closer look at our developments.", align: "center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: mediaData.map((video, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group bg-card overflow-hidden hover-lift border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("video", { ref: (el) => {
          videoRefs.current[index] = el;
        }, src: video.src, controls: true, playsInline: true, preload: "metadata", onPlay: () => handlePlay(index), className: "w-full h-72 object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-brand", children: video.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground", children: video.subtitle })
        ] })
      ] }, index)) })
    ] }) })
  ] });
}
export {
  MediaPage as component
};
