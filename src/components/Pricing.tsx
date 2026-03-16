import { PLANS } from '../lib/constants';
import { Reveal } from './ui/RevealOnScroll';
import { Pill } from './ui/Pill';
import { ButtonFilled } from './ui/Button';
import { Check } from 'lucide-react';

export function Pricing() {
  return (
    <section id="prezzi" className="bg-white py-28">
      <div className="max-w-[1128px] mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center mb-18">
          <Reveal><Pill>Sedute</Pill></Reveal>
          <Reveal delay={1}>
            <h2 className="text-[clamp(26px,3vw,44px)] font-bold text-[#111] text-center leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
              Il percorso giusto per la tua pratica
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {PLANS.map((p, i) => (
            <Reveal key={i} delay={i + 1}>
              <div className={`bg-white rounded-xl p-7 flex flex-col h-full ${
                p.popular ? 'border-[1.5px] border-brand' : 'border border-border'
              }`}>
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3.5">
                    <p className="text-sm font-medium text-[#3A3835]" style={{ fontFamily: "var(--font-dm)" }}>{p.name}</p>
                    {p.popular && (
                      <span className="px-2.5 py-0.5 rounded-full border border-border text-[10.5px] text-muted-2" style={{ fontFamily: "var(--font-dm)" }}>
                        Più richiesto
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className="text-[40px] font-bold text-black leading-none" style={{ fontFamily: "var(--font-serif)" }}>{p.price}</span>
                    <span className="text-[13px] text-muted-3" style={{ fontFamily: "var(--font-dm)" }}>{p.sub}</span>
                  </div>
                  <p className="text-[13.5px] text-muted-2 leading-relaxed" style={{ fontFamily: "var(--font-dm)" }}>{p.desc}</p>
                </div>
                <div className="mb-5">
                  <ButtonFilled href="#contatto" full>{p.cta}</ButtonFilled>
                </div>
                <div className="flex flex-col gap-2.5 flex-1">
                  {p.features.map(f => (
                    <div key={f} className="flex gap-2.5 items-center">
                      <Check size={14} className="text-brand" strokeWidth={1.8} />
                      <span className="text-[13px] text-[rgba(48,48,48,.7)]" style={{ fontFamily: "var(--font-dm)" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
