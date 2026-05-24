import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, User, Clock, ArrowRight, Share2, MessageCircle } from "lucide-react";
import { Article } from "../types";
import { articles } from "../data";

const parseBoldText = (text: string) => {
  const parts = text.split(/\*\*([^*]+)\*\*/g);
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return (
        <strong key={index} className="font-extrabold text-[#01F5FF]">
          {part}
        </strong>
      );
    }
    return part;
  });
};

const renderArticleContent = (content: string) => {
  const lines = content.split("\n");
  let listBuffer: React.ReactNode[] = [];
  const renderedElements: React.ReactNode[] = [];

  const flushList = (key: string | number) => {
    if (listBuffer.length > 0) {
      renderedElements.push(
        <div key={`list-group-${key}`} className="space-y-2.5 my-4 pl-1">
          {...listBuffer}
        </div>
      );
      listBuffer = [];
    }
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList(idx);
      renderedElements.push(<div key={`empty-${idx}`} className="h-4" />);
      return;
    }

    // Subheaders ##
    if (trimmed.startsWith("## ")) {
      flushList(idx);
      renderedElements.push(
        <h3
          key={`h2-${idx}`}
          className="text-lg sm:text-xl font-bold text-white mt-8 mb-4 border-l-4 border-[#01F5FF] pl-4 font-display tracking-tight"
        >
          {parseBoldText(trimmed.replace("## ", ""))}
        </h3>
      );
      return;
    }

    // Subheaders ###
    if (trimmed.startsWith("### ")) {
      flushList(idx);
      renderedElements.push(
        <h4
          key={`h3-${idx}`}
          className="text-base sm:text-lg font-bold text-[#01F5FF] mt-6 mb-3 font-display"
        >
          {parseBoldText(trimmed.replace("### ", ""))}
        </h4>
      );
      return;
    }

    // Bullets - or *
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const pureText = trimmed.replace(/^[-*]\s+/, "");
      listBuffer.push(
        <div key={`bullet-${idx}`} className="flex items-start space-x-3 text-gray-300 text-sm sm:text-base leading-relaxed">
          <span className="text-[#01F5FF] text-lg leading-none mt-0.5 shrink-0">•</span>
          <span className="flex-1">{parseBoldText(pureText)}</span>
        </div>
      );
      return;
    }

    // Numbered lists e.g. "1. "
    const orderedMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
    if (orderedMatch) {
      const num = orderedMatch[1];
      const pureText = orderedMatch[2];
      listBuffer.push(
        <div key={`ordered-${idx}`} className="flex items-start space-x-3 text-gray-300 text-sm sm:text-base leading-relaxed">
          <span className="font-mono text-[#01F5FF] font-bold shrink-0 mt-0.5">{num}.</span>
          <span className="flex-1">{parseBoldText(pureText)}</span>
        </div>
      );
      return;
    }

    // Normal paragraph
    flushList(idx);
    renderedElements.push(
      <p key={`p-${idx}`} className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 font-normal">
        {parseBoldText(trimmed)}
      </p>
    );
  });

  flushList("final");
  return renderedElements;
};

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleShare = (title: string) => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: `Baca artikel edukasi digital dari PT HADIGITAL: ${title}`,
        url: window.location.href
      }).catch((err) => console.log(err));
    } else {
      // Fallback
      const text = encodeURIComponent(`Baca artikel menarik: "${title}" di PT HADIGITAL.`);
      window.open(`https://wa.me/?text=${text}`, "_blank");
    }
  };

  return (
    <section id="artikel" className="relative py-24 bg-[#0B1F3A]/95 overflow-hidden border-t border-white/5">
      {/* Background visual accents */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[11px] font-mono tracking-widest font-bold text-blue-400 uppercase bg-blue-500/10 border border-blue-400/20 px-3 py-1 rounded-full">
            EDUKASI & INSIGHTS
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Artikel Terkini PT HADIGITAL
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-gray-400">
            Temukan wawasan terbaru, panduan praktis, dan tren teknologi mutakhir langsung dari analis industri kami guna mendukung akselerasi digital usaha Anda.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedArticle(article)}
              className="bg-white/5 border border-white/5 hover:border-blue-500/20 rounded-2xl overflow-hidden group cursor-pointer relative flex flex-col h-full shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#0066FF] px-3 py-1 rounded-full">
                  <span className="text-[10px] text-white font-mono font-bold tracking-wider uppercase">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Text Meta */}
              <div className="p-6 flex flex-col flex-1 space-y-3">
                <div className="flex items-center space-x-4 text-[10px] text-gray-400 font-mono">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-semibold text-base sm:text-lg text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 leading-relaxed flex-1">
                  {article.summary}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 font-bold text-xs flex items-center justify-center text-blue-400 font-mono">
                      {article.author.charAt(0)}
                    </div>
                    <span className="text-[11px] text-gray-300 font-mono truncate max-w-[120px]">
                      {article.author.split(",")[0]}
                    </span>
                  </div>

                  <span className="inline-flex items-center text-xs font-semibold text-blue-400 group-hover:text-white transition-all space-x-1">
                    <span>Baca</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>

            </motion.article>
          ))}
        </div>

        {/* Article Reader Modal */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 z-150 flex items-center justify-center p-4 overflow-y-auto">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedArticle(null)}
                className="fixed inset-0 bg-[#0B1F3A]/85 backdrop-blur-md"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3 }}
                className="relative bg-[#0B1F3A] border border-blue-500/20 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl z-20 my-8 flex flex-col max-h-[90vh]"
              >
                {/* Fixed Reader Header */}
                <div className="p-4 bg-gradient-to-r from-blue-900/40 to-[#0B1F3A] border-b border-white/5 flex items-center justify-between shrink-0">
                  <span className="text-[10px] text-cyan-400 font-mono uppercase tracking-widest font-bold">
                    HADIGITAL EDUCATION READER
                  </span>
                  <div className="flex items-center space-x-1.5">
                    <button
                      onClick={() => handleShare(selectedArticle.title)}
                      className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                      title="Bagikan"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setSelectedArticle(null)}
                      className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Scrollable Context Panel */}
                <div className="overflow-y-auto p-6 space-y-6">
                  {/* Article Title Header */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-semibold bg-blue-600/20 text-blue-400 px-2.5 py-1 rounded font-mono uppercase block w-fit">
                      {selectedArticle.category}
                    </span>
                    <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                      {selectedArticle.title}
                    </h2>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 font-mono py-1.5 border-y border-white/5">
                      <div className="flex items-center space-x-1.5">
                        <User className="w-3.5 h-3.5 text-blue-400" />
                        <span>Penulis: {selectedArticle.author}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        <span>{selectedArticle.date}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Clock className="w-3.5 h-3.5 text-blue-400" />
                        <span>Estimasi: {selectedArticle.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Picture Banner */}
                  <div className="rounded-xl overflow-hidden aspect-video w-full">
                    <img
                      src={selectedArticle.image}
                      alt={selectedArticle.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Article Markdown simulated body text */}
                  <div className="space-y-1">
                    {renderArticleContent(selectedArticle.content)}
                  </div>
                </div>

                {/* Reader Footer Panel */}
                <div className="p-6 bg-white/5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between shrink-0 gap-4">
                  <div className="text-left w-full sm:w-auto">
                    <span className="text-[10px] text-gray-400 font-mono block">INGIN KONSULTASI DIGITAL?</span>
                    <span className="text-xs text-gray-300">Hubungi tim PT HADIGITAL sekarang untuk berwacana gratis.</span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedArticle(null);
                      const text = encodeURIComponent(`Halo PT HADIGITAL, saya baru saja membaca artikel *"${selectedArticle.title}"* dan ingin berdiskusi lebih lanjut mengenai strategi serupa.`);
                      window.open(`https://wa.me/6285722603355?text=${text}`, "_blank", "noopener,noreferrer");
                    }}
                    className="w-full sm:w-auto py-2.5 px-4 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white text-xs font-semibold rounded-lg flex items-center justify-center space-x-1.5 shadow-md cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Diskusikan di WA</span>
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
