import { Facebook, Instagram, Phone, Mail, ArrowUp } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1F3A] border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      
      {/* Absolute layout borders */}
      <div className="absolute bottom-[-100px] right-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 font-sans text-left">
          
          {/* Column 1: Brand & Desc */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate("beranda")}>
              <div className="w-8 h-8 rounded bg-gradient-to-tr from-[#0066FF] to-cyan-400 flex items-center justify-center">
                <span className="text-white font-extrabold text-base tracking-wider">H</span>
              </div>
              <div>
                <span className="font-display font-bold text-white text-base block tracking-wide">
                  PT HADIGITAL
                </span>
                <span className="text-[9px] text-blue-400 tracking-widest block font-mono -mt-1 font-bold">
                  OFFICIAL WEB
                </span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed pt-2">
              Transformasi teknologi digital berkelas dunia untuk melayani seluruh tingkat industri, perusahaan, ritel, dan UMKM di Indonesia.
            </p>

            {/* Social media anchors */}
            <div className="flex items-center space-x-3 pt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 hover:border-blue-500/20 hover:bg-blue-600/10 text-gray-400 hover:text-white flex items-center justify-center transition-all group"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 hover:border-blue-500/20 hover:bg-rose-500/10 text-gray-400 hover:text-white flex items-center justify-center transition-all"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/6285282632984"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 hover:border-blue-500/20 hover:bg-emerald-500/10 text-gray-400 hover:text-white flex items-center justify-center transition-all"
                title="WhatsApp CS"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation linkages */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-gray-300 uppercase tracking-widest">
              MENU UTAMA
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-gray-400">
              <button
                onClick={() => onNavigate("beranda")}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Beranda
              </button>
              <button
                onClick={() => onNavigate("tentang")}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Tentang Kami
              </button>
              <button
                onClick={() => onNavigate("layanan")}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Layanan
              </button>
              <button
                onClick={() => onNavigate("portofolio")}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Portofolio
              </button>
              <button
                onClick={() => onNavigate("artikel")}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Artikel
              </button>
              <button
                onClick={() => onNavigate("estimator")}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Kalkulator Tarif
              </button>
              <button
                onClick={() => onNavigate("karier")}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Karier
              </button>
              <button
                onClick={() => onNavigate("kontak")}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Kontak
              </button>
            </div>
          </div>

          {/* Column 3: Contact pointers */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-gray-300 uppercase tracking-widest">
              SALURAN DUKUNGAN
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-400">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <a href="mailto:offocialhadigital@gmail.com" className="hover:text-white transition-colors break-all">
                  offocialhadigital@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <a href="https://wa.me/6285282632984" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  085282632984
                </a>
              </li>
              <li className="text-[11px] text-gray-500 font-mono italic leading-normal">
                Jam Operasional Chat:<br />
                Senin - Sabtu | 09:00 - 18:00 WIB<br />
                (Minggu & Hari Libur Nasional Ofline)
              </li>
            </ul>
          </div>

          {/* Column 4: Quality badging */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-gray-300 uppercase tracking-widest">
              LEGALITAS & JAMINAN
            </h4>
            <div className="bg-white/5 border border-white/5 p-4 rounded-xl space-y-2">
              <span className="text-[10px] bg-blue-600/20 text-blue-400 font-bold px-2 py-0.5 rounded uppercase font-mono tracking-wider block w-fit">
                TERVERIFIKASI
              </span>
              <p className="text-[11px] text-gray-400 leading-normal">
                Seluruh pengerjaan dilengkapi dengan berkas SPK (Surat Perjanjian Kerja) & NDA Demi kerahasiaan kekayaan intelektual perusahaan.
              </p>
            </div>
          </div>

        </div>

        {/* Lower copyright bar with scroll to top */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <span>
            © {currentYear} PT HADIGITAL OFFICIAL WEB. All Rights Reserved.
          </span>
          <div className="flex items-center space-x-4">
            <span className="text-[10px] tracking-widest uppercase">
              JAKARTA, INDONESIA
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 border border-white/10 hover:border-white/20 hover:text-white rounded-lg transition-colors cursor-pointer"
              title="Ke Atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
