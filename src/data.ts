import { Service, PortfolioItem, Article, Career, Testimonial } from "./types";

export const services: Service[] = [
  {
    id: "web-dev",
    title: "Website Development",
    description: "Membangun sistem web, aplikasi web, dan platform digital kustom yang cepat, andal, aman, dan siap menunjang operasional bisnis skala besar.",
    icon: "Globe",
    features: [
      "Teknologi modern (React, Next.js, Node.js)",
      "Desain UI/UX Eksklusif & Kustom",
      "Sistem Keamanan SSL & Proteksi DDoS",
      "Integrasi API & Database Lanjutan",
      "Dashboard Admin untuk Kelola Data"
    ],
    priceRange: "Mulai Rp 7.500.000",
    processingTime: "14 - 30 Hari Kerja"
  },
  {
    id: "company-profile",
    title: "Company Profile Website",
    description: "Website profil perusahaan premium dengan desain elegan untuk meningkatkan kredibilitas, memikat klien baru, dan menampilkan visi misi secara profesional.",
    icon: "Briefcase",
    features: [
      "Desain Elegan, Clean & Modern",
      "Optimasi Kecepatan Loading super cepat",
      "Halaman Interaktif (Layanan, Karir, Kontak)",
      "Terhubung WhatsApp & Email domain",
      "Mudah diedit tanpa harus mengerti kode"
    ],
    priceRange: "Mulai Rp 3.500.000",
    processingTime: "7 - 14 Hari Kerja"
  },
  {
    id: "landing-page",
    title: "Landing Page Promosi",
    description: "Halaman penjualan responsif berkonversi tinggi yang dirancang khusus untuk meningkatkan penjualan produk atau pendaftaran layanan Anda secara instan.",
    icon: "Tablet",
    features: [
      "Struktur Copywriting Hipnotik & Persuasif",
      "Analitik Konversi & Integrasi FB Pixel",
      "Call To Action (CTA) yang Mencolok",
      "Mobile Friendly & Desain Menarik",
      "Desain satu halaman fokus konversi"
    ],
    priceRange: "Mulai Rp 1.500.000",
    processingTime: "3 - 5 Hari Kerja"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Kampanye iklan berbayar (Meta Ads, Google Ads, TikTok Ads) bertarget untuk menjangkau jutaan prospek potensial dan mendongkrak penjualan bisnis Anda.",
    icon: "TrendingUp",
    features: [
      "Penyusunan Strategi & Riset Audiens",
      "Copywriting Komersial Premium",
      "Pemantauan & Optimasi Iklan Harian",
      "Laporan Kinerja Transparan Bulanan",
      "Retargeting Strategis Prospektif"
    ],
    priceRange: "Mulai Rp 2.000.000 / bln",
    processingTime: "Berlangganan Bulanan"
  },
  {
    id: "video-ads",
    title: "Video Iklan Profesional",
    description: "Produksi video berkualitas tinggi untuk keperluan iklan, materi branding, atau profil produk yang dikemas secara estetik, modern, dan sinematik.",
    icon: "Video",
    features: [
      "Riset Konsep & Pembuatan Storyboard",
      "Pengambilan Gambar atau Editing Premium",
      "Efek Transisi & Color Grading Sinematik",
      "Voice Over Profesional & Musik Bebas Lisensi",
      "Format optimal untuk Instagram, TikTok & YouTube"
    ],
    priceRange: "Mulai Rp 2.500.000",
    processingTime: "5 - 10 Hari Kerja"
  },
  {
    id: "seo",
    title: "SEO & Optimasi Google",
    description: "Layanan optimasi mesin pencari organik untuk memastikan kata kunci bisnis utama Anda menempati peringkat teratas di Google, mendatangkan trafik pasif gratis.",
    icon: "Search",
    features: [
      "Audit Teknis SEO Website Menyeluruh",
      "Riset Keyword dengan Volume Tinggi",
      "Optimasi On-Page (Metastruktur, Content)",
      "Strategi Link Building Berkualitas (Off-Page)",
      "Peningkatan Kecepatan Inti Google Core Web Vitals"
    ],
    priceRange: "Mulai Rp 2.500.000 / bln",
    processingTime: "Kontrak Minimal 3 Bulan"
  }
];

