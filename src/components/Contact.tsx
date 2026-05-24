import React, { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userMsg, setUserMsg] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmitContactForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userEmail || !userPhone || !userMsg) {
      alert("Harap lengkapi semua isian formulir!");
      return;
    }

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
      setUserName("");
      setUserEmail("");
      setUserPhone("");
      setUserMsg("");
    }, 1200);
  };

  const handleCTAWhatsApp = () => {
    const textStr = encodeURIComponent("Halo PT HADIGITAL! Saya melihat penawaran menarik di website Anda dan ingin segera memulai kerja sama bisnis.");
    window.open("https://wa.me/6285722603355?text=" + textStr, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="kontak" className="relative bg-[#0B1F3A] overflow-hidden">
      
      {/* 1. Main Contact Form & Context Area */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[11px] font-mono tracking-widest font-bold text-blue-400 uppercase bg-blue-500/10 border border-blue-400/20 px-3 py-1 rounded-full">
            SALURAN INFORMASI
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Hubungi Tim PT HADIGITAL
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-gray-400">
            Punya pertanyaan mengenai layanan kami atau ingin langsung memesan sistem? Sampaikan pesan kustom Anda di bawah.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-center text-left">
            <div className="space-y-4">
              <h3 className="font-display font-extrabold text-2xl text-white tracking-tight">
                Diskusikan Rencana Digitalisasi Anda Sekarang
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Tim teknis kami siap memberikan konsultasi fungsional menyeluruh secara gratis, memetakan mockup sitemap, dan merancang strategi komprehensif bagi bisnis Anda.
              </p>
            </div>

            {/* Anchors card list */}
            <div className="space-y-4">
              
              {/* WhatsApp direct */}
              <a
                href="https://wa.me/6285722603355"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-white/5 hover:bg-[#01F5FF]/10 border border-white/5 hover:border-[#01F5FF]/10 rounded-xl transition-all group"
              >
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block font-mono">WHATSAPP CHAT (FAST RESPONSE)</span>
                  <span className="text-sm font-semibold text-white block mt-0.5">085722603355</span>
                </div>
              </a>

              {/* Email direct */}
              <a
                href="mailto:offocialhadigital@gmail.com"
                className="flex items-center space-x-4 p-4 bg-white/5 hover:bg-[#0066FF]/10 border border-white/5 hover:border-blue-500/10 rounded-xl transition-all group"
              >
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block font-mono">SUREL EMAIL RESMI</span>
                  <span className="text-xs sm:text-sm font-semibold text-white block mt-0.5 break-all">
                    offocialhadigital@gmail.com
                  </span>
                </div>
              </a>

              {/* Location direct */}
              <div className="flex items-center space-x-4 p-4 bg-white/5 border border-white/5 rounded-xl">
                <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block font-mono">ALAMAT HEADQUARTERS</span>
                  <span className="text-xs sm:text-sm font-semibold text-white block mt-0.5">
                    Jakarta Barat, DKI Jakarta, Indonesia
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right inquiry form column */}
          <div className="lg:col-span-7 bg-white/5 border border-white/5 p-6 sm:p-8 rounded-2xl flex flex-col justify-center text-left">
            {isSuccess ? (
              <div className="text-center p-6 space-y-4">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                <div className="space-y-1">
                  <h4 className="font-bold text-white text-base sm:text-lg">Pesan Terkirim Sukses!</h4>
                  <p className="text-xs text-gray-400">
                    Sistem CRM internal kami telah mencatat pesan Anda. Sales PT HADIGITAL akan segera menghubungi Anda kembali dalam tempo kurang dari 24 jam kerja.
                  </p>
                </div>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-4 py-2 bg-[#0066FF] hover:bg-blue-600 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Kirim Pesan Lainnya
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitContactForm} className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block">
                    KIRIM PESAN LANGSUNG
                  </span>
                  <p className="text-xs text-gray-400">Isi formulir ringkas di bawah ini.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs text-gray-400 font-semibold uppercase">Nama Anda</label>
                    <input
                      type="text"
                      required
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Masukkan nama Anda"
                      className="w-full bg-[#0B1F3A] border border-white/10 focus:border-blue-500 p-2.5 rounded-lg text-xs sm:text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-gray-400 font-semibold uppercase">Nomor WhatsApp</label>
                    <input
                      type="tel"
                      required
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                      placeholder="0812345xxx"
                      className="w-full bg-[#0B1F3A] border border-white/10 focus:border-blue-500 p-2.5 rounded-lg text-xs sm:text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-gray-400 font-semibold uppercase">Alamat Surat Email</label>
                  <input
                    type="email"
                    required
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="nama@email.com"
                    className="w-full bg-[#0B1F3A] border border-white/10 focus:border-blue-500 p-2.5 rounded-lg text-xs sm:text-sm text-white focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-gray-400 font-semibold uppercase">Pesan / Detail Kebutuhan Proyek</label>
                  <textarea
                    rows={4}
                    required
                    value={userMsg}
                    onChange={(e) => setUserMsg(e.target.value)}
                    placeholder="Halo, saya ingin membuat website Profil Perusahaan untuk industri salon say..."
                    className="w-full bg-[#0B1F3A] border border-white/10 focus:border-blue-500 p-2.5 rounded-lg text-xs sm:text-sm text-white focus:outline-none resize-none transition-colors font-sans"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3 bg-gradient-to-r from-[#0066FF] to-cyan-500 hover:from-blue-600 hover:to-cyan-400 text-white font-semibold text-xs sm:text-sm rounded-xl flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-cyan-500/10 cursor-pointer animate-pulse-slow"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSending ? "Sedang Mengirim..." : "Kirim Pesan Sekarang"}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* 2. Stunning full-width CTA banner at the bottom with real background gradient */}
      <div 
        id="cta-section"
        className="relative bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-500 py-16 text-center text-white border-y border-white/5 px-4"
      >
        <div className="absolute inset-0 bg-radial-[circle_70%_at_50%_50%] from-blue-700/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 w-full">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
            Siap Meningkatkan Bisnis Anda?
          </h2>
          <p className="text-sm sm:text-base text-white/85 max-w-xl mx-auto leading-relaxed">
            Dapatkan diskon promosi bundling pembuatan website + optimasi SEO Google bulan ini. Hubungi kami sekarang dan pastikan brand Anda mendominasi Google.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              id="cta-whatsapp-btn"
              onClick={handleCTAWhatsApp}
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#0B1F3A] font-extrabold text-sm rounded-xl hover:bg-gray-100 transition-all shadow-xl shadow-black/15 flex items-center justify-center space-x-2.5 group cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
              <span>Hubungi Sekarang (WhatsApp)</span>
            </button>
            <span className="text-xs sm:text-sm font-mono text-white/95 tracking-wide uppercase font-semibold">
              Call WA CS: <span className="underline decoration-cyan-300 font-bold">085722603355</span>
            </span>
          </div>
        </div>
      </div>

    </section>
  );
}
