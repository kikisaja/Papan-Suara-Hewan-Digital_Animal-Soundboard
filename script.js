// --- 1. SELEKSI ELEMEN DOM ---
const daftarTombol = document.querySelectorAll(".animal-card");

// --- 2. LOGIKA UTAMA SINTESIS AUDIO (WEB AUDIO API) ---
function mainkanSuaraHewan(jenisHewan) {
    // Membuat AudioContext baru (wadah pengolahan suara di browser)
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    // Membuat komponen Oscillator (generator gelombang/nada) dan Gain (pengatur volume)
    const osilator = audioCtx.createOscillator();
    const kontrolVolume = audioCtx.createGain();

    osilator.connect(kontrolVolume);
    kontrolVolume.connect(audioCtx.destination);

    const waktuSekarang = audioCtx.currentTime;

    // --- 3. KONDISIONAL RUMUS FREKUENSI NADA TIAP HEWAN ---
    if (jenisHewan === "kucing") {
        // Efek Meow: Nada bergeser naik dari rendah ke tinggi secara cepat
        osilator.type = "triangle"; 
        osilator.frequency.setValueAtTime(400, waktuSekarang);
        osilator.frequency.exponentialRampToValueAtTime(800, waktuSekarang + 0.25);
        
        kontrolVolume.gain.setValueAtTime(0.2, waktuSekarang);
        kontrolVolume.gain.linearRampToValueAtTime(0.01, waktuSekarang + 0.3);
        osilator.start(waktuSekarang);
        osilator.stop(waktuSekarang + 0.3);

    } else if (jenisHewan === "burung") {
        // Efek Kicauan: Nada sangat tinggi dengan durasi sangat pendek berulang
        osilator.type = "sine";
        osilator.frequency.setValueAtTime(1500, waktuSekarang);
        osilator.frequency.exponentialRampToValueAtTime(3000, waktuSekarang + 0.1);
        
        kontrolVolume.gain.setValueAtTime(0.15, waktuSekarang);
        kontrolVolume.gain.linearRampToValueAtTime(0.01, waktuSekarang + 0.12);
        osilator.start(waktuSekarang);
        osilator.stop(waktuSekarang + 0.12);

    } else if (jenisHewan === "anjing") {
        // Efek Gonggongan: Nada rendah kasar bergigi gergaji (sawtooth) pendek
        osilator.type = "sawtooth";
        osilator.frequency.setValueAtTime(120, waktuSekarang);
        osilator.frequency.linearRampToValueAtTime(80, waktuSekarang + 0.15);
        
        kontrolVolume.gain.setValueAtTime(0.3, waktuSekarang);
        kontrolVolume.gain.linearRampToValueAtTime(0.01, waktuSekarang + 0.18);
        osilator.start(waktuSekarang);
        osilator.stop(waktuSekarang + 0.18);

    } else if (jenisHewan === "kodok") {
        // Efek Ribbit: Nada super rendah dengan jenis gelombang kotak (square) yang patah-patah
        osilator.type = "square";
        osilator.frequency.setValueAtTime(80, waktuSekarang);
        osilator.frequency.linearRampToValueAtTime(60, waktuSekarang + 0.2);
        
        kontrolVolume.gain.setValueAtTime(0.25, waktuSekarang);
        kontrolVolume.gain.linearRampToValueAtTime(0.01, waktuSekarang + 0.25);
        osilator.start(waktuSekarang);
        osilator.stop(waktuSekarang + 0.25);
    }
}

// --- 4. PENGIKATAN EVENT LISTENER PADA KUMPULAN TOMBOL ---
daftarTombol.forEach(tombol => {
    tombol.addEventListener("click", () => {
        // Mengambil isi atribut 'data-animal' dari elemen HTML yang diklik
        const namaHewan = tombol.getAttribute("data-animal");
        mainkanSuaraHewan(namaHewan);
    });
});
