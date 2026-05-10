export const IMAGES = {
  portrait: '/images/portrait.webp',
  cranial: '/images/cranial.webp',
  back: '/images/back.webp',
  leg: '/images/leg.webp',
  baby: '/images/baby.webp',
  baby2: '/images/baby2.webp',
  hero: '/images/hero-opt.jpg',
  mauroSide: '/images/mauro-side-hq.jpg',
  mauroBaby: '/images/mauro-baby-hq.jpg',
  mauroPortrait: '/images/mauro-portrait.webp',
  heroRagazza: '/images/hero-ragazza.webp',
  newBambino: '/images/new-bambino.webp',
  newCvMauro: '/images/new-cv-mauro.webp',
  newTrattamento: '/images/new-trattamento.webp',
  mauroCranial: '/images/mauro-cranial-hq.jpg',
  mauroHero: '/images/mauro-hero.jpg',
  mauro1Hero: '/images/mauro-1-hero.jpg',
  mauroSolo: '/images/mauro-solo.png',
} as const;

export const SERVICES = [
  { name: "Osteopatia per adulti", desc: "Lombalgia, sciatalgia, cervicalgia, dorsalgia, rigidità articolari. Approccio sistemico, nessun protocollo fisso.", bg: "#D4CEC0", img: IMAGES.heroRagazza },
  { name: "Patologie croniche", desc: "Ernie, fibromialgia, disturbi psicosomatici. Trattamento delicato e adattabile a ogni situazione.", bg: "#C8C2B4", img: IMAGES.newTrattamento },
  { name: "Osteopatia in gravidanza", desc: "Dolori lombari, reflusso, stitichezza, stress. Trattamenti ogni 2-3 settimane per mamma e feto.", bg: "#DDD8CC", img: IMAGES.newTrattamento },
  { name: "Osteopatia pediatrica 0-2a", desc: "Plagiocefalia, coliche, torcicollo, reflusso, insonnia. Certificato FSC, approccio dolcissimo.", bg: "#CCC6B8", img: IMAGES.newBambino },
  { name: "Sportivi", desc: "Recupero infortuni, riduzione tensioni, prevenzione. L'osteopatia migliora mobilità e performance.", bg: "#D8D2C4", img: IMAGES.heroRagazza },
  { name: "ATM e vertigini", desc: "Disturbi temporomandibolari, vertigini, disequilibri. Trattamenti mirati, sempre più richiesti.", bg: "#C4BEB2", img: IMAGES.newTrattamento },
] as const;

export const BENEFITS = [
  { title: "Riduzione del dolore", desc: "Agisco sulle cause profonde. Il dolore diminuisce e non torna." },
  { title: "Flessibilità e mobilità", desc: "Recupera la piena libertà di movimento e una postura corretta." },
  { title: "Forza e postura", desc: "Struttura muscolare riequilibrata e postura naturale nel tempo." },
  { title: "Sonno migliore", desc: "Il sistema nervoso si calma e il riposo migliora durevolmente." },
  { title: "Energia e focus", desc: "Più concentrazione e chiarezza mentale durante la giornata." },
  { title: "Corpo e mente", desc: "Ogni seduta è un momento di ascolto profondo. Il corpo ti parla." },
] as const;

