import { Star, MessageSquare } from "lucide-react";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimoni" className="relative py-24 bg-[#0B1F3A]/90 overflow-hidden border-t border-white/5">
      {/* Glow background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[11px] font-mono tracking-widest font-bold text-blue-400 uppercase bg-blue-500/10 border border-blue-400/20 px-3 py-1 rounded-full">
            BERKAS TESTIMONI
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Cerita Sukses dari Klien Kami
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-gray-400">
            Dengarkan langsung dari para pelaku UMKM dan pemimpin bisnis bagaimana kolaborasi dengan PT HADIGITAL membantu merasionalkan operasional dan memacu tingkat penjualan.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-white/5 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-blue-500/15 hover:bg-white/10 transition-all duration-300 relative group"
            >
              {/* Background ambient quotation icon */}
              <div className="absolute top-6 right-6 opacity-5 flex justify-end text-blue-400 pointer-events-none">
                <MessageSquare className="w-16 h-16" />
              </div>

              {/* Stars summary */}
              <div className="flex items-center space-x-1 mb-5 text-amber-400">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Text review body */}
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic flex-1 mb-6">
                "{test.text}"
              </p>

              {/* Client Profile */}
              <div className="flex items-center space-x-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/10">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-xs sm:text-sm leading-snug">
                    {test.name}
                  </h4>
                  <span className="text-[11px] text-gray-400 font-mono block mt-0.5">
                    {test.role}, <span className="text-blue-400 font-semibold">{test.company}</span>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
