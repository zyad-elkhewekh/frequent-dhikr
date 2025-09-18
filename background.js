const thikrList = [
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

function showRandomThikr() {
  const idx = Math.floor(Math.random() * thikrList.length);
  chrome.notifications.create({
    type: "basic",
    iconUrl: "icon.jpg",
    title: "ذكر",
    message: thikrList[idx]
  });
}

chrome.runtime.onInstalled.addListener(() => {

  chrome.alarms.clear("dhikrAlarm");

  chrome.alarms.create("dhikrAlarm", { periodInMinutes: 10 });
});


chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "dhikrAlarm") {
    showRandomThikr();
  }
});

