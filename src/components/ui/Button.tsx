interface ButtonFilledProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  full?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function ButtonFilled({ children, href, onClick, full, type, disabled }: ButtonFilledProps) {
  const cls = `inline-flex items-center justify-center h-[52px] px-8 bg-accent hover:bg-accent-hover text-white text-[14px] font-semibold cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ${
    full ? 'w-full' : ''
  } ${disabled ? 'opacity-60 pointer-events-none' : ''}`;
  const style = { fontFamily: "var(--font-display)", borderRadius: 16 };

  if (type) {
    return (
      <button type={type} disabled={disabled} onClick={onClick} className={cls} style={style}>
        {children}
      </button>
    );
  }

  return (
    <a href={href || '#'} onClick={onClick} className={cls} style={style}>
      {children}
    </a>
  );
}

interface ButtonSecondaryProps {
  children: React.ReactNode;
  href?: string;
}

export function ButtonSecondary({ children, href = '#' }: ButtonSecondaryProps) {
  return (
    <a
      href={href}
      className="inline-block px-6 py-3 rounded-lg border border-border text-brand text-[13.5px] font-medium cursor-pointer transition-all duration-300 hover:bg-accent/[.18] hover:border-brand/30"
      style={{ fontFamily: "var(--font-jakarta)" }}
    >
      {children}
    </a>
  );
}
