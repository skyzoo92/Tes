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
    //Info Jam WIB
    function updateTime() {
      const now = new Date();
      const timeString = now.toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' });
      document.getElementById('time').textContent = 'Waktu: ' + timeString + ' WIB';
    }

  // Info Batre
  function updateBatteryDisplay(battery) {
    const level = Math.round(battery.level * 100);
    document.getElementById('battery-level').textContent = 'Baterai: ' + level + '%';
  }

  function updateBattery() {
    if (navigator.getBattery) {
      navigator.getBattery().then(battery => {
        // Set level pertama kali
        updateBatteryDisplay(battery);

        // Perbarui level saat berubah
        battery.addEventListener('levelchange', () => {
          updateBatteryDisplay(battery);
        });

        // Juga bisa tambah listener untuk charging, jika ingin
        battery.addEventListener('chargingchange', () => {
          console.log('Charging: ' + battery.charging);
        });
      });
    } else {
      document.getElementById('battery-level').textContent = 'Baterai: Tidak didukung';
    }
  }

  window.onload = updateBattery;

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
  
  //Auto Play Music
  const audio = document.getElementById('background-music');

  // Untuk mengatasi batasan autoplay di browser
  document.addEventListener('DOMContentLoaded', () => {
    audio.play().catch(() => {
      // Kalau gagal autoplay, tunggu interaksi user
      document.addEventListener('click', () => {
        audio.play();
      }, { once: true });
    });
  });


    setInterval(updateTime, 1000);
    updateTime();
    updateBattery();
    updateModeIcon();
