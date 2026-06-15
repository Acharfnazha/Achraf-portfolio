"use client";

import { useEffect, useState } from "react";

const links = ["ABOUT", "PROJECTS", "SKILLS", "CONTACT"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled ? "border-b border-white/10 bg-black/70 backdrop-blur-2xl" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-[1680px] items-center gap-10 px-6 py-7 md:px-[56px]">
        <a href="#home" aria-label="Home" className="group relative mr-[54px] flex h-9 w-12 items-center justify-center text-accent">
          <span className="absolute left-0 top-1 h-8 w-1.5 skew-x-[-24deg] bg-accent" />
          <span className="absolute left-[11px] top-1 h-8 w-1.5 skew-x-[24deg] bg-accent" />
          <span className="absolute left-[22px] top-1 h-8 w-1.5 skew-x-[-24deg] bg-accent" />
          <span className="absolute left-[34px] top-1 h-8 w-1.5 skew-x-[24deg] bg-accent" />
        </a>
        <nav className="hidden items-center gap-[58px] md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="font-mono text-[15px] uppercase tracking-[0.24em] text-zinc-300/80 transition hover:text-white">
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
