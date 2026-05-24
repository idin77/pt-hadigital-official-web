import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Globe, 
  Briefcase, 
  Tablet, 
  TrendingUp, 
  Video, 
  Search, 
  Check, 
  Calendar, 
  DollarSign, 
  ChevronRight, 
  X, 
  MessageSquare 
} from "lucide-react";
import { Service } from "../types";
import { services } from "../data";

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Map icon name from types to actual Lucide Icon Component
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />;
      case "Tablet":
        return <Tablet className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300" />;
      case "Video":
        return <Video className="w-6 h-6 text-rose-400 group-hover:text-rose-300" />;
      case "Search":
        return <Search className="w-6 h-6 text-amber-400 group-hover:text-amber-300" />;
      default:
        return <Globe className="w-6 h-6 text-blue-400" />;
    }
  };

  const handleWhatsAppConsultation = (serviceName: string) => {
    const textStr = encodeURIComponent(`Halo PT HADIGITAL, saya tertarik dengan Layanan *${serviceName}*. Bisakah saya melakukan konsultasi gratis lebih lanjut?`);
    window.open(`https://wa.me/6285722603355?text=${textStr}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="layanan" className="relative py-24 bg-[#0B1F3A]/95 overflow-hidden border-t border-white/5">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-[#0066FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[11px] font-mono tracking-widest font-bold text-blue-400 uppercase bg-blue-500/10 border border-blue-400/20 px-3 py-1 rounded-full">
            LAYANAN UTAMA
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Elevasikan Bisnis Anda dengan Solusi Digital Terkini
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-[#0066FF] to-cyan-400 rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-gray-400">
            Pilih ekosistem teknologi yang didesain presisi oleh tim hadigital untuk meningkatkan penetrasi target pasar, efisiensi waktu, dan keunggulan visual.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => setSelectedService(service)}
              className="bg-white/5 backdrop-blur-md border border-white/5 hover:border-blue-500/20 rounded-2xl p-6 relative group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5"
            >
              {/* Card Hover Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0066FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Service Header */}
              <div className="flex items-center space-x-4 mb-5">
                <div className="p-3 bg-white/5 border border-white/5 rounded-xl group-hover:scale-110 transition-transform">
                  {renderIcon(service.icon)}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-[11px] text-gray-500 font-mono">
                    {service.processingTime}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-400 line-clamp-3 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features snippet (first 3) */}
              <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                {service.features.slice(0, 3).map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span className="text-xs text-gray-300 truncate">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Details Action button */}
              <div className="flex items-center justify-end mt-auto pt-2 border-t border-white/5">
                <div className="flex items-center space-x-1 text-xs text-blue-400 font-semibold group-hover:text-white transition-colors">
                  <span>Lihat Detail Kelengkapan</span>
                  <ChevronRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Detail Service */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-150 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-[#0B1F3A]/85 backdrop-blur-md"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.3 }}
                className="relative bg-[#0B1F3A] border border-blue-500/20 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl z-20"
              >
                {/* Visual Header */}
                <div className="p-6 bg-gradient-to-r from-blue-900/30 to-[#0B1F3A] border-b border-white/5 relative">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                      {renderIcon(selectedService.icon)}
                    </div>
                    <div>
                      <span className="text-[10px] bg-blue-600/20 text-blue-400 font-bold tracking-widest px-2 py-0.5 rounded uppercase font-mono">
                        HADIGITAL CORE
                      </span>
                      <h3 className="font-semibold text-xl text-white mt-1">
                        {selectedService.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-6">
                  <div>
                    <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider mb-2">
                      DESKRIPSI SEKTOR
                    </h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {selectedService.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider mb-3">
                      YANG SUDAH INCLUDED (FITUR UTAMA)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedService.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start space-x-2">
                          <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                          <span className="text-xs text-gray-300 leading-tight">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Summary Metas */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5 font-mono">
                    <div>
                      <span className="text-[10px] text-gray-500 block uppercase font-bold">
                        WAKTU ESTIMASI PENGERJAAN
                      </span>
                      <div className="flex items-center space-x-1.5 mt-1 text-xs text-[#01F5FF] font-semibold">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{selectedService.processingTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="p-6 bg-white/5 border-t border-white/5 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                  <button
                    onClick={() => handleWhatsAppConsultation(selectedService.title)}
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-semibold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all shadow-md cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Konsul WhatsApp Gratis</span>
                  </button>
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      const contactSec = document.getElementById("estimator");
                      if (contactSec) {
                        contactSec.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="flex-1 py-3 px-4 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm text-center transition-colors cursor-pointer"
                  >
                    Kalkulasi Kustom
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
