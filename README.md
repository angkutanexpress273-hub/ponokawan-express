# Ponokawan Express Premium 🚚

Website resmi Jasa Angkut Cepat & Aman untuk wilayah Bandung dan sekitarnya.

## 📋 Fitur Utama

- ✅ **Kalkulator Harga Real-time** - Estimasi otomatis berdasarkan armada & jarak
- ✅ **Integrasi WhatsApp** - Order langsung ke nomor customer service
- ✅ **Galeri Armada** - Tampilkan foto armada dengan popup zoom
- ✅ **Form Order Lengkap** - Nama, alamat, jenis layanan, tenaga tambahan, lantai
- ✅ **Responsive Design** - Tampil sempurna di mobile, tablet, desktop
- ✅ **Dark Theme** - Tema gelap yang eye-friendly
- ✅ **Validasi Form** - Validasi nomor WA & input otomatis

## 🚀 Teknologi

- **HTML5** - Semantic markup
- **CSS3** - Responsive grid, flexbox, animations
- **Vanilla JavaScript** - Tanpa library dependencies
- **GitHub Pages** - Hosting gratis

## 📁 Struktur Project

```
ponokawan-express/
├── index.html              # Halaman utama
├── styles/
│   └── style.css          # Semua styling
├── js/
│   └── main.js            # Fungsi JavaScript
├── assets/                # Folder gambar
│   ├── logo.png
│   └── armada1-6.jpg
├── README.md              # Dokumentasi ini
└── .gitignore
```

## 🎯 Harga Layanan (Default)

| Armada | Harga Dasar |
|--------|-------------|
| Pickup | Rp 80.000 |
| Engkel | Rp 150.000 |
| Box | Rp 250.000 |

**Biaya Per Km:**
- 0-20 km: Rp 9.000/km
- 21-50 km: Rp 7.000/km
- >50 km: Rp 6.000/km

**Tambahan:**
- +1 Tenaga: Rp 75.000
- +2 Tenaga: Rp 150.000
- Lantai 2: +Rp 30.000
- Lantai 3+: +Rp 60.000

## 🔧 Cara Customize

### 1. Ubah Nomor WhatsApp
Edit di `index.html` & `js/main.js`:
```html
<!-- Di header -->
<a class="btn" href="https://wa.me/6281224666656">WhatsApp</a>

<!-- Di js/main.js -->
const waNumber = '6281224666656';
```

### 2. Ubah Harga
Edit di `js/main.js` fungsi `hitungHarga()`:
```javascript
let biayaPerKm = 9000; // Ubah nilai ini
if (jarak > 20) biayaPerKm = 7000;
if (jarak > 50) biayaPerKm = 6000;
```

### 3. Ubah Warna
Edit di `styles/style.css`:
```css
--primary: #25d366;  /* Warna hijau WhatsApp */
--accent: #ffd24a;   /* Warna kuning */
--bg: #0b1f3a;       /* Warna background */
```

### 4. Tambah/Edit Armada
Edit di `index.html` bagian `<select name="armada">`:
```html
<option value="harga">Nama Armada</option>
```

## 📸 Upload Gambar

1. **Buka repository** di GitHub
2. **Klik folder** `assets/`
3. **Upload files:**
   - `logo.png` (50x50px)
   - `armada1.jpg` - `armada6.jpg` (landscape/potrait)

## 🌐 Deploy dengan GitHub Pages

1. **Settings** → **Pages**
2. **Source:** main branch
3. **Save** dan tunggu build selesai (~2 menit)
4. **URL Live:** `https://angkutanexpress273-hub.github.io/ponokawan-express`

## 📱 Tips Optimasi

- **SEO:** Update meta tags di `<head>`
- **Performance:** Compress gambar sebelum upload (~100kb per image)
- **Mobile:** Test dengan Chrome DevTools (F12 → Device Preview)
- **Analytics:** Tambahkan Google Analytics jika perlu

## ✏️ Kontak & Support

- **WhatsApp:** 6281224666656
- **Area:** Bandung & Sekitarnya
- **Email:** angkutanexpress273@gmail.com

---

**Dibuat dengan ❤️ menggunakan HTML5, CSS3, dan Vanilla JavaScript**

*Last updated: 27 April 2026*
