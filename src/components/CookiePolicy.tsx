export function CookiePolicy() {
  return (
    <main className="min-h-screen bg-white py-20 px-6 md:px-10">
      <div className="max-w-[760px] mx-auto">
        <a href="#/" className="text-[13px] text-brand mb-8 inline-block" style={{ fontFamily: 'var(--font-dm)' }}>
          ← Torna al sito
        </a>
        <h1 className="text-[clamp(28px,3vw,42px)] font-bold text-black mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
          Cookie Policy
        </h1>
        <div className="prose text-[14px] text-muted leading-relaxed space-y-4" style={{ fontFamily: 'var(--font-dm)' }}>
          <p>
            Questo sito utilizza cookie tecnici essenziali al funzionamento e, previo consenso, cookie di analytics (Google Tag Manager) e marketing (Meta Pixel).
          </p>
          <p>
            <strong>Cookie tecnici</strong>: necessari al funzionamento del sito, non richiedono consenso.
          </p>
          <p>
            <strong>Cookie di analytics e marketing</strong>: caricati solo dopo consenso esplicito tramite il banner. È possibile revocare il consenso in qualsiasi momento svuotando i dati del sito dal browser.
          </p>
          <p>
            Per maggiori informazioni o per esercitare i propri diritti scrivi a info@mauropugliese.it.
          </p>
          <p className="text-[12px] mt-10">
            Ultimo aggiornamento: maggio 2026.
          </p>
        </div>
      </div>
    </main>
  );
}
