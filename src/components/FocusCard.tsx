"use client";

import { Code, Monitor, ShieldCheck, StackSimple } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const focusAreas = [
  { label: "Full-Stack Development", icon: Monitor },
  { label: "UI/UX & Interactive Design", icon: StackSimple },
  { label: "Network & System Security", icon: ShieldCheck },
  { label: "Scalable Web Solutions", icon: Code },
];

type FocusCardProps = {
  y?: import("framer-motion").MotionValue<number>;
};

export function FocusCard({ y }: FocusCardProps) {
  return (
    <motion.aside
      style={{ y }}
      className="hidden w-[390px] border border-white/14 bg-black/34 p-7 shadow-[0_28px_90px_rgba(0,0,0,.42)] backdrop-blur-xl transition duration-300 hover:border-accent/30 xl:block"
    >
      <p className="font-mono text-[13px] uppercase tracking-[.24em] text-accent">Focus Areas</p>
      <div className="mt-6 grid gap-4">
        {focusAreas.map(({ label, icon: Icon }) => (
          <div key={label} className="group flex items-center gap-4 font-mono text-[15px] tracking-[.055em] text-zinc-300">
            <span className="grid h-5 w-5 place-items-center text-accent transition group-hover:scale-110 group-hover:text-[#ff7a2a]">
              <Icon size={19} weight="light" />
            </span>
            {label}
          </div>
        ))}
      </div>
    </motion.aside>
  );
}
