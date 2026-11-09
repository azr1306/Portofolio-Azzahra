import { Project, Service, ExperienceItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Azzahra Atika',
  shortName: 'Azzahra',
  title: 'Mahasiswa Sistem Informasi',
  university: 'Universitas Komputama',
  subtitle: 'Analisis Bisnis & Perancangan UI/UX',
  email: 'azzahraatika0608@gmail.com',
  github: 'https://github.com/azr1306',
  githubUsername: 'azr1306',
  location: 'Indonesia',
  portraitImage: '/assets/aistudio/Foto_KTM_819f96bd.jpeg',
  bioShort:
    'Mahasiswa Sistem Informasi di Universitas Komputama dengan minat seimbang pada strategi dan analisis bisnis serta perancangan antarmuka pengguna (UI/UX). Berfokus mewujudkan solusi digital yang efisien bagi proses bisnis dan nyaman bagi pengguna.',
  bioLong:
    'Sebagai mahasiswa Sistem Informasi di Universitas Komputama, saya mengkombinasikan perspektif analisis bisnis dan rekayasa sistem dengan prinsip perancangan UI/UX. Pendekatan ini memastikan setiap produk dan sistem digital yang dirancang tidak hanya ramah pengguna, tetapi juga memiliki fondasi logika bisnis yang kokoh, terukur, dan mampu mendorong efisiensi operasional.'
};

