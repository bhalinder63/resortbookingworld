import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TrustBar from './components/TrustBar.jsx';
import Services from './components/Services.jsx';
import Destinations from './components/Destinations.jsx';
import Packages from './components/Packages.jsx';
import Testimonials from './components/Testimonials.jsx';
import CtaBanner from './components/CtaBanner.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import FloatingButton from './components/FloatingButton.jsx';
import MobileBar from './components/MobileBar.jsx';

function App() {
  return (
    <div className="relative bg-white font-body text-navy">
      <Navbar />
      <div className="flex min-h-[100svh] flex-col">
        <Hero />
        <TrustBar />
      </div>
      <Services />
      <Destinations />
      <Packages />
      <Testimonials />
      <CtaBanner />
      <Contact />
      <Footer />
      <FloatingButton />
      <MobileBar />
    </div>
  );
}

export default App;
