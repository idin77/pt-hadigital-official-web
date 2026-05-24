import React from "react";
import { motion } from "motion/react";
import { Check, Zap, MessageSquare, ShieldCheck, Heart, Sparkles } from "lucide-react";

interface PricingPackage {
  id: string;
  name: string;
  price: string;
  dp: string;
  desc: string;
  features: string[];
  footerNote: string;
  footerColor: string;
  isPopular: boolean;
  accentColor: string;
  gradient: string;
}

export default function Pricing() {
  const packages: PricingPackage[] = [
    {
      id: "silver",
      name: "PAKET SILVER",
      price: "Rp 700.000",
      dp: "DP Rp 400.000",
      desc: "Cocok untuk UMKM & Portofolio Personal",
      features: [
        "4 Judul Menu Utama",
        "Domain Resmi .web.id (1 Thn)",
        "Cloud Hosting Cepat",
        "Keamanan SSL (HTTPS)",
        "Tombol WhatsApp Otomatis",
        "Tampilan Responsif HP & Laptop"
      ],
      footerNote: "Estimasi Selesai 24 Jam!",
      footerColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      isPopular: false,
      accentColor: "#94A3B8",
      gradient: "from-slate-500/20 to-transparent"
    },
    {
      id: "gold",
      name: "PAKET GOLD",
      price: "Rp 1.600.000",
      dp: "DP Rp 700.000",
      desc: "Cocok untuk Perusahaan & Agensi",
      isPopular: true,
      features: [
        "Hingga 8 Judul Menu Kustom",
        "Domain Premium .com / .id (1 Thn)",
        "Cloud Hosting Premium 3 GB",
        "Security Suite & Backup Data",
        "Google Maps & Form Kontak",
        "Copywriting Bisnis Premium"
      ],
      footerNote: "Optimasi Struktur Data Modern!",
      footerColor: "text-[#01F5FF] bg-cyan-500/10 border-cyan-500/20",
      accentColor: "#01F5FF",
      gradient: "from-[#0A84FF]/25 via-[#01F5FF]/10 to-transparent"
    },
    {
      id: "platinum",
      name: "PAKET PLATINUM",
      price: "Rp 3.000.000",
      dp: "DP Rp 1.500.000",
      desc: "Cocok untuk Enterprise & Portal Besar",
      features: [
        "15-20 Judul Menu Kustom",
        "Bebas Pilih Domain Premium",
        "Private Cloud Dedicated 5 GB",
        "Advanced Security & Anti-DDoS",
        "Integrasi Sistem API Kustom",
        "Desain Eksklusif UI/UX Premium"
      ],
      footerNote: "Infrastruktur & Automasi Modern!",
      footerColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      isPopular: false,
      accentColor: "#EF4444",
      gradient: "from-red-500/20 to-transparent"
    }
  ];

  const handleOrder = (pkg: PricingPackage) => {
    const message = `Halo PT HADIGITAL, saya ingin berkonsultasi mengenai *${pkg.name}* (${pkg.price}) yang tertera di website.

Spesifikasi Paket:
- ${pkg.desc}
- Uang Muka: ${pkg.dp}
- Estimasi / Keunggulan: ${pkg.footerNote}

Mohon informasi mengenai cara pemesanan dan alur pengerjaannya. Terima kasih!`;
    
    const waUrl = `https://wa.me/6285722603355?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="paket" className="relative py-24 bg-[#0B1F3A] overflow-hidden border-t border-white/5">
      {/* Visual Accents matching our futuristic brand */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[11px] font-mono tracking-widest font-bold text-[#01F5FF] uppercase bg-cyan-500/5 border border-[#01F5FF]/15 px-4 py-1.5 rounded-full">
            HARGA & PAKET
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Pilih Paket Pembuatan Website Anda
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#0A84FF] to-[#01F5FF] rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-gray-400">
            Dapatkan website profesional dengan teknologi premium, domain resmi, hosting cepat, dan optimasi modern siap pakai sesuai kebutuhan bisnis Anda.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              id={`pricing-card-${pkg.id}`}
              className={`relative flex flex-col justify-between bg-white/[0.03] backdrop-blur-md rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                pkg.isPopular
                  ? "border-2 border-[#01F5FF] shadow-2xl shadow-cyan-500/10 md:-translate-y-4 z-10"
                  : "border border-white/10 hover:border-white/20"
              }`}
            >
              {/* Highlight Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-b ${pkg.gradient} opacity-40 rounded-2xl pointer-events-none`} />

              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0A84FF] to-[#01F5FF] text-black font-black text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg flex items-center space-x-1">
                  <Sparkles className="w-3 h-3 fill-current" />
                  <span>TERPOPULER</span>
                </div>
              )}

              {/* Title, Description & Pricing */}
              <div className="relative z-10 text-center pb-6 border-b border-white/5">
                <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-gray-400">
                  {pkg.name} {pkg.isPopular && <span className="text-[#01F5FF]">(POPULER)</span>}
                </span>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-white mt-3 mb-1">
                  {pkg.price}
                </h3>
                <span className="inline-block text-[11px] font-mono font-bold text-gray-400 bg-white/5 border border-white/10 rounded px-2.5 py-0.5 mb-3">
                  {pkg.dp}
                </span>
                <p className="text-xs sm:text-sm text-gray-300 font-medium italic min-h-[20px]">
                  {pkg.desc}
                </p>
              </div>

              {/* Features List */}
              <div className="relative z-10 pt-6 pb-8 flex-grow">
                <ul className="space-y-3.5">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-gray-300">
                      <div className={`p-0.5 rounded-full shrink-0 mt-0.5 bg-cyan-400/10 text-[#01F5FF]`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom badge note */}
              <div className="relative z-10 mt-auto space-y-4">
                <div className={`w-full py-2.5 px-4 rounded-xl border text-xs font-semibold text-center flex items-center justify-center space-x-2 ${pkg.footerColor}`}>
                  <Zap className="w-3.5 h-3.5 fill-current animate-pulse" />
                  <span>{pkg.footerNote}</span>
                </div>

                <button
                  id={`btn-order-${pkg.id}`}
                  onClick={() => handleOrder(pkg)}
                  className={`w-full py-3.5 font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-cyan-500/10 cursor-pointer ${
                    pkg.isPopular
                      ? "bg-gradient-to-r from-[#0A84FF] to-[#01F5FF] text-black hover:opacity-90"
                      : "bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Hubungi untuk Memesan</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small Trust Footer inside the Pricing Grid */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left bg-white/5 hover:bg-white/[0.07] border border-white/5 rounded-2xl p-6 transition-all">
          <div className="p-3 bg-cyan-500/10 text-[#01F5FF] rounded-xl shrink-0">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <h4 className="text-white font-bold text-sm sm:text-base">Garansi Transparansi HADIGITAL & Service Level Agreement</h4>
            <p className="text-xs text-gray-400 leading-normal max-w-2xl mt-0.5">
              Semua paket sudah terintegrasi penuh secara responsif, menggunakan framework mutakhir bebas error, dilengkapi panduan administrasi, dan mendapat dukungan pasca-rilis eksklusif.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
