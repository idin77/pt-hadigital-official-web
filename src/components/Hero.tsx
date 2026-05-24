import { motion } from "motion/react";
import { ArrowRight, ChevronRight, Award, Trophy, Users } from "lucide-react";

const heroOffice = "/src/assets/images/hero_office_1779624493706.png";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="beranda"
      className="relative min-h-screen pt-28 lg:pt-0 flex items-center bg-[#0B1F3A] overflow-hidden"
    >
      {/* Dynamic Background Mesh / Cyber Grids */}
      <div className="absolute inset-0 bg-radial-[circle_80%_at_50%_-20%] from-blue-700/20 via-[#0B1F3A]_80% to-[#0B1F3A]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,102,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />

      {/* Futuristic Glowing Orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-[#0066FF]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/20 px-3.5 py-1.5 rounded-full backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[11px] uppercase tracking-widest text-cyan-300 font-bold font-mono">
                PT HADIGITAL OFFICIAL WEB
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                Solusi Digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-blue-400 to-cyan-300">
                  Terpercaya
                </span>{" "}
                Untuk Bisnis Anda
              </h1>
              <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed">
                Kami membantu UMKM, perusahaan, dan brand berkembang pesat di kancah nasional melalui pembuatan teknologi digital modern, optimasi performa tinggi, dan strategi berorientasi hasil.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2"
            >
              <button
                id="hero-btn-tentang"
                onClick={() => onNavigate("tentang")}
                className="group inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-xl bg-[#0066FF] hover:bg-blue-600 text-white transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 cursor-pointer"
              >
                <span>Tentang Kami</span>
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-btn-portofolio"
                onClick={() => onNavigate("portofolio")}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-xl border border-white/10 hover:border-white/25 bg-white/5 hover:bg-white/10 text-white transition-all duration-200 cursor-pointer"
              >
                <span>Lihat Portofolio</span>
              </button>
            </motion.div>

            {/* Instant Trust Anchors */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 mt-8 border-t border-white/5 max-w-md"
            >
              <div className="flex items-center space-x-2">
                <div className="p-1.5 bg-blue-500/10 rounded-lg text-blue-400">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-xs text-gray-400">Eksklusif</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-1.5 bg-blue-500/10 rounded-lg text-blue-400">
                  <Trophy className="w-4 h-4" />
                </div>
                <span className="text-xs text-gray-400">Terpercaya</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-1.5 bg-blue-500/10 rounded-lg text-blue-400">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-xs text-gray-400">Profesional</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Visual Column - The Office Illustration */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, cubicBezier: "easeOut" }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/10"
            >
              {/* Glass container around the image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent z-10" />
              <img
                src={heroOffice}
                alt="PT HADIGITAL Office Building"
                className="w-full h-auto object-cover hover:scale-102 transition-transform duration-700 min-h-[350px]"
                referrerPolicy="no-referrer"
              />
              
              {/* Decorative Tech Overlay HUD */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg p-2.5 z-20 pointer-events-none hidden sm:block">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    HQ SERVER OK
                  </span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-blue-900/85 to-[#0B1F3A]/85 backdrop-blur-lg border border-white/10 p-4 rounded-xl z-20">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-blue-400 font-mono tracking-widest font-bold uppercase block">
                      TEKNOLOGI FUTURISTIK
                    </span>
                    <span className="text-white font-semibold text-xs sm:text-sm mt-0.5 block">
                      HADIGITAL Modern Core
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-400 text-[10px] block">PANGKAT WEB</span>
                    <span className="text-cyan-400 font-bold text-xs sm:text-sm font-mono">Bintang 5</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
