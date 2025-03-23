chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "testSQL") {
      testSQLInjection(sendResponse);
      return true; 
    }
  });
  
  function testSQLInjection(sendResponse) {
    var inputs = document.querySelectorAll("input, textarea");
    var payloads = ["1' or '1'='1'-- -"];
  
    if (inputs.length === 0) {
      sendResponse({ result: "No input fields found." });
      return;
    }
  
    var initialPageContent = document.body.innerHTML;
  
    inputs.forEach((input) => {
      payloads.forEach((payload) => {
        input.value = payload; 
        console.log(`Testing SQL payload: ${payload} in input field`, input);
      });
    });
  
    var forms = document.querySelectorAll("form");
    if (forms.length > 0) {
      forms.forEach((form) => {
        form.submit();
        console.log("Form submitted:", form);
      });
  
      chrome.storage.local.set({ testInProgress: true, initialPageContent });
    } else {
      sendResponse({ result: "No forms found to submit." });
    }
  }
  
  chrome.storage.local.get(["testInProgress", "initialPageContent"], (data) => {
    if (data.testInProgress && data.initialPageContent) {
      detectSQLInjection(data.initialPageContent).then((isVulnerable) => {
        if (isVulnerable) {
          alert("SQL Injection has ran. If the page content has shown restricted content, the website is vulnerable.");
        } else {
          alert("SQL Injection has ran. If the page content has shown restricted content, the website is vulnerable.");
        }
        chrome.storage.local.remove(["testInProgress", "initialPageContent"]);
      });
    }
  });
  
  function detectSQLInjection(initialPageContent) {
    return new Promise((resolve) => {
      var currentPageContent = document.body.innerHTML;
  
      if (currentPageContent !== initialPageContent) {
        console.log("Page content has changed. Potential vulnerability detected.");
        resolve(true);
      } else {
        console.log("Page content has not changed. No vulnerabilities detected.");
        resolve(false);
      }
    });
  }
function detectCSRF() {
  var forms = document.querySelectorAll("form");
  let vulnerableForms = [];

  forms.forEach((form) => {
    var csrfToken = form.querySelector("input[type='hidden'][name*='csrf']");
    if (!csrfToken) {
      vulnerableForms.push(form);
      console.warn("CSRF token missing in form:", form);
    }
  });

  vulnerableForms.forEach((form) => {
    form.style.border = "2px solid red";
    var warning = document.createElement("div");
    warning.textContent = "CSRF Vulnerability Detected!";
    warning.style.color = "red";
    warning.style.fontWeight = "bold";
    form.parentNode.insertBefore(warning, form);
  });

  if (vulnerableForms.length === 0) {
    console.log("No CSRF vulnerabilities detected.");
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "detectCSRF") {
    detectCSRF();
  }
});

function testXSS() {
    var payloads = [
      "<script>alert('XSS')</script>",
      "<img src='x' onerror='alert(1)'>",
      "<svg/onload=alert(1)>",
      "<body onload=alert(1)>",
      "<iframe src='javascript:alert(1)'>",
    ];
  
    let isVulnerable = false;
  
    var injectedPayloads = payloads.join("");
    document.body.innerHTML += injectedPayloads;
    console.log("Testing XSS payloads:", injectedPayloads);
  
    isVulnerable = payloads.some((payload) => {
      return document.body.innerHTML.includes(payload);
    });
  
    if (isVulnerable) {
      alert("XSS vulnerabilities found! The website may be vulnerable to XSS.");
    } else {
      alert("No XSS vulnerabilities found. The website appears to be secure.");
    }
  }
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "testXSS") {
      testXSS();
    }
  });