export const SERVICES: Service[] = [
  {
    id: 'business-process-analysis',
    number: '01',
    title: 'Analisis Proses Bisnis & Pemodelan Sistem',
    description:
      'Menganalisis alur kerja organisasi, memetakan proses bisnis eksisting, dan merancang perbaikan alur sistem secara visual dan sistematis.',
    details: [
      'Business Process Modeling Notation (BPMN 2.0)',
      'Identifikasi Bottleneck & Efisiensi Alur Kerja',
      'Diagram Alir Data (DFD) & Standard Operating Procedure (SOP)',
      'Pemetaan Value Chain & Integrasi Sistem'
    ],
    icon: 'Briefcase'
  },
  {
    id: 'ui-ux-design',
    number: '02',
    title: 'Perancangan UI/UX & Produk Digital',
    description:
      'Merancang antarmuka aplikasi web dan mobile yang modern, bersih, intuitif, dan mengedepankan kemudahan pengalaman pengguna.',
    details: [
      'Wireframing & Arsitektur Informasi (IA)',
      'High-Fidelity Interface Design di Figma',
      'Design System, Komponen & Variabel Konsisten',
      'Desain Responsif untuk Mobile & Desktop'
    ],
    icon: 'Layout'
  },
  {
    id: 'requirement-engineering',
    number: '03',
    title: 'Analisis Kebutuhan Bisnis & Dokumen Sistem',
    description:
      'Menyusun spesifikasi kebutuhan sistem yang menjembatani visi pemilik bisnis dengan tim teknis pengembang perangkat lunak.',
    details: [
      'Business Requirement Document (BRD) & PRD',
      'Use Case Diagram & Skenario Aktor',
      'Perumusan User Stories & Kriteria Penerimaan',
      'Analisis Kelayakan Finansial & Operasional'
    ],
    icon: 'Layers'
  },
  {
    id: 'usability-research',
    number: '04',
    title: 'Riset Pengguna & Pengujian Solusi Digital',
    description:
      'Melakukan wawancara pengguna dan pengujian prototipe untuk memvalidasi kemudahan pemakaian sebelum sistem diimplementasikan.',
    details: [
      'In-Depth User Interview & Pemetaan Masalah',
      'Pembuatan User Persona & Customer Journey',
      'Skenario Usability Testing & Metrik Keberhasilan',
      'Evaluasi Kemudahan Sistem (System Usability Scale)'
    ],
    icon: 'Users'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'smefin-analytics',
    title: 'SMEFin Analytics — Platform Manajemen Keuangan & Arus Kas UMKM',
    category: 'Business Analysis',
    subtitle: 'Sinergi Analisis Bisnis Keuangan & Dashboard UI yang Intuitif',
    image: '/assets/images/project_fintech_dashboard_1794191701643.jpg',
    overview:
      'Platform berbasis web yang dirancang untuk membantu pemilik UMKM memantau arus kas masuk dan keluar secara real-time tanpa harus memahami istilah akuntansi yang rumit.',
    problem:
      'Banyak pelaku UMKM mencatat transaksi secara parsial atau manual di buku kas, menyebabkan keterlambatan identifikasi defisit arus kas dan kesalahan prediksi belanja stok bisnis.',
    solution:
      'Merancang antarmuka dashboard dengan kontras tinggi bernuansa modern (dark & gold), visualisasi grafik arus kas interaktif, pencatatan transaksi cepat 2 klik, dan ringkasan kesehatan finansial otomatis.',
    role: ['Business Systems Analyst', 'UI/UX Designer', 'Process Modeling'],
    tools: ['BPMN Modeler', 'Figma', 'Whimsical', 'Spreadsheet Analytics'],
    deliverables: [
      'Pemetaan Proses Bisnis Arus Kas (BPMN 2.0)',
      'High-Fidelity Dashboard & Modul Transaksi',
      'Dokumen Spesifikasi Kebutuhan Sistem (BRD)',
      'Prototipe Interaktif Figma'
    ],
    metrics: [
      { label: 'Efisiensi Input Kas', value: '< 25 detik' },
      { label: 'Task Success Rate', value: '94%' },
      { label: 'SUS Score', value: '88.5 / 100' }
    ],
    keyFeatures: [
      'Visualisasi Cashflow Overview (Cash In vs Cash Out) mingguan & bulanan',
      'Klasifikasi transaksi instan dengan sistem tag bisnis otomatis',
      'Simulasi proyeksi cadangan kas untuk 30 hari ke depan',
      'Laporan ekspor format PDF/Excel siap audit perpajakan UMKM'
    ],
    figmaUrl: 'https://figma.com',
    githubUrl: 'https://github.com/azr1306'
  },
  {
    id: 'resource-marketplace',
    title: 'ReSource — Aplikasi Mobile Produk Berkelanjutan & Eco-Lifestyle',
    category: 'UI/UX Design',
    subtitle: 'Mobile E-Commerce Ramah Lingkungan dengan Jejak Karbon Transparan',
    image: '/assets/images/project_mobile_ecommerce_1794191702023.jpg',
    overview:
      'Aplikasi mobile belanja berkelanjutan yang menghubungkan produsen lokal ramah lingkungan dengan konsumen sadar ekologis, dilengkapi fitur pelacakan transparansi dampak lingkungan.',
    problem:
      'Konsumen sering kali ragu membeli produk hijau karena fenomena greenwashing dan minimnya transparansi asal-usul bahan baku serta sertifikasi yang kredibel.',
    solution:
      'Menghadirkan antarmuka mobile minimalis bertema clean earth-tone dengan label verifikasi terstandarisasi, rincian dampak karbon per pembelian, dan alur checkout transparan 3 langkah.',
    role: ['UI/UX Designer', 'User Journey Mapping', 'Interaction Design'],
    tools: ['Figma', 'FigJam', 'Protopie', 'Maze Testing'],
    deliverables: [
      'Customer Journey Map & Information Architecture',
      'Mobile Design System (Typography, Colors, Icons)',
      'High-Fidelity Wireframes & Checkout Screens',
      'Micro-interactions untuk Fitur Eco-Badge'
    ],
    metrics: [
      { label: 'Checkout Drop-off', value: '-28%' },
      { label: 'Trust Rating', value: '4.8 / 5.0' },
      { label: 'User Satisfaction', value: '91%' }
    ],
    keyFeatures: [
      'Eco-Certification Badge dengan deskripsi verifikasi bahan baku',
      'Kalkulator kompensasi jejak karbon otomatis saat checkout',
      'Katalog terkurasi: Rumah Tangga, Fashion Etis, dan Perawatan Alami',
      'Sistem loyalty reward berbasis kontribusi pohon yang ditanam'
    ],
    figmaUrl: 'https://figma.com',
    githubUrl: 'https://github.com/azr1306'
  },
  {
    id: 'campuswell-portal',
    title: 'CampusWell — Sistem Informasi Penjadwalan Layanan Konseling',
    category: 'Web & Mobile',
    subtitle: 'Portal Layanan Kesehatan Mental & Konseling Mahasiswa Terpadu',
    image: '/assets/images/project_health_system_1794191702534.jpg',
    overview:
      'Perancangan sistem informasi layanan konseling psikologi dan bimbingan akademik mahasiswa untuk menggantikan sistem registrasi manual berbasis spreadsheet yang rawan kebocoran data pribadi.',
    problem:
      'Mahasiswa enggan memanfaatkan layanan konseling kampus karena khawatir identitasnya diketahui orang lain dan proses reservasi jadwal konselor yang memakan waktu lama.',
    solution:
      'Merancang sistem portal terintegrasi dengan opsi sesi anonim, pemilihan jadwal real-time berdasarkan spesialisasi konselor, dan alur pencatatan janji temu yang terstruktur.',
    role: ['Business Analyst', 'System Modeler', 'UI Designer'],
    tools: ['Draw.io / Lucidchart', 'Figma', 'Notion PRD', 'Google Forms'],
    deliverables: [
      'Dokumen Spesifikasi Kebutuhan Sistem (SRS)',
      'Entity Relationship Diagram (ERD) & Use Case Scenario',
      'UI Mockup Mahasiswa & Dashboard Administrator/Konselor',
      'Hasil Pengujian Usability bersama Mahasiswa Kampus'
    ],
    metrics: [
      { label: 'Kecepatan Reservasi', value: '3x Lebih Cepat' },
      { label: 'Privacy Confidence', value: '96% Pengguna' },
      { label: 'Potensi Adopsi', value: 'Tinggi' }
    ],
    keyFeatures: [
      'Kalender ketersediaan konselor interaktif dengan slot waktu live',
      'Profil konselor dengan kualifikasi, keahlian, dan rating ulasan anonim',
      'Pengingat sesi otomatis via notifikasi sistem & email',
      'Dashboard manajemen kapasitas bagi koordinator layanan kampus'
    ],
    figmaUrl: 'https://figma.com',
    githubUrl: 'https://github.com/azr1306'
  }
];

