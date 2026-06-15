"use client";

import { List, X } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", hash: "home" },
  { label: "Websites", hash: "websites" },
  { label: "About", hash: "about" },
  { label: "Skills", hash: "skills" },
  { label: "Services", href: "/services" },
  { label: "Contact", hash: "contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionHref = (hash?: string, href?: string) => href || (pathname === "/" ? `#${hash}` : `/#${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled ? "border-b border-white/10 bg-black/72 shadow-[0_18px_60px_rgba(0,0,0,.35)] backdrop-blur-2xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1680px] items-center gap-10 px-6 py-6 md:px-12 lg:px-[56px]">
        <a href={sectionHref("home")} aria-label="Home" className="mr-8 flex h-9 w-[58px] items-center text-accent lg:mr-10">
          <svg
            aria-hidden="true"
            viewBox="0 0 58 32"
            className="h-8 w-[58px] overflow-visible"
            fill="none"
          >
            <path
              d="M3 30 L13 2 L23 30 M8.5 18 H17.5"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
            <path
              d="M31 30 V2 L53 30 V2"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </svg>
        </a>

        <nav className="hidden items-center gap-7 md:flex xl:gap-10">
          {links.map(({ label, hash, href }) => (
            <a
              key={label}
              href={sectionHref(hash, href)}
              className="group relative font-mono text-[12px] uppercase tracking-[0.28em] text-zinc-300/78 transition duration-300 hover:text-white xl:text-[13px]"
            >
              {label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="ml-auto grid h-10 w-10 place-items-center border border-white/10 text-accent transition hover:border-accent/40 hover:bg-accent/10 md:hidden"
        >
          {mobileOpen ? <X size={21} /> : <List size={23} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="mx-6 mb-5 grid gap-1 border border-white/10 bg-black/82 p-3 shadow-[0_20px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl md:hidden">
          {links.map(({ label, hash, href }) => (
            <a
              key={label}
              href={sectionHref(hash, href)}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-4 font-mono text-[13px] uppercase tracking-[.28em] text-zinc-300 transition hover:bg-accent/12 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
