/* ==========================================================================
   ⚙️ DATA PROFIL USAHA UMKM — EVEVPRINT (PERCETAKAN, FOTOCOPY & ATK)
   ========================================================================== */

const PROFIL_USAHA = {
  nama: "evevprint",
  namaLengkap: "evevprint — Pusat Fotocopy Kilat, Cetak Digital & Jilid Skripsi",
  sektor: "Percetakan Digital, Fotocopy Kilat, Jilid Skripsi & Toko ATK",
  tagline: "Pusat Fotocopy Kilat, Cetak Dokumen Digital, Jilid Skripsi Express & Grosir ATK",
  deskripsi:
    "Mitra cetak terpercaya untuk mahasiswa, perkantoran, sekolah, dan UMKM di Jakarta Timur. Melayani fotocopy laser kecepatan tinggi, print warna A4/F4/A3+, jilid skripsi hardcover emboss emas, plotter gambar teknik, laminating, hingga grosir kertas HVS rim & ATK lengkap.",

  temaDefault: "light",

  // Kontak & WhatsApp Auto-Format (+62 895-3234-18658)
  whatsapp: "62895323418658",
  whatsappDisplay: "+62 895-3234-18658",
  telepon: "+62 895-3234-18658",
  email: "evevdigital@gmail.com",
  instagram: "@evevprint.jaktim",
  pesanWABooking:
    "Halo evevprint, saya ingin konsultasi & order layanan fotocopy / cetak dokumen / jilid skripsi / pembelian ATK. Mohon info antrean dan estimasi biayanya ya.",

  // Lokasi & Jam Operasional
  alamat: "Jl. Otista Raya No. 88, Bidara Cina, Jatinegara, Jakarta Timur 13330",
  alamatSingkat: "Jl. Otista Raya No. 88, Jatinegara, Jakarta Timur",
  jamOperasional: "Senin – Minggu: 07.00 – 22.00 WIB (Buka Setiap Hari)",
  jamBukaText: "Buka Setiap Hari: 07.00 – 22.00 WIB",
  jamBukaHour: 7,
  jamTutupHour: 22,
  areaLayanan:
    "Ditunggu Langsung di Toko & Pengiriman Instan Jakarta Timur (GoSend / GrabExpress / Kurir Toko)",
  linkMaps:
    "https://maps.google.com/?q=Jl.+Otista+Raya+No.+88+Jatinegara+Jakarta+Timur",

  // 6 Paket Layanan Utama & Harga Realistis UMKM Indonesia
  paket: [
    {
      id: "fotocopy-print-laser",
      nama: "Fotocopy & Print Laser Kilat (B/W & Warna)",
      harga: "Mulai Rp 300 / lembar",
      hargaDetail: "B/W Rp 300/lbr • Warna Rp 1.500/lbr",
      durasi: "Ditunggu Langsung Jadi",
      badge: "Paling Laris",
      deskripsi:
        "Mesin laser kecepatan tinggi untuk HVS 70–80 gsm (A4, F4, A3). Teks hitam pekat anti-garis dan cetak warna tajam anti-luntur, cocok untuk diktat, makalah, hingga dokumen tender.",
      gambar:
        "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=900&q=80",
      pesanWA:
        "Halo evevprint, saya ingin order *Fotocopy & Print Laser Kilat (B/W / Warna)*. Bisa kirim file sekarang?"
    },
    {
      id: "jilid-skripsi-hardcover",
      nama: "Paket Jilid Skripsi Hardcover Emboss Emas",
      harga: "Mulai Rp 35.000 / buku",
      hargaDetail: "Termasuk Foil Emas, Pita & Siku",
      durasi: "2 – 4 Jam Selesai",
      badge: "Spesialis Mahasiswa",
      deskripsi:
        "Standar baku skripsi, tesis, dan disertasi kampus. Cover karton tebal berlapis linen/kulit jeruk, cetak judul foil emas timbul presisi, pembatas pita satin, dan rapi siap sidang.",
      gambar:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=80",
      pesanWA:
        "Halo evevprint, saya ingin pesan *Paket Jilid Skripsi Hardcover Emboss Emas (Mulai Rp 35.000/buku)*. Mohon info estimasi selesainya."
    },
    {
      id: "jilid-softcover-spiral",
      nama: "Jilid Softcover, Spiral Kawat & Lakban Mika",
      harga: "Mulai Rp 5.000 / buku",
      hargaDetail: "Lakban Rp 5.000 • Spiral Rp 15.000 • Softcover Rp 20.000",
      durasi: "15 – 45 Menit",
      badge: "Hemat & Rapi",
      deskripsi:
        "Pilihan jilid fleksibel untuk laporan PKL, proposal bisnis, buku panduan, modul pelatihan, dan katalog produk. Cover bisa dilaminasi glossy atau doff agar tahan lama.",
      gambar:
        "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80",
      pesanWA:
        "Halo evevprint, saya ingin order *Jilid Softcover / Spiral Kawat / Lakban Mika*. Mohon info detailnya."
    },
    {
      id: "plotter-arsitektur",
      nama: "Cetak Gambar Kerja Arsitektur & Plotter A2/A1/A0",
      harga: "Mulai Rp 12.000 / lembar",
      hargaDetail: "A2 Rp 12.000 • A1 Rp 22.000 • A0 Rp 40.000",
      durasi: "30 Menit Jadi",
      badge: "Presisi CAD",
      deskripsi:
        "Cetak garis teknik AutoCAD, denah IMB, peta kontur, dan poster presentasi skala besar. Akurasi garis tajam di kertas HVS Plotter 80 gsm maupun kertas kalkir.",
      gambar:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
      pesanWA:
        "Halo evevprint, saya ingin cetak *Gambar Kerja Arsitektur / Plotter (A2/A1/A0)*. File PDF/CAD siap kirim."
    },
    {
      id: "grosir-kertas-hvs-atk",
      nama: "Grosir Kertas HVS Rim & Paket ATK Kantor",
      harga: "Mulai Rp 45.000 / rim",
      hargaDetail: "A4 70gr Rp 45.000 • F4 75gr Rp 50.000 • A4 80gr Rp 54.000",
      durasi: "Ready Stock & Antar",
      badge: "Harga Grosir",
      deskripsi:
        "Sedia kertas HVS PaperOne & Sinar Dunia eceran maupun kardusan, plus pulpen, ordner, map snelhecter, stapler, dan perlengkapan kantor/sekolah lengkap siap kirim.",
      gambar:
        "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=900&q=80",
      pesanWA:
        "Halo evevprint, saya ingin pesan *Grosir Kertas HVS Rim / Paket ATK Kantor*. Mohon daftar harga terbaru."
    },
    {
      id: "laminating-scan-pasfoto",
      nama: "Laminating Panas, Scan Arsip & Pas Foto Kilat",
      harga: "Mulai Rp 5.000 / layanan",
      hargaDetail: "Laminating Rp 5.000 • Scan Rp 2.000 • Pas Foto Rp 15.000/paket",
      durasi: "10 Menit Selesai",
      badge: "Cepat & Aman",
      deskripsi:
        "Proteksi dokumen penting (ijazah, KTP, akta, menu) dengan mika laminating tebal glossy/doff, scan arsip ke PDF resolusi tinggi, serta cetak pas foto studio berbagai ukuran.",
      gambar:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=900&q=80",
      pesanWA:
        "Halo evevprint, saya ingin layanan *Laminating / Scan Dokumen / Cetak Pas Foto Kilat*. Apakah bisa langsung diproses?"
    }
  ],

  // Alias kompatibilitas untuk template lain
  get layanan() {
    return this.paket;
  },

  // Tabel Daftar Harga Transparan
  daftarHarga: [
    {
      kategori: "Fotocopy & Print",
      item: "Fotocopy Hitam Putih HVS 70 gsm (A4 / F4)",
      estimasi: "Langsung Jadi",
      harga: "Rp 300 / lembar"
    },
    {
      kategori: "Fotocopy & Print",
      item: "Fotocopy Bolak-Balik Partai Besar (≥ 500 lembar)",
      estimasi: "Cepat",
      harga: "Rp 225 / lembar"
    },
    {
      kategori: "Fotocopy & Print",
      item: "Print Laser Hitam Putih Teks Tajam (A4 / F4)",
      estimasi: "Langsung Jadi",
      harga: "Rp 500 / lembar"
    },
    {
      kategori: "Fotocopy & Print",
      item: "Print Laser Full Color HVS 80 gsm (A4 / F4)",
      estimasi: "Langsung Jadi",
      harga: "Rp 1.500 / lembar"
    },
    {
      kategori: "Fotocopy & Print",
      item: "Print Art Paper / Art Carton A3+ Full Color",
      estimasi: "15 Menit",
      harga: "Rp 6.000 / lembar"
    },
    {
      kategori: "Jilid & Finishing",
      item: "Jilid Lakban Mika Bening (Makalah / Tugas)",
      estimasi: "10 Menit",
      harga: "Rp 5.000 / buku"
    },
    {
      kategori: "Jilid & Finishing",
      item: "Jilid Spiral Kawat / Plastik (Modul / Proposal)",
      estimasi: "20 Menit",
      harga: "Rp 15.000 / buku"
    },
    {
      kategori: "Jilid & Finishing",
      item: "Jilid Softcover Lem Panas Laminasi Glossy/Doff",
      estimasi: "45 Menit",
      harga: "Rp 20.000 / buku"
    },
    {
      kategori: "Jilid & Finishing",
      item: "Jilid Hardcover Skripsi Emboss Foil Emas + Pita",
      estimasi: "2 – 4 Jam",
      harga: "Rp 35.000 / buku"
    },
    {
      kategori: "Plotter & Kertas",
      item: "Cetak Plotter Gambar Teknik CAD (Ukuran A2 / A1)",
      estimasi: "30 Menit",
      harga: "Mulai Rp 12.000 / lbr"
    },
    {
      kategori: "Plotter & Kertas",
      item: "Kertas HVS A4 70 gsm (1 Rim / 500 lembar)",
      estimasi: "Ready Stock",
      harga: "Rp 45.000 / rim"
    },
    {
      kategori: "Laminating & Scan",
      item: "Laminating Panas Anti-Air (A4/F4) / Scan PDF",
      estimasi: "10 Menit",
      harga: "Rp 5.000 / Rp 2.000"
    }
  ]
};

