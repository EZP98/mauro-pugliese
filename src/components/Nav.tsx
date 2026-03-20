import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '../lib/constants';
import { Menu, X, ArrowDown } from 'lucide-react';
// import { LogoSVG } from './ui/LogoSVG';

function AnimatedLogo() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setExpanded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.span
      className="flex items-center gap-1.5 text-[14px] overflow-hidden"
      style={{ fontFamily: 'var(--font-dm)' }}
      initial={{ opacity: 0, filter: 'blur(8px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="font-semibold whitespace-nowrap" style={{ color: 'var(--color-brand, #C05A28)' }}>
        <motion.span
          initial={{ width: 'auto' }}
          animate={expanded ? { width: 0, opacity: 0 } : {}}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block overflow-hidden align-bottom"
        >
          MP
        </motion.span>
        <motion.span
          initial={{ width: 0, opacity: 0 }}
          animate={expanded ? { width: 'auto', opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block overflow-hidden align-bottom"
        >
          Mauro Pugliese
        </motion.span>
      </span>
      <motion.span
        className="text-[15px] whitespace-nowrap"
        style={{ color: 'var(--color-muted, #867F76)', fontFamily: 'var(--font-script)' }}
        initial={{ opacity: 0 }}
        animate={expanded ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
      >
        osteopata
      </motion.span>
    </motion.span>
  );
}

// ─── V1 Nav — full-width bar, like the real site ───
export function Nav1() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(12px)',
        boxShadow: scrolled
          ? '0 1px 0 rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.04)'
          : 'none',
      }}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[60px] md:h-[68px] px-5 md:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          {/* LogoSVG removed */}
          <span
            className="text-[15px] font-semibold hidden sm:block"
            style={{ color: '#2B2625', fontFamily: "var(--font-dm)" }}
          >
            Mauro Pugliese
          </span>
        </a>

        {/* Desktop links — center */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-[13px] font-medium transition-colors duration-200 hover:text-[#C05A28]"
              style={{ color: '#2B2625', fontFamily: "var(--font-dm)" }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contatto"
          className="hidden md:inline-flex items-center gap-2 h-10 px-5 text-[13px] font-semibold text-white transition-all duration-200 hover:opacity-90 shrink-0"
          style={{ background: '#C05A28', fontFamily: "var(--font-dm)", borderRadius: 16 }}
        >
          <ArrowDown size={14} strokeWidth={2.5} />
          Contattami subito
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 -mr-1"
          style={{ color: '#2B2625' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t px-5 pb-5 pt-3 flex flex-col gap-1"
          style={{
            background: 'rgba(255,255,255,0.98)',
            borderColor: 'rgba(0,0,0,0.06)',
          }}
        >
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-[14px] font-medium py-2.5 transition-colors hover:text-[#C05A28]"
              style={{ color: '#2B2625', fontFamily: "var(--font-dm)" }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contatto"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center gap-2 h-11 text-[13px] font-semibold text-white mt-2"
            style={{ background: '#C05A28', fontFamily: "var(--font-dm)", borderRadius: 16 }}
          >
            <ArrowDown size={14} strokeWidth={2.5} />
            Contattami subito
          </a>
        </div>
      )}
    </header>
  );
}

// ─── V2 Nav — clean bar ───
export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);



  // resize handler removed — menu is fullscreen on all sizes

  // Block body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(248,247,245,1) 0%, rgba(248,247,245,0.98) 40%, rgba(248,247,245,0.85) 65%, rgba(248,247,245,0.5) 80%, rgba(248,247,245,0) 100%)',
          paddingBottom: 40,
        }}
      >
        <div className="max-w-[1128px] mx-auto flex items-center justify-between h-[64px] px-5 md:px-8 pointer-events-auto">
          {/* Logo */}
          <a href="#" className="flex items-center shrink-0">
            <AnimatedLogo />
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[12.5px] font-medium transition-colors duration-200"
                style={{ color: 'var(--color-muted, #867F76)', fontFamily: 'var(--font-dm)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-brand, #C05A28)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted, #867F76)')}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/393389358127?text=Ciao%2C%20vorrei%20prenotare%20un%20appuntamento"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center h-[36px] px-5 text-[12.5px] font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shrink-0"
            style={{ background: 'var(--color-brand, #C05A28)', fontFamily: 'var(--font-dm)', borderRadius: 16 }}
          >
            Prenota
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 -mr-1"
            style={{ color: 'var(--color-dark, #1E1C1A)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className="md:hidden fixed inset-0 z-[60] transition-opacity duration-300"
        style={{
          background: 'rgba(0,0,0,0.3)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
        }}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className="md:hidden fixed inset-0 z-[70] flex flex-col transition-opacity duration-300"
        style={{
          background: 'var(--color-bg, #F8F7F5)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
        }}
      >
        {/* Drawer header — close button only */}
        <div className="flex items-center justify-end h-[56px] px-5 shrink-0">
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Chiudi menu"
            className="p-2 -mr-1"
            style={{ color: 'var(--color-dark, #1E1C1A)' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links centered with logo on top */}
        <nav className="flex flex-col items-center justify-center flex-1 gap-2">
          {/* Logo above links */}
          <a href="#" className="flex items-center gap-2 mb-6" onClick={() => setMobileOpen(false)}>
            <span
              className="text-[18px] font-semibold"
              style={{ color: 'var(--color-brand, #C05A28)', fontFamily: 'var(--font-dm)' }}
            >
              Mauro Pugliese
            </span>
            <span
              className="text-[15px] font-normal"
              style={{ color: 'var(--color-muted, #867F76)', fontFamily: 'var(--font-dm)' }}
            >
              · Osteopata
            </span>
          </a>
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-[22px] font-medium py-2 transition-colors duration-200"
              style={{
                color: 'var(--color-dark, #1E1C1A)',
                fontFamily: 'var(--font-dm)',
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center gap-3 pb-12 px-6">
          <a
            href="https://wa.me/393389358127?text=Ciao%2C%20vorrei%20prenotare%20un%20appuntamento"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="w-full max-w-[280px] inline-flex items-center justify-center h-[50px] text-[14px] font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: 'var(--color-brand, #C05A28)', fontFamily: 'var(--font-dm)', borderRadius: 16 }}
          >
            Prenota una visita
          </a>
          <span
            className="text-[12px]"
            style={{ color: 'var(--color-muted, #867F76)', fontFamily: 'var(--font-dm)' }}
          >
            Rispondo entro 2 ore
          </span>
        </div>
      </div>
    </>
  );
}
