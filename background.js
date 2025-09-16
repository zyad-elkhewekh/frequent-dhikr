const thikr = [
    "سبحان الله وبحمده",
    "أستغفر الله وأتوب إليه",
    "اللهم صل وسلم على نبينا محمد"
];

function showRandomThikr() {
    const index = Math.floor(Math.random() * thikr.length);
    chrome.notifications.create({
        type: "basic",
        iconUrl: "icon.jpg",
        title: "ذكر",
        message: thikr[index]
    });
}

chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.clear("thikrAlarm");
    chrome.alarms.create("thikrAlarm", { periodInMinutes: 60 });
});
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "thikrAlarm") {
        showRandomThikr();
    }
});
let enabled = true;
chrome.action.onClicked.addListener(() => {
    enabled = !enabled;
    if (enabled) {
        chrome.alarms.create("thikrAlarm", { periodInMinutes: 60 });
        chrome.action.setBadgeText({ text: "On" });
    } else {
        chrome.alarms.clear("thikrAlarm");
        chrome.action.setBadgeText({ text: "" });
    }
});

