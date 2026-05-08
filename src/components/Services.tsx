import { SERVICES } from '../lib/constants';
import { Reveal } from './ui/RevealOnScroll';
import { Pill } from './ui/Pill';
import TextReveal from './ui/TextReveal';
import { User, Activity, Heart, Baby, Dumbbell, Ear } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const SERVICE_ICONS: LucideIcon[] = [User, Activity, Heart, Baby, Dumbbell, Ear];

// ─── Version A: Horizontal alternating — image left/right, text opposite ───
export function ServicesA() {
  return (
    <section id="servizi" className="py-16 md:py-24">
      <div className="max-w-[1128px] mx-auto px-6 md:px-10">
        <Header />
        <div className="flex flex-col gap-4">
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={1}>
              <div className={`border border-border rounded-2xl overflow-hidden flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2 h-[220px] md:h-[260px] overflow-hidden shrink-0">
                  {'img' in s && s.img ? (
                    <img src={s.img} alt={s.name} className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#D4CEC0] to-[#C0BAB0]" />
                  )}
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="font-semibold text-[17px] text-[#111] mb-2.5" style={{ fontFamily: "var(--font-dm)" }}>{s.name}</h3>
                  <p className="text-[13.5px] leading-relaxed" style={{ color: 'var(--color-muted, var(--color-muted))', fontFamily: "var(--font-dm)" }}>{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Version B1: 2-column, padded image + text side by side, alternating ───
export function ServicesB() {
  return (
    <section id="servizi" className="py-16 md:py-24">
      <div className="max-w-[1128px] mx-auto px-6 md:px-10">
        <Header />
        <div className="flex flex-col gap-4">
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={1}>
              <div className={`border border-border rounded-2xl p-4 flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-4`}>
                <div className="md:w-1/2 aspect-[3/2] overflow-hidden rounded-xl border border-border shrink-0">
                  {'img' in s && s.img ? (
                    <img src={s.img} alt={s.name} className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#D4CEC0] to-[#C0BAB0]" />
                  )}
                </div>
                <div className="md:w-1/2 flex flex-col justify-center py-1 md:px-4">
                  <h3 className="font-semibold text-[17px] text-[#111] mb-2.5" style={{ fontFamily: "var(--font-dm)" }}>{s.name}</h3>
                  <p className="text-[13.5px] leading-relaxed" style={{ color: 'var(--color-muted, var(--color-muted))', fontFamily: "var(--font-dm)" }}>{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Version B2: 2-column grid — padded image card, text OUTSIDE ───
export function ServicesB2() {
  return (
    <section id="servizi" className="py-16 md:py-24">
      <div className="max-w-[1128px] mx-auto px-6 md:px-10">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={(i % 2) * 0.15}>
              <div className="group">
                <div className="border border-border rounded-2xl p-4 mb-4">
                  <div className="aspect-[3/2] overflow-hidden rounded-xl border border-border">
                    {'img' in s && s.img ? (
                      <img
                        src={s.img}
                        alt={s.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#D4CEC0] to-[#C0BAB0]" />
                    )}
                  </div>
                </div>
                <h3 className="font-semibold text-[16px] text-[#111] mb-1.5 px-1" style={{ fontFamily: "var(--font-dm)" }}>{s.name}</h3>
                <p className="text-[13.5px] leading-relaxed px-1" style={{ color: 'var(--color-muted, var(--color-muted))', fontFamily: "var(--font-dm)" }}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Version C: Minimal list — no images, just clean rows with border ───
export function ServicesC() {
  return (
    <section id="servizi" className="py-16 md:py-24">
      <div className="max-w-[1128px] mx-auto px-6 md:px-10">
        <Header />
        <div className="flex flex-col">
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={1}>
              <a
                href={`https://wa.me/393389358127?text=${encodeURIComponent(`Ciao, vorrei informazioni sul trattamento: ${s.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start md:items-center justify-between gap-6 py-6 transition-colors duration-300"
                style={{ borderBottom: '1px solid var(--color-border, #E4D9CC)' }}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="w-8 h-8 rounded-full bg-accent/[.22] flex items-center justify-center shrink-0">
                      {(() => { const Icon = SERVICE_ICONS[i] || User; return <Icon size={16} className="text-brand" strokeWidth={1.5} />; })()}
                    </div>
                    <h3 className="font-semibold text-[17px] text-[#111] group-hover:text-brand transition-colors" style={{ fontFamily: "var(--font-dm)" }}>{s.name}</h3>
                  </div>
                  <p className="text-[13.5px] leading-relaxed max-w-[500px] ml-[44px]" style={{ color: 'var(--color-muted, var(--color-muted))', fontFamily: "var(--font-dm)" }}>{s.desc}</p>
                </div>
                {'img' in s && s.img && (
                  <div className="hidden md:block w-[120px] h-[80px] rounded-xl overflow-hidden border border-border shrink-0">
                    <img src={s.img} alt={s.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                )}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Shared header
function Header() {
  return (
    <div className="mb-12">
      <Reveal><Pill>Servizi</Pill></Reveal>
      <TextReveal
        text="Trova il percorso più adatto a te"
        tag="h2"
        className="text-[clamp(26px,3vw,44px)] font-bold text-black leading-tight max-w-[420px] mb-3.5"
        style={{ fontFamily: "var(--font-serif)", justifyContent: 'flex-start' }}
        delay={200}
      />
      <Reveal delay={2}>
        <p className="text-sm text-muted leading-relaxed max-w-[380px]" style={{ fontFamily: "var(--font-dm)" }}>
          Ogni persona è diversa, e ogni trattamento lo riflette. Ascolto il tuo corpo, individuo la causa profonda del disturbo e costruisco un percorso su misura — dolce, preciso, senza protocolli rigidi.
        </p>
      </Reveal>
    </div>
  );
}

// Default export for backward compat
export function Services() {
  return <ServicesA />;
}

// ─── Benefits Grid — repurposed B2 layout with benefit content + decorative images ───
// ─── Services Image Grid — uses B2 layout with service data ───
export function ServicesImageGrid() {
  return (
    <section id="servizi" className="py-16 md:py-24">
      <div className="max-w-[1128px] mx-auto px-6 md:px-10">
        <div className="mb-12">
          <Reveal><Pill>Servizi</Pill></Reveal>
          <TextReveal
            text="Trova il percorso più adatto a te"
            tag="h2"
            className="text-[clamp(26px,3vw,44px)] font-bold text-black leading-tight max-w-[420px] mb-3.5"
            style={{ fontFamily: "var(--font-serif)", justifyContent: 'flex-start' }}
            delay={200}
          />
          <Reveal delay={2}>
            <p className="text-sm text-muted leading-relaxed max-w-[380px]" style={{ fontFamily: "var(--font-dm)" }}>
              Ogni persona è diversa, e ogni trattamento lo riflette. Ascolto il tuo corpo, individuo la causa profonda del disturbo e costruisco un percorso su misura — dolce, preciso, senza protocolli rigidi.
            </p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={(i % 3) * 0.15}>
              <div className="group">
                <div className="border border-border rounded-2xl p-3 mb-4">
                  <div className="aspect-[3/2] overflow-hidden rounded-xl border border-border">
                    {'img' in s && s.img ? (
                      <img
                        src={s.img}
                        alt={s.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#D4CEC0] to-[#C0BAB0]" />
                    )}
                  </div>
                </div>
                <h3 className="font-semibold text-[15px] text-[#111] mb-1.5 px-1" style={{ fontFamily: "var(--font-dm)" }}>{s.name}</h3>
                <p className="text-[13px] leading-relaxed px-1" style={{ color: 'var(--color-muted, var(--color-muted))', fontFamily: "var(--font-dm)" }}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
