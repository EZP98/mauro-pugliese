import { PLANS } from '../lib/constants';
import { Reveal } from './ui/RevealOnScroll';
import { Pill } from './ui/Pill';
import { ButtonFilled } from './ui/Button';
import { Check } from 'lucide-react';

function PricingCard({ plan: p }: { plan: typeof PLANS[number] }) {
  return (
    <div className={`rounded-2xl p-7 flex flex-col h-full hover:border-brand/30 transition-all duration-300 ${
      p.popular
        ? 'border-[1.5px] border-brand bg-brand/[.02]'
        : 'border border-border'
    }`}>
      <div className="flex-1 mb-5">
        <div className="flex items-center gap-2 mb-3.5">
          <p className="text-sm font-medium text-[#3A3835]" style={{ fontFamily: "var(--font-dm)" }}>{p.name}</p>
          {p.popular && (
            <span className="px-2.5 py-0.5 rounded-full border border-brand/30 bg-brand/[.08] text-[10.5px] text-brand font-medium" style={{ fontFamily: "var(--font-dm)" }}>
              Più richiesto
            </span>
          )}
        </div>
        <div className="flex items-baseline gap-1.5 mb-2">
          <span className="text-[28px] md:text-[40px] font-bold text-black leading-none" style={{ fontFamily: "var(--font-serif)" }}>{p.price}</span>
          <span className="text-[13px] text-muted-3" style={{ fontFamily: "var(--font-dm)" }}>{p.sub}</span>
        </div>
        <p className="text-[13.5px] text-muted-2 leading-relaxed" style={{ fontFamily: "var(--font-dm)" }}>{p.desc}</p>
      </div>
      <div className="mb-5">
        <ButtonFilled href={p.href} full>{p.cta}</ButtonFilled>
      </div>
      <div className="flex flex-col gap-2.5">
        {p.features.map(f => (
          <div key={f} className="flex gap-2.5 items-center">
            <Check size={14} className="text-brand" strokeWidth={1.8} />
            <span className="text-[13px] text-[rgba(48,48,48,.7)]" style={{ fontFamily: "var(--font-dm)" }}>{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="prezzi" className="py-16 md:py-24 relative z-10">
      <div className="max-w-[1128px] mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center mb-14">
          <Reveal><Pill>Sedute</Pill></Reveal>
          <Reveal delay={1}>
            <h2 className="text-[clamp(26px,3vw,44px)] font-bold text-[#111] text-center leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
              Le mie sedute
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-sm text-muted-2 text-center leading-relaxed max-w-[500px] mt-3.5" style={{ fontFamily: "var(--font-dm)" }}>
              Ogni seduta dura 40–50 minuti ed è pensata su di te.
              <br />
              Nessun pacchetto obbligatorio, nessun percorso prestabilito.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Desktop: 3-col grid */}
      <div className="max-w-[1128px] mx-auto px-6 md:px-10 hidden md:block">
        <div className="grid grid-cols-3 gap-4 items-stretch">
          {PLANS.map((p, i) => (
            <Reveal key={i} delay={i * 0.1 + 0.3}>
              <PricingCard plan={p} />
            </Reveal>
          ))}
        </div>
      </div>
      {/* Mobile: horizontal scroll */}
      <div className="md:hidden overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-6" style={{ width: 'max-content' }}>
          {PLANS.map((p, i) => (
            <div key={i} className="w-[280px] shrink-0">
              <PricingCard plan={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