// As requested: Only Mahasiswa Sistem Informasi di Universitas Komputama, removed staff divisi ui ux and pelatihan sertifikat ui ux
export const EDUCATION_EXPERIENCE: ExperienceItem[] = [
  {
    period: 'Sekarang',
    role: 'Mahasiswa S1 Sistem Informasi',
    institution: 'Universitas Komputama',
    location: 'Indonesia',
    description:
      'Menempuh pendidikan sarjana Sistem Informasi dengan fokus seimbang antara pemahaman strategi proses bisnis korporat serta perancangan antarmuka pengguna (UI/UX) pada produk digital.',
    highlights: [
      'Mahasiswa aktif Program Studi Sistem Informasi di Universitas Komputama',
      'Mendalami Analisis & Perancangan Sistem Informasi, Manajemen Proses Bisnis (BPMN), dan Rekayasa Kebutuhan Perangkat Lunak',
      'Mempelajari Interaksi Manusia dan Komputer (IMK / HCI), Perancangan UI/UX, serta Manajemen Basis Data Relasional',
      'Berfokus mengintegrasikan kebutuhan analitis bisnis dengan pengalaman pengguna yang ramah dan solutif'
    ]
  }
];

export const SKILL_TAGS = {
  businessSystem: [
    'Pemodelan Proses Bisnis (BPMN 2.0)',
    'Analisis Kebutuhan Sistem (BRD & PRD)',
    'Diagram Use Case & Activity System',
    'Analisis Kelayakan & Strategi Bisnis',
    'Diagram Alir Data (DFD & Flowchart)',
    'Manajemen Alur Kerja & Efisiensi Operasional',
    'Analisis SWOT & Value Proposition'
  ],
  uiUx: [
    'Perancangan Antarmuka Pengguna (UI)',
    'Riset Pengalaman Pengguna (UX)',
    'Wireframing & Information Architecture',
    'High-Fidelity Mockup & Prototype (Figma)',
    'Usability Testing & Evaluasi Heuristik',
    'Design System & Standar Komponen',
    'Pemetaan Alur Pengguna (User Flow)'
  ],
  technicalTools: [
    'Figma & FigJam',
    'BPMN 2.0 Modeler & Draw.io',
    'Analisis Spreadsheet & Data',
    'Basis Data Relasional & Konsep SQL',
    'Git & GitHub (azr1306)',
    'HTML5 & Modern Tailwind CSS',
    'Dokumentasi Notional & Trello'
  ]
};
