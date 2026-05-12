import { r as reactExports, W as jsxRuntimeExports } from "./server-D-kI76To.js";
import { t as toast } from "./router-DfyRs1nj.js";
import { c as createLucideIcon, P as PageLayout, S as SectionHeading, M as MapPin, a as Phone, b as Mail, d as MessageCircle } from "./SectionHeading-D3c41Dgk.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
class EmailJSResponseStatus {
  constructor(_status = 0, _text = "Network Error") {
    this.status = _status;
    this.text = _text;
  }
}
const createWebStorage = () => {
  if (typeof localStorage === "undefined")
    return;
  return {
    get: (key) => Promise.resolve(localStorage.getItem(key)),
    set: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
    remove: (key) => Promise.resolve(localStorage.removeItem(key))
  };
};
const store = {
  origin: "https://api.emailjs.com",
  blockHeadless: false,
  storageProvider: createWebStorage()
};
const buildOptions = (options) => {
  if (!options)
    return {};
  if (typeof options === "string") {
    return {
      publicKey: options
    };
  }
  if (options.toString() === "[object Object]") {
    return options;
  }
  return {};
};
const init = (options, origin = "https://api.emailjs.com") => {
  if (!options)
    return;
  const opts = buildOptions(options);
  store.publicKey = opts.publicKey;
  store.blockHeadless = opts.blockHeadless;
  store.storageProvider = opts.storageProvider;
  store.blockList = opts.blockList;
  store.limitRate = opts.limitRate;
  store.origin = opts.origin || origin;
};
const sendPost = async (url, data, headers = {}) => {
  const response = await fetch(store.origin + url, {
    method: "POST",
    headers,
    body: data
  });
  const message = await response.text();
  const responseStatus = new EmailJSResponseStatus(response.status, message);
  if (response.ok) {
    return responseStatus;
  }
  throw responseStatus;
};
const validateParams = (publicKey, serviceID, templateID) => {
  if (!publicKey || typeof publicKey !== "string") {
    throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
  }
  if (!serviceID || typeof serviceID !== "string") {
    throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
  }
  if (!templateID || typeof templateID !== "string") {
    throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
  }
};
const validateTemplateParams = (templateParams) => {
  if (templateParams && templateParams.toString() !== "[object Object]") {
    throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/";
  }
};
const isHeadless = (navigator2) => {
  return navigator2.webdriver || !navigator2.languages || navigator2.languages.length === 0;
};
const headlessError = () => {
  return new EmailJSResponseStatus(451, "Unavailable For Headless Browser");
};
const validateBlockListParams = (list, watchVariable) => {
  if (!Array.isArray(list)) {
    throw "The BlockList list has to be an array";
  }
  if (typeof watchVariable !== "string") {
    throw "The BlockList watchVariable has to be a string";
  }
};
const isBlockListDisabled = (options) => {
  return !options.list?.length || !options.watchVariable;
};
const getValue = (data, name) => {
  return data instanceof FormData ? data.get(name) : data[name];
};
const isBlockedValueInParams = (options, params) => {
  if (isBlockListDisabled(options))
    return false;
  validateBlockListParams(options.list, options.watchVariable);
  const value = getValue(params, options.watchVariable);
  if (typeof value !== "string")
    return false;
  return options.list.includes(value);
};
const blockedEmailError = () => {
  return new EmailJSResponseStatus(403, "Forbidden");
};
const validateLimitRateParams = (throttle, id) => {
  if (typeof throttle !== "number" || throttle < 0) {
    throw "The LimitRate throttle has to be a positive number";
  }
  if (id && typeof id !== "string") {
    throw "The LimitRate ID has to be a non-empty string";
  }
};
const getLeftTime = async (id, throttle, storage) => {
  const lastTime = Number(await storage.get(id) || 0);
  return throttle - Date.now() + lastTime;
};
const isLimitRateHit = async (defaultID, options, storage) => {
  if (!options.throttle || !storage) {
    return false;
  }
  validateLimitRateParams(options.throttle, options.id);
  const id = options.id || defaultID;
  const leftTime = await getLeftTime(id, options.throttle, storage);
  if (leftTime > 0) {
    return true;
  }
  await storage.set(id, Date.now().toString());
  return false;
};
const limitRateError = () => {
  return new EmailJSResponseStatus(429, "Too Many Requests");
};
const send = async (serviceID, templateID, templateParams, options) => {
  const opts = buildOptions(options);
  const publicKey = opts.publicKey || store.publicKey;
  const blockHeadless = opts.blockHeadless || store.blockHeadless;
  const storageProvider = opts.storageProvider || store.storageProvider;
  const blockList = { ...store.blockList, ...opts.blockList };
  const limitRate = { ...store.limitRate, ...opts.limitRate };
  if (blockHeadless && isHeadless(navigator)) {
    return Promise.reject(headlessError());
  }
  validateParams(publicKey, serviceID, templateID);
  validateTemplateParams(templateParams);
  if (templateParams && isBlockedValueInParams(blockList, templateParams)) {
    return Promise.reject(blockedEmailError());
  }
  if (await isLimitRateHit(location.pathname, limitRate, storageProvider)) {
    return Promise.reject(limitRateError());
  }
  const params = {
    lib_version: "4.4.1",
    user_id: publicKey,
    service_id: serviceID,
    template_id: templateID,
    template_params: templateParams
  };
  return sendPost("/api/v1.0/email/send", JSON.stringify(params), {
    "Content-type": "application/json"
  });
};
const validateForm = (form) => {
  if (!form || form.nodeName !== "FORM") {
    throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form";
  }
};
const findHTMLForm = (form) => {
  return typeof form === "string" ? document.querySelector(form) : form;
};
const sendForm = async (serviceID, templateID, form, options) => {
  const opts = buildOptions(options);
  const publicKey = opts.publicKey || store.publicKey;
  const blockHeadless = opts.blockHeadless || store.blockHeadless;
  const storageProvider = store.storageProvider || opts.storageProvider;
  const blockList = { ...store.blockList, ...opts.blockList };
  const limitRate = { ...store.limitRate, ...opts.limitRate };
  if (blockHeadless && isHeadless(navigator)) {
    return Promise.reject(headlessError());
  }
  const currentForm = findHTMLForm(form);
  validateParams(publicKey, serviceID, templateID);
  validateForm(currentForm);
  const formData = new FormData(currentForm);
  if (isBlockedValueInParams(blockList, formData)) {
    return Promise.reject(blockedEmailError());
  }
  if (await isLimitRateHit(location.pathname, limitRate, storageProvider)) {
    return Promise.reject(limitRateError());
  }
  formData.append("lib_version", "4.4.1");
  formData.append("service_id", serviceID);
  formData.append("template_id", templateID);
  formData.append("user_id", publicKey);
  return sendPost("/api/v1.0/email/send-form", formData);
};
const emailjs = {
  init,
  send,
  sendForm,
  EmailJSResponseStatus
};
const contactData = [{
  Icon: MapPin,
  title: "Office Location",
  val: "LB Nagar, Hyderabad, Telangana — 500074",
  href: "https://maps.app.goo.gl/R167e2H7MmavVFg69"
}, {
  Icon: Phone,
  title: "Call Us",
  val: "+91 78934 02341",
  href: "tel:+917893402341"
}, {
  Icon: Mail,
  title: "Email Address",
  val: "info@avenue8infra.com",
  href: "mailto:info@avenue8infra.com"
}, {
  Icon: MessageCircle,
  title: "WhatsApp",
  val: "+91 78934 02341",
  href: "https://wa.me/917893402341"
}];
function ContactPage() {
  const [loading, setLoading] = reactExports.useState(false);
  const [formData, setFormData] = reactExports.useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: ""
  });
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name.trim().length < 3) {
      toast.error("Please enter a valid name.");
      return;
    }
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (formData.message.trim().length < 10) {
      toast.error("Message should be at least 10 characters.");
      return;
    }
    try {
      setLoading(true);
      await emailjs.send("your_service_id", "your_template_id", {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        interest: formData.interest,
        message: formData.message
      }, "your_public_key");
      toast.success("Thank you for contacting Avenue 8 Infra. We'll get back to you shortly.");
      setFormData({
        name: "",
        phone: "",
        email: "",
        interest: "",
        message: ""
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-brand pt-40 pb-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 opacity-30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/4 h-96 w-96 rounded-full bg-beige/20 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-7xl px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 text-xs uppercase tracking-[0.35em] text-beige/70", children: "Contact Avenue 8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display mx-auto max-w-4xl text-5xl leading-[1.05] text-white md:text-7xl", children: [
          "Let’s Build Your",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-beige", children: "Future Address" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-beige/80", children: "Whether you're searching for premium plots or planning your next investment, our team is here to guide you." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative bg-background py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-start gap-10 lg:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Reach Us", title: "We’d love to hear from you.", description: "Connect with our team for project details, pricing, site visits and investment guidance." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-5", children: contactData.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: c.href, target: "_blank", rel: "noopener noreferrer", className: "\r\n                      group flex items-start gap-5\r\n                      rounded-3xl border border-border\r\n                      bg-card p-6\r\n                      transition-all duration-300\r\n                      hover:-translate-y-1\r\n                      hover:border-brand/20\r\n                      hover:shadow-2xl\r\n                    ", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "\r\n                        flex size-14 shrink-0 items-center justify-center\r\n                        rounded-2xl bg-brand text-beige\r\n                        transition-transform duration-300\r\n                        group-hover:scale-110\r\n                      ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.Icon, { size: 20 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground", children: c.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 break-words font-display text-lg leading-relaxed text-brand", children: c.val })
          ] })
        ] }, c.title)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "\r\n                  rounded-[2rem]\r\n                  border border-border\r\n                  bg-card\r\n                  p-8 md:p-12\r\n                  shadow-[0_20px_80px_rgba(0,0,0,0.06)]\r\n                ", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-4xl text-brand", children: "Send an Enquiry" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 leading-relaxed text-muted-foreground", children: "Fill out the form below and our team will contact you shortly." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-6", onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name", name: "name", placeholder: "Enter your full name", value: formData.name, onChange: handleChange, required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone Number", name: "phone", type: "tel", placeholder: "9876543210", maxLength: 10, inputMode: "numeric", value: formData.phone, onChange: handleChange, required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email Address", name: "email", type: "email", placeholder: "you@example.com", value: formData.email, onChange: handleChange, required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Interested In", name: "interest", placeholder: "Plots · Villas · Investment", value: formData.interest, onChange: handleChange }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", rows: 5, required: true, placeholder: "Tell us about your requirement...", value: formData.message, onChange: handleChange, className: "\r\n                        mt-3 w-full rounded-2xl\r\n                        border border-border\r\n                        bg-background\r\n                        px-5 py-4 text-sm\r\n                        outline-none transition-all\r\n                        resize-none\r\n                        placeholder:text-muted-foreground/60\r\n                        focus:border-brand\r\n                        focus:ring-4\r\n                        focus:ring-brand/10\r\n                      " })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: loading, className: "\r\n                      inline-flex items-center gap-3\r\n                      rounded-2xl bg-brand\r\n                      px-8 py-4\r\n                      text-sm uppercase tracking-[0.25em]\r\n                      text-beige\r\n                      transition-all duration-300\r\n                      hover:scale-[1.02]\r\n                      hover:bg-brand/90\r\n                      disabled:cursor-not-allowed\r\n                      disabled:opacity-70\r\n                    ", children: [
            loading ? "Sending..." : "Send Enquiry",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 15 })
          ] })
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-[2rem] border border-border shadow-[0_20px_60px_rgba(0,0,0,0.08)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Avenue 8 Infra office map", src: "https://www.google.com/maps?q=17.34865,78.5524216&z=17&output=embed", className: "h-[500px] w-full border-0", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) }) }) })
  ] });
}
function Field({
  label,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...props, className: "\r\n          mt-3 w-full rounded-2xl\r\n          border border-border\r\n          bg-background\r\n          px-5 py-4 text-sm\r\n          outline-none transition-all\r\n          placeholder:text-muted-foreground/60\r\n          focus:border-brand\r\n          focus:ring-4\r\n          focus:ring-brand/10\r\n        " })
  ] });
}
export {
  ContactPage as component
};
