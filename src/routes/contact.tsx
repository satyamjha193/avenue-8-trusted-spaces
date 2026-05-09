import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Avenue 8 Infra" },
      { name: "description", content: "Visit our LB Nagar office or send an enquiry. We respond within one business day." },
      { property: "og:title", content: "Contact Avenue 8 Infra" },
      { property: "og:description", content: "Visit our LB Nagar office or send an enquiry." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageLayout>
      <section className="relative pt-44 pb-24 bg-brand text-beige">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-beige/70 mb-5">Get in Touch</div>
          <h1 className="font-display text-5xl md:text-7xl text-white text-balance max-w-4xl">
            Let’s talk about your next address.
          </h1>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <SectionHeading eyebrow="Reach Us" title="Visit, call or write — we’re here to help." />

            <div className="space-y-6 mt-8">
              {[
                { Icon: MapPin, title: "Office", val: "LB Nagar, Hyderabad, Telangana — 500074" },
                { Icon: Phone, title: "Phone", val: "+91 00000 00000" },
                { Icon: Mail, title: "Email", val: "info@avenue8infra.com" },
                { Icon: MessageCircle, title: "WhatsApp", val: "+91 00000 00000" },
              ].map((c) => (
                <div key={c.title} className="flex gap-5 p-6 bg-secondary/40 hover-lift">
                  <div className="size-12 bg-brand text-beige flex items-center justify-center shrink-0">
                    <c.Icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{c.title}</div>
                    <div className="font-display text-lg text-brand mt-1">{c.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 bg-card p-8 md:p-12 shadow-card">
            <h3 className="font-display text-3xl text-brand mb-2">Send an Enquiry</h3>
            <p className="text-sm text-muted-foreground mb-8">We typically respond within one business day.</p>

            {submitted ? (
              <div className="border border-brand/20 p-8 text-center">
                <div className="font-display text-2xl text-brand">Thank you.</div>
                <p className="text-muted-foreground mt-2">Our team will reach out shortly.</p>
              </div>
            ) : (
              <form
                className="space-y-5"
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                </div>
                <Field label="Email" name="email" type="email" required />
                <Field label="Interested In" name="interest" placeholder="Plot · Villa · Apartment" />
                <div>
                  <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="mt-2 w-full bg-background border border-border px-4 py-3 text-sm focus:border-brand outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-brand text-beige px-8 py-4 text-sm uppercase tracking-[0.25em] hover:bg-brand/90 transition-colors"
                >
                  Send Enquiry <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="aspect-[16/7] w-full overflow-hidden shadow-card">
            <iframe
              title="Avenue 8 Infra office map"
              src="https://www.google.com/maps?q=LB+Nagar+Hyderabad+Telangana&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</label>
      <input
        {...props}
        className="mt-2 w-full bg-background border border-border px-4 py-3 text-sm focus:border-brand outline-none transition-colors"
      />
    </div>
  );
}