export const portfolios: PortfolioItem[] = [
  {
    id: "port-1",
    title: "Website Salon",
    category: "Service & Booking App",
    categoryLabel: "service",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800",
    description: "Aplikasi booking online & profil interaktif untuk salon kecantikan bintang lima. Klien dapat menjadwalkan kunjungan, memilih stylist, dan melakukan pembayaran uang muka via payment gateway langsung di website.",
    client: "Aura Premium Salon & Spa",
    year: "2025",
    techStack: ["React", "Tailwind CSS", "NodeJS", "Express", "Midtrans"],
    liveUrl: "https://salon-mockup.hadigital.com"
  },
  {
    id: "port-2",
    title: "Website Klinik",
    category: "Medical & Health Tech",
    categoryLabel: "healthcare",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    description: "Sistem reservasi konsultasi dokter, integrasi data obat-obatan, dan rekam medis pasien terenkripsi. Membantu klinik meningkatkan efisiensi operasional harian hingga 60%.",
    client: "Medika Sejahtera Clinic",
    year: "2026",
    techStack: ["Next.js", "Tailwind CSS", "Firebase Auth", "Firestore"],
    liveUrl: "https://klinik-modern.hadigital.com"
  },
  {
    id: "port-3",
    title: "Website Konveksi",
    category: "Custom E-Commerce & Catalog",
    categoryLabel: "e-commerce",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800",
    description: "Website katalog produk konveksi dengan sistem kalkulator harga kustom otomatis berdasarkan jumlah pesanan, jenis bahan pakaian, dan jumlah warna sablon/bordir.",
    client: "Utama Garment Indonesia",
    year: "2025",
    techStack: ["Vite.js", "Tailwind CSS", "Radix UI", "Interactivity API"],
    liveUrl: "https://utama-garment.hadigital.com"
  },
  {
    id: "port-4",
    title: "Website Company Profile",
    category: "Corporate Profile Website",
    categoryLabel: "corporate",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    description: "Profil perusahaan konstruksi & real estate terkemuka dengan interface visual bento-grid yang modern, presentasi video udara (drone), dan navigasi portfolio proyek interaktif.",
    client: "PT Wijaya Realtindo",
    year: "2026",
    techStack: ["React", "Framer Motion", "Tailwind CSS", "EmailJS"],
    liveUrl: "https://wijaya-realtindo.hadigital.com"
  },
  {
    id: "port-5",
    title: "Website UMKM",
    category: "Smart Catalog & Ordering",
    categoryLabel: "umkm",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
    description: "Platform toko kelontong digital / katalog produk pangan lokal dengan dashboard integrasi ekspedisi kurir lokal dan checkout langsung terhubung ke WhatsApp penjual.",
    client: "Koperasi Pangan Nusantara",
    year: "2025",
    techStack: ["Vite.js", "Tailwind CSS", "WhatsApp Cloud Link"],
    liveUrl: "https://pangan-nusantara.hadigital.com"
  },
  {
    id: "port-6",
    title: "Landing Page Produk",
    category: "Marketing & Lead Gen Landing Page",
    categoryLabel: "landing-page",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    description: "Landing page penjualan produk gawai audio premium dengan integrasi live customer chat, review bintang beranimasi, sistem flash-sale timer, dan tombol checkout ekspres.",
    client: "SonicBoom Audio Ltd",
    year: "2025",
    techStack: ["HTML5", "CSS Grid", "Tailwind CSS", "A/B Analytics"],
    liveUrl: "https://sonic-boom.hadigital.com"
  }
];

