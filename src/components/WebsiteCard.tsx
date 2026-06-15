"use client";

import { ArrowUpRight, GithubLogo, PlayCircle } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export type FeaturedWebsite = {
  title: string;
  description: string;
  video: string;
  tech: string[];
  sourceCode: string;
  livePreview?: string;
};

type WebsiteCardProps = {
  website: FeaturedWebsite;
  index: number;
};

export function WebsiteCard({ website, index }: WebsiteCardProps) {
  const hasLivePreview = Boolean(website.livePreview);
  const previewHref = website.livePreview || website.video;

  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10 }}
      className="card-surface group overflow-hidden p-3 shadow-[0_26px_90px_rgba(0,0,0,.34)] transition duration-500 hover:border-accent/35 hover:shadow-[0_30px_110px_rgba(255,60,31,.12)]"
    >
      <div className="relative aspect-video overflow-hidden bg-black">
        <video
          src={website.video}
          className="h-full w-full object-cover opacity-82 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.12),rgba(0,0,0,.68)),radial-gradient(circle_at_78%_12%,rgba(255,60,31,.34),transparent_34%)]" />
        <div className="absolute left-4 top-4 border border-white/14 bg-black/42 px-3 py-2 font-mono text-[10px] uppercase tracking-[.22em] text-zinc-300 backdrop-blur">
          0{index + 1}
        </div>
      </div>

      <div className="p-5 md:p-6">
        <h3 className="text-2xl font-black uppercase leading-none tracking-[-.055em] text-white transition group-hover:text-accent md:text-3xl">
          {website.title}
        </h3>
        <p className="mt-4 min-h-[84px] text-sm leading-7 text-zinc-400">{website.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {website.tech.map((tag) => (
            <span key={tag} className="border border-white/10 bg-white/[.025] px-3 py-2 font-mono text-[10px] uppercase tracking-[.16em] text-zinc-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <a
            href={website.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center justify-center gap-2 border border-white/12 bg-white/[.035] px-4 py-3 font-mono text-[11px] font-bold uppercase tracking-[.18em] text-zinc-200 transition hover:border-accent/50 hover:bg-accent/20 hover:text-white"
          >
            <GithubLogo size={17} weight="fill" />
            Source Code
          </a>
          <a
            href={previewHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center justify-center gap-2 bg-accent/32 px-4 py-3 font-mono text-[11px] font-bold uppercase tracking-[.16em] text-white transition hover:bg-accent/55"
          >
            {hasLivePreview ? <ArrowUpRight size={17} /> : <PlayCircle size={17} />}
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}
