import { SERVICES } from '../lib/constants';
import { Reveal } from './ui/RevealOnScroll';
import { Pill } from './ui/Pill';
import { ButtonSecondary } from './ui/Button';

export function Services() {
  return (
    <section id="servizi" className="bg-white py-28">
      <div className="max-w-[1128px] mx-auto px-6 md:px-10">
        <div className="mb-10">
          <Reveal><Pill>Servizi</Pill></Reveal>
          <Reveal delay={1}>
            <h2 className="text-[clamp(26px,3vw,44px)] font-bold text-black leading-tight max-w-[420px] mb-3.5" style={{ fontFamily: "var(--font-serif)" }}>
              Trova il percorso più adatto a te
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-sm text-muted leading-relaxed max-w-[380px]" style={{ fontFamily: "var(--font-dm)" }}>
              Nessun protocollo standard. Ogni trattamento è unico, come la persona che lo riceve.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={(i % 2) + 1}>
              <div className="bg-white border-b border-border overflow-hidden">
                <div className="h-64 overflow-hidden relative" style={{ backgroundColor: s.bg }}>
                  {'img' in s && s.img ? (
                    <img src={s.img} alt={s.name} className="w-full h-full object-cover object-center" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-6xl italic text-black/[.09]" style={{ fontFamily: "var(--font-serif)" }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5 pb-7">
                  <h3 className="font-semibold text-base text-black mb-2.5" style={{ fontFamily: "var(--font-dm)" }}>{s.name}</h3>
                  <p className="text-[13.5px] text-muted leading-relaxed mb-5" style={{ fontFamily: "var(--font-dm)" }}>{s.desc}</p>
                  <ButtonSecondary href="#contatto">Prenota una seduta</ButtonSecondary>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
