import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SpecialDishes } from './components/SpecialDishes';
import { Menu } from './components/Menu';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <SpecialDishes />
      <Menu />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}