"use client";

import Image from "next/image";
import { ArrowRight, EnvelopeSimple } from "@phosphor-icons/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FocusCard } from "@/components/FocusCard";
import { SocialLinks } from "@/components/SocialLinks";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const { scrollYProgress } = useScroll();
  const contentY = useTransform(scrollYProgress, [0, 0.28], [0, -58]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0.72]);
  const portraitY = useTransform(scrollYProgress, [0, 0.28], [0, 24]);
  const focusY = useTransform(scrollYProgress, [0, 0.28], [0, -28]);

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,#080605_34%,#381006_61%,#a51d0a_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_73%_31%,rgba(255,90,22,.45),transparent_27%),radial-gradient(circle_at_86%_62%,rgba(255,50,20,.42),transparent_34%)]" />
      <div className="hero-grid absolute inset-0 opacity-80" />

      <motion.div
        aria-hidden="true"
        style={{ y: portraitY }}
        className="hero-image-layer absolute bottom-0 right-0 top-0 z-0 w-full md:w-[64%] lg:w-[60%]"
      >
        <Image
          src="/achraf-hero-generated.png"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, 60vw"
          className="select-none object-cover object-[56%_50%]"
        />
      </motion.div>

      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(5,5,5,1)_0%,rgba(5,5,5,.94)_34%,rgba(5,5,5,.54)_53%,rgba(5,5,5,.12)_73%,rgba(5,5,5,0)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 z-[2] h-52 bg-gradient-to-t from-background via-background/70 to-transparent" />
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_74%_43%,rgba(255,74,20,.16),transparent_29%)] mix-blend-screen" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1680px] items-center px-6 pb-16 pt-28 md:px-12 md:pt-32 lg:px-[75px]">
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.09, delayChildren: 0.05 }}
          className="w-full max-w-[740px]"
        >
          <motion.p variants={fadeUp} className="font-mono text-[clamp(16px,1.4vw,25px)] uppercase tracking-[0.42em] text-accent">
            HELLO, I&apos;M
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-6 inline-flex items-center gap-2 border border-white/10 bg-white/[.035] px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[.18em] text-zinc-200 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_rgba(255,60,31,.9)]" />
            Available for freelance projects
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-sans text-[clamp(72px,8.4vw,152px)] font-black uppercase leading-[.82] tracking-[-.075em]"
          >
            <span className="text-metal block">ACHRAF</span>
            <span className="block bg-gradient-to-r from-accent via-[#ff4a1c] to-[#ff7a24] bg-clip-text text-transparent">
              ALI NAZHA
            </span>
          </motion.h1>

          <motion.div variants={fadeUp} className="accent-line mt-9 w-[min(345px,70vw)]" />

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-[720px] font-mono text-[clamp(20px,1.65vw,29px)] leading-[1.45] tracking-[.045em] text-zinc-100"
          >
            Computer & Communication Engineering Student
            <br />
            <span className="text-accent">& Full-Stack Developer</span>
          </motion.p>

          <motion.p variants={fadeUp} className="mt-7 max-w-[650px] text-[17px] leading-8 tracking-[.035em] text-zinc-300 md:text-[19px]">
            A highly motivated Computer and Communication Engineering student at Antonine University with a robust technical
            foundation in full-stack development, interactive UI styling, and secure network infrastructure. Proficient in
            engineering scalable web solutions and deploying advanced interface architectures.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-7 md:gap-[42px]">
            <a href="#websites" className="group flex min-w-[246px] items-center justify-between bg-accent/40 px-7 py-5 font-mono text-[14px] font-bold uppercase tracking-[.18em] text-white shadow-[0_20px_70px_rgba(255,60,31,.18)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-accent/60">
              View My Work <ArrowRight size={22} className="transition group-hover:translate-x-1" />
            </a>
            <a href="mailto:achrafnazha20@icloud.com" className="group flex min-w-[210px] items-center justify-center gap-4 border border-white/12 bg-white/[.035] px-7 py-5 font-mono text-[14px] font-bold uppercase tracking-[.18em] text-zinc-200 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-accent/15 hover:text-white">
              Contact Me <EnvelopeSimple size={20} className="text-zinc-400 transition group-hover:text-accent" />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-[58px]">
            <SocialLinks />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-[8vh] right-[7.2vw] z-20">
        <FocusCard y={focusY} />
      </div>
    </section>
  );
}
