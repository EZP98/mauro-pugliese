interface ButtonFilledProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  full?: boolean;
}

export function ButtonFilled({ children, href = '#', onClick, full }: ButtonFilledProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-block px-7 py-3 bg-brand hover:bg-brand-hover rounded-full text-white text-[13.5px] font-medium cursor-pointer transition-all duration-200 ${
        full ? 'w-full text-center' : ''
      }`}
      style={{ fontFamily: "var(--font-jakarta)" }}
    >
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
      className="inline-block px-6 py-3 rounded-lg text-brand text-[13.5px] font-medium cursor-pointer transition-colors duration-200 hover:bg-brand/8"
      style={{ fontFamily: "var(--font-jakarta)" }}
    >
      {children}
    </a>
  );
}
