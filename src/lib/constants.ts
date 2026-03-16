export const IMAGES = {
  portrait: '/images/portrait.jpg',
  cranial: '/images/cranial.jpg',
  back: '/images/back.jpg',
  leg: '/images/leg.jpg',
  baby: '/images/baby.jpg',
  baby2: '/images/baby2.jpg',
} as const;

export const SERVICES = [
  { name: "Osteopatia per adulti", desc: "Lombalgia, sciatalgia, cervicalgia, dorsalgia, rigidità articolari. Approccio sistemico, nessun protocollo fisso.", bg: "#D4CEC0" },
  { name: "Patologie croniche", desc: "Ernie, fibromialgia, disturbi psicosomatici. Trattamento delicato e adattabile a ogni situazione.", bg: "#C8C2B4", img: IMAGES.back },
  { name: "Osteopatia in gravidanza", desc: "Dolori lombari, reflusso, stitichezza, stress. Trattamenti ogni 2-3 settimane per mamma e feto.", bg: "#DDD8CC", img: IMAGES.cranial },
  { name: "Osteopatia pediatrica 0-2a", desc: "Plagiocefalia, coliche, torcicollo, reflusso, insonnia. Certificato FSC, approccio dolcissimo.", bg: "#CCC6B8", img: IMAGES.baby },
  { name: "Sportivi", desc: "Recupero infortuni, riduzione tensioni, prevenzione. L'osteopatia migliora mobilità e performance.", bg: "#D8D2C4", img: IMAGES.leg },
  { name: "ATM e vertigini", desc: "Disturbi temporomandibolari, vertigini, disequilibri. Trattamenti mirati, sempre più richiesti.", bg: "#C4BEB2", img: IMAGES.baby2 },
] as const;

export const BENEFITS = [
  { title: "Riduzione del dolore", desc: "Agisco sulle cause profonde. Il dolore diminuisce e non torna." },
  { title: "Flessibilità e mobilità", desc: "Recupera la piena libertà di movimento e una postura corretta." },
  { title: "Forza e postura", desc: "Struttura muscolare riequilibrata e postura naturale nel tempo." },
  { title: "Sonno migliore", desc: "Il sistema nervoso si calma e il riposo migliora durevolmente." },
  { title: "Energia e focus", desc: "Più concentrazione e chiarezza mentale nel corso della giornata." },
  { title: "Corpo e mente", desc: "Ogni seduta è un momento di ascolto profondo. Il corpo ti parla." },
] as const;

export const TESTIMONIALS = [
  { name: "Adele", quote: "Ho portato la mia bimba di sei mesi per la seconda volta e ci siamo trovati benissimo. Mauro è straordinariamente delicato." },
  { name: "Giovanni", quote: "Mauro è un osteopata molto empatico, umano ed attento all'ascolto del paziente." },
  { name: "Claudio", quote: "Un osteopata abile. Mi ha portato sollievo da un dolore cronico che avevo da anni." },
  { name: "Laura", quote: "Dopo anni di cefalee croniche, finalmente qualcuno che ha risolto il problema alla radice." },
  { name: "Federico", quote: "Come sportivo avevo sempre dolori alla schiena. Mauro ha cambiato il mio modo di muovermi." },
  { name: "Mina", quote: "Ho trovato uno studio dove mi sento davvero accolta. Non è solo osteopatia, è prendersi cura di sé." },
] as const;

export const PLANS = [
  {
    name: "Prima visita", price: "Gratuito", sub: "il consulto", popular: false, cta: "Prenota",
    desc: "Un consulto telefonico gratuito per capire se l'osteopatia fa per te.",
    features: ["Prima seduta completa", "Valutazione posturale", "Consulenza pre-visita"],
  },
  {
    name: "Percorso adulti", price: "Su misura", sub: "/ trattamento", popular: true, cta: "Inizia ora",
    desc: "Il trattamento ideale per un percorso continuativo. Nessun pacchetto obbligatorio.",
    features: ["Tutto del piano base", "Nessun pacchetto fisso", "Continui solo se vuoi", "Piano concordato insieme"],
  },
  {
    name: "Bambini (0-2a)", price: "Su misura", sub: "/ seduta", popular: false, cta: "Prenota",
    desc: "Approccio dolcissimo certificato FSC per neonati e bambini da 0 a 2 anni.",
    features: ["Certificazione FSC", "Tecnica pediatrica dolce", "Sessioni brevi e mirate", "Supporto alla famiglia"],
  },
] as const;

export const FAQS = [
  { q: "È doloroso il trattamento?", a: "No. Non utilizzo tecniche HVLA. Lavoro con il BLT e le tecniche fasciali, dolci, che agiscono in profondità senza mai forzare." },
  { q: "Sono un principiante, va bene?", a: "Assolutamente sì. Non serve nessuna preparazione. La prima visita include l'anamnesi e la valutazione completa." },
  { q: "Devo prenotare in anticipo?", a: "Ti consiglio qualche giorno di anticipo, soprattutto per la prima visita. Per urgenze contattami direttamente." },
  { q: "Posso sospendere il percorso?", a: "Sì, sempre. Non ci sono pacchetti obbligatori né abbonamenti. Continui solo se lo desideri." },
  { q: "Tratti bambini 0-2 anni?", a: "Sì. Con la certificazione FSC sono formato per plagiocefalia, coliche, torcicollo, reflusso, insonnia." },
] as const;

export const NAV_LINKS = [
  ["Servizi", "#servizi"],
  ["Galleria", "#galleria"],
  ["Benefici", "#benefici"],
  ["Testimonianze", "#testimonianze"],
  ["Prezzi", "#prezzi"],
  ["FAQ", "#faq"],
] as const;

export const TREATMENT_OPTIONS = [
  "Prima visita", "Adulti", "Patologie croniche",
  "Gravidanza", "Pediatrico 0-2a", "Sportivi", "ATM e vertigini",
] as const;