export const TESTIMONIALS = [
  { name: "Nadia Giuliano", quote: "Ho conosciuto il dott Pugliese tramite le recensioni su Google per un problema alla mandibola e alla cervicale che non mi faceva dormire. Già dalla prima seduta il dolore era migliorato tantissimo. Ho ripreso a dormire e nel giro di un'altra seduta è del tutto scomparso.", time: "1 settimana fa", photo: "https://lh3.googleusercontent.com/a-/ALV-UjXLBpZnF0egk5_YC4u0XoLw0fqFPrl1ex6stenRwdNgHLGS6-o=s120-c-rp-mo-br100" },
  { name: "Garry", quote: "I have been receiving treatment from Dott. Mauro since the beginning of this year for a trapped nerve in my neck and right shoulder. After each session I notice significant improvement. The pain has gone and the strength in my right shoulder has improved considerably.", time: "1 settimana fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocJit4qcmB9flpO3RJCRbc9gnfh_KCw1O2PaM2UvZHA9QjVl1w=s120-c-rp-mo-br100" },
  { name: "Noemi Schettino", quote: "Avevo un dolore insopportabile alla spalla. Per mesi mi hanno solo consigliato infiltrazioni di cortisone o l'operazione. Dopo la seconda seduta ho iniziato a non sentire dolore durante la notte, dormire serenamente e riacquistare mobilità del braccio.", time: "2 settimane fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocJpEv_7oTpBeoighKD7QTEvPRnxcZ9C2AC2ZlZFLeaIPfTeMg=s120-c-rp-mo-br100" },
  { name: "Arianna Buttafuoco", quote: "Preparato, professionale ed empatico. Consigliatissimo!", time: "1 mese fa", photo: "https://lh3.googleusercontent.com/a-/ALV-UjVNiPKF6wh-5RHjQuHCe8gnXyFUL8JaaW42MR2S_6E-3nRKVRqv=s120-c-rp-mo-br100" },
  { name: "Gabriela Ibanescu", quote: "Ho contattato Dott.Pugliese dopo un periodo di grande sofferenza dovuto a problemi di cervicalgia cronica, mal di testa, mal di schiena, dolore alla gamba. Già dopo la seconda seduta ho notato un netto miglioramento. Consiglio a tutti!", time: "2 mesi fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocKewo5dny4a1yojh3gbT-VYaCpSuWR7wWzktU0c94O62QlXrQ=s120-c-rp-mo-br100" },
  { name: "S Dragoni", quote: "Persona professionale competente e a modo. Consigliatissimo.", time: "2 mesi fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocJjNPgC6uuSNWj22Azbx9YsP819yX3MofaouQLXlerbXd2tZg=s120-c-rp-mo-br100" },
  { name: "Eleonora Cestoni", quote: "Mi è stato consigliato il Dott. Pugliese come specialista in osteopatia pediatrica per mio figlio di 40 giorni. Esperienza decisamente positiva, Mauro ha dimostrato competenza, professionalità, dolcezza e delicatezza. Torneremo sicuramente!", time: "3 mesi fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocKP6XBZtqB1W7MoTxTJtdExJgyNOK2Y1EvPXja18zcEzbYh=s120-c-rp-mo-br100" },
  { name: "Francesco Vibi", quote: "Conosco il Dott. Mauro da diverso tempo, ed ogni volta che lo rivedo per trattare i miei problemi di lombosciatalgia e cervicale, è sempre un piacere e una garanzia. Ti spiega passo passo il problema e come andarlo a trattare, con ottimi risultati.", time: "4 mesi fa", photo: "https://lh3.googleusercontent.com/a-/ALV-UjU5li89seG8QlAiVyvsoT_MjxXlHBOXWxvVYC3-QV69jlt-ivk=s120-c-rp-mo-ba2-br100" },
  { name: "Federico Scargiali", quote: "Il dott. Pugliese ha risolto i miei problemi cervicali, lombari e di tutta la schiena in generale, con grande professionalità ma anche gentilezza e cordialità. In poche sedute sono tornato al benessere. Consigliatissimo!", time: "5 mesi fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocJIxKra6DSWQ3YGV2sQRltc3gxU_D5p_sU3UrLgdYb4tOTRzg=s120-c-rp-mo-br100" },
  { name: "Patrizia Monnarelli", quote: "Ho portato la mia bimba di sei mesi per la seconda volta e ci siamo trovati molto bene! Visita attenta e scrupolosa, con tanti consigli utili da poter mettere in pratica nel quotidiano! Ottimo professionista.", time: "6 mesi fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocIR-uuOLKIGOgCua0tE4uxvdxrFqovXekRiCzd-1XEHoEWIAw=s120-c-rp-mo-br100" },
  { name: "Alessia Giancarloni", quote: "Mauro è un Osteopata molto empatico, umano ed attento all'ascolto delle problematiche del paziente. Professionista altamente competente che ha saputo individuare sin da subito le cause dei miei dolori. Le sue tecniche manipolative sono impercettibili e totalmente indolore.", time: "6 mesi fa", photo: "https://lh3.googleusercontent.com/a-/ALV-UjWV--Sc9hj0xKrm1gxPDZKQQzcmHTvNH1jJvleuulweV1mGVQo=s120-c-rp-mo-ba3-br100" },
  { name: "Zoe Dahlinger", quote: "Un osteopata sensibile e abile. Mi porta un notevole sollievo nella mia vita quotidiana!", time: "7 mesi fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocKAY-VhOr2Ub5vUT1hk1h0WgjpmpT98RQcQjuBnRpSmAZKP5Q=s120-c-rp-mo-br100" },
  { name: "Giulio Mariotti", quote: "Mauro è professionale, gentilissimo e molto delicato. Mi ha risolto più volte problemi alla schiena accompagnandomi passo passo, spiegando i passi che sarebbe andato a fare e lasciandomi consigli di esercizi da svolgere a casa. Lo consiglio vivamente.", time: "8 mesi fa", photo: "https://lh3.googleusercontent.com/a-/ALV-UjUxyfl5UQSbjK7bUR9_Vhsucnodf4VbNtlDdCiH-2sel41w92bS=s120-c-rp-mo-br100" },
  { name: "thomas di cesare", quote: "Ottimo professionista e grandissima persona. Sempre disponibile. Molto molto bravo.", time: "8 mesi fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocL4ainrqAcAku9boakUbqe0abtM_axRX__a5AkOmbcyAHCMng=s120-c-rp-mo-br100" },
  { name: "Sandra Djurovic", quote: "Se potessi darei la valutazione 1000! Mauro mi ha fatto scoprire l'osteopatia biodinamica che sostanzialmente mi ha risolto e scoperto la radice delle problematiche.", time: "9 mesi fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocLj2SH82aAlvlXFFmBScoyJqpPfbixNU0pMfY0Hw_t_vyigJw=s120-c-rp-mo-br100" },
  { name: "Sauro Giacche", quote: "Professionista Serio e Competente, trasmette Calma e Sicurezza. Ti mette a tuo Agio e Lavora con grande Precisione ed Efficacia.", time: "9 mesi fa", photo: "https://lh3.googleusercontent.com/a-/ALV-UjVT7jpBX_Tu25Y27A1JqDSrexCc-5zO6yoMd_n66X8UBKmhAcdQ=s120-c-rp-mo-br100" },
  { name: "Ilario Montagnolo", quote: "Un professionista serio, educato, puntuale e competente. Fornisce spiegazioni esaustive ed è sempre disponibile.", time: "9 mesi fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocLotmdDQ6NS1awfxxMt0-NoZmkc2ltexWlSFSO2HRI31oMxPQ=s120-c-rp-mo-br100" },
  { name: "Marina Perelli", quote: "Mauro è cortese e competente, da 10 mesi avevo dolore a schiena con forte sciatica che mi creava problemi anche a camminare. Ho provato fisiatra, fisioterapista e Mauro è l'unico che mi ha risolto il problema.", time: "10 mesi fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocIZnnjcM2eIvnHFT4eSKDmjggDbKZlnKafBmPrGbQ5F0_0YAg=s120-c-rp-mo-br100" },
  { name: "Natalia Braiescu", quote: "Dopo tanti visite e controlli e con nessuna risposta giusta, sono arrivata dal dottor Mauro Pugliese osteopata e dalla prima seduta ha capito subito la problematica.", time: "10 mesi fa", photo: "https://lh3.googleusercontent.com/a-/ALV-UjXKe15e1zUtiVaNS0GQeCyTCKWDZLhu1OxB0aFx4L8ZIqoyOL-4Dw=s120-c-rp-mo-br100" },
  { name: "Luigi Carlo De Pascalis", quote: "Mauro non solo è un professionista serio e competente, ma anche una persona estremamente gentile e piacevole.", time: "11 mesi fa", photo: "https://lh3.googleusercontent.com/a-/ALV-UjVeDrg8lLjAutJFn3WqI3onnRYOtKiXIXh0axFZVa2CRsK_Xu5iUQ=s120-c-rp-mo-ba4-br100" },
  { name: "Domenico Boccuti", quote: "Osteopata che si distingue per la sua visione a 360 gradi, soprattutto per il sistema viscerale. Scelto per problematiche riconducibili a reflusso e gastrite con ottimi risultati.", time: "11 mesi fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocLtklHe8T8AO-f0UEgoffHydGcQKvj2CAK6-AOo3rYbQ7ZTwQ=s120-c-rp-mo-br100" },
  { name: "Rita Rosignoli", quote: "Professionista serio, preparato e attento alle problematiche del paziente. Persona dotata di grande pazienza ed educazione. Molto chiaro nelle spiegazioni.", time: "1 anno fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocL2a8sCnUn6pQf-l4KqZrpDw2wPtP9wAqGYTXnPDke-h9O3Sg=s120-c-rp-mo-br100" },
  { name: "luca proietti", quote: "Professionalità e disponibilità top! Ero completamente bloccato con la schiena e dopo una breve telefonata si è reso subito disponibile.", time: "1 anno fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocK4WFmYrzEnvMzA_FJIVG2srJiPUQnu_6N22DHGdDFKCMwgOQ=s120-c-rp-mo-br100" },
  { name: "Giacomo Visco Comandini", quote: "Dopo due sedute, risolto un fastidioso mal di schiena che mi trascinavo da mesi. I suoi punti di forza sono la capacità di analisi e la calma e professionalità.", time: "1 anno fa", photo: "https://lh3.googleusercontent.com/a-/ALV-UjX7OBGAS7f9pljSsWNYbi-RqDt0hFUtADFfKUGmsrRbjddn5vCD=s120-c-rp-mo-br100" },
  { name: "Fra Rug", quote: "Avevo un problema a collo/spalla/gomito che mi portavo dietro da un po' di tempo nonostante diverse sedute di fisioterapia in cui il dolore scompariva ma tornava sempre.", time: "1 anno fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocJwJphqO_1xkTQioDKlYWb6yamCcIUFHa8ha4Ci2jP_plpPJA=s120-c-rp-mo-br100" },
  { name: "rosa pugliese", quote: "Avevo un problema alla schiena da mesi, lavorando spesso in piedi per ore avevo un dolore costante e difficoltà anche a dormire di notte.", time: "1 anno fa", photo: "https://lh3.googleusercontent.com/a-/ALV-UjW06AHT9oqmw4Xbkl_wOOePEhhTMnjJDhS9U5yfL9smkQ1cuZ8=s120-c-rp-mo-br100" },
  { name: "Francesco Gagliardoni", quote: "Ho conosciuto Mauro a seguito di una contrattura muscolare, il suo approccio è stato diverso da quello solito a cui ero abituato. Attraverso un approccio totale ha risolto il problema.", time: "1 anno fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocJ4-f2eqLQEaZb8W1gUdOfCUaKWLMXxEiU10He3_4Zlj_m2lg=s120-c-rp-mo-br100" },
  { name: "stefy l", quote: "Da circa un anno il dottor Pugliese mi segue per un problema post operatorio, gentile e disponibile, ha preso a cuore la mia vicenda.", time: "1 anno fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocIWnlEKpSVohaf5L03USlrkksTC0AfqTuymyXjrg3N6zzGKpQ=s120-c-rp-mo-br100" },
  { name: "Giacomo Tortoioli", quote: "Dopo 4 anni di dolori alla schiena ho incontrato il Dott. Mauro Pugliese e con una sola seduta il fastidio che mi assillava tutti i giorni magicamente sta scomparendo. Grazie.", time: "1 anno fa", photo: "https://lh3.googleusercontent.com/a-/ALV-UjVap-U98UDUBHH6u8_mrViwuvFoQeqI6XJgHgyqbf0VfIYOr36-=s120-c-rp-mo-br100" },
  { name: "Giuseppe Vinti", quote: "Professionista competente e disponibile. Ho trovato beneficio i giorni successivi la terapia. Consigliato.", time: "1 anno fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocKRJcN_85DJTZo7RtrFnJywhYv5Ci-A8VshBwi_EiGwqnY49w=s120-c-rp-mo-br100" },
  { name: "Luca Acito", quote: "Professionalità, competenza e disponibilità contraddistinguono Mauro. Ho risolto in 4 sedute un noioso problema alla spalla che mi tormentava da mesi.", time: "1 anno fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocJcSFqJBtER67AWLA_IG40jad0JdHA3sxJ-tOZHDqyuTwwUpg=s120-c-rp-mo-br100" },
  { name: "Irini Karanikola", quote: "Medico serio e disponibile. Mette il paziente a suo agio da subito, dando tutte le spiegazioni necessarie per il proprio trattamento.", time: "1 anno fa", photo: "https://lh3.googleusercontent.com/a-/ALV-UjWgk9eDjHdWa5bZoCcVxAZzJ-523p6K5Peh7-kpeyR8t4FWrftl=s120-c-rp-mo-br100" },
  { name: "Marica Gagliardoni", quote: "Soffrivo di cervicalgia da anni, ogni volta che provavo a fare dei trattamenti il risultato erano delle fastidiose vertigini per giorni. Poi ho conosciuto Mauro.", time: "1 anno fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocJ1MDy--sSQhdz8pNK30ra-KHaVt0690FvTQ7TGQsBqPVPzuQ=s120-c-rp-mo-br100" },
  { name: "Maria Di Spirito", quote: "Ho conosciuto Mauro per un problema al ginocchio in seguito ad una lesione legamentosa. Grazie ai suoi consigli e alla sua precisione sono riuscita a recuperare la piena funzionalità del ginocchio in tempi brevi. Super consigliato.", time: "1 anno fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocKatTXPGlyzrInSzmYwAmT8lOvlnGWSQf1SHRO3HBptnnfPNQ=s120-c-rp-mo-br100" },
  { name: "sara sara", quote: "Professionista serio, competente ed estremamente discreto ed educato. Dopo aver provato vari professionisti lui è stato l'unico in grado di far fronte alle mie problematiche.", time: "1 anno fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocKzpOsDO7uOBaYVI5YYNz-i9jHYpYCvVuBJGVqa3OuBtdpP_g=s120-c-rp-mo-br100" },
  { name: "Tiziana Borghesi", quote: "Grande professionista, serio e con grande conoscenza del corpo umano e delle manipolazioni per decontratturare i muscoli in sofferenza.", time: "1 anno fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocLqbiakV94P8FKS0CGprNkZV_EC9OPy8cMftXqKfmIFDq7uEw=s120-c-rp-mo-br100" },
  { name: "Samuela Torretti", quote: "Dottore estremamente chiaro, capace di spiegare al paziente la sua problematica e il lavoro che andrà a fare. Onesto, efficace nei suoi trattamenti oltre le aspettative e molto cortese.", time: "1 anno fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocLbIwp4XL0KgTWhne6S0Yd7W9w5Cur7xPVLwsOYcLSvuamkqw=s120-c-rp-mo-br100" },
  { name: "Manuela Allegrozzi", quote: "Il migliore Osteopata che abbia mai incontrato. Vengo da Londra per farmi curare da lui.", time: "1 anno fa", photo: "https://lh3.googleusercontent.com/a-/ALV-UjWkYG0Y2otGMNra_padNeASVbRLeExu5Gqh14b0GMy_LbJ5q6Mn=s120-c-rp-mo-br100" },
  { name: "Elisa Laschi", quote: "Ottimo osteopata. Serio e affidabile, risolutivo per alcuni problemi dati da sport e postura.", time: "1 anno fa", photo: "https://lh3.googleusercontent.com/a-/ALV-UjXROiNYT3LmKeP3lRnBYmnVxnw-TkEeve_UDyHIWB9mmXofxBU=s120-c-rp-mo-br100" },
  { name: "Alessandro Lucaroni", quote: "Il dott. Pugliese è un professionista molto preparato e attento alle necessità dei pazienti.", time: "1 anno fa", photo: "https://lh3.googleusercontent.com/a-/ALV-UjVDpqmw3eZuvK-FuamiKW3aUSDAh8PqR4fnw5YPbBrijnBlCClT=s120-c-rp-mo-br100" },
  { name: "Maurizio Vibi", quote: "Ci siamo affidati, da tempo, sia io che mia moglie alle cure del dottor Pugliese: grande professionalità e bravura unite ad una profonda correttezza, onestà e disponibilità.", time: "1 anno fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocIP4tPRoqH5NMnsZ1lgQvNfpt1g7r99hluxoSQVBGzyfwsjrQ=s120-c-rp-mo-br100" },
  { name: "Elena Carpano", quote: "Professionista serio, corretto, competente.", time: "1 anno fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocIGznQ8X_tEqOfSN7e3VyPFy5Ia-_Nm0wCP4f_WB0EujnyyzA=s120-c-rp-mo-br100" },
  { name: "Alessandra Barzi", quote: "Disponibile e competente: consigliatissimo.", time: "1 anno fa", photo: "https://lh3.googleusercontent.com/a-/ALV-UjW0akFwDN6j6ldJuyPQSp3d9jky0wItpnedIvOfMTfoOljCmxad=s120-c-rp-mo-br100" },
  { name: "Manuela Di Spirito", quote: "Professionalità e competenza.", time: "1 anno fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocKZEA7Awb99ozut-HHyayRFKUkxLoraQFYy0LqQZt6ehiqokw=s120-c-rp-mo-br100" },
  { name: "Marco Maracaglia", quote: "Professionista competente, educato e gentile. Ho avuto bisogno delle sue prestazioni professionali per un problema al polpaccio. Ora ho ripreso perfettamente grazie alle sue terapie ed ai suoi preziosi consigli. Consigliatissimo.", time: "2 anni fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocLy1nazNc2ww8faFno0RMua4dvEPjt1L0KuqyeKDndnPQcKEg=s120-c-rp-mo-br100" },
  { name: "raffaella giannico", quote: "Consiglio vivamente il Dott. Pugliese, professionista soprattutto molto competente, ma anche molto pacato ed educato. L'unico che è riuscito a risolvere le mie problematiche.", time: "2 anni fa", photo: "https://lh3.googleusercontent.com/a-/ALV-UjVimI1Z1ldTsEOkbOWvQIDIsspoS5LfnrSc07ZXCQolrh2K0plT=s120-c-rp-mo-ba2-br100" },
  { name: "Patrizia Brustenga", quote: "Consiglio vivamente il Dott. Pugliese in quanto professionista serio e preparato ma soprattutto perché è una persona di un'educazione e una gentilezza rare.", time: "2 anni fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocKzL0gHFR49uzts8fwZiAULiaBK4w0J2D3HuHZcj83jbspUcg=s120-c-rp-mo-br100" },
  { name: "Anna Maria", quote: "Molto bravo, pacato, sa interagire con facilità nei confronti dei suoi pazienti, ottimo professionista.", time: "2 anni fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocKUF6BQOVCrQfUomx42zUnfNmO7QVngVmqLF_myfSxJBYKf0g=s120-c-rp-mo-br100" },
  { name: "Giulia Gioia", quote: "Super consigliato! Mi ci trovo benissimo e già dopo il primo trattamento ho notato miglioramenti.", time: "2 anni fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocJpJTVqi6EW6xjgjRpFsJfvjv6MskeP9zUOfRB_37uR5UtSCw=s120-c-rp-mo-br100" },
  { name: "Josef De Santis", quote: "Ho avuto la fortuna di farmi visitare dal dottor Mauro Pugliese, persona disponibilissima e soprattutto competente, l'unico che è riuscito a risolvere il problema che avevo al ginocchio.", time: "2 anni fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocIDbZUHr_jpJ-H08hvIuLCWGdcd6Vgzj69C85wf4rZZcOoLKQ=s120-c-rp-mo-br100" },
  { name: "Cesare Di Capua", quote: "Il dott Pugliese mi ha salvato da dolorose sciatalgie adottando tecniche eseguite con competenza e delicatezza!", time: "2 anni fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocKJfB4llZHgbmw0BqRDXuCOZVyo3KTu_lNqvTCJwAT_6JXd5A=s120-c-rp-mo-br100" },
  { name: "Ernesto Facchini", quote: "Professionista serio e preparato. Sa sempre individuare le cause del tuo problema e le risolve. Consigliato!", time: "2 anni fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocLAdGRSoYDKTg7BQZOsSgLAHWy_3HHxMUcQrQryD4yYY-KsVQ=s120-c-rp-mo-br100" },
  { name: "cristiano roscini", quote: "Quando la professionalità si fonde con la cortesia e la disponibilità. Consigliato.", time: "2 anni fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocIKkyHAZlAehKdVLN6ugii-Kr8J2q8ROmckPe3hSyNgjnQXrg=s120-c-rp-mo-br100" },
  { name: "Marco Montanucci", quote: "Serio, Professionale ed educato. Risolti sempre tutti i problemi.", time: "2 anni fa", photo: "https://lh3.googleusercontent.com/a-/ALV-UjXm1W4xXvIAOPtQSyIeZ0E24dwmTGMOEtT4GHll3MHihHFXSnfjwA=s120-c-rp-mo-br100" },
  { name: "Gloria Sestito", quote: "Professionalità e gentilezza, lo consiglio!", time: "2 anni fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocI284JzOC-vg94QjbcaAflk2xlEBpnEOxtuk0iNhozDcELl4w=s120-c-rp-mo-br100" },
  { name: "Novella Giovagnoli", quote: "Un vero professionista!", time: "2 anni fa", photo: "https://lh3.googleusercontent.com/a/ACg8ocK8zH-U6mAfVWt44HfydvcJyeIyjy9O6Q292d-DmVaLbl8z0A=s120-c-rp-mo-br100" },
] as const;

