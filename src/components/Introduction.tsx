import { IMAGES } from '../lib/constants';
import { Reveal } from './ui/RevealOnScroll';
import { LogoSVG } from './ui/LogoSVG';
import { ButtonFilled } from './ui/Button';

export function Introduction() {
  const photos = [
    { src: IMAGES.cranial, label: "Osteopatia craniale" },
    { src: IMAGES.baby, label: "Pediatrica" },
    { src: IMAGES.back, label: "Trattamento" },
  ];

  const features = [
    { title: "Trattamenti personalizzati", desc: "Percorsi su misura per ogni livello: dal dolore acuto al benessere continuativo." },
    { title: "Approccio olistico", desc: "BLT, tecniche fasciali e viscerali. Corpo, respiro e tensioni in un'unica visione." },
    { title: "In studio a Perugia e Roma", desc: "Due studi facilmente raggiungibili. Consulto telefonico gratuito prima di prenotare." },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1128px] mx-auto px-6 md:px-10">
        {/* Presentation block */}
        <div className="relative flex flex-col items-center text-center mb-20">
          <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(192,90,40,.1)_0%,transparent_70%)] pointer-events-none hidden md:block" />

          <Reveal><LogoSVG /></Reveal>
          <Reveal delay={1}>
            <p className="text-[13px] font-medium text-brand tracking-wider mb-6 mt-3" style={{ fontFamily: "var(--font-jakarta)" }}>
              Accademia Italiana di Osteopatia
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="text-[clamp(28px,3.2vw,46px)] font-bold leading-snug text-[#111] max-w-[640px] mb-5" style={{ fontFamily: "var(--font-serif)" }}>
              Mi chiamo{" "}
              <span className="text-brand">Mauro Pugliese</span>,
              sono un osteopata diplomato con una formazione solida
              in ambito sanitario e un approccio umano alla persona.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-sm font-medium text-brand tracking-wide mb-12" style={{ fontFamily: "var(--font-jakarta)" }}>
              osteopata su Perugia e Roma
            </p>
          </Reveal>

          <Reveal delay={2} className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {photos.map((item, i) => (
                <div key={i} className="rounded-2xl overflow-hidden h-64 md:h-80">
                  <img src={item.src} alt={item.label} className="w-full h-full object-cover object-top" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {features.map((c, i) => (
            <Reveal key={i} delay={i + 1}>
              <div className="py-7 border-b border-border">
                <p className="font-semibold text-sm text-[#111] mb-2.5" style={{ fontFamily: "var(--font-dm)" }}>{c.title}</p>
                <p className="font-light text-[13.5px] text-muted leading-relaxed" style={{ fontFamily: "var(--font-dm)" }}>{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex justify-center">
          <Reveal><ButtonFilled href="#contatto">Prenota una visita oggi</ButtonFilled></Reveal>
        </div>
      </div>
    </section>
  );
}
