// Salju otomatis
const snowflakesContainer = document.querySelector('.snowflakes');

for (let i = 0; i < 50; i++) {
  const snowflake = document.createElement('span');
  const size = Math.random() * 5 + 5;
  const left = Math.random() * 100;
  const delay = Math.random() * 10;
  const duration = Math.random() * 10 + 5;

  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;
  snowflake.style.left = `${left}%`;
  snowflake.style.animationDelay = `${delay}s`;
  snowflake.style.animationDuration = `${duration}s`;

  snowflakesContainer.appendChild(snowflake);
}

// Sidebar toggle
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementById('hamburger').classList.toggle('open');
}

// Mode gelap/terang toggle
function toggleMode() {
  document.body.classList.toggle('dark-mode');
}

// Musik background
let isPlaying = true;
const bgMusic = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');
const musicIcon = document.getElementById('music-icon');

function toggleMusic() {
  if (isPlaying) {
    bgMusic.pause();
    musicIcon.textContent = '▶️';
    musicBtn.textContent = 'Putar Musik';
  } else {
    bgMusic.play();
    musicIcon.textContent = '⏸️';
    musicBtn.textContent = 'Hentikan Musik';
  }
  isPlaying = !isPlaying;
}

// Informasi Waktu Wib
function updateTime() {
      const now = new Date();
      const timeString = now.toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' });
      document.getElementById('time').textContent = 'Waktu: ' + timeString + ' WIB';
    }

// Informasi Batre
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

// Navigasi antar halaman
function navigateTo(event, id) {
  event.preventDefault();
  document.querySelectorAll('.content section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
