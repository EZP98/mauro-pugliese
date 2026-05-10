export function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white py-20 px-6 md:px-10">
      <div className="max-w-[760px] mx-auto">
        <a href="#/" className="text-[13px] text-brand mb-8 inline-block" style={{ fontFamily: 'var(--font-dm)' }}>
          ← Torna al sito
        </a>
        <h1 className="text-[clamp(28px,3vw,42px)] font-bold text-black mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
          Privacy Policy
        </h1>
        <div className="prose text-[14px] text-muted leading-relaxed space-y-4" style={{ fontFamily: 'var(--font-dm)' }}>
          <p>
            Il titolare del trattamento dei dati è Mauro Pugliese, contattabile a info@mauropugliese.it.
          </p>
          <p>
            I dati personali raccolti tramite questo sito (form contatti, prenotazioni, cookie tecnici) sono trattati ai sensi del Regolamento UE 2016/679 (GDPR) per le finalità di erogazione del servizio richiesto.
          </p>
          <p>
            I dati non vengono ceduti a terzi e sono conservati per il tempo strettamente necessario alle finalità di trattamento. L'utente può in ogni momento richiedere accesso, rettifica o cancellazione scrivendo a info@mauropugliese.it.
          </p>
          <p className="text-[12px] mt-10">
            Ultimo aggiornamento: maggio 2026.
          </p>
        </div>
      </div>
    </main>
  );
}
