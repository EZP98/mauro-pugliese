import { Reveal } from './ui/RevealOnScroll';
import { Pill } from './ui/Pill';
import { ButtonFilled } from './ui/Button';
import { Leaf } from 'lucide-react';

const CREDENTIALS = [
  { title: "Diplomato AIOT", sub: "Accademia Italiana di Osteopatia - 6 anni" },
  { title: "Approccio BLT", sub: "Tecniche fasciali e viscerali, nessuno scrocchio" },
  { title: "Certificato FSC", sub: "Osteopatia pediatrica - Perugia e Roma" },
];

export function AboutMe() {
  return (
    <section className="bg-white">
      <div className="max-w-[1128px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
        <Reveal className="relative min-h-[400px] md:min-h-[560px]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4CEC4] to-[#C0BAB0] overflow-hidden flex items-center justify-center">
            <span className="text-[96px] italic text-black/[.07]" style={{ fontFamily: "var(--font-serif)" }}>M.P.</span>
          </div>
        </Reveal>

        <div className="py-16 md:py-24">
          <Reveal><Pill>Chi sono</Pill></Reveal>
          <Reveal delay={1}>
            <h2 className="text-[clamp(26px,3vw,42px)] font-bold text-[#111] leading-tight mb-5" style={{ fontFamily: "var(--font-serif)" }}>
              Ciao, sono <em className="italic text-brand">Mauro</em>,{" "}
              il tuo osteopata.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-sm text-muted-2 leading-loose mb-9" style={{ fontFamily: "var(--font-dm)" }}>
              Ho sviluppato un metodo basato sull'ascolto profondo del corpo. Non utilizzo tecniche HVLA.
              Ogni trattamento è unico, ogni paziente è una storia diversa.
            </p>
          </Reveal>

          <div className="flex flex-col gap-6 mb-10">
            {CREDENTIALS.map((c, i) => (
              <Reveal key={i} delay={i + 2}>
                <div className="flex gap-3.5 items-start">
                  <div className="w-10 h-10 rounded-full bg-black/[.07] flex items-center justify-center shrink-0">
                    <Leaf size={18} className="text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-[#111] mb-0.5" style={{ fontFamily: "var(--font-jakarta)" }}>{c.title}</p>
                    <p className="font-light text-[13px] text-muted-3" style={{ fontFamily: "var(--font-dm)" }}>{c.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={2}><ButtonFilled href="#contatto">Prenota una seduta con me</ButtonFilled></Reveal>
        </div>
      </div>
    </section>
  );
}
