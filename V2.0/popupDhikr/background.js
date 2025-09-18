chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.query({}, (tabs) => {
    for (let tab of tabs) {
      if (tab.id && tab.url && !tab.url.startsWith("chrome://")) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["content.js"]
        });
      }
    }
  });
});

