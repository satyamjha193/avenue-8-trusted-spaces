import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import emailjs from "@emailjs/browser";

import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Avenue 8 Infra" },
      {
        name: "description",
        content:
          "Visit our LB Nagar office or send an enquiry. We respond within one business day.",
      },
    ],
  }),
  component: ContactPage,
});

const contactData = [
  {
    Icon: MapPin,
    title: "Office Location",
    val: "LB Nagar, Hyderabad, Telangana — 500074",
    href: "https://maps.app.goo.gl/R167e2H7MmavVFg69",
  },
  {
    Icon: Phone,
    title: "Call Us",
    val: "+91 78934 02341",
    href: "tel:+917893402341",
  },
  {
    Icon: Mail,
    title: "Email Address",
    val: "info@avenue8infra.com",
    href: "mailto:info@avenue8infra.com",
  },
  {
    Icon: MessageCircle,
    title: "WhatsApp",
    val: "+91 78934 02341",
    href: "https://wa.me/917893402341",
  },
];

function ContactPage() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // NAME VALIDATION
    if (formData.name.trim().length < 3) {
      toast.error("Please enter a valid name.");
      return;
    }

    // PHONE VALIDATION
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    // EMAIL VALIDATION
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // MESSAGE VALIDATION
    if (formData.message.trim().length < 10) {
      toast.error("Message should be at least 10 characters.");
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          interest: formData.interest,
          message: formData.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC
      );

      toast.success(
        "Thank you for contacting Avenue 8 Infra. We'll get back to you shortly."
      );

      setFormData({
        name: "",
        phone: "",
        email: "",
        interest: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand pt-40 pb-28">
        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-beige/20 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <div className="mb-6 text-xs uppercase tracking-[0.35em] text-beige/70">
            Contact Avenue 8
          </div>

          <h1 className="font-display mx-auto max-w-4xl text-5xl leading-[1.05] text-white md:text-7xl">
            Let’s Build Your{" "}
            <span className="text-beige">Future Address</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-beige/80">
            Whether you're searching for premium plots or planning your next
            investment, our team is here to guide you.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-start gap-10 lg:grid-cols-5">

            {/* LEFT SIDE */}
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="Reach Us"
                title="We’d love to hear from you."
                description="Connect with our team for project details, pricing, site visits and investment guidance."
              />

              <div className="mt-10 space-y-5">
                {contactData.map((c) => (
                  <a
                    key={c.title}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group flex items-start gap-5
                      rounded-3xl border border-border
                      bg-card p-6
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-brand/20
                      hover:shadow-2xl
                    "
                  >
                    <div
                      className="
                        flex size-14 shrink-0 items-center justify-center
                        rounded-2xl bg-brand text-beige
                        transition-transform duration-300
                        group-hover:scale-110
                      "
                    >
                      <c.Icon size={20} />
                    </div>

                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                        {c.title}
                      </div>

                      <div className="mt-2 break-words font-display text-lg leading-relaxed text-brand">
                        {c.val}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* FORM */}
            <div className="lg:col-span-3">
              <div
                className="
                  rounded-[2rem]
                  border border-border
                  bg-card
                  p-8 md:p-12
                  shadow-[0_20px_80px_rgba(0,0,0,0.06)]
                "
              >
                <div className="mb-8">
                  <h3 className="font-display text-4xl text-brand">
                    Send an Enquiry
                  </h3>

                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Fill out the form below and our team will contact you
                    shortly.
                  </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">

                    <Field
                      label="Full Name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                    <Field
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="9876543210"
                      maxLength={10}
                      inputMode="numeric"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Field
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <Field
                    label="Interested In"
                    name="interest"
                    placeholder="Plots · Villas · Investment"
                    value={formData.interest}
                    onChange={handleChange}
                  />

                  <div>
                    <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      Message
                    </label>

                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us about your requirement..."
                      value={formData.message}
                      onChange={handleChange}
                      className="
                        mt-3 w-full rounded-2xl
                        border border-border
                        bg-background
                        px-5 py-4 text-sm
                        outline-none transition-all
                        resize-none
                        placeholder:text-muted-foreground/60
                        focus:border-brand
                        focus:ring-4
                        focus:ring-brand/10
                      "
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      inline-flex items-center gap-3
                      rounded-2xl bg-brand
                      px-8 py-4
                      text-sm uppercase tracking-[0.25em]
                      text-beige
                      transition-all duration-300
                      hover:scale-[1.02]
                      hover:bg-brand/90
                      disabled:cursor-not-allowed
                      disabled:opacity-70
                    "
                  >
                    {loading ? "Sending..." : "Send Enquiry"}

                    <Send size={15} />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-background pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <iframe
              title="Avenue 8 Infra office map"
              src="https://www.google.com/maps?q=17.34865,78.5524216&z=17&output=embed"
              className="h-[500px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function Field({
  label,
  ...props
}: {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </label>

      <input
        {...props}
        className="
          mt-3 w-full rounded-2xl
          border border-border
          bg-background
          px-5 py-4 text-sm
          outline-none transition-all
          placeholder:text-muted-foreground/60
          focus:border-brand
          focus:ring-4
          focus:ring-brand/10
        "
      />
    </div>
  );
}