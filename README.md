# 🐱 Papan Suara Hewan Digital (Pop Art Soundboard)

Aplikasi *soundboard* interaktif ramah pemula yang menampilkan tombol bermacam-macam karakter hewan lengkap dengan efek suara khasnya. Menggunakan konsep visual **Bright Pop Art** dengan animasi penekanan tombol (*springy micro-interaction*) yang responsif.

Kelebihan utama proyek ini adalah tidak membutuhkan aset berkas audio eksternal (`.mp3` / `.wav`), melainkan memproduksi gelombang suara asli langsung dari kode pemrograman JavaScript.

---

## 🚀 Fitur Utama

* **Pure Code Audio Synthesis:** Menggunakan arsitektur `AudioContext` untuk memicu osilator suara murni, menghemat memori penyimpanan proyek dari beban berkas media audio.
* **Custom Waveforms Shapes:** Memanfaatkan variasi bentuk gelombang suara seperti *sine, triangle, sawtooth,* dan *square* demi memanipulasi tekstur suara agar mendekati karakteristik asli hewan.
* **Semantic Custom Dataset Attribute:** Memanfaatkan atribut standar modern HTML5 HTML5 `data-*` untuk mengirimkan parameter konteks nama hewan dari sisi UI menuju blok fungsi JavaScript.
* **Springy UI Feedback:** Tombol dibekali efek CSS transformasi translasi koordinat mikro, menghasilkan efek visual memantul saat diklik oleh pengguna.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Struktur grid tombol penampung emoji dan nama kelompok hewan
├── style.css        # Layout CSS Grid responsif 2x2, variabel warna, dan efek transisi klik
└── script.js        # Pemrosesan Web Audio API, perancangan envelope synthesizer, dan manajemen klik
