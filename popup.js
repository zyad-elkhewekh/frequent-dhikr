const thikr = [
    "سبحان الله وبحمده",
    "أستغفر الله وأتوب إليه",
    "اللهم صل وسلم على نبينا محمد"
];

let intervalId = null;

// Function to show notification
function showRandomThikr() {
    let index = Math.floor(Math.random() * thikr.length);
    chrome.notifications.create({
        type: "basic",
        iconUrl: "icon.png", // add a 128x128 icon in your folder
        title: "ذكر",
        message: thikr[index]
    });
}

// Toggle start/stop when extension icon is clicked
chrome.action.onClicked.addListener(() => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        chrome.action.setBadgeText({ text: "" });
    } else {
        showRandomThikr(); // show one immediately
        intervalId = setInterval(showRandomThikr, 10000); // every 10 seconds
        chrome.action.setBadgeText({ text: "On" });
    }
});

