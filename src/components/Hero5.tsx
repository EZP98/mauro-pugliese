import { IMAGES } from '../lib/constants';
import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';

const spring = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { type: 'spring' as const, bounce: 0, duration: 2, delay },
});

export function Hero5() {
  return (
    <section className="relative w-full pt-28 pb-0 md:pt-36 md:pb-0 overflow-hidden">
      {/* ── Text content ── */}
      <div className="max-w-[680px] mx-auto px-6 text-center">
        {/* Trust badges */}
        <motion.div
          {...spring(0.1)}
          className="flex flex-wrap items-center justify-center gap-2 mb-4"
        >
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium border"
            style={{
              background: 'rgba(192,90,40,0.08)',
              borderColor: 'var(--color-border)',
              color: 'var(--color-brand)',
              fontFamily: 'var(--font-dm)',
            }}
          >
            <User size={12} />
            Mauro Pugliese — Osteopata
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...spring(0.25)}
          className="text-[clamp(30px,5vw,52px)] leading-[1.08] mb-5"
          style={{ color: 'var(--color-dark)', letterSpacing: '-0.02em' }}
        >
          <span style={{ fontFamily: 'var(--font-dm)', fontWeight: 600 }}>
            Dolori muscolari, rigidità, gravidanza, sport?
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...spring(0.4)}
          className="text-[15px] md:text-[16px] leading-relaxed max-w-[480px] mx-auto mb-4"
          style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-dm)' }}
        >
          Trattamenti osteopatici su misura per adulti, sportivi, mamme e bambini.{' '}
          <span style={{ color: 'var(--color-dark)', fontWeight: 500 }}>A Perugia e Roma.</span>
        </motion.p>

        {/* Stars */}
        <motion.div
          {...spring(0.5)}
          className="flex items-center justify-center gap-1 mb-5"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="fill-[#FBBC05] text-[#FBBC05]" />
          ))}
          <span
            className="ml-2 text-[13px]"
            style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-dm)' }}
          >
            5.0 — oltre 50 recensioni Google
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div {...spring(0.6)} className="flex flex-wrap justify-center gap-3">
          <a
            href="https://wa.me/393389358127?text=Ciao%2C%20vorrei%20prenotare%20un%20appuntamento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-[52px] px-8 text-[14px] font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: 'var(--color-brand)',
              borderRadius: 16,
              fontFamily: 'var(--font-dm)',
            }}
          >
            Prenota una visita
          </a>
          <a
            href="#servizi"
            className="inline-flex items-center justify-center h-[52px] px-8 text-[14px] font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] border"
            style={{
              color: 'var(--color-dark)',
              borderColor: 'var(--color-border)',
              borderRadius: 16,
              fontFamily: 'var(--font-dm)',
            }}
          >
            Scopri i trattamenti
          </a>
        </motion.div>
      </div>

      {/* ── Image ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', bounce: 0, duration: 2.5, delay: 0.5 }}
        className="relative max-w-[960px] mx-auto px-6 md:px-10 mt-12 md:mt-16"
      >
        <div className="relative overflow-hidden rounded-3xl border border-border">
          <motion.img
            src={IMAGES.newCvMauro}
            alt="Dott. Mauro Pugliese — Osteopata"
            className="w-full block object-cover h-[400px] md:h-[580px]"
            style={{ objectPosition: 'center top' }}
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            fetchPriority="high"
          />
        </div>
      </motion.div>
    </section>
  );
}
