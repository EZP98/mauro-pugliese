import { useState, useRef } from 'react';
import { TREATMENT_OPTIONS } from '../lib/constants';
import { Reveal } from './ui/RevealOnScroll';
import { Pill } from './ui/Pill';
import { ButtonFilled } from './ui/Button';
import { Mail, Phone, Instagram, Check, Loader2 } from 'lucide-react';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [formValid, setFormValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const checkValidity = () => {
    const form = formRef.current;
    if (!form) return;
    const nome = (form.elements.namedItem('nome') as HTMLInputElement)?.value?.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value?.trim();
    const messaggio = (form.elements.namedItem('messaggio') as HTMLTextAreaElement)?.value?.trim();
    const privacy = (form.elements.namedItem('privacy') as HTMLInputElement)?.checked;
    setFormValid(!!(nome && email && messaggio && privacy));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;

    const form = formRef.current!;
    const data = {
      nome: (form.elements.namedItem('nome') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      telefono: (form.elements.namedItem('telefono') as HTMLInputElement).value,
      trattamento: (form.elements.namedItem('trattamento') as HTMLSelectElement).value,
      messaggio: (form.elements.namedItem('messaggio') as HTMLTextAreaElement).value,
    };

    if (!data.nome || !data.email || !data.messaggio) return;

    setStatus('sending');
    try {
      const res = await fetch('https://formsubmit.co/ajax/eziopappalardo98@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          Nome: data.nome,
          Email: data.email,
          Telefono: data.telefono || 'Non fornito',
          Trattamento: data.trattamento || 'Non specificato',
          Messaggio: data.messaggio,
          _subject: `Nuovo contatto dal sito: ${data.nome}`,
          _replyto: data.email,
          _template: 'box',
          _captcha: 'false',
        }),
      });
      if (!res.ok) throw new Error('Errore');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div id="contatto" className="py-16 md:py-24">
      <div className="max-w-[1128px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">
        <div className="md:sticky md:top-24">
          <Reveal><Pill>Contatti</Pill></Reveal>
          <Reveal delay={1}>
            <h2 className="text-[clamp(26px,3vw,44px)] font-bold text-black mb-5" style={{ fontFamily: "var(--font-serif)" }}>
              Parliamoci
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-sm text-muted leading-loose mb-8" style={{ fontFamily: "var(--font-dm)" }}>
              Hai un dubbio, un dolore che non passa, o vuoi semplicemente capire se l'osteopatia fa al caso tuo? Scrivimi senza impegno — ti rispondo personalmente entro 24 ore.
            </p>
            <div className="flex gap-3">
              {[
                { href: "mailto:info@mauropugliese.it", icon: Mail },
                { href: "tel:+393389358127", icon: Phone },
                { href: "https://www.instagram.com/mauropugliese_osteopata/", icon: Instagram },
              ].map(({ href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  className="w-11 h-11 rounded-lg flex items-center justify-center border border-border bg-white text-brand hover:bg-accent/[.22] transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={1}>
          {status === 'sent' ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-5">
                <Check size={28} className="text-green-600" strokeWidth={2} />
              </div>
              <h3 className="text-[18px] font-semibold text-[#111] mb-2" style={{ fontFamily: "var(--font-dm)" }}>
                Messaggio inviato!
              </h3>
              <p className="text-sm text-muted" style={{ fontFamily: "var(--font-dm)" }}>
                Mauro ti risponderà entro 24 ore.
              </p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} onChange={checkValidity}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                {[
                  { label: "Nome e cognome", name: "nome", type: "text", placeholder: "Il tuo nome" },
                  { label: "Email", name: "email", type: "email", placeholder: "la.tua@email.it" },
                  { label: "Cellulare", name: "telefono", type: "tel", placeholder: "+39 ..." },
                ].map(f => (
                  <label key={f.label} className="flex flex-col gap-1.5">
                    <span className="text-[11px] font-semibold tracking-widest uppercase text-muted-2" style={{ fontFamily: "var(--font-dm)" }}>
                      {f.label}
                    </span>
                    <input
                      name={f.name}
                      type={f.type}
                      placeholder={f.placeholder}
                      required
                      className="bg-white border border-border rounded-xl px-3.5 py-3 text-sm text-black outline-none focus:border-brand focus:ring-2 focus:ring-brand/[.15] transition-all"
                      style={{ fontFamily: "var(--font-dm)" }}
                    />
                  </label>
                ))}
              </div>

              <label className="flex flex-col gap-1.5 mb-3.5">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-muted-2" style={{ fontFamily: "var(--font-dm)" }}>
                  Trattamento
                </span>
                <select
                  name="trattamento"
                  className="bg-white border border-border rounded-xl px-3.5 py-3 text-sm text-black outline-none appearance-none focus:border-brand focus:ring-2 focus:ring-brand/[.15] transition-all"
                  style={{ fontFamily: "var(--font-dm)" }}
                >
                  <option value="">Seleziona...</option>
                  {TREATMENT_OPTIONS.map(v => <option key={v}>{v}</option>)}
                </select>
              </label>

              <label className="flex flex-col gap-1.5 mb-5">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-muted-2" style={{ fontFamily: "var(--font-dm)" }}>
                  Messaggio
                </span>
                <textarea
                  name="messaggio"
                  rows={4}
                  placeholder="Il tuo messaggio..."
                  required
                  className="bg-white border border-border rounded-xl px-3.5 py-3 text-sm text-black outline-none resize-none focus:border-brand focus:ring-2 focus:ring-brand/[.15] transition-all"
                  style={{ fontFamily: "var(--font-dm)" }}
                />
              </label>

              <label className="flex items-start gap-2.5 mb-5 cursor-pointer">
                <input
                  name="privacy"
                  type="checkbox"
                  required
                  className="mt-1 accent-[#5C2C12]"
                  onChange={checkValidity}
                />
                <span className="text-[11.5px] leading-relaxed" style={{ color: 'var(--color-muted, var(--color-muted))', fontFamily: 'var(--font-dm)' }}>
                  Ho letto e accetto la <a href="#/privacy" className="underline hover:text-[#111]">Privacy Policy</a> ai sensi del Regolamento UE 679/2016 (GDPR).
                </span>
              </label>

              <div
                style={{
                  opacity: formValid || status === 'sending' || status === 'error' ? 1 : 0,
                  maxHeight: formValid || status === 'sending' || status === 'error' ? 60 : 0,
                  overflow: 'hidden',
                  transition: 'opacity 0.3s ease, max-height 0.3s ease',
                }}
              >
                <ButtonFilled full type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 size={16} className="animate-spin" /> Invio in corso...
                    </span>
                  ) : status === 'error' ? (
                    'Errore — riprova'
                  ) : (
                    'Invia il messaggio'
                  )}
                </ButtonFilled>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </div>
  );
}
