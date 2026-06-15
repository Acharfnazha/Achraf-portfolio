"use client";

import { FormEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, EnvelopeSimple, Gauge, Layout, MagnifyingGlass, Monitor, RocketLaunch } from "@phosphor-icons/react";
import { Navbar } from "@/components/Navbar";

// ─── Types ────────────────────────────────────────────────────────────────────

type Package = {
  name: string;
  description: string;
  price: string;
  button: string;
  features: string[];
  featured?: boolean;
};

type FormErrors = Partial<
  Record<"fullName" | "email" | "whatsapp" | "websiteType" | "budget" | "idea", string>
>;

// ─── Validation ───────────────────────────────────────────────────────────────

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[\d\s\-().]{7,25}$/;
const MAX_IDEA_LENGTH = 2000;

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  const fullName    = String(data.get("fullName")    ?? "").trim();
  const email       = String(data.get("email")       ?? "").trim();
  const whatsapp    = String(data.get("whatsapp")    ?? "").trim();
  const websiteType = String(data.get("websiteType") ?? "").trim();
  const budget      = String(data.get("budget")      ?? "").trim();
  const idea        = String(data.get("idea")        ?? "").trim();

  if (!fullName)                errors.fullName = "Full name is required.";
  else if (fullName.length < 2) errors.fullName = "Name must be at least 2 characters.";
  else if (fullName.length > 80) errors.fullName = "Name is too long (max 80 characters).";

  if (!email)                        errors.email = "Email address is required.";
  else if (!EMAIL_REGEX.test(email)) errors.email = "Enter a valid email address.";
  else if (email.length > 120)       errors.email = "Email address is too long.";

  if (whatsapp && !PHONE_REGEX.test(whatsapp))
    errors.whatsapp = "Enter a valid phone number (e.g. +961 70 123 456).";

  if (!websiteType) errors.websiteType = "Please select a website type.";
  if (!budget)      errors.budget      = "Please select a budget range.";

  if (!idea)                             errors.idea = "Please describe your website idea.";
  else if (idea.length < 20)             errors.idea = "Please provide more detail (at least 20 characters).";
  else if (idea.length > MAX_IDEA_LENGTH) errors.idea = `Description is too long — max ${MAX_IDEA_LENGTH} characters.`;

  return errors;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const packages: Package[] = [
  {
    name: "Starter Website",
    description: "Perfect for personal brands and small businesses starting online.",
    price: "Starting at $150",
    button: "Request Starter",
    features: [
      "One-page responsive website",
      "Clean modern design",
      "Contact section",
      "Social media links",
      "Mobile friendly",
      "Delivery: 3-5 days",
    ],
  },
  {
    name: "Professional Website",
    description: "Best for businesses that need multiple pages and a stronger online presence.",
    price: "Starting at $300",
    button: "Request Professional",
    featured: true,
    features: [
      "Up to 5 pages",
      "Custom modern design",
      "Smooth animations",
      "Contact form",
      "SEO basics",
      "Mobile responsive",
      "Delivery: 7-10 days",
    ],
  },
  {
    name: "Premium Website",
    description: "For advanced websites with custom features, animations, and deployment.",
    price: "Starting at $500+",
    button: "Request Premium",
    features: [
      "Fully custom website",
      "Advanced animations",
      "Admin dashboard if needed",
      "Deployment included",
      "Performance optimization",
      "Business-focused structure",
      "Delivery: 10-15 days",
    ],
  },
];

const included = [
  { title: "Responsive Design", icon: Monitor },
  { title: "Modern UI/UX",      icon: Layout },
  { title: "Fast Performance",  icon: Gauge },
  { title: "SEO Basics",        icon: MagnifyingGlass },
  { title: "Live Deployment",   icon: RocketLaunch },
];

const websiteTypes   = ["Business Website", "Portfolio Website", "E-commerce Website", "Restaurant Website", "Real Estate Website", "Company Landing Page", "Custom Website"];
const packageOptions = ["Starter Website", "Professional Website", "Premium Website", "Custom Package"];
const budgets        = ["Under $150", "$150 - $300", "$300 - $500", "$500+"];
const logoOptions    = ["Yes", "No"];
const contentOptions = ["Yes", "No", "Some content ready"];

