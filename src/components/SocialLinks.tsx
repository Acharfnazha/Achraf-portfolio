"use client";

import { EnvelopeSimple, GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Acharfnazha",
    icon: GithubLogo,
    weight: "fill" as const,
    external: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/achraf-nazha-951879267",
    icon: LinkedinLogo,
    weight: "fill" as const,
    external: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/achraf._.nazha?igsh=bWZlbXFscDJvMnR1&utm_source=qr",
    icon: InstagramLogo,
    weight: "regular" as const,
    external: true,
  },
  {
    name: "Email",
    href: "mailto:achrafnazha20@icloud.com",
    icon: EnvelopeSimple,
    weight: "regular" as const,
    external: false,
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-9 text-zinc-400">
      {socialLinks.map(({ name, href, icon: Icon, weight, external }) => (
        <a
          key={name}
          href={href}
          aria-label={name}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="grid h-9 w-9 place-items-center transition duration-300 hover:-translate-y-1 hover:text-white"
        >
          <Icon size={31} weight={weight} />
        </a>
      ))}
    </div>
  );
}
