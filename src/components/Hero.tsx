import { IMAGES } from '../lib/constants';
import { ButtonFilled } from './ui/Button';

export function Hero() {
  const words = ["Dolori", "muscolari,", "rigidità,", "gravidanza,", "sport?"];
  const subWords = ["Trattamenti", "osteopatici", "su", "misura", "per", "adulti,", "sportivi,", "mamme", "e", "bambini."];

  return (
    <div className="bg-white pt-20 pb-8 px-6">
      <div className="relative min-h-[88vh] w-full max-w-[1400px] mx-auto rounded-2xl overflow-hidden flex flex-col items-center justify-end">
        <img
          src={IMAGES.cranial}
          alt="Trattamento osteopatico"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/22" />
        <div className="relative z-10 w-full flex flex-col items-center text-center px-6 md:px-10 pb-20">
          <h1
            className="text-[clamp(42px,6vw,84px)] font-bold leading-[1.1] text-white max-w-[800px] mb-5"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            {words.map((w, i) => (
              <span
                key={i}
                className="inline-block mr-[0.25em]"
                style={{ animation: `fadUp .6s ${i * 0.08 + 0.1}s both` }}
              >
                {w}
              </span>
            ))}
          </h1>
          <p
            className="text-sm text-white leading-relaxed max-w-[560px] mb-10"
            style={{ fontFamily: "var(--font-dm)" }}
          >
            {subWords.map((w, i) => (
              <span
                key={i}
                className="inline-block mr-[0.25em]"
                style={{ animation: `fadUp .5s ${i * 0.04 + 0.5}s both` }}
              >
                {w}
              </span>
            ))}
          </p>
          <ButtonFilled href="#contatto">Prenota una visita</ButtonFilled>
        </div>
      </div>
    </div>
  );
}
