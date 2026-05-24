import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "beranda", label: "Beranda" },
    { id: "tentang", label: "Tentang Kami" },
    { id: "layanan", label: "Layanan" },
    { id: "portofolio", label: "Portofolio" },
    { id: "artikel", label: "Artikel" },
    { id: "estimator", label: "Kalkulator Tarif" },
    { id: "karier", label: "Karier" },
    { id: "kontak", label: "Kontak" }
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B1F3A]/90 backdrop-blur-md border-b border-blue-500/10 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            id="navbar-logo"
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleLinkClick("beranda")}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#0066FF] to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="text-white font-extrabold text-xl tracking-wider">H</span>
            </div>
            <div>
              <span className="font-display font-bold text-white text-base sm:text-lg block tracking-wide leading-tight">
                PT HADIGITAL
              </span>
              <span className="text-[10px] text-blue-400 tracking-widest block font-mono -mt-1 font-bold">
                OFFICIAL WEB
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div id="desktop-menu" className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3 py-2 rounded-md text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                  activeSection === link.id
                    ? "text-blue-400 bg-blue-500/5 font-semibold"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              id="cta-hubungi-kami"
              onClick={() => handleLinkClick("kontak")}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xs font-semibold text-white rounded-lg group bg-gradient-to-br from-[#0066FF] to-cyan-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-800 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-cyan-500/30 cursor-pointer"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-[#0B1F3A] rounded-md group-hover:bg-opacity-0">
                Hubungi Kami
              </span>
            </button>
          </div>

          {/* Mobile responsive buttons */}
          <div className="lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div id="mobile-menu" className="lg:hidden bg-[#0B1F3A] border-b border-blue-500/15 py-4 px-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`nav-mob-${link.id}`}
              onClick={() => handleLinkClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? "bg-blue-600/10 text-blue-400 font-semibold border-l-2 border-blue-500"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 border-t border-white/5 px-4">
            <button
              id="mobile-cta"
              onClick={() => handleLinkClick("kontak")}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#0066FF] to-cyan-500 text-white font-semibold flex items-center justify-center space-x-2 text-sm shadow-md cursor-pointer"
            >
              <span>Hubungi Kami</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
