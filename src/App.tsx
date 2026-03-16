import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Benefits } from './components/Benefits';
import { AboutMe } from './components/AboutMe';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Introduction />
      <Services />
      <Gallery />
      <Benefits />
      <AboutMe />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
