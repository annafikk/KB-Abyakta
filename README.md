# 🌱 Abyakta

**Abyakta** adalah platform blog berbasis web yang menyediakan informasi, edukasi, dan berita terkini mengenai program _Kampung Keluarga Berencana (KB)_ di Indonesia, khususnya wilayah Tanjung Pinang.

---

## 🚀 Fitur Utama

- Manajemen artikel (CRUD)
- Pengelompokan artikel berdasarkan kategori
- Komentar antar pengguna
- Autentikasi dan otorisasi pengguna

---

## 🗂️ Struktur Folder

Frontend proyek ini menggunakan pendekatan **Clean Architecture** dengan struktur direktori sebagai berikut:

```
frontend/
├── public
├── src/
    ├── app
        ├── page.tsx
        ├── layout.tsx
    ├── components
    ├── lib
        ├── api
        ├── dummy
        ├── utils
    ├── styles
    ├── types
├── package.json
├── next.config.ts
├── .env.example
```

---

## 🧰 Tech Stack

- **Frontend Framework**

  - Next.js (v15.5.4)
  - React (v19.1.0)

- **Styling**

  - Tailwind CSS (v4)
  - tailwind-merge
  - tw-animate-css

- **Animations**

  - Framer Motion

- **UI Components**

  - Radix UI (Dialog, Label, NavigationMenu, Slot)

- **Icons**

  - lucide-react

- **Language**

  - TypeScript (v5)
  - JavaScript

- **Linting**

  - ESLint (v9)
  - eslint-config-next

- **Build Tools**

  - PostCSS (via @tailwindcss/postcss)

- **Deployment**
  - Vercel

---

## 🛠️ Instalasi

Ikuti langkah-langkah berikut untuk menjalankan aplikasi secara lokal:

1. **Clone repository ini:**

   ```bash
   git clone https://github.com/annafikk/KB-Abyakta.git
   ```

2. **Masuk ke direktori proyek:**

   ```bash
   cd frontend
   ```

3. **Install dependensi:**

   ```bash
   npm i
   ```

4. **Jalankan aplikasi secara lokal:**

   ```bash
   npm run dev
   ```

5. **Akses aplikasi melalui:**
   ```bash
   http://localhost:3000
   ```

---

## 💻 Backend

Backend tersedia pada repositori berikut:

🔗 [https://github.com/ramadhanirizky22/berita-desa-api.git](https://github.com/ramadhanirizky22/berita-desa-api.git)

---

## 🚀 Deployment

Frontend dapat dilihat pada URL berikut:

🔗 [https://kampung-kb-abyakta.vercel.app/](https://kampung-kb-abyakta.vercel.app/)

---

## 👨‍💻 Kontributor

Proyek ini dibangun oleh:

- [@annafikk](https://github.com/annafikk)
- [@Rikivos](https://github.com/Rikivos)

---

## 📄 Lisensi

Proyek ini menggunakan lisensi [MIT](https://choosealicense.com/licenses/mit/)
