import { IMAGES } from '../lib/constants';
import { Reveal } from './ui/RevealOnScroll';
import { Pill } from './ui/Pill';

const ROW_1 = [IMAGES.cranial, IMAGES.back, IMAGES.leg, IMAGES.baby, IMAGES.baby2, IMAGES.portrait];
const ROW_2 = [IMAGES.baby, IMAGES.cranial, IMAGES.leg, IMAGES.portrait, IMAGES.back, IMAGES.baby2];

function GalleryRow({ images, reverse }: { images: string[]; reverse?: boolean }) {
  const items = [...images, ...images];
  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-3"
        style={{
          animation: `${reverse ? 'ticker-right' : 'ticker-left'} 22s linear infinite`,
          width: 'max-content',
        }}
      >
        {items.map((src, i) => (
          <div key={i} className="w-[380px] h-60 rounded-xl shrink-0 overflow-hidden">
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Gallery() {
  return (
    <section id="galleria" className="bg-white py-28 overflow-hidden">
      <div className="text-center px-6 md:px-10 mb-16">
        <Reveal><Pill>Galleria</Pill></Reveal>
        <Reveal delay={1}>
          <h2 className="text-[clamp(26px,3vw,44px)] font-bold text-black" style={{ fontFamily: "var(--font-serif)" }}>
            Un'occhiata al mio studio
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="text-sm text-muted leading-relaxed max-w-[500px] mx-auto mt-3.5" style={{ fontFamily: "var(--font-dm)" }}>
            Ambienti accoglienti a Perugia e Roma, pensati per metterti a tuo agio.
          </p>
        </Reveal>
      </div>
      <div className="flex flex-col gap-3">
        <GalleryRow images={ROW_1} />
        <GalleryRow images={ROW_2} reverse />
      </div>
    </section>
  );
}
