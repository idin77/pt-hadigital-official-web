import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Apa saja layanan utama PT HADIGITAL?",
    answer: "Kami menyediakan jasa pembuatan website profesional, optimasi SEO, pengembangan aplikasi web kustom, dan konsultasi strategi digital untuk meningkatkan bisnis Anda."
  },
  {
    question: "Berapa lama waktu pengerjaan sebuah website?",
    answer: "Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Umumnya website bisnis standar selesai dalam 2-4 minggu setelah materi diterima."
  },
  {
    question: "Apakah website yang dibuat sudah SEO friendly?",
    answer: "Ya, setiap website yang kami bangun dioptimasi dengan struktur SEO yang baik sejak awal agar lebih mudah ditemukan oleh mesin pencari seperti Google."
  },
  {
    question: "Apakah ada dukungan setelah website selesai?",
    answer: "Tentu. Kami menyediakan layanan pemeliharaan dan dukungan teknis untuk memastikan website Anda tetap aman, cepat, dan selalu diperbarui."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-[#0B1F3A]">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Pertanyaan Umum (FAQ)
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-white/10 transition-colors"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {activeIndex === index ? <Minus className="w-5 h-5 text-[#01F5FF]" /> : <Plus className="w-5 h-5 text-[#01F5FF]" />}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
