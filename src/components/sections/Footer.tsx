import { ArrowUpRight, EnvelopeSimple, GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";

const contactLinks = [
  {
    name: "Email",
    href: "mailto:achrafnazha20@icloud.com",
    icon: EnvelopeSimple,
    external: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/achraf-nazha-951879267",
    icon: LinkedinLogo,
    external: true,
  },
  {
    name: "GitHub",
    href: "https://github.com/Acharfnazha",
    icon: GithubLogo,
    external: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/achraf._.nazha?igsh=bWZlbXFscDJvMnR1&utm_source=qr",
    icon: InstagramLogo,
    external: true,
  },
];

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-16 md:px-14 md:py-20">
      <div className="absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,60,31,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,60,31,.025)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <p className="font-mono text-sm uppercase tracking-[.32em] text-accent">Contact / Collaboration</p>
            <h2 className="mt-5 max-w-[12ch] text-5xl font-black uppercase leading-[.88] tracking-[-.07em] text-white md:text-8xl">
              Let&apos;s build something professional together.
            </h2>
            <p className="mt-8 max-w-[58ch] text-lg leading-8 text-zinc-400">
              Open to freelance websites, landing pages, modern UI builds, and full-stack web systems with a polished professional finish.
            </p>
          </div>

          <div className="card-surface p-6 shadow-[0_28px_100px_rgba(0,0,0,.36)] md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactLinks.map(({ name, href, icon: Icon, external }) => (
                <a
                  key={name}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex min-h-[132px] flex-col justify-between border border-white/10 bg-white/[.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/[.08]"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={30} className="text-accent" />
                    <ArrowUpRight size={20} className="text-zinc-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-[.22em] text-zinc-200">{name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-2xl font-black uppercase tracking-[-.055em] text-white">ACHRAF ALI NAZHA</p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[.24em] text-accent">Full-Stack Developer</p>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[.28em] text-zinc-600">© 2026 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
