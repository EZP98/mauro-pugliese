import { useEffect, useRef } from 'react';
import { Navigation, Clock, Construction } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Sede {
  city: string;
  studio: string;
  region: 'PG' | 'RM';
  address: string;
  cap: string;
  fullLine: string;
  hours: string;
  lat: number;
  lng: number;
}

const SEDI: Sede[] = [
  {
    city: 'Perugia',
    studio: 'MediSport',
    region: 'PG',
    address: 'Str. Pievaiola, 207B/1bis',
    cap: '06132',
    fullLine: 'Str. Pievaiola, 207B/1bis — 06132 Perugia (PG)',
    hours: 'Mar – Ven · 09:00 – 19:30',
    lat: 43.0800934,
    lng: 12.3347086,
  },
  {
    city: 'Roma',
    studio: 'Prati',
    region: 'RM',
    address: 'Viale G. Mazzini, 119',
    cap: '00195',
    fullLine: 'Viale G. Mazzini, 119 — 00195 Roma (RM)',
    hours: 'Lun · 09:00 – 19:30',
    lat: 41.9168,
    lng: 12.4623,
  },
];

const ELCE = {
  city: 'Perugia',
  studio: 'Elce',
  region: 'PG' as const,
};

function MiniMap({ lat, lng, name }: { lat: number; lng: number; name: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    mapRef.current = L.map(containerRef.current, {
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
      dragging: false,
      doubleClickZoom: false,
      touchZoom: false,
      keyboard: false,
    }).setView([lat, lng], 15);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', { maxZoom: 19 }).addTo(mapRef.current);

    const tilePane = containerRef.current.querySelector('.leaflet-tile-pane') as HTMLElement | null;
    if (tilePane) tilePane.style.filter = 'sepia(0.10) saturate(0.78) brightness(1.04)';

    const pin = L.divIcon({
      className: '',
      html: `<div style="position:relative;width:22px;height:22px">
        <div style="position:absolute;inset:-4px;border-radius:50%;background:#F69E6C;opacity:.20"></div>
        <div style="position:absolute;inset:0;border-radius:50%;background:#F69E6C;border:2.5px solid white;box-shadow:0 1px 5px rgba(0,0,0,.25)"></div>
      </div>`,
      iconSize: [22, 22],
      iconAnchor: [11, 11],
    });
    L.marker([lat, lng], { icon: pin }).addTo(mapRef.current);

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [lat, lng]);

  return (
    <div
      ref={containerRef}
      aria-label={`Mappa ${name}`}
      style={{ borderRadius: 12, overflow: 'hidden', height: 160, border: '1px solid var(--color-border, #E4D9CC)' }}
    />
  );
}

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
              className="border border-border rounded-2xl p-5 md:p-6 flex flex-col gap-4"
              style={{ background: 'var(--color-bg, #FFF9F3)' }}
            >
              <div>
                <p
                  className="text-[13px] uppercase tracking-wider text-brand mb-2"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  {s.region}
                </p>
                <h3
                  className="text-[19px] font-semibold text-black mb-1.5"
                  style={{ fontFamily: 'var(--font-dm)' }}
                >
                  {s.city} — {s.studio}
                </h3>
                <p
                  className="text-[14px] text-muted leading-relaxed"
                  style={{ fontFamily: 'var(--font-dm)' }}
                >
                  {s.address}
                  <br />
                  {s.cap} {s.city} ({s.region})
                </p>
                <div
                  className="flex items-center gap-1.5 text-[12.5px] mt-3"
                  style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-dm)' }}
                >
                  <Clock size={13} />
                  {s.hours}
                </div>
              </div>

              <MiniMap lat={s.lat} lng={s.lng} name={s.city} />

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(s.fullLine)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-[13px] font-semibold text-white transition-all hover:opacity-90"
                style={{
                  background: 'var(--color-accent, #F69E6C)',
                  borderRadius: 12,
                  fontFamily: 'var(--font-dm)',
                }}
              >
                <Navigation size={13} />
                Indicazioni stradali
              </a>
            </div>
          ))}

          {/* Elce — in attivazione */}
          <div
            className="border border-border rounded-2xl p-5 md:p-6 flex flex-col gap-4"
            style={{ background: 'var(--color-bg, #FFF9F3)' }}
          >
            <div>
              <p
                className="text-[13px] uppercase tracking-wider text-brand mb-2"
                style={{ fontFamily: 'var(--font-jakarta)' }}
              >
                {ELCE.region}
              </p>
              <h3
                className="text-[19px] font-semibold text-black mb-1.5"
                style={{ fontFamily: 'var(--font-dm)' }}
              >
                {ELCE.city} — {ELCE.studio}
              </h3>
              <p
                className="text-[14px] text-muted leading-relaxed"
                style={{ fontFamily: 'var(--font-dm)' }}
              >
                Nuovo studio in apertura nella zona Elce di Perugia.
              </p>
            </div>

            <div
              className="flex-1 flex flex-col items-center justify-center gap-2 py-8 px-4 text-center"
              style={{
                borderRadius: 12,
                border: '1px dashed var(--color-border, #E4D9CC)',
                minHeight: 160,
                background: 'rgba(246,158,108,0.05)',
              }}
            >
              <Construction size={22} style={{ color: 'var(--color-muted)' }} />
              <p
                className="text-[13.5px] font-semibold"
                style={{ color: 'var(--color-dark, #1E1F24)', fontFamily: 'var(--font-dm)' }}
              >
                Sede in attivazione
              </p>
              <p
                className="text-[12px]"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-dm)' }}
              >
                Presto disponibile
              </p>
            </div>

            <div
              className="flex items-center justify-center gap-2 w-full py-2.5 text-[13px] font-semibold"
              style={{
                background: 'transparent',
                border: '1px solid var(--color-border, #E4D9CC)',
                color: 'var(--color-muted)',
                borderRadius: 12,
                fontFamily: 'var(--font-dm)',
              }}
            >
              Disponibile a breve
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