// ─── Styles ───────────────────────────────────────────────────────────────────

const inputBase  = "w-full border bg-white/[.035] px-4 py-4 text-sm text-white outline-none transition placeholder:text-zinc-600";
const inputClass = `${inputBase} border-white/10 focus:border-accent/55 focus:bg-accent/[.045]`;
const inputErr   = `${inputBase} border-accent/60 focus:border-accent/80 focus:bg-accent/[.045]`;
const labelClass = "mb-3 block font-mono text-[11px] font-bold uppercase tracking-[.2em] text-zinc-400";
const errorClass = "mt-1.5 font-mono text-[10px] uppercase tracking-[.15em] text-accent/90";

const fadeIn = {
  initial:    { opacity: 0, y: 30 },
  whileInView:{ opacity: 1, y: 0 },
  viewport:   { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: "easeOut" },
} as const;

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const [selectedPackage, setSelectedPackage] = useState("Custom Package");
  const [submitted,  setSubmitted]  = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [ideaLength, setIdeaLength] = useState(0);
  const formRef = useRef<HTMLElement | null>(null);

  function requestPackage(packageName: string) {
    setSelectedPackage(packageName);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data   = new FormData(event.currentTarget);
    const errors = validateForm(data);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});

    /**
     * TODO: Send form data to your email service.
     *
     * Options:
     *   • EmailJS   — emailjs.send(serviceId, templateId, formObj, publicKey)
     *   • Resend    — POST to /api/contact with formObj in the request body
     *   • Formspree — set action="https://formspree.io/f/YOUR_ID" on the <form>
     *
     * Store all service IDs / API keys in .env.local — never in source code.
     * For server-side sending create: src/app/api/contact/route.ts
     */

    setSubmitted(true);
    setIdeaLength(0);
    event.currentTarget.reset();
    setSelectedPackage("Custom Package");
  }

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden bg-background text-foreground">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section id="services-hero" className="relative min-h-[78vh] overflow-hidden px-6 pb-20 pt-36 md:px-14 md:pt-44">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,#080605_45%,#381006_78%,#8d1a0b_100%)]" />
          <div className="absolute right-[-18%] top-[-18%] h-[720px] w-[720px] rounded-full bg-accent/16 blur-[150px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,60,31,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,60,31,.035)_1px,transparent_1px)] bg-[size:58px_58px] opacity-75" />

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative mx-auto max-w-[1200px]"
          >
            <p className="font-mono text-sm uppercase tracking-[.32em] text-accent">Services / Web Development</p>
            <h1 className="mt-6 max-w-[11ch] text-6xl font-black uppercase leading-[.86] tracking-[-.075em] text-white md:text-8xl">
              Web Development Services
            </h1>
            <p className="mt-8 max-w-[760px] text-xl leading-9 text-zinc-300">
              I build modern, responsive, and professional websites for businesses, personal brands, and online projects.
            </p>
            <button
              type="button"
              onClick={() => requestPackage("Custom Package")}
              className="mt-10 inline-flex items-center gap-3 bg-accent/40 px-8 py-5 font-mono text-xs font-bold uppercase tracking-[.22em] text-white shadow-[0_20px_70px_rgba(255,60,31,.16)] transition hover:-translate-y-1 hover:bg-accent/60"
            >
              Request a Website <RocketLaunch size={18} />
            </button>
          </motion.div>
        </section>

        {/* ── Packages ─────────────────────────────────────────────────────── */}
        <section className="relative px-6 py-24 md:py-32">
          <div className="relative mx-auto max-w-7xl">
            <motion.div {...fadeIn} className="mx-auto mb-12 max-w-3xl text-center">
              <p className="font-mono text-sm uppercase tracking-[.32em] text-accent">Packages / Pricing</p>
              <h2 className="mt-5 text-4xl font-black uppercase leading-[.92] tracking-[-.055em] text-white md:text-6xl">
                Choose Your Package
              </h2>
              <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-400">
                Clean website packages with clear scope, practical delivery timelines, and a premium development process.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {packages.map((item, index) => (
                <motion.article
                  key={item.name}
                  {...fadeIn}
                  transition={{ duration: 0.65, delay: index * 0.08, ease: "easeOut" }}
                  whileHover={{ y: -8 }}
                  className={`group flex min-h-[460px] flex-col rounded-lg border border-white/10 bg-gradient-to-b from-zinc-950 to-black p-6 shadow-[0_18px_70px_rgba(0,0,0,.32)] transition duration-300 hover:border-accent/45 hover:shadow-[0_24px_90px_rgba(255,60,31,.14)] md:p-7 ${item.featured ? "border-accent/35 ring-1 ring-accent/20" : ""}`}
                >
                  <div className="flex min-h-8 items-start justify-between gap-4">
                    <p className="font-mono text-[11px] uppercase tracking-[.24em] text-accent">Package 0{index + 1}</p>
                    {item.featured && (
                      <span className="rounded-full border border-accent/35 bg-accent/12 px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[.18em] text-accent">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <h3 className="mt-6 text-2xl font-black uppercase leading-none tracking-[-.04em] text-white md:text-[28px]">
                    {item.name}
                  </h3>
                  <p className="mt-4 min-h-[56px] text-sm leading-7 text-zinc-400">{item.description}</p>
                  <p className="mt-6 text-2xl font-black tracking-[-.035em] text-white md:text-3xl">{item.price}</p>

                  <div className="mt-7 grid gap-3.5">
                    {item.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-sm text-zinc-300">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-accent/35 text-accent">
                          <CheckCircle size={12} weight="fill" />
                        </span>
                        <span className="leading-6">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => requestPackage(item.name)}
                    className="mt-8 rounded-md bg-accent/32 px-5 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[.18em] text-white transition duration-300 hover:bg-accent/55 hover:shadow-[0_0_34px_rgba(255,60,31,.18)]"
                  >
                    {item.button}
                  </button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Included ─────────────────────────────────────────────────────── */}
        <section className="relative bg-black px-6 py-24 md:px-14 md:py-32">
          <div className="relative mx-auto max-w-[1500px]">
            <motion.div {...fadeIn} className="mb-12 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <p className="font-mono text-sm uppercase tracking-[.32em] text-accent">Included / Delivery</p>
                <h2 className="mt-5 text-5xl font-black uppercase leading-[.9] tracking-[-.065em] text-white md:text-7xl">
                  What Is Included
                </h2>
              </div>
              <p className="max-w-[70ch] text-lg leading-8 text-zinc-400">
                I can build your website and publish it online with a live browser link, ready to share with customers.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {included.map(({ title, icon: Icon }, index) => (
                <motion.div
                  key={title}
                  {...fadeIn}
                  transition={{ duration: 0.65, delay: index * 0.06, ease: "easeOut" }}
                  className="card-surface p-6 transition hover:border-accent/35 hover:bg-accent/[.06]"
                >
                  <Icon size={32} className="text-accent" />
                  <p className="mt-10 font-mono text-xs font-bold uppercase tracking-[.2em] text-zinc-200">{title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Request Form ─────────────────────────────────────────────────── */}
        <section id="request-form" ref={formRef} className="relative px-6 py-24 md:px-14 md:py-32">
          <div className="absolute right-[-18%] top-0 h-[640px] w-[640px] rounded-full bg-accent/10 blur-[130px]" />
          <div className="relative mx-auto grid max-w-[1300px] gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
            <motion.div {...fadeIn}>
              <p className="font-mono text-sm uppercase tracking-[.32em] text-accent">Form / Project Details</p>
              <h2 className="mt-5 text-5xl font-black uppercase leading-[.9] tracking-[-.065em] text-white md:text-7xl">
                Request Your Website
              </h2>
              <p className="mt-7 max-w-[54ch] text-lg leading-8 text-zinc-400">
                Send the important details and I will follow up with a clear plan, timeline, and next steps.
              </p>
            </motion.div>

            <motion.form
              {...fadeIn}
              onSubmit={handleSubmit}
              noValidate
              className="card-surface grid gap-5 p-6 shadow-[0_30px_110px_rgba(0,0,0,.36)] md:p-8"
            >
              {submitted && (
                <div role="status" className="flex items-start gap-3 border border-accent/35 bg-accent/[.08] p-4 text-zinc-100">
                  <CheckCircle size={22} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
                  <p className="leading-7">
                    Thank you. Your website request has been received. I will contact you soon.
                  </p>
                </div>
              )}

              <div className="grid gap-5 md:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label>
                    <span className={labelClass}>
                      Full Name <span className="text-accent" aria-hidden="true">*</span>
                    </span>
                    <input
                      name="fullName"
                      autoComplete="name"
                      maxLength={80}
                      aria-required="true"
                      aria-invalid={formErrors.fullName ? "true" : "false"}
                      className={formErrors.fullName ? inputErr : inputClass}
                      placeholder="Your full name"
                    />
                  </label>
                  {formErrors.fullName && (
                    <p className={errorClass} role="alert">{formErrors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label>
                    <span className={labelClass}>
                      Email <span className="text-accent" aria-hidden="true">*</span>
                    </span>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      maxLength={120}
                      aria-required="true"
                      aria-invalid={formErrors.email ? "true" : "false"}
                      className={formErrors.email ? inputErr : inputClass}
                      placeholder="you@example.com"
                    />
                  </label>
                  {formErrors.email && (
                    <p className={errorClass} role="alert">{formErrors.email}</p>
                  )}
                </div>

                {/* WhatsApp */}
                <div>
                  <label>
                    <span className={labelClass}>WhatsApp Number</span>
                    <input
                      name="whatsapp"
                      type="tel"
                      autoComplete="tel"
                      maxLength={25}
                      aria-invalid={formErrors.whatsapp ? "true" : "false"}
                      className={formErrors.whatsapp ? inputErr : inputClass}
                      placeholder="+961 70 123 456"
                    />
                  </label>
                  {formErrors.whatsapp && (
                    <p className={errorClass} role="alert">{formErrors.whatsapp}</p>
                  )}
                </div>

                {/* Business Name */}
                <div>
                  <label>
                    <span className={labelClass}>Business Name</span>
                    <input
                      name="businessName"
                      autoComplete="organization"
                      maxLength={120}
                      className={inputClass}
                      placeholder="Business or brand name"
                    />
                  </label>
                </div>

                {/* Business Type */}
                <div>
                  <label>
                    <span className={labelClass}>Business Type</span>
                    <input
                      name="businessType"
                      maxLength={100}
                      className={inputClass}
                      placeholder="Restaurant, agency, shop..."
                    />
                  </label>
                </div>

                {/* Selected Package */}
                <div>
                  <label>
                    <span className={labelClass}>Selected Package</span>
                    <select
                      name="selectedPackage"
                      value={selectedPackage}
                      onChange={(e) => setSelectedPackage(e.target.value)}
                      className={inputClass}
                    >
                      {packageOptions.map((option) => (
                        <option key={option} className="bg-black">{option}</option>
                      ))}
                    </select>
                  </label>
                </div>

                {/* Website Type */}
                <div>
                  <label>
                    <span className={labelClass}>
                      Website Type <span className="text-accent" aria-hidden="true">*</span>
                    </span>
                    <select
                      name="websiteType"
                      defaultValue=""
                      aria-required="true"
                      aria-invalid={formErrors.websiteType ? "true" : "false"}
                      className={formErrors.websiteType ? inputErr : inputClass}
                    >
                      <option value="" disabled className="bg-black">Choose type</option>
                      {websiteTypes.map((type) => (
                        <option key={type} className="bg-black">{type}</option>
                      ))}
                    </select>
                  </label>
                  {formErrors.websiteType && (
                    <p className={errorClass} role="alert">{formErrors.websiteType}</p>
                  )}
                </div>

                {/* Budget */}
                <div>
                  <label>
                    <span className={labelClass}>
                      Budget <span className="text-accent" aria-hidden="true">*</span>
                    </span>
                    <select
                      name="budget"
                      defaultValue=""
                      aria-required="true"
                      aria-invalid={formErrors.budget ? "true" : "false"}
                      className={formErrors.budget ? inputErr : inputClass}
                    >
                      <option value="" disabled className="bg-black">Choose budget</option>
                      {budgets.map((budget) => (
                        <option key={budget} className="bg-black">{budget}</option>
                      ))}
                    </select>
                  </label>
                  {formErrors.budget && (
                    <p className={errorClass} role="alert">{formErrors.budget}</p>
                  )}
                </div>

                {/* Deadline */}
                <div>
                  <label>
                    <span className={labelClass}>Deadline</span>
                    <input
                      name="deadline"
                      maxLength={60}
                      className={inputClass}
                      placeholder="Example: 2 weeks"
                    />
                  </label>
                </div>

                {/* Pages Needed */}
                <div>
                  <label>
                    <span className={labelClass}>Number of Pages Needed</span>
                    <input
                      name="pagesNeeded"
                      type="number"
                      min="1"
                      max="50"
                      className={inputClass}
                      placeholder="1"
                    />
                  </label>
                </div>

                {/* Has Logo */}
                <div>
                  <label>
                    <span className={labelClass}>Do you already have a logo?</span>
                    <select name="hasLogo" defaultValue="" className={inputClass}>
                      <option value="" disabled className="bg-black">Choose answer</option>
                      {logoOptions.map((answer) => (
                        <option key={answer} className="bg-black">{answer}</option>
                      ))}
                    </select>
                  </label>
                </div>

                {/* Has Content */}
                <div>
                  <label>
                    <span className={labelClass}>Do you already have content/photos?</span>
                    <select name="hasContent" defaultValue="" className={inputClass}>
                      <option value="" disabled className="bg-black">Choose answer</option>
                      {contentOptions.map((answer) => (
                        <option key={answer} className="bg-black">{answer}</option>
                      ))}
                    </select>
                  </label>
                </div>

                {/* Idea Description */}
                <div className="md:col-span-2">
                  <label>
                    <span className={labelClass}>
                      Describe your website idea <span className="text-accent" aria-hidden="true">*</span>
                    </span>
                    <textarea
                      name="idea"
                      rows={6}
                      maxLength={MAX_IDEA_LENGTH}
                      aria-required="true"
                      aria-invalid={formErrors.idea ? "true" : "false"}
                      onChange={(e) => setIdeaLength(e.target.value.length)}
                      className={formErrors.idea ? inputErr : inputClass}
                      placeholder="Tell me about the website, sections, style, features, and goal..."
                    />
                  </label>
                  <div className="mt-1.5 flex items-start justify-between gap-4">
                    {formErrors.idea
                      ? <p className={errorClass} role="alert">{formErrors.idea}</p>
                      : <span />
                    }
                    <p className="shrink-0 font-mono text-[10px] uppercase tracking-[.12em] text-zinc-600">
                      {ideaLength}/{MAX_IDEA_LENGTH}
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 bg-accent/40 px-7 py-5 font-mono text-xs font-bold uppercase tracking-[.22em] text-white shadow-[0_20px_70px_rgba(255,60,31,.14)] transition hover:-translate-y-1 hover:bg-accent/60"
              >
                Submit Website Request
              </button>
            </motion.form>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-black px-6 py-24 md:px-14 md:py-32">
          <motion.div {...fadeIn} className="relative mx-auto max-w-[1050px] text-center">
            <p className="font-mono text-sm uppercase tracking-[.32em] text-accent">Launch / Next Step</p>
            <h2 className="mt-5 text-5xl font-black uppercase leading-[.9] tracking-[-.065em] text-white md:text-8xl">
              Ready to launch your website?
            </h2>
            <p className="mx-auto mt-7 max-w-[70ch] text-lg leading-8 text-zinc-400">
              Send me your website details and I will help you turn your idea into a professional online presence.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => requestPackage("Custom Package")}
                className="inline-flex items-center gap-3 bg-accent/40 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[.2em] text-white transition hover:-translate-y-1 hover:bg-accent/60"
              >
                Request Website <RocketLaunch size={17} />
              </button>
              <a
                href="mailto:achrafnazha20@icloud.com"
                className="inline-flex items-center gap-3 border border-white/12 bg-white/[.035] px-7 py-4 font-mono text-xs font-bold uppercase tracking-[.2em] text-zinc-200 transition hover:-translate-y-1 hover:border-accent/45 hover:bg-accent/15"
              >
                Contact Me <EnvelopeSimple size={17} />
              </a>
            </div>
          </motion.div>
        </section>

      </main>
    </>
  );
}
