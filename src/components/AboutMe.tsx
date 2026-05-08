import { Reveal } from './ui/RevealOnScroll';
import { Pill } from './ui/Pill';
import { ButtonFilled } from './ui/Button';
import { Leaf } from 'lucide-react';
import { IMAGES } from '../lib/constants';

const CREDENTIALS = [
  { title: "Diplomato AIOT", sub: "Accademia Italiana di Osteopatia - 6 anni" },
  { title: "Approccio BLT", sub: "Tecniche fasciali e viscerali, nessuno scrocchio" },
  { title: "Certificato FSC", sub: "Osteopatia pediatrica - Perugia e Roma" },
];

export function AboutMe() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1128px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
        <Reveal className="relative min-h-[400px] md:min-h-[560px]">
          <img
            src={IMAGES.mauroPortrait}
            alt="Dott. Mauro Pugliese - Osteopata"
            className="absolute inset-0 w-full h-full rounded-2xl object-cover"
            style={{ objectPosition: '50% 20%' }}
          />
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

          <div className="flex flex-col gap-4 mb-10">
            {CREDENTIALS.map((c, i) => (
              <Reveal key={i} delay={i + 2}>
                <div className="flex gap-3.5 items-start bg-accent/[.10] rounded-2xl p-4 border border-border">
                  <div className="w-10 h-10 rounded-full bg-accent/[.22] flex items-center justify-center shrink-0">
                    <Leaf size={18} className="text-brand" strokeWidth={1.5} />
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
