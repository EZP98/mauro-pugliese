import { useState } from 'react';
import { FAQS } from '../lib/constants';
import { Reveal } from './ui/RevealOnScroll';
import { Pill } from './ui/Pill';
import { motion, AnimatePresence } from 'framer-motion';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24">
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
              Trova le risposte alle domande più frequenti su trattamenti, sedute, certificazioni e approccio osteopatico. Se non trovi quello che cerchi, scrivimi — sarò felice di risponderti personalmente.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="flex flex-col gap-3">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden border border-border transition-colors duration-300"
                  style={{
                    borderColor: isOpen
                      ? 'var(--color-brand, #9D9287)'
                      : 'var(--color-border, #E4D9CC)',
                  }}
                >
                  {/* Question row */}
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full px-5 md:px-6 py-4 md:py-5 flex items-center gap-4 cursor-pointer bg-transparent text-left border-0"
                  >
                    {/* Plus/X icon */}
                    <div
                      className="relative w-5 h-5 shrink-0 transition-transform duration-300 ease-out"
                      style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    >
                      {/* Horizontal bar */}
                      <span
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-[2px] rounded-full transition-colors duration-200"
                        style={{ background: isOpen ? 'var(--color-brand, #9D9287)' : 'var(--color-dark, #1E1C1A)' }}
                      />
                      {/* Vertical bar */}
                      <span
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-3.5 rounded-full transition-colors duration-200"
                        style={{ background: isOpen ? 'var(--color-brand, #9D9287)' : 'var(--color-dark, #1E1C1A)' }}
                      />
                    </div>

                    <p
                      className="text-[14px] md:text-[15px] font-semibold transition-colors duration-200"
                      style={{
                        color: isOpen ? 'var(--color-brand, #9D9287)' : 'var(--color-dark, #1E1C1A)',
                        fontFamily: "var(--font-dm)",
                      }}
                    >
                      {f.q}
                    </p>
                  </button>

                  {/* Answer — animated height */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-5 pl-14 md:pl-[60px]">
                          <p
                            className="text-[13.5px] leading-[1.6] text-muted"
                            style={{ fontFamily: "var(--font-dm)" }}
                          >
                            {f.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
