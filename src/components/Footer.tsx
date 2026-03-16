import { Leaf } from 'lucide-react';

const NAV_COLS = [
  {
    title: "Navigazione",
    links: [
      ["Servizi", "#servizi"], ["Galleria", "#galleria"], ["Benefici", "#benefici"],
      ["Testimonianze", "#testimonianze"], ["Prezzi", "#prezzi"], ["FAQ", "#faq"],
    ],
  },
  {
    title: "Social",
    links: [
      ["Instagram", "https://instagram.com"],
      ["Facebook", "https://facebook.com"],
      ["Twitter (X)", "#"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-white px-6 md:px-10 pt-14 pb-8 border-t border-border">
      <div className="max-w-[1128px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3.5">
              <Leaf size={14} className="text-black" strokeWidth={1.5} />
              <span className="text-sm font-semibold text-black" style={{ fontFamily: "var(--font-dm)" }}>
                Mauro Pugliese
              </span>
            </div>
            <p className="text-[13px] font-light text-muted-3 leading-relaxed max-w-[260px]" style={{ fontFamily: "var(--font-dm)" }}>
              Osteopatia su Perugia e Roma. Diplomato AIOT, certificato FSC.
            </p>
          </div>

          {NAV_COLS.map(col => (
            <div key={col.title}>
              <p className="text-[13px] font-medium text-black mb-4" style={{ fontFamily: "var(--font-jakarta)" }}>
                {col.title}
              </p>
              <div className="flex flex-col gap-2.5">
                {col.links.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="text-[13px] font-light text-muted-3 hover:text-black transition-colors"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-5 flex flex-col sm:flex-row justify-between items-center gap-2.5">
          <p className="text-[11.5px] text-black/40" style={{ fontFamily: "var(--font-dm)" }}>
            2025 Mauro Pugliese - P.IVA 03337540789
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Cookie Policy"].map(l => (
              <a key={l} href="#" className="text-[11.5px] text-black/40" style={{ fontFamily: "var(--font-dm)" }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
