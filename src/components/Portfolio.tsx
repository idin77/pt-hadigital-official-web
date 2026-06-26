import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Calendar, User, Code, Tag } from "lucide-react";
import { PortfolioItem } from "../types";
import { portfolios } from "../data";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filters = [
    { key: "all", label: "Semua Proyek" },
    { key: "corporate", label: "Company Profile" },
    { key: "e-commerce", label: "E-Commerce" },
    { key: "service", label: "Salon & Jasa" },
    { key: "healthcare", label: "Klinik & Medis" },
    { key: "umkm", label: "Katalog UMKM" },
    { key: "landing-page", label: "Landing Page" }
  ];

  const filteredPortfolios = useMemo(() => {
    if (activeFilter === "all") return portfolios;
    return portfolios.filter((p) => p.categoryLabel === activeFilter);
  }, [activeFilter]);

  return (
    <motion.section
      id="portofolio"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative py-24 bg-[#0B1F3A] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#0066FF]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-[11px] font-mono tracking-widest font-bold text-blue-400 uppercase bg-blue-500/10 border border-blue-400/20 px-3 py-1 rounded-full">
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Karya Terbaik dari PT HADIGITAL
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-gray-400">
            Lihat bagaimana kami mentransformasi ide cemerlang menjadi platform fungsional bernilai konversi tinggi yang mendukung tujuan komersial klien kami.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              id={`filter-btn-${filter.key}`}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === filter.key
                  ? "bg-[#0066FF] text-white shadow-lg shadow-blue-500/20"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredPortfolios.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                id={`portfolio-card-${item.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(item)}
                className="bg-white/5 border border-white/5 hover:border-blue-500/20 rounded-2xl overflow-hidden group cursor-pointer relative shadow-lg"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6">
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-wider font-mono text-cyan-400 font-bold block">
                        {item.category}
                      </span>
                      <h4 className="text-white font-semibold text-lg">
                        {item.title}
                      </h4>
                      <div className="flex items-center space-x-3 text-xs font-semibold text-blue-400 mt-2">
                        <div className="flex items-center gap-1 group-hover:text-white transition-colors">
                          <span>Lihat Studi Kasus</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category tag on top corner */}
                  <div className="absolute top-4 left-4 bg-[#0B1F3A]/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full z-10">
                    <span className="text-[10px] text-gray-300 font-mono font-semibold-xs">
                      {item.category.split(" ")[0]}
                    </span>
                  </div>

                  {/* Hidden / Subtle elegant Live launch link directly on card */}
                  {item.liveUrl && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(item.liveUrl, "_blank", "noopener,noreferrer");
                      }}
                      title="Peluncuran Situs Langsung (Live Website)"
                      className="absolute top-4 right-4 bg-black/40 hover:bg-[#01F5FF] text-gray-300 hover:text-black backdrop-blur-md border border-white/10 p-2 rounded-full z-20 transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center shadow-lg"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Text Content */}
                <div className="p-6 space-y-3">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold block">
                    {item.client}
                  </span>
                  <h3 className="font-semibold text-base sm:text-lg text-white group-hover:text-[#01F5FF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.techStack.slice(0, 3).map((stack, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[9px] font-mono font-semibold bg-blue-500/5 text-blue-400 px-2 py-0.5 rounded border border-blue-500/10"
                      >
                        {stack}
                      </span>
                    ))}
                    {item.techStack.length > 3 && (
                      <span className="text-[9px] font-mono text-gray-400 px-2 py-0.5 rounded bg-white/5">
                        +{item.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-150 flex items-center justify-center p-4 overflow-y-auto">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-[#0B1F3A]/85 backdrop-blur-md"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3 }}
                className="relative bg-[#0B1F3A] border border-blue-500/20 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl z-20 my-8"
              >
                {/* Mock Browser Header */}
                <div className="bg-[#0B1F3A] border-b border-white/5 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    {selectedProject.liveUrl ? (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-gray-400 hover:text-[#01F5FF] font-mono ml-4 truncate max-w-[260px] hover:underline flex items-center gap-1"
                      >
                        <span>{selectedProject.liveUrl}</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    ) : (
                      <span className="text-[10px] text-gray-500 font-mono ml-4 truncate max-w-[200px]">
                        https://{selectedProject.id}.hadigital.com/preview
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Hero image wrapped as live preview mockup */}
                <div 
                  onClick={() => selectedProject.liveUrl && window.open(selectedProject.liveUrl, "_blank", "noopener,noreferrer")}
                  className="relative aspect-video w-full overflow-hidden bg-gray-950 border-b border-white/5 cursor-pointer group/modalimg"
                  title="Klik untuk membuka demo situs secara live"
                >
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover group-hover/modalimg:scale-[1.03] transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] to-transparent pointer-events-none" />
                  
                  {selectedProject.liveUrl && (
                    <div className="absolute top-4 right-4 bg-black/60 shadow-lg backdrop-blur-md border border-[#01F5FF]/30 px-3 py-1.5 rounded-xl text-white text-[10px] font-mono flex items-center space-x-1.5 group-hover/modalimg:bg-[#01F5FF] group-hover/modalimg:text-black transition-all">
                      <span>BUKA LIVE FITUR</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] font-mono tracking-widest bg-blue-600 text-white font-bold px-2 py-0.5 rounded uppercase">
                      STUDI KASUS AKTIF
                    </span>
                    <h3 className="font-semibold text-lg sm:text-2xl text-white mt-1">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Metadata Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/5">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-1.5 text-xs text-gray-400 font-mono">
                        <User className="w-3.5 h-3.5 text-blue-400" />
                        <span>KLIEN</span>
                      </div>
                      <span className="text-xs sm:text-sm text-white font-semibold">
                        {selectedProject.client}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center space-x-1.5 text-xs text-gray-400 font-mono">
                        <Tag className="w-3.5 h-3.5 text-blue-400" />
                        <span>KATEGORI</span>
                      </div>
                      <span className="text-xs sm:text-sm text-white font-semibold">
                        {selectedProject.category}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center space-x-1.5 text-xs text-gray-400 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        <span>TAHUN</span>
                      </div>
                      <span className="text-xs sm:text-sm text-white font-semibold">
                        {selectedProject.year}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center space-x-1.5 text-xs text-gray-400 font-mono">
                        <Code className="w-3.5 h-3.5 text-blue-400" />
                        <span>INTEGRASI</span>
                      </div>
                      <span className="text-xs sm:text-sm text-white font-semibold">
                        Standard API
                      </span>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="space-y-2 pt-4 border-t border-white/5">
                    <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                      TEKNOLOGI & EMBEDDED SYSTEM
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.techStack.map((stack, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-xs font-mono font-semibold bg-blue-500/10 text-cyan-400 px-3 py-1 rounded-lg border border-blue-500/15"
                        >
                          {stack}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer and trigger action */}
                <div className="p-6 bg-[#0B1F3A] border-t border-white/5 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      const textSpec = encodeURIComponent(`Halo PT HADIGITAL, saya melihat proyek portfolio *${selectedProject.title}* (${selectedProject.client}) dan tertarik membangun website dengan spesifikasi serupa. Bisakah kita berdiskusi?`);
                      window.open(`https://wa.me/6285722603355?text=${textSpec}`, "_blank", "noopener,noreferrer");
                    }}
                    className="flex-1 py-3 bg-[#01F5FF] hover:bg-cyan-400 text-black font-extrabold text-xs sm:text-sm rounded-xl text-center transition-all shadow-lg hover:shadow-cyan-500/20 cursor-pointer"
                  >
                    Ingin Proyek Seperti Ini
                  </button>
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 border border-cyan-400/20 hover:border-[#01F5FF] bg-white/5 hover:bg-cyan-500/10 text-[#01F5FF] text-xs sm:text-sm font-semibold rounded-xl text-center flex items-center justify-center space-x-1.5 transition-all cursor-pointer"
                    >
                      <span>Kunjungi Website Live</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="py-3 px-6 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold rounded-xl text-center transition-colors cursor-pointer"
                  >
                    Tutup
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </motion.section>
  );
}