// Ekspos ke global window agar selalu terbaca oleh script lain
window.PROFIL_USAHA = PROFIL_USAHA;

/**
 * Helper Auto-Format Pesan WhatsApp ke +62 895-3234-18658
 */
window.EVEVPRINT_WA = {
  getCleanNumber() {
    return String(PROFIL_USAHA.whatsapp || "62895323418658").replace(/\D/g, "");
  },

  buildUrl(customMessage) {
    const message =
      customMessage && customMessage.trim()
        ? customMessage.trim()
        : PROFIL_USAHA.pesanWABooking;
    return `https://wa.me/${this.getCleanNumber()}?text=${encodeURIComponent(message)}`;
  },

  formatOrderMessage({ nama, email, telp, layanan, jumlah, deadline, catatan }) {
    const lines = [
      `*FORM ORDER CEPAT — ${PROFIL_USAHA.nama.toUpperCase()}*`,
      ``,
      `Halo admin ${PROFIL_USAHA.nama}, saya ingin memesan layanan cetak/ATK:`,
      `• *Nama:* ${nama || "Pelanggan"}`,
      `• *No. WhatsApp:* ${telp || "-"}`,
      email && email !== "-" ? `• *Email:* ${email}` : null,
      `• *Layanan / Produk:* ${layanan || "Fotocopy & Cetak Dokumen"}`,
      jumlah ? `• *Estimasi Jumlah:* ${jumlah}` : null,
      deadline ? `• *Target Selesai:* ${deadline}` : null,
      catatan && catatan !== "-" ? `• *Catatan / Spesifikasi:* ${catatan}` : null,
      ``,
      `Mohon konfirmasi total biaya & antrean pengerjaan. Terima kasih!`
    ].filter((line) => line !== null);

    return lines.join("\n");
  },

  openOrder(customMessage) {
    window.open(this.buildUrl(customMessage), "_blank", "noopener,noreferrer");
  }
};

