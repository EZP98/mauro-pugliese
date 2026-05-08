import { useState, useMemo, useEffect } from 'react';
import { TESTIMONIALS } from '../lib/constants';
import { Reveal } from './ui/RevealOnScroll';
import { Star, ChevronDown } from 'lucide-react';

function Stars() {
  return (
    <div className="flex gap-0.5 mb-2.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={13} className="text-[#FBBC05] fill-[#FBBC05]" />
      ))}
    </div>
  );
}

function GoogleBadge() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" className="shrink-0">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}


function Avatar({ name }: { name: string; photo: string }) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-[13px] font-semibold"
      style={{ background: 'var(--color-bg-alt)', color: 'var(--color-muted)', fontFamily: 'var(--font-display)' }}
    >
      {initial}
    </div>
  );
}

function TestimonialCard({ t }: { t: typeof TESTIMONIALS[number] }) {
  return (
    <div className="mb-4 p-5 bg-card border border-border rounded-2xl hover:border-brand/30 transition-all duration-300">
      <div className="flex items-center gap-2.5 mb-3">
        <Avatar name={t.name} photo={t.photo} />
        <div className="flex-1 min-w-0">
          <p className="text-[12.5px] font-medium text-[#111] truncate leading-tight" style={{ fontFamily: 'var(--font-display)' }}>{t.name}</p>
          <span className="text-[10.5px] text-black/35" style={{ fontFamily: 'var(--font-display)' }}>{t.time}</span>
        </div>
      </div>
      <Stars />
      <p className="text-[12.5px] text-black/65 leading-relaxed" style={{ fontFamily: 'var(--font-display)' }}>
        "{t.quote}"
      </p>
    </div>
  );
}

const COLS = 3;
const INITIAL_COUNT_MOBILE = 5;
const INITIAL_COUNT_DESKTOP = 12;
const LOAD_MORE_COUNT = 6;

/** Distribute items round-robin into columns for even masonry */
function distributeToColumns<T>(items: T[], cols: number): T[][] {
  const columns: T[][] = Array.from({ length: cols }, () => []);
  items.forEach((item, i) => {
    columns[i % cols].push(item);
  });
  return columns;
}

export function Testimonials() {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  const initialCount = isMobile ? INITIAL_COUNT_MOBILE : INITIAL_COUNT_DESKTOP;
  const [visibleCount, setVisibleCount] = useState(initialCount);
  useEffect(() => { setVisibleCount(initialCount); }, [initialCount]);
  const visible = TESTIMONIALS.slice(0, visibleCount);
  const hasMore = visibleCount < TESTIMONIALS.length;

  const columns = useMemo(() => distributeToColumns(visible, COLS), [visibleCount]);

  return (
    <section id="testimonianze" className="py-16 md:py-24">
      <div className="max-w-[1128px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Reveal>
            <span
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-[11.5px] font-medium tracking-wider mb-5 border text-brand"
              style={{
                fontFamily: 'var(--font-display)',
                background: 'rgba(92,44,18,0.08)',
                borderColor: 'var(--color-border)',
              }}
            >
              <GoogleBadge />
              Recensioni Google
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="text-[clamp(26px,3vw,44px)] font-bold text-black leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Storie vere, risultati reali
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-[15px] leading-relaxed max-w-[520px] mx-auto mt-3.5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-display)' }}>
              Oltre 50 recensioni su Google con una media di 5 stelle su 5.
              <br />
              Adulti, bambini, sportivi e donne in gravidanza.
              <br />
              Pazienti di ogni età si affidano a me.
            </p>
          </Reveal>
        </div>

        {/* Masonry — 3 columns, round-robin distribution */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col">
              {col.map((t, i) => {
                const globalIdx = i * COLS + colIdx;
                return (
                  <Reveal key={t.name} delay={globalIdx < initialCount ? Math.min((globalIdx % 3) + 1, 3) : 1}>
                    <TestimonialCard t={t} />
                  </Reveal>
                );
              })}
            </div>
          ))}
        </div>

        {/* Load more / collapse */}
        <div className="text-center mt-8">
          {hasMore ? (
            <button
              onClick={() => setVisibleCount(c => Math.min(c + LOAD_MORE_COUNT, TESTIMONIALS.length))}
              className="inline-flex items-center gap-2 h-[52px] px-8 text-[14px] font-semibold cursor-pointer border-none outline-none transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'var(--color-accent)',
                color: '#FFF9F3',
                borderRadius: 16,
                fontFamily: 'var(--font-display)',
              }}
            >
              Mostra altre recensioni
              <ChevronDown size={16} />
            </button>
          ) : visibleCount > initialCount ? (
            <button
              onClick={() => setVisibleCount(initialCount)}
              className="inline-flex items-center gap-2 h-[52px] px-8 text-[14px] font-semibold cursor-pointer border-none outline-none transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'var(--color-accent)',
                color: '#FFF9F3',
                borderRadius: 16,
                fontFamily: 'var(--font-display)',
              }}
            >
              Mostra meno
              <ChevronDown size={16} style={{ transform: 'rotate(180deg)' }} />
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
