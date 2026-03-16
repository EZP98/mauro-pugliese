import { BENEFITS } from '../lib/constants';
import { Reveal } from './ui/RevealOnScroll';
import { Pill } from './ui/Pill';
import { Heart } from 'lucide-react';

export function Benefits() {
  return (
    <section id="benefici" className="bg-white py-28">
      <div className="max-w-[1128px] mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center mb-18">
          <Reveal><Pill>Benefici</Pill></Reveal>
          <Reveal delay={1}>
            <h2 className="text-[clamp(26px,3vw,44px)] font-bold text-[#111] text-center leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
              Perché fare osteopatia?
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-sm text-muted-2 text-center leading-relaxed max-w-[500px] mt-3.5" style={{ fontFamily: "var(--font-dm)" }}>
              Dalla forza fisica alla calma interiore, benefici profondi in studio e nella vita.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {BENEFITS.map((b, i) => (
            <Reveal key={i} delay={(i % 3) + 1}>
              <div className="py-7 border-b border-border">
                <div className="w-9 h-9 rounded-full bg-brand/8 flex items-center justify-center mb-4">
                  <Heart size={18} className="text-brand" strokeWidth={1.5} />
                </div>
                <h3 className="font-medium text-[15px] text-[#111] mb-2" style={{ fontFamily: "var(--font-jakarta)" }}>{b.title}</h3>
                <p className="font-light text-[13.5px] text-muted-2 leading-relaxed" style={{ fontFamily: "var(--font-dm)" }}>{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
