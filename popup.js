const thikr = [
    "سبحان الله وبحمده",
    "أستغفر الله وأتوب إليه",
    "اللهم صل وسلم على نبينا محمد"
];

function showRandomThikr() {
    let index = Math.floor(Math.random() * thikr.length);
    document.getElementById("thikrDisplay").innerText = thikr[index];
}

// Show one immediately
showRandomThikr();

// Keep changing every 5 seconds
setInterval(showRandomThikr, 10000);

