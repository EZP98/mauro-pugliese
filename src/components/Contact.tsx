import { TREATMENT_OPTIONS } from '../lib/constants';
import { Reveal } from './ui/RevealOnScroll';
import { Pill } from './ui/Pill';
import { ButtonFilled } from './ui/Button';
import { Mail, Phone, AtSign } from 'lucide-react';

export function Contact() {
  return (
    <div id="contatto" className="bg-white py-28">
      <div className="max-w-[1128px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-16 md:gap-20 items-start">
        <div>
          <Reveal><Pill>Contatto</Pill></Reveal>
          <Reveal delay={1}>
            <h2 className="text-[clamp(26px,3vw,44px)] font-bold text-black mb-5" style={{ fontFamily: "var(--font-serif)" }}>
              Parliamoci
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-sm text-muted leading-loose mb-8" style={{ fontFamily: "var(--font-dm)" }}>
              Vuoi un consulto gratuito? Scrivimi, ti rispondo entro 24 ore.
            </p>
            <div className="flex gap-3">
              {[
                { href: "mailto:info@mauropugliese.it", icon: Mail },
                { href: "tel:+393389358127", icon: Phone },
                { href: "https://instagram.com", icon: AtSign },
              ].map(({ href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  className="w-11 h-11 rounded-lg flex items-center justify-center border border-border text-brand hover:bg-brand/10 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={1}>
          <form onSubmit={(e) => { e.preventDefault(); alert("Messaggio inviato! Mauro ti risponderà entro 24 ore."); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
              {[
                { label: "Nome", type: "text", placeholder: "Il tuo nome" },
                { label: "Email", type: "email", placeholder: "la.tua@email.it" },
              ].map(f => (
                <label key={f.label} className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-muted-2" style={{ fontFamily: "var(--font-dm)" }}>
                    {f.label}
                  </span>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    className="bg-transparent border-none rounded-lg px-3.5 py-2.5 text-sm text-black outline-none focus:ring-1 focus:ring-brand transition-all"
                    style={{ fontFamily: "var(--font-dm)" }}
                  />
                </label>
              ))}
            </div>

            <label className="flex flex-col gap-1.5 mb-3.5">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-muted-2" style={{ fontFamily: "var(--font-dm)" }}>
                Trattamento
              </span>
              <select
                className="bg-transparent border-none rounded-lg px-3.5 py-2.5 text-sm text-black outline-none appearance-none focus:ring-1 focus:ring-brand transition-all"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                <option value="">Seleziona...</option>
                {TREATMENT_OPTIONS.map(v => <option key={v}>{v}</option>)}
              </select>
            </label>

            <label className="flex flex-col gap-1.5 mb-5">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-muted-2" style={{ fontFamily: "var(--font-dm)" }}>
                Messaggio
              </span>
              <textarea
                rows={4}
                placeholder="Il tuo messaggio..."
                className="bg-transparent border-none rounded-lg px-3.5 py-2.5 text-sm text-black outline-none resize-none focus:ring-1 focus:ring-brand transition-all"
                style={{ fontFamily: "var(--font-dm)" }}
              />
            </label>

            <ButtonFilled full onClick={(e) => { e.preventDefault(); alert("Messaggio inviato! Mauro ti risponderà entro 24 ore."); }}>
              Invia il messaggio
            </ButtonFilled>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
