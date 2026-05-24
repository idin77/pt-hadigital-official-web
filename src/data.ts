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
    title: "Website Studio Foto Momen Indah",
    category: "Professional Photography Studio",
    categoryLabel: "service",
    image: "/src/assets/images/momen_indah_portfolio_1779632422935.png",
    description: "Website profil lengkap Studio Foto Momen Indah dengan sistem reservasi paket foto terintegrasi (pre-wedding, keluarga, wisuda, anak) dan galeri instan berkecepatan tinggi.",
    client: "Studio Foto Momen Indah",
    year: "2026",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://studio.hadigital.web.id/"
  },
  {
    id: "port-2",
    title: "Website CleanPro Services",
    category: "Professional Cleaning Service",
    categoryLabel: "service",
    image: "/src/assets/images/cleanpro_portfolio_1779632446934.png",
    description: "Portal interaktif jasa kebersihan apartemen, rumah tinggal, & industri komersial lengkap dengan formulir pesanan real-time, ulasan rating pelanggan, serta integrasi CS cepat.",
    client: "CleanPro Services",
    year: "2026",
    techStack: ["React", "Vite", "Tailwind CSS"],
    liveUrl: "https://pottopolio.hadigital.web.id/"
  },
  {
    id: "port-3",
    title: "Website Klinik Sehat Sejahtera",
    category: "Healthcare & Clinic Portal",
    categoryLabel: "healthcare",
    image: "/src/assets/images/klinik_sehat_portfolio_1779632471487.png",
    description: "Platform digital medis lengkap yang mendukung pengelolaan reservasi konsultasi dokter spesialis secara real-time, info fasilitas, blog kesehatan interaktif, dan penjadwalan janji klinis.",
    client: "Klinik Sehat Sejahtera",
    year: "2026",
    techStack: ["React", "Tailwind CSS", "Firebase"],
    liveUrl: "https://kliniksehat.hadigital.web.id/"
  },
  {
    id: "port-4",
    title: "Website Salon Cantik Permata",
    category: "Premium Beauty Salon Planner",
    categoryLabel: "service",
    image: "/src/assets/images/salon_cantik_portfolio_1779632493554.png",
    description: "Pemesanan perawatan potong rambut, spa eksklusif, facial, rias wajah, & perawatan kuku dengan antarmuka artistik bernuansa soft luxury, integrasi stylist profesional.",
    client: "Salon Cantik Permata",
    year: "2026",
    techStack: ["React", "Tailwind CSS", "Next.js Framework"],
    liveUrl: "https://saloncantikpermata.hadigital.web.id/"
  }
];

