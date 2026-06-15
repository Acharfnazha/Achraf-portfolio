"use client";

import { motion } from "framer-motion";
import { WebsiteCard, type FeaturedWebsite } from "@/components/WebsiteCard";

const featuredWebsites: FeaturedWebsite[] = [
  {
    title: "FLAVR Website",
    description: "A modern responsive food-focused website built with clean UI, smooth animation, and a professional layout.",
    video: "/videos/project-1.mp4",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    sourceCode: "https://github.com/Acharfnazha/FLAVR_website",
  },
  {
    title: "StudyFlow Pro",
    description: "A premium productivity web experience focused on performance, responsive design, and interactive sections.",
    video: "/videos/project-2.mp4",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    sourceCode: "https://github.com/Acharfnazha/studyflow-pro",
  },
  {
    title: "World View",
    description: "A clean full-stack style website with modern visuals, user-friendly navigation, and polished presentation.",
    video: "/videos/project-3.mp4",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    sourceCode: "https://github.com/Acharfnazha/world-view",
  },
];

export function FeaturedWebsites() {
  return (
    <section id="websites" className="relative overflow-hidden bg-background px-6 py-24 md:px-14 md:py-32">
      <div className="absolute right-[-18%] top-[-18%] h-[620px] w-[620px] rounded-full bg-accent/14 blur-[130px]" />
      <div className="absolute left-[-14%] bottom-[-20%] h-[520px] w-[520px] rounded-full bg-[#ff7a24]/8 blur-[120px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,60,31,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,60,31,.035)_1px,transparent_1px)] bg-[size:56px_56px] opacity-70" />

      <div className="relative mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end"
        >
          <div>
            <p className="font-mono text-sm uppercase tracking-[.32em] text-accent">Featured / Websites</p>
            <h2 className="mt-5 text-5xl font-black uppercase leading-[.9] tracking-[-.065em] text-white md:text-7xl">
              Featured Websites
            </h2>
          </div>
          <p className="max-w-[48ch] text-base leading-8 text-zinc-400 md:text-lg">
            Three polished web builds from GitHub, presented with cinematic previews, responsive detail, and clean source access.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredWebsites.map((website, index) => (
            <WebsiteCard key={website.title} website={website} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
