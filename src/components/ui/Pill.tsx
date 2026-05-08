interface Props {
  children: React.ReactNode;
  light?: boolean;
}

export function Pill({ children, light }: Props) {
  return (
    <span
      className={`inline-block px-4 py-1 rounded-full text-[11.5px] font-medium tracking-wider mb-5 border ${
        light
          ? 'text-white/90'
          : 'text-brand'
      }`}
      style={{
        fontFamily: "var(--font-dm)",
        ...(light
          ? {
              background: 'rgba(152,106,62,0.1)',
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)',
              borderColor: 'rgba(255,255,255,0.3)',
            }
          : {
              background: 'rgba(246,158,108,0.18)',
              borderColor: 'var(--color-border)',
            }),
      }}
    >
      {children}
    </span>
  );
}
