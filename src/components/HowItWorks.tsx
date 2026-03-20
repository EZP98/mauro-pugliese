import { useRef } from 'react';
import { Pill } from './ui/Pill';
import { Reveal } from './ui/RevealOnScroll';
import { CalendarCheck, HeartHandshake, Hand, ThumbsUp } from 'lucide-react';
import { useScroll, useTransform, motion } from 'framer-motion';

const STEPS = [
  {
    icon: HeartHandshake,
    num: '01',
    title: 'Accoglienza e ascolto',
    desc: 'Parliamo della tua storia clinica, dei tuoi sintomi e del tuo stile di vita. Nessuna fretta.',
  },
  {
    icon: CalendarCheck,
    num: '02',
    title: 'Valutazione',
    desc: 'Osservo la postura, la mobilità e le tensioni. Cerco la causa, non il sintomo.',
  },
  {
    icon: Hand,
    num: '03',
    title: 'Trattamento su misura',
    desc: 'Tecniche BLT e fasciali — dolci, precise, senza scrocchi. Il corpo risponde, non subisce.',
  },
  {
    icon: ThumbsUp,
    num: '04',
    title: 'Continui solo se vuoi',
    desc: 'Ti spiego cosa ho trovato e il percorso consigliato. Nessun pacchetto obbligatorio.',
  },
] as const;