export const PLANS = [
  {
    name: "Primo contatto", price: "Gratuito", sub: "", popular: false, cta: "Contattami",
    href: "https://wa.me/393389358127?text=Ciao%2C%20vorrei%20informazioni",
    desc: "Chiamami o scrivimi su WhatsApp per parlare del tuo caso. Senza impegno.",
    features: ["Consulenza gratuita", "Nessun obbligo", "Risposta in giornata"],
  },
  {
    name: "Adulti", price: "Su misura", sub: "/ trattamento", popular: true, cta: "Prenota",
    href: "https://wa.me/393389358127?text=Ciao%2C%20vorrei%20prenotare%20una%20seduta",
    desc: "Ascolto, valutazione e trattamento personalizzato. Resti vestito, nessun pacchetto obbligatorio.",
    features: ["Valutazione completa", "Trattamento su misura", "Continui solo se vuoi"],
  },
  {
    name: "Pediatrica (0–2a)", price: "Su misura", sub: "/ seduta", popular: false, cta: "Prenota",
    href: "https://wa.me/393389358127?text=Ciao%2C%20vorrei%20prenotare%20una%20seduta%20pediatrica",
    desc: "Tecniche dolcissime certificate FSC per neonati e bambini da 0 a 2 anni.",
    features: ["Certificazione FSC", "Approccio delicatissimo", "Supporto alla famiglia"],
  },
] as const;

