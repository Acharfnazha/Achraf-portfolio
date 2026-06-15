type Props = { children: React.ReactNode; className?: string };

export function EyebrowBadge({ children, className = "" }: Props) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.045] px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-orange-200 backdrop-blur-md ${className}`}>
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(255,106,0,0.85)]" />
      {children}
    </span>
  );
}
