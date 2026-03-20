import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart, Brain, Hand, ShieldCheck, Baby, Activity } from 'lucide-react';

const BG_ICONS = [
  { Icon: Heart, top: '8%', left: '6%', size: 28, rotate: -15 },
  { Icon: Brain, top: '12%', right: '8%', size: 24, rotate: 12 },
  { Icon: Hand, top: '45%', left: '4%', size: 22, rotate: -25 },
  { Icon: ShieldCheck, top: '42%', right: '5%', size: 26, rotate: 18 },
  { Icon: Baby, bottom: '22%', left: '10%', size: 20, rotate: 10 },
  { Icon: Activity, bottom: '18%', right: '10%', size: 24, rotate: -8 },
] as const;

const STORAGE_KEY = 'cookie_consent';

type Consent = 'all' | 'necessary' | null;

function getConsent(): Consent {
  const v = localStorage.getItem(STORAGE_KEY);
  if (v === 'all' || v === 'necessary') return v;
  return null;
}

/** Inject GTM + Meta Pixel dynamically */
function loadTrackingScripts() {
  // GTM
  if (!document.getElementById('gtm-script')) {
    const s = document.createElement('script');
    s.id = 'gtm-script';
    s.textContent = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-WRFXTTC7');`;
    document.head.appendChild(s);
  }
  // Meta Pixel
  if (!document.getElementById('fbpixel-script')) {
    const s = document.createElement('script');
    s.id = 'fbpixel-script';
    s.textContent = `!function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '826564503734917');
    fbq('track', 'PageView');`;
    document.head.appendChild(s);
  }
}

/** On mount: if consent was already given, inject scripts */
export function initConsent() {
  if (getConsent() === 'all') {
    loadTrackingScripts();
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show banner only if no consent stored
    if (getConsent() === null) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'all');
    loadTrackingScripts();
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, 'necessary');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9998]"
            style={{ background: 'rgba(255,255,255,0.7)' }}
          />
          {/* Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          >
            <div
              className="w-full max-w-[420px] relative"
              style={{
                background: '#fff',
                borderRadius: 20,
                boxShadow: '0 24px 80px rgba(0,0,0,.18), 0 0 0 1px rgba(0,0,0,.04)',
                overflow: 'hidden',
              }}
            >
              {/* Background decorative icons */}
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                {BG_ICONS.map(({ Icon, size, rotate, ...pos }, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{ ...pos }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Icon
                      size={size}
                      strokeWidth={1}
                      style={{
                        color: 'rgba(192,90,40,0.07)',
                        transform: `rotate(${rotate}deg)`,
                      }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <div className="relative px-7 pt-8 pb-4" style={{ fontFamily: 'var(--font-dm)' }}>
                <h3
                  className="text-[20px] font-bold mb-2"
                  style={{ color: '#1E1C1A', fontFamily: 'var(--font-serif)' }}
                >
                  Cookie
                </h3>
                <p className="text-[13px] leading-[1.75] text-[#4A4540]">
                  Utilizziamo cookie tecnici e, con il tuo consenso, cookie di analytics e marketing
                  per offrirti un'esperienza migliore.{' '}
                  <a
                    href="#/cookie"
                    className="font-medium underline underline-offset-[3px]"
                    style={{ color: 'var(--color-brand, #C05A28)' }}
                  >
                    Leggi la Cookie Policy
                  </a>
                </p>
              </div>

              {/* Buttons */}
              <div className="relative flex flex-col gap-2 px-7 pb-7" style={{ fontFamily: 'var(--font-dm)' }}>
                <button
                  onClick={accept}
                  className="w-full h-[48px] text-[14px] font-semibold text-white transition-colors duration-200"
                  style={{
                    background: 'var(--color-brand, #C05A28)',
                    borderRadius: 12,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#A84D22')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-brand, #C05A28)')}
                >
                  Accetta tutto
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={reject}
                    className="flex-1 h-[40px] text-[12.5px] font-medium transition-colors duration-200"
                    style={{
                      background: 'transparent',
                      color: '#6B6860',
                      border: '1px solid #E4E0D8',
                      borderRadius: 12,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#F5F2ED'; e.currentTarget.style.color = '#1E1C1A'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#6B6860'; }}
                  >
                    Rifiuta tutti
                  </button>
                  <a
                    href="#/cookie"
                    className="flex-1 h-[40px] inline-flex items-center justify-center text-[12.5px] font-medium transition-colors duration-200"
                    style={{
                      background: 'transparent',
                      color: '#6B6860',
                      border: '1px solid #E4E0D8',
                      borderRadius: 12,
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#F5F2ED'; e.currentTarget.style.color = '#1E1C1A'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#6B6860'; }}
                  >
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
