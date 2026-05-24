import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloating from "./components/WhatsAppFloating";

export default function App() {
  const [activeSection, setActiveSection] = useState("beranda");

  // Track the user scroll viewport to set active menu highlighting
  useEffect(() => {
    const sections = [
      "beranda",
      "tentang",
      "layanan",
      "paket",
      "portofolio",
      "artikel",
      "kontak"
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -30% 0px", // High accuracy viewport calculation
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    
    const element = document.getElementById(sectionId);
    
    if (element) {
      const headerOffset = 70; // Offset for sticky navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1F3A] text-white selection:bg-blue-600 selection:text-white antialiased font-sans">
      {/* Floating Header */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Corporate Content Streams */}
      <main>
        <Hero onNavigate={handleNavigate} />
        <About />
        <Services />
        <Pricing />
        <Portfolio />
        <Articles />
        <Contact />
      </main>

      {/* Global Site Bottom */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Active Elements */}
      <WhatsAppFloating />
    </div>
  );
}