export const articles: Article[] = [
  {
    id: "art-1",
    title: "Mengapa Bisnis UMKM Wajib Punya Website Sendiri di Tahun 2026?",
    category: "Bisnis & Teknologi",
    summary: "Bukan lagi sekadar opsi, website di era digital adalah pondasi utama membangun kepercayaan publik. Simak pembahasannya di sini.",
    content: "Di era digital yang serba cepat ini, mengandalkan media sosial saja tidak lagi cukup untuk menumbuhkan bisnis secara berkelanjutan. Algoritma media sosial terus berubah secara konstan, membuat jangkauan organik akun bisnis Anda sering menurun drastis. Dengan memiliki website resmi, Anda memegang kendali penuh atas identitas brand, sistem database pelanggan, dan cara produk Anda dipresentasikan di mata publik. \n\nKeuntungan memiliki website sendiri meliputi:\n1. **Kredibilitas Instan**: 84% konsumen modern menganggap bisnis dengan website resmi jauh lebih tepercaya ketimbang yang hanya memiliki media sosial.\n2. **Trafik Organik Gratis**: Dengan SEO yang mumpuni, pelanggan yang mencari produk di Google akan diarahkan langsung ke halaman Anda.\n3. **Buka 24 Jam**: Anda bisa melayani proses registrasi atau booking bahkan saat Anda sedang tertidur lelap.\n\nInvestasikan masa depan bisnis Anda bersama PT HADIGITAL demi pertumbuhan jangka panjang yang kokoh.",
    date: "18 Mei 2026",
    readTime: "5 Menit Baca",
    author: "Thoriq Sadzily, CEO PT HADIGITAL",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "art-2",
    title: "Tips SEO Sederhana untuk Menduduki Halaman Pertama Google",
    category: "Tips & Trik SEO",
    summary: "Pelajari kiat-kiat praktis mengoptimasi website Anda agar mudah ditemukan calon pelanggan secara organik di penelusuran Google.",
    content: "Mesin pencari seperti Google masih menjadi salah satu saluran transaksi dengan konversi tertinggi di dunia. Orang mengetik karena mereka benar-benar membutuhkan solusi, barang, atau jasa saat itu juga. Maka dari itu, berada di urutan teratas adalah kunci emas keberhasilan pemasaran digital.\n\nSimak 3 taktik SEO fundamental ini:\n1. **Kecepatan Loading Website**: Google memprioritaskan situs yang memiliki waktu muat di bawah 2 detik. Kurangi ukuran media gambar Anda.\n2. **Konten Bernilai Tinggi**: Tulis artikel informatif yang benar-benar menjawab masalah yang sering dicari oleh kata kunci target.\n3. **Optimalisasi Tampilan Mobile**: Lebih dari 70% pencarian lokal dilakukan lewat smartphone. Pastikan template web responsif dan ramah seluler.\n\nHubungi tim SEO PT HADIGITAL jika Anda ingin optimasi murni tanpa taktik black-hat yang berbahaya.",
    date: "12 Mei 2026",
    readTime: "7 Menit Baca",
    author: "Tim Optimasi SEO",
    image: "https://images.unsplash.com/photo-1571721795195-a4ca2d3370a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "art-3",
    title: "Tren Desain UI/UX Paling Diminati di Sektor Corporate Global",
    category: "Eksplorasi Desain",
    summary: "Gaya minimalist glassmorphism, tipografi bold retro-modern, dan transisi smooth interaktif menjadi raja baru di jagat visual web korporat.",
    content: "Bagaimana cara mata manusia mempercayai sebuah perusahaan begitu website terbuka? Kuncinya berada pada 3 detik pertama impresi visual. Di tahun 2026, desain yang kaku dan membosankan telah lama ditinggalkan. Gaya visual corporate masa kini mengadopsi keseimbangan fungsionalitas dan aspek estetik bernilai seni tinggi.\n\nBeberapa tren yang mendefinisikan standar visual baru:\n1. **Glassmorphism Berkelas**: Efek kaca frosted semi transparan dengan warna backdrop neon halus menciptakan kesan futuristik namun tetap elegan.\n2. **Micro-interaksi Responsif**: Tombol yang bereaksi lembut saat kursor lewat, memberikan feedback natural ke pengunjung.\n3. **Display Typography**: Font yang tebal, berkarakter tegas, serta peletakan logo yang proposional menyampaikan prestise institusi Anda langsung.\n\nKami di PT HADIGITAL selalu memastikan semua desain mengikuti standar estetika termutakhir dunia.",
    date: "05 Mei 2026",
    readTime: "6 Menit Baca",
    author: "Lead Designer HADIGITAL",
    image: "https://images.unsplash.com/photo-1541462608141-ad4979e408c9?auto=format&fit=crop&q=80&w=800"
  }
];

