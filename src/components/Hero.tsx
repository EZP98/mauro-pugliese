import { IMAGES } from '../lib/constants';
import { ButtonFilled } from './ui/Button';

const BADGES = ["Diplomato AIOT", "Certificato FSC", "6 anni di formazione"];

// 3 items: centered on 0°, spread 30° apart
const angles = [30, 0, -30];

export function Hero() {
  return (
    <div className="sticky top-0 z-0 h-screen w-full overflow-hidden">
      <img
        src={IMAGES.cranial}
        alt="Trattamento osteopatico"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Main content — centered */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 md:px-10 pb-20">
        <p
          className="text-brand text-sm md:text-base font-semibold tracking-wide mb-4"
          style={{ fontFamily: "var(--font-jakarta)", animation: 'fadUp .5s .1s both' }}
        >
          Mauro Pugliese
        </p>
        <h1
          className="text-[clamp(32px,5.5vw,72px)] font-bold leading-[1.08] text-white max-w-[900px] mb-5 uppercase tracking-tight"
          style={{ fontFamily: "var(--font-dm)", animation: 'fadUp .6s .2s both' }}
        >
          Dolori muscolari, rigidità, gravidanza, sport?
        </h1>
        <p
          className="text-sm md:text-base text-white/80 leading-relaxed max-w-[560px] mb-8"
          style={{ fontFamily: "var(--font-dm)", animation: 'fadUp .5s .4s both' }}
        >
          Trattamenti osteopatici su misura per adulti, sportivi, mamme e bambini.
        </p>
        <div className="mb-8" style={{ animation: 'fadUp .5s .55s both' }}>
          <ButtonFilled href="#contatto">Prenota</ButtonFilled>
        </div>
      </div>

      {/* Fan — rotation origin below the bottom edge */}
      <div
        className="absolute left-1/2 z-20"
        style={{
          bottom: '-220px',
          transform: 'translateX(-50%)',
          width: 0,
          height: 0,
          animation: 'fadUp .6s .7s both',
        }}
      >
        {BADGES.map((badge, i) => (
          <div
            key={badge}
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              width: '2px',
              height: '280px',
              transformOrigin: 'bottom center',
              transform: `translateX(-50%) rotate(${angles[i]}deg)`,
              pointerEvents: 'none',
            }}
          >
            <span
              className="absolute top-0 left-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] md:text-[13px] font-medium whitespace-nowrap"
              style={{
                transform: `translate(-50%, 0) rotate(${-angles[i]}deg)`,
                fontFamily: "var(--font-dm)",
                pointerEvents: 'auto',
              }}
            >
              {badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
