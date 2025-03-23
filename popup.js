document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("checkUrl").addEventListener("click", () => {
    var urlInput = document.getElementById("urlInput").value.trim();

    if (!urlInput) {
      alert("Please enter a URL to check.");
      return;
    }

    try {
      new URL(urlInput);
    } catch (error) {
      alert("Invalid URL. Please enter a valid URL (e.g., https://example.com).");
      return;
    }

    chrome.runtime.sendMessage({ type: "checkUrl", url: urlInput }, (response) => {
      if (response.isUnsafe) {
        alert(`Warning: ${urlInput} is flagged as unsafe by Google Safe Browsing!`);
      } else {
        alert(`${urlInput} is safe.`);
      }
    });
  });

  document.getElementById("testSQL").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: "testSQL" }, (response) => {
        if (chrome.runtime.lastError) {
          console.log("Content script not found (page likely reloaded). Waiting for re-injection...");
        } else if (response && response.result) {
          alert(response.result); 
        }
      });
    });
  });

  document.getElementById("testXSS").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: "testXSS" }, (response) => {
        if (chrome.runtime.lastError) {
          console.error("Error sending message to content script:", chrome.runtime.lastError);
        }
      });
    });
  });

  document.getElementById("detectCSRF").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: "detectCSRF" });
    });
  });
});