export const articles: Article[] = [
  {
    id: "art-1",
    title: "Mengapa Bisnis UMKM Wajib Punya Website Sendiri di Tahun 2026?",
    category: "Bisnis & Teknologi",
    summary: "Bukan lagi sekadar opsi, website di era digital adalah pondasi utama membangun kepercayaan publik. Simak pembahasannya di sini.",
    content: "Di era digital yang serba cepat ini, mengandalkan media sosial saja tidak lagi cukup untuk menumbuhkan bisnis secara berkelanjutan. Algoritma media sosial terus berubah secara konstan, membuat jangkauan organik akun bisnis Anda sering menurun drastis. Dengan memiliki website resmi, Anda memegang kendali penuh atas identitas brand, sistem database pelanggan, dan cara produk Anda dipresentasikan di mata publik.\n\n## Tantangan Era Digital Masa Kini\nMengapa mengandalkan media sosial atau marketplace pihak ketiga memiliki risiko tersendiri?\n- **Algoritma yang Labil**: Akun dengan puluhan ribu pengikut bisa tenggelam begitu saja dalam algoritma terbaru jika tidak beriklan.\n- **Persaingan Komisi & Perang Harga**: Di marketplace, produk Anda dipajang berdampingan dengan milik kompetitor yang terus memotong harga.\n- **Ketiadaan Database Mandiri**: Anda tidak memiliki hak akses langsung kepada email atau nomor kontak pelanggan setia Anda untuk keperluan pemasaran ulang.\n\n## Manfaat Strategis Memiliki Website Sendiri\n\n1. **Kredibilitas Profesional Tingkat Tinggi**\nSebagian besar konsumen modern akan menelusuri nama sebuah bisnis di Google sebelum memutuskan untuk membeli atau berkunjung. Bisnis dengan nama domain resmi (seperti .com, .id, atau .web.id) akan langsung dipandang mapan, kredibel, dan berkomitmen penuh melayani pelanggan dibanding bisnis yang hanya menggunakan akun sosial media.\n\n2. **Kendali Penuh Atas Identitas & Brand**\nBebas dari batasan template sosial media yang monoton. Di website sendiri, Anda dapat merancang tata letak visual sesuka hati untuk mendemonstrasikan keunggulan produk secara interaktif, memamerkan portofolio pengerjaan secara elegan, atau bahkan menanamkan kalkulator harga kustom khusus guna mempermudah kalkulasi pelanggan.\n\n3. **Optimasi SEO untuk Mendatangkan Trafik Gratis**\nMelalui Search Engine Optimization (SEO), Anda dapat menarik audiens tertarget yang secara sadar menelusuri kata kunci relevan dengan bisnis Anda di Google. Ini adalah saluran pemasaran dengan tingkat konversi penjualan (purchasing intent) tertinggi karena mendatangkan pembeli potensial tanpa biaya iklan per klik.\n\n4. **Fleksibilitas Integrasi Layanan**\nWebsite modern dapat disinergikan secara instan dengan berbagai macam fitur cerdas: sistem admin chat otomatis WhatsApp, form kuesioner interaktif, penjadwalan janji temu, hingga dashboard analitik untuk membaca arah preferensi demografi konsumen Anda secara aktual.\n\n## Langkah Awal yang Direkomendasikan\nUntuk memulai transformasi digital yang sukses, Anda tidak perlu pusing memikirkan sisi teknis pengkodean yang rumit. Beberapa tips awal:\n- Tetapkan nama domain yang ringkas, berkarakter unik, mudah dieja, serta representatif terhadap produk bisnis.\n- Bermitralah dengan penyedia jasa pembuatan website tepercaya seperti **PT HADIGITAL** yang menghadirkan paket ramah anggaran (seperti Paket Silver/Gold) dengan kualitas andal, sistem responsif tanpa error, serta dukungan teknikal pasca-rilis.\n- Pajang tautan website resmi Anda pada semua profil digital guna mengalirkan traffic pengunjung yang berkelanjutan secara organik.",
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
    content: "Mesin pencari seperti Google masih memegang peran penting sabagai saluran transaksi dengan tingkat konversi penjualan tertinggi di dunia. Orang mengetik kueri pencarian karena mereka benar-benar membutuhkan jawaban, solusi, barang, atau jasa saat itu juga. Maka dari itu, berada di urutan teratas (Halaman Pertama) pencarian organik adalah kunci emas keberhasilan pemasaran digital.\n\n## Mengapa Ranking Pertama Begitu Krusial?\nPengunjung mesin pencari cenderung mengklik 3 hasil pencarian teratas pada halaman pertama Google. Jika nama usaha Anda tidak muncul di sana saat kata kunci industri diketikkan, maka puluhan bahkan ratusan calon pembeli potensial setiap harinya akan direbut oleh pesaing Anda.\n\n## Langkah Praktis Mendesain SEO Mandiri\n\n1. **Melakukan Riset Kata Kunci yang Tepat**\nCari tahu apa istilah spesifik yang sering diketikkan oleh calon pelanggan Anda. Alih-alih membidik kata kunci umum yang persaingannya sangat padat seperti \"Konveksi\", bidiklah kata kunci ekor panjang (long-tail keywords) yang bernilai transaksi tinggi, contohnya: \"konveksi kaos polo bordir di Bandung Barat\".\n\n2. **Mengoptimalkan Kecepatan Memuat Halaman (Page Speed)**\nGoogle mengutamakan kenyamanan pengguna. Website yang lambat (memuat lebih dari 3 detik) akan membuat pengunjung frustrasi lalu menutup tab. Pastikan ukuran file gambar produk Anda telah dikompresi dengan baik, minimalkan beban naskah animasi yang berlebih, serta gunakan layanan cloud hosting yang berkecepatan tinggi.\n\n3. **Menulis Konten Bermanfaat yang Menjawab Masalah**\nBuatlah artikel panduan, solusi, atau ulasan produk yang ditulis secara jujur dan mendalam. Konten berkualitas tak hanya mendatangkan pembaca, namun juga menjaga mereka untuk membaca lebih lama di situs Anda (rendahnya bounce rate), yang dinilai sangat positif oleh algoritma Google.\n\n4. **Wajib Memiliki Tampilan Ramah Seluler (Mobile-Friendly)**\nLebih dari 75% penelusuran lokal di Indonesia saat ini dilakukan dari layar handphone. Jika navigasi website Anda berantakan atau teksnya terlalu kecil saat dibuka di handphone, Google tidak akan segan-segan menggeser peringkat situs Anda ke bawah.\n\n## Hindari Teknik SEO Curang (Black-Hat SEO)\nBeberapa orang mencoba mengakali sistem dengan membeli backlink sampah dalam jumlah ribuan (backlink spam) atau menimbun kata kunci secara tidak natural di halaman web (keyword stuffing). Algoritma AI Google masa kini sangat cerdas dan cepat mendeteksi kecurangan tersebut. Konsekuensinya, website Anda bisa terkena penalti permanen atau dihapus dari indeks penelusuran Google. Selalu prioritaskan optimasi yang etis, bersih, dan bermanfaat bagi pembaca manusia demi kesuksesan jangka panjang.",
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
    content: "Bagaimana cara mata manusia mempercayai tingkat kredibilitas sebuah perusahaan saat website pertamanya terbuka? Jawabannya terletak pada impresi visual 3 detik pertama. Di tahun 2026, desain yang kuno, kaku, dan membosankan telah lama ditinggalkan. Gaya visual korporat masa kini mengadopsi keselarasan yang indah antara kecepatan fungsionalitas dan aspek estetik bernilai seni tinggi.\n\n## Kebangkitan Desain Berpusat Pada Pengguna (User-Centered)\nDesain modern bukan lagi soal menghias halaman dengan penuh aneka warna mencolok, melainkan bagaimana menggiring perhatian pengguna agar menemukan informasi yang mereka butuhkan secara lugas, intuitif, dan nyaman dipandang mata.\n\n## Tren Visual Utama yang Mendominasi\n\n1. **Sentuhan Glassmorphism Berkelas**\nEfek kaca buram transparan (frosted glass) yang dipadukan dengan pancaran warna latar belakang neon halus di page margins menciptakan aura modern yang futuristik namun tetap elegan. Tren ini banyak diaplikasikan pada modul navigasi dan kartu informasi penting.\n\n2. **Interloop Micro-interactions**\nSebuah sentuhan animasi mikro yang dinamis saat pengunjung melakukan aksi di halaman: tombol yang memancarkan cahaya redup saat dilewati kursor, menu hover yang mengembang secara mulus, atau indikator progres pemuatan halaman yang luwes. Ini memberikan feedback yang responsif dan terasa premium.\n\n3. **Display Typography yang Berani (Bold Lettering)**\nMenggunakan paduan huruf serif atau sans-serif berskala besar (high contrast) untuk teks judul utama. Tipografi tegas ini membantu menegaskan pesan bisnis serta memperkuat visi-misi merek perusahaan secara instan begitu halaman pertama dimuat.\n\n4. **Dukungan Dark Mode Sejati & Kontras Tinggi**\nMenyediakan tata warna gelap berestetika sinematik yang ramah di mata untuk mengurangi kelelahan visual pelanggan akibat paparan cahaya biru (blue-light), didukung oleh kontras tingkat tinggi untuk memastikan keterbacaan artikel tetap prima di segala kondisi cahaya.\n\n## Mengapa Investasi Desain UI/UX Sangat Menguntungkan?\nTampilan website yang dipoles secara eksklusif dan bercita rasa tinggi akan meningkatkan level prestise perusahaan Anda di mata calon investor maupun pelanggan. Ini memunculkan rasa aman, mengurangi persentase penutupan halaman secara cepat, serta dapat melipatgandakan tingkat konversi pesanan. Kami di **PT HADIGITAL** selalu berdedikasi merancang kerangka UI/UX berstandar global untuk memaksimalkan kepuasan visual bisnis eksklusif Anda.",
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
