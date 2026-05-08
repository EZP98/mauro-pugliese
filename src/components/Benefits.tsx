import { BENEFITS } from '../lib/constants';
import { Reveal } from './ui/RevealOnScroll';
import { Pill } from './ui/Pill';
import { ShieldCheck, Move, Columns3, Moon, Zap, Brain } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const BENEFIT_ICONS: LucideIcon[] = [ShieldCheck, Move, Columns3, Moon, Zap, Brain];

export function Benefits() {
  return (
    <section id="benefici" className="py-16 md:py-24 relative z-10">
      <div className="max-w-[1128px] mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center mb-14">
          <Reveal><Pill>Benefici</Pill></Reveal>
          <Reveal delay={1}>
            <h2 className="text-[clamp(26px,3vw,44px)] font-bold text-[#111] text-center leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
              Perché fare osteopatia?
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-sm text-muted-2 text-center leading-relaxed max-w-[640px] mt-3.5" style={{ fontFamily: "var(--font-dm)" }}>
              L'osteopatia non tratta solo il sintomo — lavora sulla causa. Con un approccio olistico e tecniche dolci come il BLT e il fasciale, il corpo ritrova il suo equilibrio naturale. I benefici si sentono in studio e nella vita di tutti i giorni.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-x-12 md:gap-y-10">
          {BENEFITS.map((b, i) => {
            const Icon = BENEFIT_ICONS[i] || ShieldCheck;
            return (
              <Reveal key={i} delay={i * 0.1 + 0.2}>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-12 h-12 rounded-full bg-accent/[.18] flex items-center justify-center mb-4 group-hover:bg-accent/[.30] group-hover:scale-110 transition-all duration-500">
                    <Icon size={20} className="text-brand" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-[14px] text-[#111] mb-1.5 leading-snug" style={{ fontFamily: "var(--font-dm)" }}>{b.title}</h3>
                  <p className="text-[13px] text-muted leading-relaxed" style={{ fontFamily: "var(--font-dm)", textWrap: 'balance' }}>{b.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
