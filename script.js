const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

const audio = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
musicToggle.addEventListener("click", async () => {
  if (!audio.paused) {
    audio.pause();
    musicToggle.setAttribute("aria-pressed", "false");
    musicToggle.querySelector("span:last-child").textContent = "Play music";
    return;
  }
  try {
    await audio.play();
    musicToggle.setAttribute("aria-pressed", "true");
    musicToggle.querySelector("span:last-child").textContent = "Pause music";
  } catch (error) {
    musicToggle.querySelector("span:last-child").textContent = "Add music.mp3";
    document.getElementById("shareStatus").textContent =
      "To enable music, add a licensed audio file named music.mp3 beside index.html.";
  }
});

document.querySelectorAll(".gallery-tile").forEach(tile => {
  tile.addEventListener("click", () => {
    document.getElementById("galleryCaption").textContent = tile.dataset.caption;
  });
});

const shareButton = document.getElementById("shareButton");
shareButton.addEventListener("click", async () => {
  const shareData = {
    title: "Poonam & Vaibhav — Wedding Invitation",
    text: "With love, Poonam & Vaibhav invite you to celebrate their wedding on 10 November 2026 in Village Nog, Bilaspur, Himachal Pradesh.",
    url: window.location.href
  };
  const status = document.getElementById("shareStatus");
  if (navigator.share) {
    try { await navigator.share(shareData); status.textContent = "Thank you for sharing our invitation."; }
    catch (err) { if (err.name !== "AbortError") status.textContent = "Sharing was not available. Copy this page link from your browser."; }
  } else {
    try {
      await navigator.clipboard.writeText(shareData.text + " " + shareData.url);
      status.textContent = "Invitation text and link copied. You can paste it into WhatsApp.";
    } catch (err) {
      status.textContent = "Copy this page link from your browser and share it with your guests.";
    }
  }
});
