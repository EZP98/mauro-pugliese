import { useState, useEffect, useRef } from 'react';
import { Reveal } from './ui/RevealOnScroll';
import { Pill } from './ui/Pill';
import { Clock, Navigation, Construction, Sofa, Stethoscope, Shirt } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const STUDIO_FEATURES = [
  { icon: Sofa, title: 'Ambiente accogliente', desc: 'Toni caldi, materiali naturali, spazio dove rilassarsi' },
  { icon: Stethoscope, title: 'Attrezzatura professionale', desc: 'Lettino osteopatico, strumenti per test e valutazione' },
  { icon: Shirt, title: 'Puoi restare vestito', desc: 'Nessun camice, basta togliere scarpe e cintura' },
] as const;

interface Location {
  name: string;
  studio: string;
  address: string;
  days: string;
  hours: string;
  features: readonly string[];
  lat: number;
  lng: number;
}

const LOCATIONS: readonly Location[] = [
  {
    name: 'Perugia',
    studio: 'MediSport',
    address: 'Str. Pievaiola, 207B, 06132 Perugia PG',
    days: 'Martedì – Venerdì',
    hours: '09:00 – 19:30',
    features: ['Parcheggio gratuito', 'Accesso facilitato'],
    lat: 43.0800934,
    lng: 12.3347086,
  },
  {
    name: 'Roma',
    studio: 'Prati',
    address: 'Viale G. Mazzini, 119, Roma',
    days: 'Lunedì',
    hours: '09:00 – 19:30',
    features: ['Metro Lepanto', 'Zona centrale'],
    lat: 41.9168,
    lng: 12.4623,
  },
] as const;

function DarkMap({ lat, lng, name }: { lat: number; lng: number; name: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (!mapRef.current) {
      mapRef.current = L.map(containerRef.current, {
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
        dragging: false,
        doubleClickZoom: false,
        touchZoom: false,
      }).setView([lat, lng], 15);

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        { maxZoom: 19 }
      ).addTo(mapRef.current);

      containerRef.current.querySelector('.leaflet-tile-pane')?.setAttribute(
        'style',
        'filter: sepia(0.12) saturate(0.75) brightness(1.05);'
      );

      const pin = L.divIcon({
        className: '',
        html: `<div style="position:relative;width:24px;height:24px">
          <div style="position:absolute;inset:-4px;border-radius:50%;background:#D58458;opacity:.2;animation:map-pulse 2s ease-in-out infinite"></div>
          <div style="position:absolute;inset:0;border-radius:50%;background:#D58458;border:2.5px solid white;box-shadow:0 1px 6px rgba(0,0,0,.3)"></div>
        </div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      markerRef.current = L.marker([lat, lng], { icon: pin }).addTo(mapRef.current);
    } else {
      mapRef.current.setView([lat, lng], 15);
      markerRef.current?.setLatLng([lat, lng]);
    }
  }, [lat, lng]);

  useEffect(() => {
    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ borderRadius: 16, overflow: 'hidden', height: 200, border: '1px solid var(--color-border, #E4D9CC)' }}
      aria-label={`Mappa ${name}`}
    />
  );
}

function LocationSwitcher() {
  const [active, setActive] = useState(0);
  const loc = active < LOCATIONS.length ? LOCATIONS[active] : null;
  const isElce = active === 2;

  const tabs = [
    ...LOCATIONS.map(l => ({ label: `${l.name} — ${l.studio}`, active: true })),
    { label: 'Perugia — Elce', active: false },
  ];

  return (
    <div
      className="bg-white overflow-hidden"
      style={{ borderRadius: 24, border: '1px solid var(--color-border, #E4D9CC)' }}
    >
      {/* Tab pills */}
      <div className="px-5 pt-5 flex flex-wrap gap-2">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="px-4 py-2 text-[12.5px] font-semibold cursor-pointer border-none transition-all duration-200 flex items-center gap-2"
            style={{
              borderRadius: 100,
              fontFamily: 'var(--font-dm)',
              background: active === i ? 'var(--color-accent)' : 'var(--color-bg-alt, #E8E1DA)',
              color: active === i ? 'white' : 'var(--color-muted)',
            }}
          >
            <svg viewBox="0 0 8 8" width="8" height="8" className="shrink-0">
              <circle cx="4" cy="4" r="4" fill={active === i ? (tab.active ? '#0CAB2C' : '#FBBF24') : 'rgba(0,0,0,0.15)'} />
            </svg>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {isElce ? (
        <div className="px-5 py-10 text-center">
          <Construction size={28} className="mx-auto mb-3" style={{ color: 'var(--color-muted)' }} />
          <p className="text-[16px] font-semibold mb-1" style={{ color: 'var(--color-dark, #1E1F24)', fontFamily: 'var(--font-dm)' }}>
            Sede in attivazione
          </p>
          <p className="text-[13px]" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-dm)' }}>
            Presto disponibile a Perugia — zona Elce
          </p>
        </div>
      ) : loc && (
        <>
          <div className="px-5 pt-5 pb-4">
            <p className="text-[15px] font-semibold text-[#1E1F24] mb-1" style={{ fontFamily: 'var(--font-dm)' }}>
              {loc.address}
            </p>
            <div className="flex items-center gap-1.5 text-[12.5px] mb-3" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-dm)' }}>
              <Clock size={13} />
              {loc.days} &middot; {loc.hours}
            </div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {loc.features.map((feat) => (
                <span
                  key={feat}
                  className="text-[11px] font-medium px-2.5 py-1 border"
                  style={{
                    background: 'transparent',
                    borderColor: 'var(--color-brand, #5C2C12)',
                    color: 'var(--color-brand, #5C2C12)',
                    fontFamily: 'var(--font-dm)',
                    borderRadius: 100,
                  }}
                >
                  {feat}
                </span>
              ))}
            </div>
          </div>

          <div className="px-4 pb-4">
            <DarkMap lat={loc.lat} lng={loc.lng} name={loc.name} />
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full mt-3 py-3 text-[13px] font-semibold text-white transition-all hover:opacity-90"
              style={{
                background: 'var(--color-accent)',
                borderRadius: 16,
                fontFamily: 'var(--font-dm)',
              }}
            >
              <Navigation size={14} />
              Indicazioni stradali
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export function Locations() {
  return (
    <section id="studio" className="py-16 md:py-24">
      <div className="max-w-[1128px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <Reveal><Pill>Studio & Dove ricevo</Pill></Reveal>
          <Reveal delay={1}>
            <h2
              className="text-[clamp(26px,3vw,42px)] font-bold leading-snug text-[#111] mt-5"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              I miei <span className="text-brand">studi</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p
              className="text-[15px] leading-relaxed max-w-[520px] mx-auto mt-4"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-dm)' }}
            >
              Ricevo a Perugia (MediSport) e Roma (Prati). Ambienti accoglienti, pensati per il benessere, con lettino osteopatico professionale. Puoi restare vestito — basta togliere scarpe e cintura.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Single location card with tabs */}
      <div className="max-w-[540px] mx-auto px-6 md:px-10">
        <Reveal>
          <LocationSwitcher />
        </Reveal>

        {/* Studio features — compact row below card */}
        <Reveal delay={1}>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {STUDIO_FEATURES.map((feat, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-4 py-2.5 border border-border rounded-2xl bg-white"
              >
                <feat.icon size={18} className="text-brand shrink-0" strokeWidth={1.5} />
                <span className="text-[13px] font-medium" style={{ color: 'var(--color-dark)', fontFamily: 'var(--font-dm)' }}>
                  {feat.title}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
