import { motion } from "motion/react";
import { CheckCircle2, Award, Briefcase, ThumbsUp, Calendar, ArrowUpRight } from "lucide-react";

export default function About() {
  const stats = [
    {
      label: "Klien Puas",
      count: "100+",
      sub: "UMKM & Korporasi",
      icon: ThumbsUp,
      color: "from-blue-500 to-cyan-400"
    },
    {
      label: "Proyek Selesai",
      count: "200+",
      sub: "Integrasi Sukses",
      icon: Briefcase,
      color: "from-cyan-500 to-teal-400"
    },
    {
      label: "Tim Profesional",
      count: "15+",
      sub: "Tenaga Ahli Bersertifikat",
      icon: Award,
      color: "from-[#0066FF] to-blue-400"
    },
    {
      label: "Tahun Pengalaman",
      count: "5+",
      sub: "Sejak Tahun 2021",
      icon: Calendar,
      color: "from-blue-700 to-indigo-500"
    }
  ];

  const highlights = [
    "Pengembangan web berbasis performas tinggi, cepat, dan mobile-first.",
    "Copywriting pemasaran digital persuasi tinggi guna akselerasi konversi.",
    "Konsultasi IT, optimasi sistem infrastruktur, dan rancangan UI/UX berkelas.",
    "Integrasi pemasaran berbayar (Meta, Google, TikTok Ads) bersasaran mutakhir."
  ];

  return (
    <section id="tentang" className="relative py-24 bg-[#0B1F3A] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Copywriting & List */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-[11px] font-mono tracking-widest font-bold text-blue-400 uppercase">
                TENTANG KAMI
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Tentang PT HADIGITAL
              </h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
            </div>

            <div className="space-y-4 text-gray-300">
              <p className="text-base sm:text-lg leading-relaxed font-medium text-white/90">
                PT HADIGITAL OFFICIAL WEB merupakan perusahaan digital terdepan yang menyediakan solusi teknologi modern terintegrasi untuk membantu bisnis tumbuh pesat di era pasar digital.
              </p>
              <p className="text-sm leading-relaxed">
                Kami percaya teknologi modern harus dapat dinikmati oleh semua level usaha, dari mulai UMKM hingga korporat multinasional. Dengan gabungan tim pengembang perangkat lunak berpengalaman, perancang UI/UX tepercaya, dan tim pemasar andal, kami menghasilkan transformasi ekosistem digital yang konkrit dan berdampak komersial tinggi.
              </p>
            </div>

            {/* List checklist */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                MENGAPA MEMILIH PT HADIGITAL?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-300 leading-normal">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats Bento Squares Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:pl-4">
            {stats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-[#0066FF]/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
                >
                  {/* Decorative glowing background gradient */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-300" />
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                      <StatIcon className="w-6 h-6" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
                  </div>

                  <div className="space-y-1">
                    <span className="block font-display font-extrabold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-blue-200">
                      {stat.count}
                    </span>
                    <span className="block font-semibold text-sm text-white">
                      {stat.label}
                    </span>
                    <span className="block text-[11px] text-gray-400 font-mono">
                      {stat.sub}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
