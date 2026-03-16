import { useState } from 'react';
import { TESTIMONIALS } from '../lib/constants';
import { Reveal } from './ui/RevealOnScroll';
import { Pill } from './ui/Pill';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Testimonials() {
  const [offset, setOffset] = useState(0);
  const CARD_SIZE = 310;
  const MAX = Math.max(0, (TESTIMONIALS.length - 4) * CARD_SIZE);
  const prev = () => setOffset(o => Math.max(0, o - CARD_SIZE));
  const next = () => setOffset(o => Math.min(MAX, o + CARD_SIZE));

  return (
    <section id="testimonianze" className="bg-white py-28">
      <div className="max-w-[1128px] mx-auto px-6 md:px-10 mb-12">
        <div className="flex justify-between items-end flex-wrap gap-6">
          <div>
            <Reveal><Pill>Testimonianze</Pill></Reveal>
            <Reveal delay={1}>
              <h2 className="text-[clamp(26px,3vw,44px)] font-bold text-black leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
                Storie vere, risultati reali
              </h2>
            </Reveal>
          </div>
          <div className="flex gap-2">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center cursor-pointer border-none">
              <ChevronLeft size={18} />
            </button>
            <button onClick={next} className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center cursor-pointer border-none">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-4 pl-6 md:pl-10 transition-transform duration-500 ease-[cubic-bezier(.25,.46,.45,.94)]"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="w-[294px] shrink-0 bg-[#FAFAF9] rounded-xl p-6 min-h-[260px] flex flex-col justify-between border border-border"
            >
              <div>
                <div className="w-9 h-9 rounded-full border border-black/10 bg-[rgba(255,170,106,.2)] flex items-center justify-center mb-5">
                  <span className="text-[15px] italic text-brand" style={{ fontFamily: "var(--font-serif)" }}>
                    {t.name[0]}
                  </span>
                </div>
                <p className="text-[13.5px] text-black/75 leading-relaxed mb-5" style={{ fontFamily: "var(--font-dm)" }}>
                  "{t.quote}"
                </p>
              </div>
              <p className="text-[30px] leading-snug text-[#111]" style={{ fontFamily: "var(--font-cursive)" }}>
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
