// content.js
console.log('Content script loaded');

// Inject the sidebar into the current web page
async function injectSidebar() {
  console.log('Injecting sidebar');
  const sidebar = document.createElement('div');
  sidebar.id = 'extension-sidebar';
  sidebar.innerHTML = `
    <div id="sidebar">
      <p>.</p>
    </div>
  `;
  document.body.appendChild(sidebar);

  // Style the sidebar
  const sidebarStyle = sidebar.style;
  sidebarStyle.position = 'fixed';
  sidebarStyle.top = '0';
  sidebarStyle.right = '0';
  sidebarStyle.width = '30vw';
  sidebarStyle.height = '100vh'; // 1000vh to ensure the sidebar extends beyond the viewport height
  sidebarStyle.backgroundColor = '#D5F0D8'; // Adjust as needed

  // Style the original website content
  const bodyStyle = document.body.style;
  bodyStyle.marginRight = '30vw'; // Adjust margin to make space for the sidebar
  bodyStyle.transition = 'margin-right 0.3s ease'; // Add transition for smooth animation

  // Load the bundled React app into the sidebar
  const reactAppFrame = document.createElement('iframe'); // Use iframe to isolate React app
  reactAppFrame.style.width = '100%';
  reactAppFrame.style.height = '100%';
  sidebar.appendChild(reactAppFrame);

  // Fetch the content of the bundled React app
  const response = await fetch(chrome.runtime.getURL('index.html'));
  const htmlContent = await response.text();

  // Set the inner HTML of the iframe to the content of the React app
  reactAppFrame.contentDocument.open();
  reactAppFrame.contentDocument.write(htmlContent);
  reactAppFrame.contentDocument.close();
}

// Inject the sidebar when the content script is loaded
injectSidebar();


// Listen for messages from app.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("Message received in content.js:");
  if (request.action === "getDOM") {
    console.log("Sending DOM to app.js:");
    const element = document.querySelector("#productDetails_detailBullets_sections1 > tbody > tr:nth-child(1) > td");
    if (element) {
      const textContent = element.textContent.trim();
      console.log("Element found using CSS selector:", textContent);
      sendResponse({ asin: textContent });
    } else {
      console.error("Element not found using CSS selector");
    }
  }
  // Ensure that sendResponse is called asynchronously
  return true;
});

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "fetchImage") {
    // Get the image URL from the message
    const imageUrl = message.imageUrl;

    // Fetch the image
    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        // Convert the blob to a data URL
        const reader = new FileReader();
        reader.onload = function () {
          const dataUrl = reader.result;
          // Send the data URL back to the background script
          sendResponse({ imageDataUrl: dataUrl });
        };
        reader.readAsDataURL(blob);
      })
      .catch(error => {
        console.error("Error fetching image:", error);
        // Handle errors
      });

    // Return true to indicate that the response will be sent asynchronously
    return true;
  }
});

