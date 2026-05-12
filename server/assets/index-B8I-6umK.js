import { r as reactExports, W as jsxRuntimeExports } from "./server-D-kI76To.js";
import { L as Link } from "./router-DfyRs1nj.js";
import { c as createLucideIcon, P as PageLayout, S as SectionHeading, M as MapPin } from "./SectionHeading-D3c41Dgk.js";
import { A as ArrowRight, p as project3, c as gallery1, a as project1, g as gallery3, b as project2 } from "./gallery-3-jft4HhKc.js";
import { g as gallery2 } from "./gallery-2-C3cmEF4f.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$5 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$5);
const __iconNode$4 = [
  ["path", { d: "M10 12h4", key: "a56b0p" }],
  ["path", { d: "M10 8h4", key: "1sr2af" }],
  ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
  [
    "path",
    {
      d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
      key: "secmi2"
    }
  ],
  ["path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
];
const FileCheck = createLucideIcon("file-check", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
function Counter({ to, suffix = "", duration = 1800 }) {
  const [val, setVal] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  const started = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(Math.round(to * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    val,
    suffix
  ] });
}
const heroImg = "/avenue-8-trusted-spaces/assets/hero-B-Zbtcs3.jpg";
const plotAbout = "/avenue-8-trusted-spaces/assets/Plot1-eAvVOum-.png";
const Plot2 = "/avenue-8-trusted-spaces/assets/Plot2-BxzZkh_q.png";
const independentHouse = "/avenue-8-trusted-spaces/assets/independentHouse-C8WooMwR.png";
const features = [{
  icon: ShieldCheck,
  title: "Legal & Verified",
  desc: "Every property fully approved with clear, verified title documents."
}, {
  icon: MapPin,
  title: "Prime Locations",
  desc: "Strategic, high-growth corridors across the Telangana region."
}, {
  icon: Building2,
  title: "Modern Infrastructure",
  desc: "Wide internal roads, drainage, parks and lifestyle amenities."
}, {
  icon: Sparkles,
  title: "Transparent Deals",
  desc: "Honest pricing, no hidden fees, complete clarity throughout."
}, {
  icon: Award,
  title: "Customer Trust",
  desc: "Hundreds of satisfied owners and a five-year track record."
}, {
  icon: Zap,
  title: "Fast Documentation",
  desc: "Streamlined registration and handover, end-to-end support."
}];
const projects = [{
  img: independentHouse,
  title: "Avenue Heights Villas",
  location: "L.B.Nagar, Telangana",
  type: "Independent Houses",
  price: "From ₹ 95 L"
}, {
  img: Plot2,
  title: "Avenue Greens Layout",
  location: "Narayanpur, Telangana",
  type: "Residential Plots",
  price: "From ₹ 18 L"
}, {
  img: project3,
  title: "Avenue Pearl Residency",
  location: "LB Nagar, Telangana",
  type: "Premium Villas",
  price: "From ₹ 1.4 Cr"
}];
const testimonials = [{
  name: "Ramesh Kumar",
  role: "Plot Owner, Kothur",
  quote: "From site visit to registration, every step was transparent. Avenue 8 delivered exactly what was promised."
}, {
  name: "Lakshmi Devi",
  role: "Villa Owner, LB Nagar",
  quote: "The build quality and finishing of our independent house exceeded expectations. Truly a premium experience."
}, {
  name: "Suresh Reddy",
  role: "Investor",
  quote: "I’ve invested in three of their layouts. Prime locations, clean paperwork, and reliable returns."
}, {
  name: "Ramesh Kumar",
  role: "Plot Owner, Kothur",
  quote: "From site visit to registration, every step was transparent. Avenue 8 delivered exactly what was promised."
}, {
  name: "Lakshmi Devi",
  role: "Villa Owner, LB Nagar",
  quote: "The build quality and finishing of our independent house exceeded expectations. Truly a premium experience."
}, {
  name: "Suresh Reddy",
  role: "Investor",
  quote: "I’ve invested in three of their layouts. Prime locations, clean paperwork, and reliable returns."
}, {
  name: "Ramesh Kumar",
  role: "Plot Owner, Kothur",
  quote: "From site visit to registration, every step was transparent. Avenue 8 delivered exactly what was promised."
}, {
  name: "Lakshmi Devi",
  role: "Villa Owner, LB Nagar",
  quote: "The build quality and finishing of our independent house exceeded expectations. Truly a premium experience."
}, {
  name: "Suresh Reddy",
  role: "Investor",
  quote: "I’ve invested in three of their layouts. Prime locations, clean paperwork, and reliable returns."
}];
function HomePage() {
  const scrollRef = reactExports.useRef(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Luxury residential community in Telangana", width: 1920, height: 1080, className: "w-full h-full object-cover animate-ken-burns" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-hero" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/40 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-7xl lg:text-[5.25rem] leading-[1.02] text-white text-balance animate-fade-up delay-100", children: [
            "Building Trusted ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-beige", children: "Spaces" }),
            " for Modern Living"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg text-beige/85 max-w-xl leading-relaxed animate-fade-up delay-200", children: "Premium residential plots, independent houses and thoughtfully designed residential developments across the Telangana region." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-4 animate-fade-up delay-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects", className: "group inline-flex items-center gap-3 bg-beige text-brand px-7 py-4 text-sm uppercase tracking-[0.2em] hover:bg-white transition-all", children: [
              "Explore Projects",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, className: "group-hover:translate-x-1 transition-transform" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center gap-3 border border-beige/60 text-beige px-7 py-4 text-sm uppercase tracking-[0.2em] hover:bg-beige hover:text-brand transition-all", children: "Contact Us" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 lg:absolute lg:bottom-12 lg:right-6 lg:mt-0 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 w-full lg:max-w-2xl animate-fade-up delay-500", children: [{
          v: "100+",
          l: "Projects Completed"
        }, {
          v: "2020",
          l: "Trusted Since"
        }, {
          v: "Telangana",
          l: "Proudly Local"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass px-4 sm:px-5 py-4 sm:py-5 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl sm:text-2xl md:text-3xl text-beige", children: s.v }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] md:text-xs uppercase tracking-[0.2em] mt-1 text-beige/80", children: s.l })
        ] }, s.l)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: plotAbout, alt: "Modern residential building by Avenue 8 Infra", loading: "lazy", width: 1280, height: 1280, className: "w-full aspect-[7/5] object-cover shadow-luxe" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-8 -right-4 md:-right-8 glass-dark px-8 py-6 text-beige max-w-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl", children: "5+ Years" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-beige/70 mt-1", children: "of Crafted Excellence" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "About Avenue 8", title: "A Telangana-rooted vision for refined, modern living.", description: "Since 2020 we have shaped over 100 successful projects — from elegant residential plots to premium independent houses. Our work is grounded in transparency, architectural integrity and an enduring commitment to the families who call our spaces home." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-brand/30 pl-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "CEO" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl text-brand mt-1", children: "MD. Shafi" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-brand/30 pl-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Marketing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl text-brand mt-1", children: "Mr. Durga Ganesh" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", className: "mt-10 inline-flex items-center gap-3 text-brand text-sm uppercase tracking-[0.25em] border-b border-brand pb-1 hover:gap-5 transition-all", children: [
          "Our Story ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28 gradient-beige", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Featured Projects", title: "Signature developments, designed to endure." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects", className: "inline-flex items-center gap-3 text-brand text-sm uppercase tracking-[0.25em] hover:gap-5 transition-all", children: [
          "View All ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group bg-card hover-lift overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden aspect-[4/3]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, loading: "lazy", width: 1280, height: 896, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.4s] ease-out" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 bg-brand/90 text-beige text-[10px] uppercase tracking-[0.2em] px-3 py-1.5", children: p.type })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-brand", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14 }),
            p.location
          ] })
        ] })
      ] }, p.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Why Choose Us", title: "A foundation built on trust, craft and clarity.", align: "center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-10 hover:bg-secondary/40 transition-colors group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 border border-brand/20 flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-beige transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { size: 22 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-brand mb-3", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: f.desc })
      ] }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-28 bg-brand text-beige relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: gallery2, alt: "", loading: "lazy", className: "w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-brand via-brand/95 to-brand/70" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-beige/70 mb-4", children: "By The Numbers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl text-white text-balance", children: "Five years of measured, meaningful growth." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-10", children: [{
          v: 100,
          s: "+",
          l: "Projects Delivered"
        }, {
          v: 500,
          s: "+",
          l: "Happy Clients"
        }, {
          v: 5,
          s: "+",
          l: "Years of Experience"
        }, {
          v: 12,
          s: "+",
          l: "Prime Locations"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-beige/25 pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl md:text-6xl text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.v, suffix: s.s }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-beige/75 mt-3", children: s.l })
        ] }, s.l)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Testimonials", title: "Voices from our community.", align: "center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: scrollRef, className: "mt-16 flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth no-scrollbar", children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "\r\n            w-[85vw] \r\n            sm:min-w-[320px] \r\n            md:min-w-[360px]\r\n            max-w-[360px]\r\n            flex-shrink-0\r\n            bg-secondary/40\r\n            p-6 sm:p-8 md:p-10\r\n            hover-lift\r\n            overflow-hidden\r\n          ", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-brand text-beige flex items-center justify-center font-semibold mb-4", children: t.name.split(" ")[0][0] + (t.name.split(" ")[1]?.[0] || "") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "font-display text-base sm:text-lg text-brand leading-relaxed break-words whitespace-normal", children: [
          "“",
          t.quote,
          "”"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-8 pt-5 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-brand break-words", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1 break-words", children: t.role })
        ] })
      ] }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28 gradient-beige", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Gallery", title: "A glimpse of our crafted spaces." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: gallery1, loading: "lazy", className: "row-span-2 w-full h-full object-cover aspect-[3/4] md:aspect-auto hover-lift", alt: "Luxury interior" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project1, loading: "lazy", className: "w-full aspect-square object-cover hover-lift", alt: "Modern villa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: gallery2, loading: "lazy", className: "w-full aspect-square object-cover hover-lift", alt: "Aerial view of community" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: gallery3, loading: "lazy", className: "row-span-2 w-full h-full object-cover aspect-[3/4] md:aspect-auto hover-lift", alt: "Villa entrance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project3, loading: "lazy", className: "w-full aspect-square object-cover hover-lift", alt: "Pool and villas" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project2, loading: "lazy", className: "w-full aspect-square object-cover hover-lift", alt: "Plotted layout" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mx-auto max-w-5xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileCheck, { className: "mx-auto text-brand mb-6", size: 32 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl text-brand text-balance", children: "Ready to find a place to call your own?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground max-w-xl mx-auto", children: "Speak with our team for a curated walk-through of available plots and homes." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-10 inline-flex items-center gap-3 bg-brand text-beige px-9 py-4 text-sm uppercase tracking-[0.25em] hover:bg-brand/90 transition-colors", children: [
        "Schedule a Visit ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
      ] })
    ] }) })
  ] });
}
export {
  HomePage as component
};
