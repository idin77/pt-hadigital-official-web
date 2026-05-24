import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Calculator as CalcIcon, Check, ArrowRight, MessageSquare, RefreshCw, FileText } from "lucide-react";

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
}

interface ExtraFeature {
  id: string;
  name: string;
  price: number;
}

export default function Calculator() {
  const serviceOptions: ServiceOption[] = [
    { id: "landing", name: "Landing Page Promosi (One-Page)", basePrice: 1500000 },
    { id: "compro", name: "Company Profile Website Premium (Multi-Page)", basePrice: 3500000 },
    { id: "store", name: "E-Commerce / Toko Online Komplet", basePrice: 6000000 },
    { id: "custom", name: "Custom Web Application & Integration", basePrice: 8500000 },
    { id: "seo", name: "SEO Optimization Campaign (Per-Bulan)", basePrice: 2500000 }
  ];

  const pageMultipliers = [
    { label: "1 Halaman", factor: 1.0, addOn: 0 },
    { label: "2 - 5 Halaman", factor: 1.15, addOn: 500000 },
    { label: "6 - 10 Halaman", factor: 1.3, addOn: 1000000 },
    { label: "Lebih dari 10 Halaman", factor: 1.5, addOn: 2200000 }
  ];

  const extraFeatures: ExtraFeature[] = [
    { id: "pg", name: "Integrasi Payment Gateway (Midtrans/Xendit)", price: 2000000 },
    { id: "lang", name: "Sistem Multi-Bahasa (English & Indonesia)", price: 1500000 },
    { id: "seo-adv", name: "Optimasi Riset SEO & Indexing Google Instan", price: 1000000 },
    { id: "crm", name: "Dashboard CRM / Admin Panel khusus", price: 2500000 },
    { id: "copy", name: "Premium Copywriting & Upload Konten Lengkap", price: 800000 },
    { id: "speed", name: "Kecepatan Premium Speed Optimization (Lighthouse 95+)", price: 1200000 }
  ];

  const [selectedService, setSelectedService] = useState<string>("compro");
  const [selectedPageIdx, setSelectedPageIdx] = useState<number>(1);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["seo-adv", "copy"]);

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((item) => item !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const currentServiceObj = useMemo(() => {
    return serviceOptions.find((s) => s.id === selectedService) || serviceOptions[0];
  }, [selectedService]);

  const currentPageObj = useMemo(() => {
    return pageMultipliers[selectedPageIdx];
  }, [selectedPageIdx]);

  const currentFeaturesSum = useMemo(() => {
    return selectedFeatures.reduce((acc, featId) => {
      const feat = extraFeatures.find((f) => f.id === featId);
      return acc + (feat ? feat.price : 0);
    }, 0);
  }, [selectedFeatures]);

  const totalPrice = useMemo(() => {
    const base = currentServiceObj.basePrice;
    const factor = currentPageObj.factor;
    const pageAdd = currentPageObj.addOn;
    
    // For SEO service, page selection is ignored
    if (selectedService === "seo") {
      return base + currentFeaturesSum;
    }

    return Math.round(base * factor + pageAdd + currentFeaturesSum);
  }, [currentServiceObj, currentPageObj, currentFeaturesSum, selectedService]);

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(num);
  };

  const handleReset = () => {
    setSelectedService("compro");
    setSelectedPageIdx(1);
    setSelectedFeatures(["seo-adv", "copy"]);
  };

  const handleConsultSpecification = () => {
    const serviceName = currentServiceObj.name;
    const pagesLabel = selectedService === "seo" ? "N/A (Campagne SEO Bulanan)" : currentPageObj.label;
    const activeFeaturesList = selectedFeatures.map((fId) => {
      const feat = extraFeatures.find((f) => f.id === fId);
      return feat ? `- ${feat.name}` : "";
    }).filter(Boolean).join("\n");

    const messageText = `Halo PT HADIGITAL, saya menghitung estimasi kustom proyek web menggunakan *Kalkulator Tarif* pada website resmi.

Berikut rincian spesifikasi saya:
📌 *Layanan:* ${serviceName}
📄 *Struktur:* ${pagesLabel}
🛠️ *Fitur Tambahan:*
${activeFeaturesList || "- Tidak ada tambahan"}

💰 *Estimasi Total:* ${formatRupiah(totalPrice)}

Apakah saya bisa berkonsultasi gratis dan mendiskusikan langkah pengerjaannya?`;

    const cleanMsg = encodeURIComponent(messageText);
    window.open(`https://wa.me/6285282632984?text=${cleanMsg}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="estimator" className="relative py-24 bg-[#0B1F3A]/95 overflow-hidden border-t border-white/5">
      {/* Absolute visual patterns */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[11px] font-mono tracking-widest font-bold text-blue-400 uppercase bg-blue-500/10 border border-blue-400/20 px-3 py-1 rounded-full">
            INTERACTIVE ESTIMATOR
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Kalkulator Tarif Kustom Proyek Web Anda
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-[#0066FF] to-cyan-400 rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-gray-400">
            Dapatkan transparansi penuh terkait anggaran pengerjaan proyek digital Anda secara instan. Sesuaikan jenis layanan, kuantitas halaman, dan fitur khusus berikut.
          </p>
        </div>

        {/* Estimator Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Left Config Panel */}
          <div className="lg:col-span-7 bg-white/5 border border-white/5 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            
            {/* 1. Services selection */}
            <div className="space-y-3 text-left">
              <label className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest block">
                1. Pilih Kategori Layanan Utama
              </label>
              <div className="relative">
                <select
                  id="select-service-calc"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-[#0B1F3A] border border-white/10 hover:border-white/20 focus:border-blue-500 p-3.5 rounded-xl text-xs sm:text-sm text-white focus:outline-none cursor-pointer appearance-none transition-colors"
                >
                  {serviceOptions.map((s) => (
                    <option key={s.id} value={s.id} className="bg-[#0B1F3A]">
                      {s.name} ({formatRupiah(s.basePrice)})
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-blue-400">
                  <CalcIcon className="w-4 h-4 animate-pulse" />
                </div>
              </div>
            </div>

            {/* 2. Page counts - ignore if campaigns SEO */}
            {selectedService !== "seo" && (
              <div className="space-y-3 text-left">
                <label className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest block">
                  2. Estimasi Jumlah Halaman Web
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {pageMultipliers.map((multiplier, idx) => (
                    <button
                      key={idx}
                      id={`page-btn-${idx}`}
                      type="button"
                      onClick={() => setSelectedPageIdx(idx)}
                      className={`p-3.5 rounded-xl text-center border text-xs font-semibold flex flex-col items-center justify-center transition-all ${
                        selectedPageIdx === idx
                          ? "bg-[#0066FF] border-[#0066FF] text-white shadow-lg shadow-blue-500/10"
                          : "bg-white/5 border-white/5 text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <span className="block truncate max-w-full text-[11px] sm:text-xs">{multiplier.label}</span>
                      {multiplier.addOn > 0 && (
                        <span className="block text-[8px] opacity-75 mt-0.5 font-mono">
                          +{formatRupiah(multiplier.addOn)}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Extra features toggle checkpoints */}
            <div className="space-y-3 text-left">
              <label className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest block">
                3. Integrasi & Fitur Tambahan (Opsional)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {extraFeatures.map((feat) => {
                  const isActive = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      id={`extra-feat-${feat.id}`}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3.5 rounded-xl text-left border text-xs font-medium flex items-start justify-between transition-all cursor-pointer ${
                        isActive
                          ? "bg-blue-600/10 border-blue-500 text-blue-300"
                          : "bg-white/5 border-white/5 text-gray-400 hover:text-white"
                      }`}
                    >
                      <div className="space-y-0.5 max-w-[80%]">
                        <span className="block font-semibold truncate text-[11px] sm:text-xs text-white">{feat.name.split(" (")[0]}</span>
                        <span className="block text-[9px] text-gray-400 font-mono">+{formatRupiah(feat.price)}</span>
                      </div>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center mt-0.5 shrink-0 transition-colors ${
                        isActive ? "bg-[#0066FF] border-[#0066FF] text-white" : "border-white/20"
                      }`}>
                        {isActive && <Check className="w-3 h-3 text-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Reset button at bottom */}
            <div className="pt-4 border-t border-white/5 text-left flex justify-start">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center space-x-1.5 text-xs font-mono text-gray-400 hover:text-white transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Parameter Kalkulasi</span>
              </button>
            </div>

          </div>

          {/* Right Calculation Receipt Panel */}
          <div className="lg:col-span-5 bg-gradient-to-b from-blue-900/45 to-[#0B1F3A]/45 border border-blue-500/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-left relative overflow-hidden">
            {/* Ambient water stamp line */}
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <FileText className="w-48 h-48" />
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-[9px] bg-blue-600/20 text-cyan-400 font-mono font-bold tracking-widest px-2.5 py-1 rounded max-w-fit block uppercase">
                  ESTIMASI REKENING PROYEK
                </span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mt-3">
                  Rincian Anggaran Kustom Anda
                </h3>
                <span className="text-xs text-gray-400 block font-mono mt-1">Generated: Real-Time</span>
              </div>

              {/* Specs Breakdown Lines */}
              <div className="space-y-3 border-y border-white/10 py-5">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-400 font-semibold uppercase">Layanan Pokok</span>
                  <span className="text-white font-mono font-bold truncate max-w-[150px]" title={currentServiceObj.name}>
                    {currentServiceObj.name.split(" (")[0]}
                  </span>
                </div>
                {selectedService !== "seo" && (
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-400 font-semibold uppercase">Halaman Web</span>
                    <span className="text-white font-mono font-bold">{currentPageObj.label}</span>
                  </div>
                )}
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-400 font-semibold uppercase">Layanan Fitur (+{selectedFeatures.length})</span>
                  <span className="text-white font-mono font-bold">{formatRupiah(currentFeaturesSum)}</span>
                </div>
              </div>

              {/* Large Dynamic Pricing Showcase */}
              <div className="space-y-0.5">
                <span className="text-[10px] text-blue-400 font-mono tracking-wider font-bold uppercase block">
                  GRAND REKENING ESTIMATED
                </span>
                <span className="text-3xl sm:text-4xl font-display font-extrabold text-white block tracking-tight">
                  {formatRupiah(totalPrice)}
                </span>
                <span className="text-[10px] text-gray-400 leading-normal block pt-1.5 font-sans">
                  *Estimasi bersifat opsional dan fleksibel tergantung pada kompleksitas akhir saat masa diskusi fungsional bersama tim.
                </span>
              </div>
            </div>

            {/* Submit Action Grid */}
            <div className="pt-8 space-y-3">
              <button
                type="button"
                onClick={handleConsultSpecification}
                className="w-full py-4 rounded-xl bg-[#0066FF] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all shadow-lg shadow-blue-500/20 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Konsultasikan Spec ini via WA</span>
              </button>
              
              <div className="text-center font-mono">
                <span className="text-[10px] text-gray-500 block">
                  ✓ Konsultasi Awal & Storyboarding Gratis
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
