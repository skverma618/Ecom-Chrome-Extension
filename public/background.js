// background.js

// Listen for messages from content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // Forward the message to the active tab (content script)
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, request, function(response) {
        // Optionally, you can send a response back to the content script
        console.log("Received response from content.js:", response);
      });
    });
    // Keep the messaging channel open for asynchronous responses
    return true;
  });
  