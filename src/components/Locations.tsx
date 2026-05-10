const SEDI = [
  { city: 'Corciano', address: 'Via Niccolò Copernico, 6/A', cap: '06073', region: 'PG' },
  { city: 'Perugia', address: 'Str. Pievaiola, 207B/1bis', cap: '06132', region: 'PG' },
  { city: 'Roma', address: 'Viale G. Mazzini, 119', cap: '', region: 'RM' },
];

export function Locations() {
  return (
    <section id="sedi" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1128px] mx-auto px-6 md:px-10">
        <h2
          className="text-[clamp(26px,3vw,42px)] font-bold text-black mb-3"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Dove mi trovi
        </h2>
        <p className="text-[14px] text-muted mb-10 max-w-[520px]" style={{ fontFamily: 'var(--font-dm)' }}>
          Tre sedi tra Umbria e Lazio. Consulto telefonico gratuito prima di prenotare.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SEDI.map((s, i) => (
            <div
              key={i}
              className="border border-border rounded-2xl p-5 md:p-6"
              style={{ background: 'var(--color-bg, #FFF9F3)' }}
            >
              <p className="text-[13px] uppercase tracking-wider text-brand mb-2" style={{ fontFamily: 'var(--font-jakarta)' }}>
                {s.region}
              </p>
              <h3 className="text-[19px] font-semibold text-black mb-1.5" style={{ fontFamily: 'var(--font-dm)' }}>
                {s.city}
              </h3>
              <p className="text-[14px] text-muted leading-relaxed" style={{ fontFamily: 'var(--font-dm)' }}>
                {s.address}
                {s.cap && <><br />{s.cap} {s.city} ({s.region})</>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
