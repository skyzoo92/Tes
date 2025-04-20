
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

function toggleMode() {
  document.body.classList.toggle("dark-mode");
  const icon = document.getElementById("mode-icon");
  if (document.body.classList.contains("dark-mode")) {
    icon.src = "https://cdn-icons-png.flaticon.com/512/5268/5268535.png";
  } else {
    icon.src = "https://cdn-icons-png.flaticon.com/512/4814/4814730.png";
  }
}

function navigateTo(event, sectionId) {
  event.preventDefault();
  document.querySelectorAll("main.content section").forEach((section) => {
    section.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");
}

function toggleMusic() {
  const music = document.getElementById("bg-music");
  const icon = document.getElementById("music-icon");
  if (music.paused) {
    music.play();
    icon.textContent = "⏸️";
    document.getElementById("music-btn").textContent = "Hentikan Musik";
  } else {
    music.pause();
    icon.textContent = "▶️";
    document.getElementById("music-btn").textContent = "Putar Musik";
  }
}

function updateTimeAndBattery() {
  const timeElem = document.getElementById("time");
  const batteryElem = document.getElementById("battery-level");

  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  timeElem.textContent = `Waktu: ${hours}:${minutes} WIB`;

  navigator.getBattery?.().then((battery) => {
    batteryElem.textContent = `Baterai: ${Math.round(battery.level * 100)}%`;
  });
}

setInterval(updateTimeAndBattery, 60000);
updateTimeAndBattery();

const typedText = document.getElementById("typed-text");
const messages = ["Selamat datang di portofolio saya.", "Saya seorang web enthusiast.", "Saya suka menciptakan hal keren dengan kode."];
let messageIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < messages[messageIndex].length) {
    typedText.textContent += messages[messageIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 50);
  } else {
    setTimeout(() => {
      typedText.textContent = "";
      charIndex = 0;
      messageIndex = (messageIndex + 1) % messages.length;
      typeText();
    }, 2000);
  }
}

typeText();
