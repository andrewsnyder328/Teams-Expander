chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  expandAll()
});

function expandAll() {
  var list = document.querySelectorAll('see-more');
  list.forEach(element => {
    element.className = "expanded"
  })  
}