// Autohidrasi DOM & Event Listener
document.addEventListener("DOMContentLoaded", function () {
  const p = window.PROFIL_USAHA;
  const wa = window.EVEVPRINT_WA;
  if (!p || !wa) return;

  // 1. Hidrasi elemen ber-atribut data-config
  document.querySelectorAll("[data-config]").forEach((el) => {
    const key = el.getAttribute("data-config");
    if (p[key] !== undefined) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.value = p[key];
      } else {
        el.textContent = p[key];
      }
    }
  });

  // 2. Auto-format seluruh link WhatsApp & tombol paket
  document
    .querySelectorAll('a[href*="wa.me"], a.wa-link, .btn-wa-booking, .floating-wa-btn, [data-wa-text]')
    .forEach((el) => {
      const customText = el.getAttribute("data-wa-text");
      if (customText) {
        el.setAttribute("href", wa.buildUrl(customText));
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
        return;
      }

      const currentHref = el.getAttribute("href") || "";
      if (currentHref.startsWith("#") && currentHref.length > 1) return;

      el.setAttribute("href", wa.buildUrl());
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    });

  // 3. Status Buka/Tutup Real-Time (WIB)
  const statusBadges = document.querySelectorAll("[data-shop-status]");
  if (statusBadges.length > 0) {
    const now = new Date();
    const hour = now.getHours();
    const isOpen = hour >= p.jamBukaHour && hour < p.jamTutupHour;
    statusBadges.forEach((badge) => {
      badge.textContent = isOpen
        ? "Sedang Buka • Siap Terima File"
        : "Tutup Sementara • Tetap Terima Chat WA";
    });
  }

  // 4. Intercept Form Konsultasi / Order -> Auto-Format ke WhatsApp +62 895-3234-18658
  const orderForms = document.querySelectorAll(
    "form.order-form, form.contact-form, form.form-submit:not(.newsletter-form):not(.tw-mt-6), .get-started-form form"
  );
  orderForms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nama =
        form.querySelector('input[name="name"], input#name, input[placeholder*="Nama"], input[placeholder*="name"]')?.value?.trim() ||
        "Pelanggan";
      const email =
        form.querySelector('input[name="email"], input[type="email"]')?.value?.trim() || "-";
      const telp =
        form.querySelector('input[name="phone"], input#phone, input[type="tel"]')?.value?.trim() ||
        "-";
      const layanan =
        form.querySelector('select[name="orderType"], select#orderType, select')?.value ||
        "Fotocopy & Cetak Dokumen";
      const jumlah =
        form.querySelector('input[name="qty"], input#qty')?.value?.trim() || "";
      const deadline =
        form.querySelector('input[name="date"], input#date, input[type="date"]')?.value || "";
      const catatan =
        form.querySelector('textarea[name="message"], textarea#message, textarea')?.value?.trim() ||
        "-";

      const waMessage = wa.formatOrderMessage({
        nama,
        email,
        telp,
        layanan,
        jumlah,
        deadline,
        catatan
      });

      wa.openOrder(waMessage);
    });
  });

  // 5. Intercept Form Newsletter / Promo
  const newsletterForms = document.querySelectorAll("form.newsletter-form, form.tw-mt-6");
  newsletterForms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const email = emailInput ? emailInput.value.trim() : "";
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        const originalHtml = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="ph-bold ph-check"></i>';
        setTimeout(() => {
          submitBtn.innerHTML = originalHtml;
        }, 3000);
      }
      if (email) {
        wa.openOrder(
          `Halo ${p.nama}, saya ingin berlangganan info promo cetak & diskon grosir ATK dengan email: ${email}`
        );
      }
      if (emailInput) emailInput.value = "";
    });
  });

  // 6. Intercept Form Pencarian Layanan
  const searchForms = document.querySelectorAll("form.search-layanan-form, form.max-w-810-px, form.max-w-330-px");
  searchForms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const searchInput = form.querySelector('input[type="text"], input[type="search"]');
      const query = searchInput ? searchInput.value.trim() : "";
      if (query) {
        const waMsg = `Halo ${p.nama}, saya sedang mencari layanan/produk "${query}". Apakah tersedia dan berapa estimasi harganya?`;
        wa.openOrder(waMsg);
      } else {
        const target = document.getElementById("produk") || document.getElementById("daftar-harga");
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});