// 8-petal leaf SVG (like Nervana) — adapted to warm palette
function LeafSVG({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <g opacity="0.5">
        <path d="M85.9 115.9C90.4 127 90.1 138.8 86 149C75.9 144.5 67.5 136.2 63.1 125.2C58.6 114.1 58.9 102.3 63 92.1C73.1 96.6 81.4 104.9 85.9 115.9Z" fill="var(--color-brand, #9D9287)" />
        <path d="M53.3 111.9C48.6 122.8 40.1 131 30 135.3C26 125 26 113.2 30.6 102.3C35.3 91.3 43.8 83.2 53.9 78.8C57.8 89.1 57.9 100.9 53.3 111.9Z" fill="var(--color-brand, #9D9287)" />
        <path d="M33.1 85.9C22 90.4 10.2 90.1 0 86C4.5 75.9 12.8 67.6 23.8 63.1C34.9 58.6 46.7 58.9 56.9 63C52.4 73.1 44.1 81.5 33.1 85.9Z" fill="var(--color-brand, #9D9287)" />
        <path d="M37.1 53.3C26.2 48.6 18 40.1 13.7 30C24 26 35.8 26 46.8 30.6C57.7 35.3 65.8 43.8 70.2 53.9C59.9 57.8 48.1 57.9 37.1 53.3Z" fill="var(--color-brand, #9D9287)" />
        <path d="M63.1 33.1C58.6 22 58.9 10.2 63 0C73.1 4.5 81.5 12.8 85.9 23.8C90.4 34.9 90.1 46.7 86 56.9C75.9 52.4 67.6 44.1 63.1 33.1Z" fill="var(--color-brand, #9D9287)" />
        <path d="M95.7 37.1C100.4 26.2 108.9 18 119 13.7C123 24 123 35.8 118.4 46.8C113.7 57.7 105.2 65.8 95.1 70.2C91.2 59.9 91.1 48.1 95.7 37.1Z" fill="var(--color-brand, #9D9287)" />
        <path d="M115.9 63.1C127 58.6 138.8 58.9 149 63C144.5 73.1 136.2 81.5 125.2 85.9C114.1 90.4 102.3 90.1 92.1 86C96.6 75.9 104.9 67.6 115.9 63.1Z" fill="var(--color-brand, #9D9287)" />
        <path d="M111.9 95.7C122.8 100.4 131 108.9 135.3 119C125 123 113.2 123 102.3 118.4C91.3 113.7 83.2 105.2 78.8 95.1C89.1 91.2 100.9 91.1 111.9 95.7Z" fill="var(--color-brand, #9D9287)" />
      </g>
    </svg>
  );
}

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Scroll-driven transforms — slow & subtle
  const leafRotate = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const leafScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 0.95, 0.95, 0.85]);
  const leafOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.5, 0.5, 0]);
  const ring1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.75, 1, 1.05]);
  const ring2Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 1.08]);
  const ring3Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.65, 1, 1.1]);
  const ringsOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 0.8, 0.8, 0]);

  // Arc lines — stroke dashoffset animated
  const arcDash = useTransform(scrollYProgress, [0, 0.5], [400, 0]);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">

      {/* ── Decorative SVG background ── */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">

        {/* Concentric rings — scale + opacity on scroll */}
        <motion.div
          className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full"
          style={{
            border: '1px solid var(--color-border, #F0E4D8)',
            scale: ring1Scale,
            opacity: ringsOpacity,
          }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full"
          style={{
            border: '1px dashed var(--color-border, #F0E4D8)',
            scale: ring2Scale,
            opacity: ringsOpacity,
          }}
        />
        <motion.div
          className="absolute w-[180px] h-[180px] md:w-[260px] md:h-[260px] rounded-full"
          style={{
            border: '1px solid var(--color-border, #F0E4D8)',
            scale: ring3Scale,
            opacity: ringsOpacity,
          }}
        />

        {/* Inner filled circle — the "core" */}
        <motion.div
          className="absolute w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-full"
          style={{
            background: 'var(--color-brand, #9D9287)',
            opacity: useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0, 0.08, 0.08, 0]),
            scale: ring3Scale,
          }}
        />

        {/* Leaf SVG — rotates on scroll */}
        <motion.div
          className="absolute w-[160px] h-[160px] md:w-[220px] md:h-[220px]"
          style={{
            rotate: leafRotate,
            scale: leafScale,
            opacity: leafOpacity,
          }}
        >
          <LeafSVG className="w-full h-full" />
        </motion.div>

        {/* Top arc — animated stroke */}
        <motion.svg
          viewBox="0 0 332 66"
          fill="none"
          className="absolute top-[8%] w-[280px] md:w-[400px]"
          style={{ opacity: ringsOpacity }}
        >
          <path
            d="M1 65.6C44.3 25.5 102.3 1 166 1s121.7 24.5 165 64.6"
            stroke="var(--color-border, #F0E4D8)"
            strokeDasharray="2 5"
          />
          <motion.path
            d="M1 65.6C44.3 25.5 102.3 1 166 1s121.7 24.5 165 64.6"
            stroke="var(--color-brand, #9D9287)"
            strokeWidth="1.5"
            strokeDasharray="400"
            style={{ strokeDashoffset: arcDash }}
            opacity={0.4}
          />
        </motion.svg>

        {/* Bottom arc — mirrored */}
        <motion.svg
          viewBox="0 0 332 66"
          fill="none"
          className="absolute bottom-[8%] w-[280px] md:w-[400px] rotate-180"
          style={{ opacity: ringsOpacity }}
        >
          <path
            d="M1 65.6C44.3 25.5 102.3 1 166 1s121.7 24.5 165 64.6"
            stroke="var(--color-border, #F0E4D8)"
            strokeDasharray="2 5"
          />
          <motion.path
            d="M1 65.6C44.3 25.5 102.3 1 166 1s121.7 24.5 165 64.6"
            stroke="var(--color-brand, #9D9287)"
            strokeWidth="1.5"
            strokeDasharray="400"
            style={{ strokeDashoffset: arcDash }}
            opacity={0.4}
          />
        </motion.svg>

        {/* Radial glow */}
        <div
          className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, var(--color-bg-alt, #E8E1DA) 0%, transparent 60%)',
            opacity: 0.25,
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1128px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <Reveal><Pill>Come funziona</Pill></Reveal>
          <Reveal delay={1}>
            <h2
              className="text-[clamp(28px,3.2vw,46px)] font-bold leading-snug text-[#111] mt-5"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Una seduta in{' '}
              <span className="text-brand">4 semplici passi</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p
              className="text-[15px] leading-relaxed max-w-[520px] mx-auto mt-4"
              style={{ color: 'var(--color-muted, #867F76)', fontFamily: "var(--font-dm)" }}
            >
              Dall'appuntamento al trattamento, tutto è pensato per farti sentire a tuo agio. Nessuna fretta, nessuna manipolazione brusca — solo tecniche dolci, ascolto attento e un ambiente accogliente dove il tuo benessere viene prima di tutto.
            </p>
          </Reveal>
        </div>

        {/* Steps — horizontal scroll on mobile, 2x2 grid on sm+ */}
        <div className="sm:grid sm:grid-cols-2 gap-4 max-w-[800px] mx-auto hidden sm:!grid">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={i} delay={i * 0.1 + 0.3}>
                <div className="relative border border-border rounded-2xl p-7 bg-white hover:border-brand/30 group h-full transition-all duration-300">
                  <span className="absolute top-3 right-4 text-[64px] font-black leading-none pointer-events-none select-none" style={{ color: 'var(--color-brand, #9D9287)', opacity: 0.06, fontFamily: "var(--font-dm)" }}>{step.num}</span>
                  <div className="w-12 h-12 rounded-full bg-brand/[.12] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} className="text-brand" strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-bold tracking-widest uppercase block mb-2" style={{ color: 'var(--color-brand, #9D9287)', fontFamily: "var(--font-jakarta)" }}>Step {step.num}</span>
                  <h3 className="text-[17px] font-bold text-[#111] mb-2" style={{ fontFamily: "var(--font-dm)" }}>{step.title}</h3>
                  <p className="text-[13.5px] leading-relaxed" style={{ color: 'var(--color-muted, #867F76)', fontFamily: "var(--font-dm)" }}>{step.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        {/* Mobile horizontal scroll */}
        <div className="sm:hidden -mx-6 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 px-6" style={{ width: 'max-content' }}>
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="relative border border-border rounded-2xl p-7 bg-white w-[280px] shrink-0">
                  <span className="absolute top-3 right-4 text-[64px] font-black leading-none pointer-events-none select-none" style={{ color: 'var(--color-brand, #9D9287)', opacity: 0.06, fontFamily: "var(--font-dm)" }}>{step.num}</span>
                  <div className="w-12 h-12 rounded-full bg-brand/[.12] flex items-center justify-center mb-5">
                    <Icon size={20} className="text-brand" strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-bold tracking-widest uppercase block mb-2" style={{ color: 'var(--color-brand, #9D9287)', fontFamily: "var(--font-jakarta)" }}>Step {step.num}</span>
                  <h3 className="text-[17px] font-bold text-[#111] mb-2" style={{ fontFamily: "var(--font-dm)" }}>{step.title}</h3>
                  <p className="text-[13.5px] leading-relaxed" style={{ color: 'var(--color-muted, #867F76)', fontFamily: "var(--font-dm)" }}>{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
