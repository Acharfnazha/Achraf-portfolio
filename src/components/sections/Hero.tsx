"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Code,
  DownloadSimple,
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  Monitor,
  ShieldCheck,
  StackSimple,
} from "@phosphor-icons/react";

const focusAreas = [
  { label: "Full-Stack Development", icon: Monitor },
  { label: "UI/UX & Interactive Design", icon: StackSimple },
  { label: "Network & System Security", icon: ShieldCheck },
  { label: "Scalable Web Solutions", icon: Code },
];

export function Hero() {
  const { scrollYProgress } = useScroll();
  const contentY = useTransform(scrollYProgress, [0, 0.28], [0, -70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0.72]);
  const portraitY = useTransform(scrollYProgress, [0, 0.28], [0, 34]);
  const cardY = useTransform(scrollYProgress, [0, 0.28], [0, -34]);

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_40%,rgba(255,73,17,.58),transparent_31%),linear-gradient(90deg,#050505_0%,#101010_37%,#551205_68%,#a71909_100%)]" />
      <div className="hero-grid absolute inset-0 opacity-75" />

      <motion.div
        aria-hidden="true"
        className="hero-portrait pointer-events-none absolute inset-y-0 right-0 z-0 w-[62vw] select-none"
        style={{ y: portraitY }}
      />

      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(5,5,5,.98)_0%,rgba(5,5,5,.88)_37%,rgba(5,5,5,.34)_58%,rgba(5,5,5,.06)_78%,rgba(5,5,5,0)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 z-[2] h-56 bg-gradient-to-t from-background via-background/72 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1680px] items-center px-6 pb-[78px] pt-28 md:px-[75px] md:pt-32">
        <motion.div style={{ y: contentY, opacity: contentOpacity }} className="w-full max-w-[720px]">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-mono text-[clamp(16px,1.4vw,25px)] uppercase tracking-[0.42em] text-accent"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08 }}
            className="mt-6 font-sans text-[clamp(76px,8vw,142px)] font-black uppercase leading-[.82] tracking-[-.075em]"
          >
            <span className="text-metal block">Achraf</span>
            <span className="block bg-gradient-to-r from-accent to-[#ff6a21] bg-clip-text text-transparent">Ali Nazha</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.28 }}
            className="accent-line mt-10 w-[min(315px,70vw)] origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35 }}
            className="mt-8 max-w-[720px] font-mono text-[clamp(20px,1.65vw,27px)] leading-[1.45] tracking-[.045em] text-zinc-100"
          >
            Computer & Communication Engineering Student
            <br />
            <span className="text-accent">& Full-Stack Developer</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.48 }}
            className="mt-8 max-w-[625px] text-[17px] leading-8 tracking-[.045em] text-zinc-300 md:text-[19px]"
          >
            A highly motivated Computer and Communication Engineering student at Antonine University with a robust technical
            foundation in full-stack development, interactive UI styling, and secure network infrastructure. Proficient in
            engineering scalable web solutions and deploying advanced interface architectures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62 }}
            className="mt-12 flex flex-wrap items-center gap-[42px]"
          >
            <a
              href="#projects"
              className="group flex min-w-[250px] items-center justify-between bg-accent/34 px-7 py-5 font-mono text-[14px] font-bold uppercase tracking-[.18em] text-white backdrop-blur transition hover:bg-accent/55"
            >
              View My Work <ArrowRight size={22} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="/ACHRAF_ALI_NAZHA_CV.docx"
              className="group flex items-center gap-4 font-mono text-[14px] font-bold uppercase tracking-[.22em] text-zinc-200 transition hover:text-white"
            >
              Download CV <DownloadSimple size={20} className="text-zinc-400 transition group-hover:text-accent" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.78 }}
            className="mt-[58px] flex items-center gap-9 text-zinc-400"
          >
            <a href="https://github.com/Acharfnazha" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-white">
              <GithubLogo size={30} weight="fill" />
            </a>
            <a href="https://www.linkedin.com/in/achraf-nazha-951879267" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-white">
              <LinkedinLogo size={30} weight="fill" />
            </a>
            <a href="https://www.instagram.com/achraf._.nazha?igsh=bWZlbXFscDJvMnR1&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition hover:text-white">
              <InstagramLogo size={30} />
            </a>
            <a href="mailto:achrafnazha20@icloud.com" aria-label="Email" className="transition hover:text-white">
              <EnvelopeSimple size={31} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        style={{ y: cardY }}
        className="absolute bottom-[8vh] right-[7.2vw] z-20 hidden w-[390px] border border-white/14 bg-black/34 p-7 backdrop-blur-xl xl:block"
      >
        <p className="font-mono text-[13px] uppercase tracking-[.24em] text-accent">Focus Areas</p>
        <div className="mt-6 grid gap-4">
          {focusAreas.map(({ label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-4 font-mono text-[15px] tracking-[.055em] text-zinc-300">
              <span className="grid h-5 w-5 place-items-center text-accent">
                <Icon size={19} weight="light" />
              </span>
              {label}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
