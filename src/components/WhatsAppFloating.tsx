import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, MessageCircle } from "lucide-react";

export default function WhatsAppFloating() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after a brief 3-second delay on page load
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    // Auto-hide tooltip after 10 seconds to keep UI clean
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 12000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const waNumber = "6285716551653";
  const presetMessage = "Halo PT HADIGITAL, saya tertarik dengan layanan digital Anda. Boleh berkonsultasi?";
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(presetMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-3 max-w-[260px] bg-white text-slate-900 px-4 py-3 rounded-2xl shadow-2xl border border-slate-100 flex items-start gap-2.5 pointer-events-auto"
          >
            <div className="flex-1 text-left">
              <p className="text-[11px] font-mono font-bold text-[#00E5FF] uppercase tracking-wider mb-0.5">
                HADIGITAL Support
              </p>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Ada pertanyaan? Konsultasi gratis sekarang via WhatsApp!
              </p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600 p-0.5 rounded transition-colors cursor-pointer"
              title="Tutup"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative group p-4 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white shadow-2xl shadow-emerald-500/30 flex items-center justify-center hover:shadow-emerald-600/40 transition-all pointer-events-auto cursor-pointer"
        title="Hubungi WhatsApp"
      >
        {/* Pulsing visual glow rings */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/45 animate-ping opacity-75 pointer-events-none group-hover:opacity-100 duration-1000" />
        <span className="absolute -inset-1 rounded-full border border-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* WhatsApp Real Vector SVG */}
        <svg className="w-7 h-7 fill-current relative z-10" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.455L0 24zm6.59-4.846c1.6.95 3.473 1.452 5.38 1.453h.005c5.554 0 10.075-4.52 10.079-10.074.002-2.69-1.047-5.216-2.951-7.121C17.258 1.506 14.735.457 12.01.457c-5.55 0-10.069 4.52-10.073 10.073-.001 1.959.511 3.875 1.483 5.584l-.993 3.626 3.715-.974zm13.115-7.51c-.3-.15-1.771-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.777.975-.951 1.174-.176.2-.351.224-.652.074-.3-.15-1.264-.467-2.408-1.486-.889-.793-1.49-1.77-1.665-2.07-.176-.3-.019-.462.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525C11.159 7.02 10.51 5.43 10.235 4.77c-.268-.64-.539-.553-.739-.563-.19-.01-.408-.012-.627-.012-.218 0-.573.082-.873.407-.3.3-1.147 1.12-1.147 2.729s1.17 3.169 1.33 3.388c.16.22 2.3 3.511 5.572 4.922.778.336 1.386.537 1.861.688.783.249 1.496.214 2.06.13.628-.094 1.771-.724 2.022-1.424.25-.699.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
        </svg>
      </motion.a>
    </div>
  );
}
