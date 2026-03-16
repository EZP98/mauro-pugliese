import { useState } from 'react';
import { FAQS } from '../lib/constants';
import { Reveal } from './ui/RevealOnScroll';
import { Pill } from './ui/Pill';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-28">
      <div className="max-w-[1128px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">
        <div className="md:sticky md:top-24">
          <Reveal><Pill>FAQ</Pill></Reveal>
          <Reveal delay={1}>
            <h2 className="text-[clamp(26px,3vw,44px)] font-bold text-black leading-tight mb-4" style={{ fontFamily: "var(--font-serif)" }}>
              Domande?
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-sm text-muted leading-loose" style={{ fontFamily: "var(--font-dm)" }}>
              Trova le risposte alle domande più frequenti su trattamenti, sedute e certificazioni.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="flex flex-col gap-2">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`bg-white rounded-lg overflow-hidden transition-colors duration-300 ${
                    isOpen ? 'border border-brand' : 'border border-transparent'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full px-5 py-4 flex justify-between items-center cursor-pointer gap-3 bg-transparent border-none text-left"
                  >
                    <p className={`text-sm transition-colors duration-200 ${isOpen ? 'text-brand' : 'text-dark'}`} style={{ fontFamily: "var(--font-dm)" }}>
                      {f.q}
                    </p>
                    <ChevronDown
                      size={14}
                      className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand' : 'text-dark'}`}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-400"
                    style={{ maxHeight: isOpen ? 200 : 0, padding: isOpen ? '0 20px 18px' : '0 20px 0' }}
                  >
                    <p className="text-[13.5px] text-muted leading-loose" style={{ fontFamily: "var(--font-dm)" }}>
                      {f.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
