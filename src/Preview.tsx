export default function Preview() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white p-10">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
          Preview
        </h1>
        <p className="text-sm text-muted mb-6" style={{ fontFamily: 'var(--font-dm)' }}>
          Pagina di anteprima riservata.
        </p>
        <a href="#/" className="text-sm text-brand underline" style={{ fontFamily: 'var(--font-dm)' }}>
          Torna al sito →
        </a>
      </div>
    </main>
  );
}