export const careers: Career[] = [
  {
    id: "car-1",
    title: "Frontend Developer (React / Next.js)",
    department: "Tech Division",
    location: "Jakarta Barat / Hybrid",
    type: "Full-Time",
    salaryRange: "Rp 8.000.000 - Rp 14.000.000",
    description: "Kami mencari Front-End Developer berbakat yang bergairah tinggi dalam membangun User Interface yang interaktif, super mulus, responsif, dan optimal dalam rendering.",
    requirements: [
      "Menguasai React.js / Next.js, TypeScript, dan Tailwind CSS",
      "Paham manajemen state (Redux, Zustand, atau Context API)",
      "Berpengalaman dalam mengoptimasi Core Web Vitals",
      "Mampu menerjemahkan desain Figma menjadi pixel-perfect code",
      "Memiliki portfolio proyek web React yang sudah dideploy"
    ],
    responsibilities: [
      "Mengembangkan komponen UI yang modular dan reusable",
      "Melakukan integrasi API endpoint dari server backend",
      "Berkolaborasi erat dengan desainer UI/UX & tim produk",
      "Menulis kode yang clean, readable, dan terdokumentasi dengan baik"
    ]
  },
  {
    id: "car-2",
    title: "SEO Specialist & Content Strategist",
    department: "Marketing Division",
    location: "Remote (Indonesia)",
    type: "Full-Time",
    salaryRange: "Rp 6.000.000 - Rp 10.000.000",
    description: "Mendorong pertumbuhan lalu lintas pencarian organik klien kami lewat kepemimpinan konten berkualitas, riset kata kunci, dan optimasi on/off page strategis.",
    requirements: [
      "Minimal 2 tahun pengalaman mengelola SEO On-Page & Off-Page",
      "Mahir memakai tools analitik seperti Ahrefs, SEMrush, Google Search Console",
      "Paham taktik link building putih dan etis",
      "Memiliki kemampuan menulis artikel yang informatif dan disukai algoritma mesin pencari",
      "Sikap inisiatif tinggi dan teratur melaporkan KPI bulanan"
    ],
    responsibilities: [
      "Melakukan audit SEO bulanan untuk situs klien PT HADIGITAL",
      "Mengoptimasi performa meta tag, densitas kata kunci, dan arsitektur tautan internal",
      "Riset peluang keyword berpotensi konversi tinggi",
      "Menyusun kalender konten bulanan bersama tim Copywriter"
    ]
  },
  {
    id: "car-3",
    title: "UI/UX Designer",
    department: "Creative Division",
    location: "Jakarta Barat / Hybrid",
    type: "Full-Time / Kontrak",
    salaryRange: "Rp 7.000.000 - Rp 12.000.000",
    description: "Mendesain skema alur pengguna, wireframe, prototipe, dan aset antarmuka visual kelas dunia yang menyatukan estetika elegan dengan kenyamanan pemakaian sehari-hari.",
    requirements: [
      "Sangat mahir menggunakan Figma secara mendalam (Auto-layout, Components, Variables)",
      "Portofolio UI/UX yang kuat di Dribbble, Behance atau PDF personal",
      "Memahami riset pengguna, pembuatan user persona, dan usability testing",
      "Memiliki rasa sensitivitas tinggi pada estetika warna, spasi negatif, dan hirarki tipografi",
      "Paham batasan teknis CSS agar desain mudah diimplementasi oleh tim developer"
    ],
    responsibilities: [
      "Memperbaharui standar UI Kit / Design System kami secara reguler",
      "Merancang diagram alur sitemap dan visual wireframe kustom untuk calon klien",
      "Membuat prototipe hi-fi interaktif untuk keperluan tinjauan internal & klien",
      "Mengawasi kepatuhan visual selama masa transisi dari desain ke tahap coding"
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Hj. Diana Saputri",
    role: "Owner Aura Beauty",
    company: "Aura Premium Salon & Spa",
    text: "Sistem booking online di website salon buatan PT HADIGITAL benar-benar memudahkan hidup saya. Kini, antrean salon jadi teratur, pembayaran dp aman langsung masuk rekening, dan pendapatan naik 45%. Sumpah, profesional sekali pengerjaannya!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-2",
    name: "dr. Adrian Nugraha",
    role: "Direktur Klinik",
    company: "Medika Sejahtera Clinic",
    text: "Membangun sistem rekam medis online & konsultasi jadwal di website bersama PT HADIGITAL sangat lancar. Mereka paham regulasi privasi data medis, komunikator yang hebat, dan selesai sebelum tenggat waktu. Sangat recommended untuk sektor medis.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-3",
    name: "Bapak Ahmad Sofyan",
    role: "Direktur Operasional",
    company: "Utama Garment Indonesia",
    text: "Kalkulator konveksi otomatis di website kami adalah game changer. Ribuan klien kini tidak perlu manual tanya harga satu-satu untuk custom kaos. Proses pemesanan jadi semi-otomatis, menghemat tenaga CS berkali-kali lipat! Terima kasih HADIGITAL!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  }
];
