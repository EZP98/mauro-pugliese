import { IMAGES } from '../lib/constants';

const ROW_1 = [IMAGES.newTrattamento, IMAGES.heroRagazza, IMAGES.newBambino, IMAGES.newCvMauro, IMAGES.newTrattamento, IMAGES.heroRagazza];
const ROW_2 = [IMAGES.newBambino, IMAGES.newCvMauro, IMAGES.heroRagazza, IMAGES.newTrattamento, IMAGES.newBambino, IMAGES.newCvMauro];

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
          <div key={i} className="w-[280px] h-40 md:w-[380px] md:h-60 rounded-xl shrink-0 overflow-hidden border border-border">
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Gallery() {
  return (
    <section id="galleria" className="py-16 md:py-24 overflow-hidden">
      <div className="flex flex-col gap-3">
        <GalleryRow images={ROW_1} />
        <GalleryRow images={ROW_2} reverse />
      </div>
    </section>
  );
}
