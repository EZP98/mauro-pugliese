import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Reveal } from './ui/RevealOnScroll';
import TextReveal from './ui/TextReveal';

const CREDENTIALS: { label: string; detail: string }[] = [
  { label: "Laurea in Scienze Motorie", detail: "Percorso universitario in ambito motorio e sportivo. Una base scientifica solida per comprendere a fondo la biomeccanica, la fisiologia del movimento e il funzionamento del corpo umano." },
  { label: "Diplomato AIOT — 6 anni", detail: "Sei anni di formazione full-time presso l'Accademia Italiana di Osteopatia Tradizionale — il percorso più completo e riconosciuto in Italia. Teoria, pratica clinica e tirocinio supervisionato." },
  { label: "Accademia di Pescara", detail: "Formazione presso la sede storica AIOT di Pescara, punto di riferimento nazionale per l'insegnamento dell'osteopatia. Un ambiente clinico di altissimo livello formativo." },
  { label: "Diploma Massofisioterapia", detail: "Qualifica sanitaria in massofisioterapia che integra le competenze osteopatiche con tecniche riabilitative manuali. Un doppio profilo professionale per un approccio più completo al paziente." },
  { label: "Certificato FSC", detail: "Certificazione in Functional Sport Conditioning: preparazione atletica, prevenzione infortuni e recupero funzionale. Ideale per sportivi amatoriali e professionisti." },
  { label: "Osteopatia Pediatrica", detail: "Formazione specifica per il trattamento di neonati e bambini con tecniche delicatissime e non invasive. Coliche, plagiocefalia, disturbi del sonno — tutto con la massima dolcezza." },
  { label: "Tecniche BLT", detail: "Balanced Ligamentous Tension: tecnica osteopatica dolce che lavora sui legamenti per riequilibrare le tensioni senza manipolazioni forzate. Il corpo si corregge da solo, io lo guido." },
  { label: "Fasciale e Viscerale", detail: "Approccio che tratta le fasce connettivali e gli organi interni, agendo sulle cause profonde di dolori e disfunzioni. Spesso il problema non è dove fa male." },
  { label: "Nessuna tecnica HVLA", detail: "Niente scrocchi o manipolazioni ad alta velocità. Solo tecniche dolci, sicure e rispettose del corpo. Questo significa meno stress per il paziente e risultati più duraturi." },
];

function CredentialPills() {
  const [active, setActive] = useState<number | null>(null);
  const [hintVisible, setHintVisible] = useState(true);
  const [showDetail, setShowDetail] = useState(false);

  const handleClick = (i: number) => {
    const newActive = active === i ? null : i;
    setActive(newActive);
    if (hintVisible) {
      setHintVisible(false);
      // Wait for hint exit animation, then show detail
      setTimeout(() => setShowDetail(true), 350);
    } else {
      setShowDetail(true);
    }
  };

  return (
    <div className="mt-10 md:mt-12 max-w-[820px] mx-auto px-4 md:px-10 flex flex-col items-center gap-3 md:gap-4">
      <div className="flex flex-wrap justify-center gap-2">
        {CREDENTIALS.map((item, i) => {
          const isActive = active === i;
          return (
            <motion.button
              key={item.label}
              type="button"
              onClick={() => handleClick(i)}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[11px] md:text-[12.5px] font-medium border transition-all duration-200 cursor-pointer"
              style={{
                background: isActive ? 'rgba(192,90,40,0.10)' : 'rgba(192,90,40,0.04)',
                borderColor: isActive ? 'var(--color-brand)' : 'var(--color-border)',
                color: isActive ? 'var(--color-brand)' : 'var(--color-muted, #867F76)',
                fontFamily: 'var(--font-dm)',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full transition-colors duration-200"
                style={{ background: isActive ? 'var(--color-brand)' : 'rgba(192,90,40,0.4)' }}
              />
              {item.label}
            </motion.button>
          );
        })}
      </div>

      {/* Fixed-height container for hint + detail text — prevents layout shift */}
      <div className="relative w-full h-[50px] flex justify-center">
        <AnimatePresence>
          {hintVisible && active === null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 right-0 flex flex-col items-center gap-1"
            >
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" style={{ opacity: 0.4 }}>
                <path d="M8 18 L8 4" stroke="#B5B0A8" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M4 7 L8 3 L12 7" stroke="#B5B0A8" strokeWidth="1" fill="none" />
              </svg>
              <span className="text-[11px]" style={{ color: '#B5B0A8', fontFamily: 'var(--font-dm)' }}>
                Clicca per scoprire di più
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {active !== null && showDetail && (
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="absolute top-0 left-0 right-0 text-center text-[13px] md:text-[14px] leading-relaxed max-w-[600px] mx-auto px-4"
              style={{
                color: 'var(--color-muted, #867F76)',
                fontFamily: 'var(--font-dm)',
              }}
            >
              {CREDENTIALS[active].detail}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function Introduction() {
  return (
    <section id="chi-sono" className="pt-16 pb-10 md:pt-24 md:pb-16">
      <div className="max-w-[1128px] mx-auto px-6 md:px-10">
        <div className="relative flex flex-col items-center text-center">
          <Reveal delay={0.5}>
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-medium border mb-10"
              style={{
                background: 'rgba(192,90,40,0.06)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-brand)',
                fontFamily: 'var(--font-jakarta)',
              }}
            >
              Accademia Italiana di Osteopatia
            </span>
          </Reveal>
          <TextReveal
            text="Mi chiamo Mauro Pugliese, sono un osteopata diplomato con una formazione solida in ambito sanitario e un approccio umano alla persona. Utilizzo il BLT e le tecniche fasciali: metodi dolci che agiscono in profondità senza mai forzare."
            tag="h2"
            className="text-[clamp(22px,3vw,42px)] leading-[1.3] max-w-[820px]"
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              color: '#6B6860',
            }}
            delay={300}
            highlightWords={{
              'Mauro': { color: 'var(--color-dark)', fontWeight: 500 },
              'Pugliese,': { color: 'var(--color-dark)', fontWeight: 500 },
              'osteopata': { color: 'var(--color-dark)', fontWeight: 500 },
              'approccio': { color: 'var(--color-dark)', fontWeight: 500 },
              'umano': { color: 'var(--color-dark)', fontWeight: 500 },
              'BLT': { color: 'var(--color-dark)', fontWeight: 500 },
              'tecniche': { color: 'var(--color-dark)', fontWeight: 500 },
              'fasciali:': { color: 'var(--color-dark)', fontWeight: 500 },
            }}
          />
        </div>
      </div>

      <CredentialPills />
    </section>
  );
}
