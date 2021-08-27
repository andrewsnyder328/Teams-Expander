chrome.action.onClicked.addListener((tab) => {

  chrome.tabs.sendMessage(tab.id, "refresh");

});

chrome.tabs.onUpdated.addListener(function
  (tabId, changeInfo, tab) {
    setTimeout(function() {
      chrome.tabs.sendMessage(tabId, "refresh");
    }, 2000);
  }
);