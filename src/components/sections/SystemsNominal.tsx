"use client";

import { motion } from "framer-motion";
import { Code, Database, GitBranch, ShieldCheck } from "@phosphor-icons/react";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

const stats = ["3+ Projects", "Full-Stack Developer", "CCE Student", "UI/UX Focused"];

const skillGroups = [
  { title: "Frontend", icon: Code, skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"] },
  { title: "Backend", icon: Database, skills: ["Node.js", "Express", "APIs", "SQL"] },
  { title: "Tools", icon: GitBranch, skills: ["Git", "GitHub", "VS Code", "Figma"] },
  { title: "Security", icon: ShieldCheck, skills: ["Networking", "System Security", "CCNA Basics"] },
];

export function SystemsNominal() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-28 md:px-14 md:py-36">
      <div className="absolute left-1/2 top-0 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative mx-auto max-w-[1500px]">
        <AnimatedSection className="grid gap-12 lg:grid-cols-[.86fr_1.14fr] lg:items-end" id="about">
          <AnimatedItem>
            <p className="font-mono text-sm uppercase tracking-[.32em] text-accent">About / Profile</p>
            <h2 className="mt-5 max-w-[11ch] text-5xl font-black uppercase leading-[.88] tracking-[-.07em] text-white md:text-8xl">
              Building clean digital systems.
            </h2>
          </AnimatedItem>
          <AnimatedItem>
            <div className="card-surface border-l-2 border-l-accent p-8 shadow-[0_25px_90px_rgba(0,0,0,.3)] md:p-10">
              <p className="max-w-[82ch] text-lg leading-9 tracking-[.03em] text-zinc-300 md:text-xl">
                I am a Computer & Communication Engineering student focused on full-stack development, UI/UX, and secure web systems.
                I build clean, modern, and responsive websites using React, Next.js, Tailwind CSS, and modern frontend tools.
              </p>
              <div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((item) => (
                  <div key={item} className="border border-white/10 bg-white/[.025] px-5 py-5 transition duration-300 hover:border-accent/35 hover:bg-accent/[.08]">
                    <p className="font-mono text-[11px] uppercase tracking-[.2em] text-accent">Status</p>
                    <p className="mt-3 text-lg font-bold tracking-[-.035em] text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection id="skills" className="mt-32">
          <AnimatedItem>
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-sm uppercase tracking-[.32em] text-accent">Skills / Stack</p>
                <h3 className="mt-4 text-4xl font-black uppercase tracking-[-.055em] text-white md:text-7xl">Technical Arsenal</h3>
              </div>
              <p className="max-w-[44ch] text-zinc-400">A focused stack for modern websites, full-stack logic, tooling, and secure systems.</p>
            </div>
          </AnimatedItem>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map(({ title, icon: Icon, skills }, index) => (
              <AnimatedItem key={title}>
                <motion.article whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 260, damping: 22 }} className="card-surface group min-h-[330px] p-7 hover:border-accent/30">
                  <div className="flex items-center justify-between">
                    <Icon size={34} className="text-accent" />
                    <span className="font-mono text-xs uppercase tracking-[.24em] text-zinc-600">0{index + 1}</span>
                  </div>
                  <h4 className="mt-12 text-3xl font-bold tracking-[-.05em] text-white">{title}</h4>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className="border border-white/10 bg-white/[.025] px-3 py-2 font-mono text-[10px] uppercase tracking-[.16em] text-zinc-300 transition group-hover:border-accent/25">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 h-px bg-white/10">
                    <div className="h-px w-1/2 bg-accent transition-all duration-500 group-hover:w-full" />
                  </div>
                </motion.article>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
