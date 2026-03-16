import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../lib/constants';
import { ButtonFilled } from './ui/Button';
import { Menu, X } from 'lucide-react';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-10 h-16 border-b border-border transition-all duration-300 ${
        scrolled ? 'bg-white/96 backdrop-blur-md' : 'bg-white'
      }`}
    >
      <a href="#" className="flex items-center gap-2">
        <svg width="18" height="24" viewBox="0 0 50 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.13 43.64c0 0-1.5 1.2-1.24 1.64 0.63 1 0.46 2.5 1.63 2.5 1.2 0 2.7-0.8 2.7-0.8s1.1 0.3 1.6 1 0.2 2.8-1.7 3.6c-1.8 0.8-4.3-0.5-6-1.2-1.7-0.8-3.4-2.2-3.4-2.2s0-7.5 1.7-10.1c0.5-0.8 0.5-2 0.7-2.8 0 0 0.5-0.3 1-0.6 2.5-1.9 5.3-2.8 8.4-2.7 0.4 0 0.8 0.2 1.2 0.3 1.2 0.3 2.3 0.6 3.5 0.9 0 0 0 0.1 0 0.2 0.5 0.3 0.9 0.5 1.4 0.7 0 0 0.1 0 0.1 0.1 0.5 0.8 0.9 1.8 2 1.8 0 0 0 0.1 0 0.2 0 0.1 0.1 0.1 0.2 0.1 0 0 0.1 0 0.1 0.1 0.4 2.3 1.8 4.2 1.5 6.6-0.2 1.6 0.2 3.2 0 4.8-0.3 2.4-1.4 4.5-2.9 6.4-0.3 0.3-0.3 0.9-0.4 1.3 0 0 0 0.1-0.1 0.1-0.5 0.4-0.8 0.8-1.1 1.2 0 0 0 0 0 0-1.4-0.2-1.9 1.1-2.9 1.6-3.1 1.8-6.5 2.5-10 2.1-2.1-0.2-4.2-0.9-6.2-1.6-1-0.3-1.9-1.2-2.9-1.8-0.3-0.3-0.4-0.6-0.7-0.8-2.6-1.8-4.4-4.3-5.7-7.2-0.5-1-0.8-2.1-1-3.1-0.1-0.3 0.2-0.7 0.2-0.7-0.4-0.6-0.7-1-0.9-1.5-0.4-1.5-0.8-3-1.1-4.5-0.3-1.2-0.6-2.5-0.8-3.7-0.3-1.6-0.7-3.1-1-4.7-0.2-1.2-0.4-2.4-0.6-3.6-0.3-1.1-0.7-2.2-0.9-3.3-0.2-0.7-0.4-1.5-0.2-2.2 0.3-1.1 2.6-1.9 3.5-1.1 1 0.8 2.4 1.2 2.8 2.8 0.2 0.7 0.8 1.3-0.2 1.9 0 0 0.3 0.3 0.5 0.7 0.1-0.3 0.2-0.6 0.3-0.9 0.1 0 0.3 0.1 0.4 0.1 0.5 1.7 0.9 3.5 1.4 5.2 0.2 0.6 0.2 1.3 0.4 1.9 0.1 0.3 0.6 0.5 1 0.8z" fill="#A14A26"/>
        </svg>
        <span className="text-sm font-semibold text-black" style={{ fontFamily: "var(--font-dm)" }}>
          Mauro Pugliese
        </span>
      </a>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-7">
        {NAV_LINKS.map(([label, href]) => (
          <a
            key={label}
            href={href}
            className="text-[13px] text-[#3A3835] hover:text-black transition-colors"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            {label}
          </a>
        ))}
        <ButtonFilled href="#contatto">Prenota</ButtonFilled>
      </div>

      {/* Mobile toggle */}
      <button
        className="md:hidden p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-border p-6 flex flex-col gap-4 md:hidden">
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-[#3A3835] hover:text-black"
              style={{ fontFamily: "var(--font-dm)" }}
            >
              {label}
            </a>
          ))}
          <ButtonFilled href="#contatto">Prenota</ButtonFilled>
        </div>
      )}
    </nav>
  );
}
