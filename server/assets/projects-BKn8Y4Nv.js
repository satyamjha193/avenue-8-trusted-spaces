import { W as jsxRuntimeExports } from "./server-D-kI76To.js";
import { L as Link } from "./router-DfyRs1nj.js";
import { P as PageLayout, S as SectionHeading, M as MapPin } from "./SectionHeading-D3c41Dgk.js";
import { p as project3, a as project1, b as project2, g as gallery3, c as gallery1, A as ArrowRight } from "./gallery-3-jft4HhKc.js";
import { g as gallery2 } from "./gallery-2-C3cmEF4f.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const all = [{
  img: project1,
  title: "Avenue Heights Villas",
  location: "Shadnagar, Telangana",
  type: "Independent Houses",
  price: "From ₹ 95 L",
  desc: "Twin-villa community with private gardens and modern interiors."
}, {
  img: project2,
  title: "Avenue Greens Layout",
  location: "Kothur, Telangana",
  type: "Residential Plots",
  price: "From ₹ 18 L",
  desc: "DTCP-approved plots in a fast-developing growth corridor."
}, {
  img: project3,
  title: "Avenue Pearl Residency",
  location: "LB Nagar, Telangana",
  type: "Premium Villas",
  price: "From ₹ 1.4 Cr",
  desc: "Gated villa community with pool, clubhouse and concierge."
}, {
  img: gallery2,
  title: "Avenue Skyline Estates",
  location: "Maheshwaram, Telangana",
  type: "Residential Plots",
  price: "From ₹ 22 L",
  desc: "Master-planned plots beside upcoming infrastructure projects."
}, {
  img: gallery3,
  title: "Avenue Crest Homes",
  location: "Adibatla, Telangana",
  type: "Independent Houses",
  price: "From ₹ 1.1 Cr",
  desc: "Boutique cluster of contemporary homes near IT corridor."
}, {
  img: gallery1,
  title: "Avenue Royale Apartments",
  location: "LB Nagar, Telangana",
  type: "Premium Apartments",
  price: "From ₹ 78 L",
  desc: "Refined 3 BHK residences with curated amenities."
}];
function ProjectsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-44 pb-24 bg-brand text-beige overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-25", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project3, alt: "", className: "w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-brand/90 to-brand" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-beige/70 mb-5", children: "Our Portfolio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-7xl text-white text-balance max-w-4xl", children: "Signature developments across Telangana." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Featured Projects", title: "A curated selection from our 100+ developments." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: all.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group bg-card hover-lift overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden aspect-[4/3]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.4s]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 bg-brand/90 text-beige text-[10px] uppercase tracking-[0.2em] px-3 py-1.5", children: p.type })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-brand", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14 }),
            " ",
            p.location
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground leading-relaxed", children: p.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-5 border-t border-border flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg text-brand", children: p.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "text-xs uppercase tracking-[0.25em] text-brand inline-flex items-center gap-2 hover:gap-3 transition-all", children: [
              "Enquire ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
            ] })
          ] })
        ] })
      ] }, p.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-secondary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl text-brand", children: "Want to see our work in motion?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-xl mx-auto", children: "Explore walkthroughs, site progress videos, drone shots and real project visuals from our developments." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/videos", className: "mt-10 inline-flex items-center gap-3 bg-brand text-beige px-8 py-4 text-sm uppercase tracking-[0.25em] hover:gap-5 hover:bg-brand/90 transition-all", children: [
        "Look at our site videos",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
      ] })
    ] }) })
  ] });
}
export {
  ProjectsPage as component
};