export const FAQS = [
  { q: "È doloroso il trattamento?", a: "No. Non utilizzo tecniche HVLA. Lavoro con il BLT e le tecniche fasciali, dolci, che agiscono in profondità senza mai forzare." },
  { q: "Quanto dura una seduta?", a: "Una seduta dura circa 40-50 minuti, compresa la valutazione iniziale. La prima visita può richiedere qualche minuto in più per l'anamnesi completa." },
  { q: "Ogni quanto bisogna fare i trattamenti?", a: "In genere ogni 2-3 settimane, ma dipende dalla situazione. Concordiamo insieme la frequenza ideale per te, senza obblighi." },
  { q: "Serve la prescrizione medica?", a: "No, non serve alcuna prescrizione. Puoi prenotare direttamente. L'osteopata è un professionista sanitario autonomo." },
  { q: "Come devo vestirmi per la seduta?", a: "Puoi restare vestito con abiti comodi. Ti chiedo solo di togliere scarpe e cintura. Nessun camice, nessun imbarazzo." },
  { q: "Tratti patologie croniche?", a: "Sì. Tratto fibromialgia, ernie discali, cefalee croniche, disturbi psicosomatici e altre condizioni croniche con un approccio delicato e adattato." },
  { q: "Tratti bambini 0-2 anni?", a: "Sì. Con la certificazione FSC sono formato per plagiocefalia, coliche, torcicollo, reflusso, insonnia." },
] as const;

