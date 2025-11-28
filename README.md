# Bank Sampah – Trash2Cash ID

Website untuk pengelolaan bank sampah dan edukasi lingkungan yang ramah pengguna.

## Deskripsi Website
Trash2Cash ID adalah platform bank sampah berbasis web yang membantu warga dan pengelola meningkatkan dampak pengelolaan sampah secara terstruktur dan transparan. Pengguna mendapatkan edukasi praktis tentang pemilahan dan manfaat daur ulang, sementara admin dapat mengelola data anggota, transaksi, dan jenis sampah dengan antarmuka yang modern dan mudah digunakan.

- Beranda menyajikan informasi inti: cara kerja bank sampah, manfaat bagi lingkungan dan ekonomi, jenis sampah yang diterima, tips edukasi, FAQ, serta lokasi layanan.
- Modul autentikasi sederhana memungkinkan pendaftaran dan login, dengan halaman profil untuk pengelolaan data dasar pengguna.
- Area admin menyediakan ringkasan statistik, grafik tren pengumpulan, daftar transaksi terbaru, pengelolaan anggota, serta katalog jenis sampah dan harga per kilogram.
- Dibangun dengan Next.js App Router dan Tailwind CSS v4 sehingga responsif, cepat, dan mudah dikembangkan.

## Fitur Utama
- Beranda: hero, cara kerja, manfaat, jenis sampah, tips edukasi, FAQ, lokasi.
- Autentikasi sederhana (login/daftar) dan profil pengguna.
- Admin: dashboard overview, transaksi, anggota, jenis sampah, grafik interaktif.
- Teknologi: Next.js (App Router) 16, React 19, Tailwind CSS v4, lucide-react, recharts.

## Halaman & URL
- `/` → redirect ke `/user`
- `/user` → beranda pengguna (komponen: Hero, AboutUs, HowItWorks, Benefits, WasteTypes, EducationalTips, FAQ, Location)
- `/user/profile` → profil pengguna
- `/auth/login` → login dan daftar
- `/admin` → dashboard admin
- `/admin/dashboard` → overview dashboard
- `/admin/members` → kelola anggota
- `/admin/transactions` → kelola transaksi
- `/admin/types` → kelola jenis sampah

## Akun Demo
- Pengguna: `user@mail.com` / `123456`
- Admin: `admin@mail.com` / `admin123`

## Persyaratan
- Node.js v18+ dan npm
- Koneksi internet untuk mengunduh dependensi

## Instalasi
```
npm install
```

## Menjalankan di Lokal
```
npm run dev
```
- Buka `http://localhost:3000`

## Build & Production
```
npm run build
npm start
```

## Daftar Skrip
- `npm run dev` – mode pengembangan
- `npm run build` – build produksi
- `npm start` – jalankan hasil build
- `npm run lint` – linting kode
