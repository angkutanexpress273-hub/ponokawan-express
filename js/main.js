// HITUNG HARGA REAL-TIME
function hitungHarga() {
  const f = document.forms[0];
  const armada = parseInt(f.armada.value) || 0;
  const jarak = parseInt(f.jarak.value) || 0;
  const tenaga = parseInt(f.tenaga.value) || 0;
  const lantai = parseInt(f.lantai.value) || 0;

  if (!jarak || !armada) {
    document.getElementById('harga').innerText = 'Estimasi: Rp -';
    return;
  }

  let biayaPerKm = 9000;
  if (jarak > 20) biayaPerKm = 7000;
  if (jarak > 50) biayaPerKm = 6000;

  const total = armada + (jarak * biayaPerKm) + tenaga + lantai;
  const minimum = 80000;
  const totalFinal = Math.max(total, minimum);

  document.getElementById('harga').innerText =
    'Estimasi: Rp ' + totalFinal.toLocaleString('id-ID');
}

// KIRIM KE WHATSAPP
function kirimWA(e) {
  e.preventDefault();
  const f = e.target;

  // VALIDASI NOMOR WA
  if (!/^08[0-9]{8,11}$/.test(f.telp.value)) {
    alert("Nomor WA tidak valid ❌\nFormat: 08xxxxxxxxxx");
    return;
  }

  // BUAT PESAN
  const msg = `Halo Ponokawan Express 🚚

*ORDER MASUK*

Nama: ${f.nama.value}
WA: ${f.telp.value}
Armada: ${f.armada.options[f.armada.selectedIndex].text}
${document.getElementById('harga').innerText}

Jemput: ${f.jemput.value}
Tujuan: ${f.tujuan.value}

Tenaga: ${f.tenaga.options[f.tenaga.selectedIndex].text}
Lantai: ${f.lantai.options[f.lantai.selectedIndex].text}

Opsi: ${f.opsi.value}
Catatan: ${f.catatan.value || '-'}`;

  // BUKA WHATSAPP
  window.open("https://wa.me/6281224666656?text=" + encodeURIComponent(msg), '_blank');

  // RESET FORM
  setTimeout(() => {
    f.reset();
    document.getElementById('harga').innerText = 'Estimasi: Rp -';
  }, 500);
}

// POPUP GALERI
document.addEventListener('DOMContentLoaded', function() {
  const galeriBtns = document.querySelectorAll('.galeri img');
  const popup = document.getElementById('popup');
  const popupImg = document.getElementById('popup-img');

  // BUKA POPUP
  galeriBtns.forEach(img => {
    img.addEventListener('click', function() {
      popup.style.display = 'flex';
      popupImg.src = this.src;
      popupImg.alt = this.alt;
      document.body.style.overflow = 'hidden'; // Disable scroll
    });
  });

  // TUTUP POPUP - KLIK BACKGROUND
  popup.addEventListener('click', function(e) {
    if (e.target === popup) {
      popup.style.display = 'none';
      document.body.style.overflow = 'auto'; // Enable scroll
    }
  });

  // TUTUP POPUP - TEKAN ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && popup.style.display === 'flex') {
      popup.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // TUTUP POPUP - TEKAN SPASI
  document.addEventListener('keydown', function(e) {
    if (e.code === 'Space' && popup.style.display === 'flex') {
      e.preventDefault();
      popup.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});

// SMOOTH SCROLL UNTUK LINK
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// AUTO-FORMAT NOMOR WA
document.addEventListener('DOMContentLoaded', function() {
  const telpInput = document.querySelector('input[name="telp"]');
  if (telpInput) {
    telpInput.addEventListener('input', function() {
      // Hapus karakter non-digit
      let value = this.value.replace(/\D/g, '');

      // Tambah 08 jika dimulai dengan 8
      if (value.startsWith('8') && !value.startsWith('08')) {
        value = '0' + value;
      }

      // Batasi hingga 13 digit
      value = value.substring(0, 13);

      this.value = value;
    });
  }
});

// LOG ANALYTICS (OPSIONAL)
console.log('🚚 Ponokawan Express Website Loaded');
console.log('Last Update: 27 April 2026');
