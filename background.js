var GOOGLE_API_KEY = "AIzaSyCLSyfydoaud3apNRjG9uiK6HNCO4jUBRc";

async function checkGoogleSafeBrowsing(url) {
  var apiUrl = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${GOOGLE_API_KEY}`;
  var requestBody = {
    client: {
      clientId: "APAK PROTECTION",
      clientVersion: "1.0",
    },
    threatInfo: {
      threatTypes: ["SOCIAL_ENGINEERING"],
      platformTypes: ["ANY_PLATFORM"],
      threatEntryTypes: ["URL"],
      threatEntries: [{ url }],
    },
  };
  
  try {
    var response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    var data = await response.json();
    console.log("Google Safe Browsing API response:", data);
    return data.matches && data.matches.length > 0; 
  } catch (error) {
    console.error("Error checking URL with Google Safe Browsing:", error);
    return false;
  }
}

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    var url = changeInfo.url;
    var isUnsafe = await checkGoogleSafeBrowsing(url);
    if (isUnsafe) {
      console.log(`Blocking unsafe URL: ${url}`);
      chrome.tabs.update(tabId, { url: chrome.runtime.getURL("warning.html") });
    }
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "checkUrl") {
    checkGoogleSafeBrowsing(request.url).then((isUnsafe) => {
      sendResponse({ isUnsafe });
    });
    return true; 
  }
});