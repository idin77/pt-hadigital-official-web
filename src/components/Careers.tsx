import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building2, 
  MapPin, 
  Clock, 
  DollarSign, 
  Briefcase, 
  FileText, 
  X, 
  CheckCircle, 
  UploadCloud, 
  Send 
} from "lucide-react";
import { Career } from "../types";
import { careers } from "../data";

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<Career | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  
  // Form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      // Check if file is PDF / DOCX
      if (file.type === "application/pdf" || file.name.endsWith(".pdf") || file.name.endsWith(".docx") || file.name.endsWith(".doc")) {
        setSelectedFile(file);
      } else {
        alert("Silakan unggah dokumen berformat PDF atau Word (.doc/.docx)");
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const triggerFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !selectedFile) {
      alert("Harap lengkapi semua isian formulir yang wajib, termasuk file CV!");
      return;
    }

    // In a production server we would upload using FormData.
    // For our premium frontend sandbox, simulate a beautiful network load.
    setIsApplying(true);
    setTimeout(() => {
      setIsApplying(false);
      setIsSubmitted(true);
      // Reset form fields
      setFullName("");
      setEmail("");
      setPhone("");
      setPortfolioLink("");
      setSelectedFile(null);
    }, 1500);
  };

  return (
    <section id="karier" className="relative py-24 bg-[#0B1F3A] overflow-hidden border-t border-white/5">
      {/* Background glow lines */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[11px] font-mono tracking-widest font-bold text-blue-400 uppercase bg-blue-500/10 border border-blue-400/20 px-3 py-1 rounded-full">
            KABAR REKRUTMEN
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Mari Bertumbuh Bersama PT HADIGITAL
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-[#0066FF] to-cyan-400 rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-gray-400">
            Kami selalu mencari profesional kreatif, mandiri, penyuka inovasi, dan memiliki ambisi berkarir tingkat dunia. Lihat posisi terbuka kami di bawah.
          </p>
        </div>

        {/* Career Positions */}
        <div className="max-w-4xl mx-auto space-y-4">
          {careers.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="bg-white/5 border border-white/5 hover:border-blue-500/20 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 relative overflow-hidden"
            >
              {/* Job Basics */}
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-[10px] bg-blue-600/20 text-blue-400 font-bold px-2.5 py-1 rounded font-mono uppercase">
                    {job.department}
                  </span>
                  <span className="text-[10px] bg-white/5 text-gray-300 px-2.5 py-1 rounded font-mono uppercase">
                    {job.type}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                  {job.title}
                </h3>

                {/* Subinfo links */}
                <div className="flex flex-wrap gap-4 text-xs text-gray-400 font-mono">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-[#0066FF]" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{job.salaryRange.split(" - ")[0]} + Insentif</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="shrink-0">
                <button
                  id={`apply-btn-${job.id}`}
                  onClick={() => {
                    setSelectedJob(job);
                    setIsSubmitted(false);
                  }}
                  className="w-full md:w-auto px-5 py-3 rounded-xl bg-white/5 hover:bg-[#0066FF] border border-white/10 hover:border-transparent text-white text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer"
                >
                  Lihat Detail & Apply
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Detailed Application Modal / Slide Over */}
        <AnimatePresence>
          {selectedJob && (
            <div className="fixed inset-0 z-150 flex items-center justify-center p-4 overflow-y-auto">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedJob(null)}
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
                {/* Modal Header */}
                <div className="p-6 bg-gradient-to-r from-blue-900/30 to-[#0B1F3A] border-b border-white/5 flex items-center justify-between shrink-0">
                  <div>
                    <span className="text-[10px] text-blue-400 font-mono tracking-widest uppercase font-bold">
                      LOWONGAN DEPARTEMEN {selectedJob.department}
                    </span>
                    <h3 className="font-semibold text-lg sm:text-xl text-white mt-1">
                      {selectedJob.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal main context */}
                <div className="overflow-y-auto p-6 space-y-6">
                  {/* Job Specs */}
                  <div className="grid grid-cols-3 gap-2 bg-white/5 p-4 rounded-xl border border-white/5 font-mono text-center">
                    <div>
                      <span className="text-[9px] text-gray-500 block uppercase font-bold">LOKASI</span>
                      <span className="text-xs text-white mt-1 block font-semibold">{selectedJob.location}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-gray-500 block uppercase font-bold">JENIS KERJA</span>
                      <span className="text-xs text-cyan-400 mt-1 block font-semibold">{selectedJob.type}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-gray-500 block uppercase font-bold font-semibold">TARIF SALARY</span>
                      <span className="text-xs text-emerald-400 mt-1 block font-semibold truncate sm:w-auto" title={selectedJob.salaryRange}>
                        {selectedJob.salaryRange.split(" - ")[0]}
                      </span>
                    </div>
                  </div>

                  {/* Descriptions */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                      RINGKASAN PEKERJAAN
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {selectedJob.description}
                    </p>
                  </div>

                  {/* Requirements List */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                      PERSYARATAN UTAMA (REQUIREMENTS)
                    </h4>
                    <ul className="space-y-2">
                      {selectedJob.requirements.map((req, rIdx) => (
                        <li key={rIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-300 leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Responsibilities list */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                      TANGGUNG JAWAB UTAMA (RESPONSIBILITIES)
                    </h4>
                    <ul className="space-y-2">
                      {selectedJob.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-300 leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Application Form simulation */}
                  <div className="pt-6 border-t border-white/5 space-y-4">
                    <h4 className="text-xs font-mono font-bold text-[#0066FF] uppercase tracking-widest">
                      KIRIM LAMARAN ANDA INSTAN
                    </h4>

                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-center space-y-3"
                      >
                        <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                        <div>
                          <h5 className="font-bold text-white text-sm sm:text-base">Lamaran Terkirim Sukses!</h5>
                          <p className="text-xs text-gray-300 mt-1">
                            CV Anda telah diterima oleh sistem HRD PT HADIGITAL. Tim seleksi kami akan meninjau kualifikasi Anda dan menghubungi Anda via Email/WhatsApp dalam waktu dekat.
                          </p>
                        </div>
                        <button
                          onClick={() => setIsSubmitted(false)}
                          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                        >
                          Kirim Lamaran Baru
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmitApplication} className="space-y-4 text-left">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-xs text-gray-400 font-semibold uppercase block">
                              Nama Lengkap <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="text"
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              required
                              placeholder="Masukkan nama lengkap"
                              className="w-full bg-white/5 border border-white/10 hover:border-white/15 focus:border-blue-500 focus:outline-none p-2.5 rounded-lg text-xs sm:text-sm text-white transition-colors"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-xs text-gray-400 font-semibold uppercase block">
                              Alamat Email <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              placeholder="nama@email.com"
                              className="w-full bg-white/5 border border-white/10 hover:border-white/15 focus:border-blue-500 focus:outline-none p-2.5 rounded-lg text-xs sm:text-sm text-white transition-colors"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-xs text-gray-400 font-semibold uppercase block">
                              WhatsApp / Telepon <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              required
                              placeholder="Contoh: 0812345678"
                              className="w-full bg-white/5 border border-white/10 hover:border-white/15 focus:border-blue-500 focus:outline-none p-2.5 rounded-lg text-xs sm:text-sm text-white transition-colors"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-xs text-gray-400 font-semibold uppercase block">
                              Tautan Portfolio Web / LinkedIn
                            </label>
                            <input
                              type="url"
                              value={portfolioLink}
                              onChange={(e) => setPortfolioLink(e.target.value)}
                              placeholder="https://github.com/akun-mu"
                              className="w-full bg-white/5 border border-white/10 hover:border-white/15 focus:border-blue-500 focus:outline-none p-2.5 rounded-lg text-xs sm:text-sm text-white transition-colors"
                            />
                          </div>
                        </div>

                        {/* File CV Drop & Selection */}
                        <div className="space-y-1.5">
                          <label className="text-xs text-gray-400 font-semibold uppercase block">
                            Unggah Curriculum Vitae (.pdf / .docx) <span className="text-rose-500">*</span>
                          </label>
                          
                          <div
                            onDragEnter={handleDrag}
                            onDragOver={handleDrag}
                            onDragLeave={handleDrag}
                            onDrop={handleDrop}
                            onClick={triggerFileSelect}
                            className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors cursor-pointer flex flex-col items-center justify-center ${
                              dragActive
                                ? "border-blue-500 bg-blue-500/10"
                                : selectedFile 
                                ? "border-emerald-500 bg-emerald-500/5"
                                : "border-white/10 hover:border-white/20 bg-white/5"
                            }`}
                          >
                            <input
                              type="file"
                              ref={fileInputRef}
                              onChange={handleFileChange}
                              accept=".pdf,.docx,.doc"
                              className="hidden"
                            />

                            {selectedFile ? (
                              <div className="space-y-2">
                                <FileText className="w-8 h-8 text-emerald-400 mx-auto" />
                                <div>
                                  <span className="text-xs text-white block font-semibold truncate max-w-[300px]">
                                    {selectedFile.name}
                                  </span>
                                  <span className="text-[10px] text-gray-400 font-mono block">
                                    {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                                  </span>
                                </div>
                                <span className="text-[10px] text-emerald-400 font-mono font-bold block">
                                  ✓ Berhasil Dilampirkan (Klik untuk mengganti)
                                </span>
                              </div>
                            ) : (
                              <div className="space-y-2">
                                <UploadCloud className="w-8 h-8 text-gray-400 mx-auto" />
                                <p className="text-xs text-gray-300">
                                  Seret file CV Anda ke sini, atau <span className="text-blue-400 font-semibold">klik untuk telusuri berkas</span>
                                </p>
                                <span className="text-[10px] text-gray-500 block">
                                  Mendukung format PDF atau (.doc / .docx) maks 5MB
                                </span>
                              </div>
                            )}

                          </div>
                        </div>

                        {/* Submit Lamaran */}
                        <button
                          type="submit"
                          disabled={isApplying}
                          className="w-full py-3 bg-gradient-to-r from-[#0066FF] to-cyan-500 hover:from-blue-600 hover:to-cyan-400 text-white font-semibold text-xs sm:text-sm rounded-xl flex items-center justify-center space-x-2 transition-all shadow-lg cursor-pointer"
                        >
                          <Send className="w-4 h-4" />
                          <span>{isApplying ? "Mengunggah CV Anda..." : "Kirim Lamaran Kerja Sekarang"}</span>
                        </button>

                      </form>
                    )}

                  </div>
                </div>

                {/* Footer buttons */}
                <div className="p-4 bg-white/5 border-t border-white/5 flex justify-end">
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="py-2 px-5 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Tutup Detail
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
