const thikr = [
  "سبحان الله وبحمده",
  "أستغفر الله وأتوب إليه",
  "اللهم صل وسلم على نبينا محمد",
  "سبحان الله",
  "الحمد لله",
  "الله أكبر",
  "لا إله إلا الله وحده لا شريك له الملك وله الحمد وهو على كل شيء قدير",
  "لا إله إلا الله",
  "لا إله إلا أنت سبحانك إني كنت من الظالمين"
];

function showThikrOverlay() {

  const msg = thikr[Math.floor(Math.random() * thikr.length)];


  const overlay = document.createElement("div");
  overlay.textContent = msg;
  overlay.style.position = "fixed";
  overlay.style.bottom = "20px";
  overlay.style.right = "20px";
  overlay.style.background = "rgba(0,0,0,0.8)";
  overlay.style.color = "white";
  overlay.style.padding = "10px 20px";
  overlay.style.borderRadius = "10px";
  overlay.style.fontSize = "14px";
  overlay.style.zIndex = "999999";
  overlay.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
  overlay.style.transition = "opacity 1s";

  document.body.appendChild(overlay);


  setTimeout(() => {
    overlay.style.opacity = "1";
    setTimeout(() => overlay.remove(), 1000);
  }, 4000);
}


setInterval(showThikrOverlay, 5 * 60 * 1000);
