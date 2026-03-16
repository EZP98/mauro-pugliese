interface Props {
  children: React.ReactNode;
  light?: boolean;
}

export function Pill({ children, light }: Props) {
  return (
    <span
      className={`inline-block px-4 py-1 rounded-full text-[11.5px] font-medium tracking-wider mb-5 border ${
        light
          ? 'border-white/30 text-white/70'
          : 'border-border text-muted'
      }`}
      style={{ fontFamily: "var(--font-dm)" }}
    >
      {children}
    </span>
  );
}
