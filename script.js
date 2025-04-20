    function updateModeIcon() {
      const icon = document.getElementById('mode-icon');
      if (document.body.classList.contains('dark-mode')) {
        icon.src = 'https://files.catbox.moe/otr78j.png';
      } else {
        icon.src = 'https://files.catbox.moe/yqnixc.png';
      }
    }

    function toggleMode() {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('mode', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
      updateModeIcon();
    }

    const sidebar = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburger');

    function toggleSidebar() {
      sidebar.classList.toggle('active');
      hamburger.classList.toggle('open');
    }

    // Fungsi untuk menampilkan section sesuai ID
function showSection(id) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
}

// Fungsi untuk navigasi + update URL
function navigateTo(event, sectionId) {
  event.preventDefault();
  history.pushState({}, '', sectionId);
  showSection(sectionId);
}

// Saat halaman pertama dimuat
window.addEventListener('DOMContentLoaded', () => {
  let path = window.location.pathname.split('/').pop();
  if (!path || path === 'index.html') {
    path = 'home'; // default ke home
    history.replaceState({}, '', 'home'); // ganti URL tanpa reload
  }
  showSection(path);
});

// Navigasi back/forward browser
window.addEventListener('popstate', () => {
  const path = window.location.pathname.split('/').pop() || 'home';
  showSection(path);
});

    function updateTime() {
      const now = new Date();
      const timeString = now.toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' });
      document.getElementById('time').textContent = 'Waktu: ' + timeString + ' WIB';
    }

    function updateBattery() {
      if (navigator.getBattery) {
        navigator.getBattery().then(battery => {
          const level = Math.round(battery.level * 100);
          document.getElementById('battery-level').textContent = 'Baterai: ' + level + '%';
        });
      } else {
        document.getElementById('battery-level').textContent = 'Baterai: Tidak didukung';
      }
    }

    if (localStorage.getItem('mode') === 'dark') {
      document.body.classList.add('dark-mode');
    }
    
    // Teks ketik otomatis
const text = "Selamat datang di website pribadi saya. Di sini kamu bisa mengenal saya lebih jauh!";
let index = 0;
function typeText() {
  const el = document.getElementById("typed-text");
  if (index < text.length) {
    el.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 40);
  }
}
typeText();

// Musik kontrol
let isPlaying = false;
function toggleMusic() {
  const music = document.getElementById('bg-music');
  const btn = document.getElementById('music-btn');
  if (isPlaying) {
    music.pause();
    btn.textContent = 'Mainkan Musik';
  } else {
    music.play();
    btn.textContent = 'Hentikan Musik';
  }
  isPlaying = !isPlaying;
}

window.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('bg-music');
  music.volume = 0.5;
  music.play().catch(() => {
    // Autoplay kadang diblokir, bisa diaktifkan manual oleh user
    console.warn("Autoplay diblokir oleh browser");
  });
  isPlaying = true;
  updateMusicButton();
});

function updateMusicButton() {
  const btn = document.getElementById('music-btn');
  const icon = document.getElementById('music-icon');
  if (isPlaying) {
    btn.innerHTML = '<span id="music-icon">⏸️</span> Hentikan Musik';
  } else {
    btn.innerHTML = '<span id="music-icon">▶️</span> Mainkan Musik';
  }
}

function toggleMusic() {
  const music = document.getElementById('bg-music');
  if (isPlaying) {
    music.pause();
  } else {
    music.play();
  }
  isPlaying = !isPlaying;
  updateMusicButton();
}


    setInterval(updateTime, 1000);
    updateTime();
    updateBattery();
    updateModeIcon();
