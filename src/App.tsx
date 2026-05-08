import { useState, useEffect } from 'react';
import { Nav } from './components/Nav';
// import { Hero2 } from './components/Hero2';
// import { Hero3 } from './components/Hero3';
// import { Hero4 } from './components/Hero4';
import { Hero5 } from './components/Hero5';
import { Introduction } from './components/Introduction';
import { ServicesC } from './components/Services';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { Gallery } from './components/Gallery';
// import { Bio } from './components/Bio';
// Benefits imported above
import { WhyChooseMe } from './components/WhyChooseMe';
// import { FirstVisit } from './components/FirstVisit';
// import { Formation } from './components/Formation';
// import { AboutMe } from './components/AboutMe';
import { Testimonials } from './components/Testimonials';
import { Locations } from './components/Locations';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer2 } from './components/Footer2';
import { WhatsAppButton } from './components/WhatsAppButton';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { CookiePolicy } from './components/CookiePolicy';
import { CookieBanner, initConsent } from './components/CookieBanner';
import Preview from './Preview';
// import { FullBleedImage } from './components/FullBleedImage';
// import { IMAGES } from './lib/constants';

type Route = 'home' | 'privacy' | 'cookie' | 'preview';

function parseHash(): Route {
  const h = window.location.hash;
  if (h === '#/privacy') return 'privacy';
  if (h === '#/cookie') return 'cookie';
  if (h === '#/preview') return 'preview';
  return 'home';
}

function useRoute(): Route {
  const [route, setRoute] = useState<Route>(parseHash);
  useEffect(() => {
    const handler = () => setRoute(parseHash());
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);
  return route;
}

export default function App() {
  const route = useRoute();

  // Load tracking scripts if consent was already given
  useEffect(() => { initConsent(); }, []);

  if (route === 'privacy') return <PrivacyPolicy />;
  if (route === 'cookie') return <CookiePolicy />;
  if (route === 'preview') return <Preview />;

  return (
    <div>
      <CookieBanner />
      <Nav />
      <WhatsAppButton />
      <Hero5 />
      <Introduction />
      <ServicesC />
      {/* <AboutMe /> */}
      {/* <Formation /> */}
      {/* <FirstVisit /> */}
      <HowItWorks />
      <Benefits />
      {/* <FullBleedImage src={IMAGES.newBambino} alt="Osteopatia pediatrica" objectPosition="50% 35%" /> */}
      <WhyChooseMe />
      <Gallery />
      {/* <Bio /> */}
      <Testimonials />
      <Locations />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer2 />
    </div>
  );
}
