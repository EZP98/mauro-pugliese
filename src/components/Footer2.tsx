import { useRef } from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { Reveal } from './ui/RevealOnScroll';
import { motion, useScroll, useTransform } from 'framer-motion';
const MENU_LINKS = [
  ["Home", "#"],
  ["Chi sono", "#chi-sono"],
  ["Servizi", "#servizi"],
  ["Recensioni", "#testimonianze"],
  ["Studio", "#studio"],
  ["FAQ", "#faq"],
  ["Contatti", "#contatto"],
];

const SERVICE_LINKS = [
  ["Osteopatia adulti", "#servizi"],
  ["Patologie croniche", "#servizi"],
  ["Gravidanza", "#servizi"],
  ["Pediatrica 0-2a", "#servizi"],
  ["Sportivi", "#servizi"],
  ["ATM e vertigini", "#servizi"],
];

export function Footer2() {
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'start 0.5'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <footer ref={footerRef} className="px-4 md:px-8 pb-4 md:pb-8">
      <motion.div
        className="relative w-full max-w-[1400px] mx-auto rounded-t-[2rem] md:rounded-t-[2.5rem] overflow-hidden"
        style={{ scale, opacity, y }}
      >
        {/* Gradient background */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, #FDEFE6 0%, #FCE2D3 35%, #FCE2D3 70%, #FFF9F3 100%)' }}
        />

        <div className="relative z-10">
          {/* CTA Section */}
          <Reveal>
            <div className="text-center px-6 md:px-16 pt-16 md:pt-24 pb-12">
              <h2
                className="text-[clamp(28px,3.5vw,48px)] font-bold leading-tight text-[#1E1C1A] max-w-[600px] mx-auto mb-4"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Inizia il tuo percorso di benessere
              </h2>
              <p
                className="text-[15px] leading-relaxed max-w-[460px] mx-auto mb-8"
                style={{ color: '#6B6560', fontFamily: "var(--font-dm)" }}
              >
                Prenota un consulto con il Dott. Pugliese e fai il primo passo verso un corpo in equilibrio.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="https://wa.me/393389358127?text=Ciao%2C%20vorrei%20prenotare%20un%20appuntamento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-[52px] px-8 text-[14px] font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: 'var(--color-accent)', fontFamily: "var(--font-dm)", borderRadius: 16 }}
                >
                  Prenota una visita
                </a>
              </div>
            </div>
          </Reveal>

          {/* Footer grid */}
          <div className="px-6 md:px-16 pb-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-10">
              {/* Logo + description */}
              <div className="lg:max-w-[280px] shrink-0">
                <a href="#" className="flex items-center gap-2 mb-4">
                  {/* LogoSVG removed */}
                  <span className="text-[15px] font-semibold text-[#1E1C1A]" style={{ fontFamily: "var(--font-dm)" }}>
                    Mauro Pugliese
                  </span>
                </a>
                <p className="text-[13.5px] leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: "var(--font-dm)" }}>
                  Osteopata diplomato AIOT, certificato FSC. Trattamenti su misura per adulti, sportivi, mamme e bambini.
                </p>
                <div className="flex gap-2">
                  {[
                    { icon: Instagram, href: "https://www.instagram.com/mauropugliese_osteopata/" },
                    { icon: Facebook, href: "https://www.facebook.com/people/Mauro-Pugliese-Osteopata/61581536554308/" },
                  ].map(({ icon: Icon, href }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-lg flex items-center justify-center border border-border bg-white text-brand hover:bg-accent/[.22] transition-all"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Links columns */}
              <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
                {/* Menu */}
                <div>
                  <h4 className="text-[12px] font-semibold text-[#1E1C1A] mb-4 tracking-wide uppercase" style={{ fontFamily: "var(--font-jakarta)" }}>
                    Menu
                  </h4>
                  <nav className="flex flex-col gap-2">
                    {MENU_LINKS.map(([label, href]) => (
                      <a
                        key={label}
                        href={href}
                        className="text-[13.5px] hover:text-[#1E1C1A] transition-colors"
                        style={{ color: 'var(--color-muted)', fontFamily: "var(--font-dm)" }}
                      >
                        {label}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Servizi */}
                <div>
                  <h4 className="text-[12px] font-semibold text-[#1E1C1A] mb-4 tracking-wide uppercase" style={{ fontFamily: "var(--font-jakarta)" }}>
                    Servizi
                  </h4>
                  <div className="flex flex-col gap-2">
                    {SERVICE_LINKS.map(([label, href]) => (
                      <a
                        key={label}
                        href={href}
                        className="text-[13.5px] hover:text-[#1E1C1A] transition-colors"
                        style={{ color: 'var(--color-muted)', fontFamily: "var(--font-dm)" }}
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Contatti */}
                <div>
                  <h4 className="text-[12px] font-semibold text-[#1E1C1A] mb-4 tracking-wide uppercase" style={{ fontFamily: "var(--font-jakarta)" }}>
                    Contatti
                  </h4>
                  <div className="flex flex-col gap-3">
                    {[
                      { icon: MapPin, text: "Perugia e Roma", href: "#" },
                      { icon: Phone, text: "+39 338 935 8127", href: "tel:+393389358127" },
                      { icon: Mail, text: "info@mauropugliese.it", href: "mailto:info@mauropugliese.it" },
                    ].map(({ icon: Icon, text, href }) => (
                      <a
                        key={text}
                        href={href}
                        className="flex items-center gap-2.5 text-[13.5px] hover:text-[#1E1C1A] transition-colors"
                        style={{ color: 'var(--color-muted)', fontFamily: "var(--font-dm)" }}
                      >
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border border-border bg-white text-brand"
                        >
                          <Icon size={16} />
                        </div>
                        {text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t pt-5 flex flex-col sm:flex-row justify-between items-center gap-3" style={{ borderColor: 'var(--color-border, #E4D9CC)' }}>
              <p className="text-[12px]" style={{ color: 'var(--color-muted)', fontFamily: "var(--font-dm)" }}>
                &copy; 2025 Mauro Pugliese — P.IVA 03337540789 — C.F. PGLMRA86R01B774W
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> — </span>
              Sede legale: Via Niccolò Copernico, 6/A, 06073 Corciano PG
              </p>
              <div className="flex gap-3 text-[12px]" style={{ color: 'var(--color-muted)', fontFamily: "var(--font-dm)" }}>
                <a href="#/privacy" className="hover:text-[#1E1C1A] transition-colors">Privacy Policy</a>
                <span>|</span>
                <a href="#/cookie" className="hover:text-[#1E1C1A] transition-colors">Cookie Policy</a>
              </div>
            </div>
            <div className="text-left mt-4">
              <span className="text-[10px] md:text-[11px]" style={{ color: '#A9A49E', fontFamily: "var(--font-dm)" }}>
                Sito ideato da{' '}
                <a
                  href="https://portfolio-ezio.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1E1C1A] transition-colors duration-300"
                  style={{ color: 'var(--color-muted)' }}
                >
                  Ezio Pappalardo
                </a>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