export const NAV_LINKS = [
  ["Chi sono", "#chi-sono"],
  ["Servizi", "#servizi"],
  ["Recensioni", "#testimonianze"],
  ["Studio", "#studio"],
  ["FAQ", "#faq"],
  ["Contatti", "#contatto"],
] as const;

export const WHY_CHOOSE_ME = [
  { title: "Approccio olistico", desc: "Non tratto solo il punto che fa male — cerco la causa vera, anche se è lontana dal sintomo. Il corpo è un sistema unico e va letto nella sua interezza." },
  { title: "Tecniche dolci", desc: "Niente scrocchi né manipolazioni forzate. Solo BLT, fasciale e viscerale — il corpo si corregge da solo, io lo guido con rispetto." },
  { title: "Ripristinare la salute", desc: "Non punto al sollievo momentaneo. Lavoro sulla radice del problema per ripristinare la salute vera, non solo togliere il sintomo." },
  { title: "Ascolto ed empatia", desc: "Ogni seduta inizia dall'ascolto. Credo nell'onestà professionale e nel capire la tua storia prima di qualsiasi trattamento. Nessun percorso obbligato." },
] as const;

export const TREATMENT_OPTIONS = [
  "Prima visita", "Adulti", "Patologie croniche",
  "Gravidanza", "Pediatrico 0-2a", "Sportivi", "ATM e vertigini",
] as const;
