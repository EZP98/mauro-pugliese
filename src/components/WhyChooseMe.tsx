import { WHY_CHOOSE_ME, IMAGES } from '../lib/constants';
import { Reveal } from './ui/RevealOnScroll';
import { Pill } from './ui/Pill';
import { Sparkles, Hand, Target, Ear } from 'lucide-react';

const ICONS = [Sparkles, Hand, Target, Ear];

export function WhyChooseMe() {
  const left = WHY_CHOOSE_ME.slice(0, 2);
  const right = WHY_CHOOSE_ME.slice(2, 4);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1128px] mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center mb-14">
          <Reveal><Pill>Perché me</Pill></Reveal>
          <Reveal delay={1}>
            <h2 className="text-[clamp(26px,3vw,44px)] font-bold text-[#111] text-center leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
              Perché scegliere me
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-sm text-muted-2 text-center leading-relaxed max-w-[500px] mt-3.5" style={{ fontFamily: "var(--font-dm)" }}>
              Non offro protocolli standard. Ogni trattamento nasce dall'ascolto della tua storia — fisica, emotiva, personale — per ripristinare la salute, non solo togliere il sintomo.
            </p>
          </Reveal>
        </div>

        {/* Mobile: image + 2x2 grid */}
        <div className="md:hidden flex flex-col gap-4">
          <Reveal>
            <div className="rounded-2xl overflow-hidden h-64 border border-border">
              <img src={IMAGES.newBambino} alt="Osteopatia pediatrica" className="w-full h-full object-cover object-top" />
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {WHY_CHOOSE_ME.map((item, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal key={i} delay={i + 1}>
                  <div className="p-5 border border-border rounded-2xl bg-white h-full">
                    <div className="w-10 h-10 rounded-full bg-accent/[.22] flex items-center justify-center mb-3">
                      <Icon size={18} className="text-brand" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-medium text-[14px] text-[#111] mb-1.5" style={{ fontFamily: "var(--font-jakarta)" }}>{item.title}</h3>
                    <p className="font-light text-[12.5px] text-muted-2 leading-relaxed" style={{ fontFamily: "var(--font-dm)" }}>{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Desktop: 3 columns — cards | image | cards */}
        <div className="hidden md:grid md:grid-cols-[1fr_1.2fr_1fr] gap-5 items-center">
          <div className="flex flex-col gap-5">
            {left.map((item, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal key={i} delay={i + 1}>
                  <div className="p-6 border border-border rounded-2xl bg-white hover:border-brand/30 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-accent/[.22] flex items-center justify-center mb-3.5">
                      <Icon size={18} className="text-brand" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-medium text-[15px] text-[#111] mb-2" style={{ fontFamily: "var(--font-jakarta)" }}>{item.title}</h3>
                    <p className="font-light text-[13.5px] text-muted-2 leading-relaxed" style={{ fontFamily: "var(--font-dm)" }}>{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={1}>
            <div className="rounded-2xl overflow-hidden h-[420px] border border-border">
              <img src={IMAGES.newBambino} alt="Osteopatia pediatrica" className="w-full h-full object-cover object-top" />
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            {right.map((item, i) => {
              const Icon = ICONS[i + 2];
              return (
                <Reveal key={i} delay={i + 2}>
                  <div className="p-6 border border-border rounded-2xl bg-white hover:border-brand/30 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-accent/[.22] flex items-center justify-center mb-3.5">
                      <Icon size={18} className="text-brand" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-medium text-[15px] text-[#111] mb-2" style={{ fontFamily: "var(--font-jakarta)" }}>{item.title}</h3>
                    <p className="font-light text-[13.5px] text-muted-2 leading-relaxed" style={{ fontFamily: "var(--font-dm)" }}>{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
