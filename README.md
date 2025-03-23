# APAK PROTECTION
##The Problem (Inspiration):
The internet is a vast network filled with engrossing information, methods of communication, and exciting journeys. However, anyone can fall victim to cyber assaults like phishing, SQL injection, Cross-Site Scripting (XSS), and Cross-Site Request Forgery (CSRF). These cruel attacks can cause data breaches, financial loss, and misuse of user information. APAK Protection is a tool inspired by a noble cause. The victim in our story is the grandpa of one of our team members. As an innocent soul, he was attempting to purchase a subscription to a service and almost gave away his bank account credentials to a phishing website. Luckily, our team member was able to step in and help, but if he hadn’t been there, who knows what could have happened? Therefore, we created APAK Protection as a tool designed to stop evil attacks and rescue others before becoming victims. 

##Mission Statement: 
Due to the internet being widespread and with the uprise of cyber attacks, APAK Protection is an easy Chrome extension to safely surf the web for all. 

##Summary of Features/User Benefits:
1. Phishing Detection
- How It Works: Tests every URL the user visits against a list of known phish pages (through the PhishTank API database). If detected as phishing, the website will close  Also offers an alternative option to input a URL in the extension to see if it’s a phishing website 
- User Benefit: Keeps users from visiting an infected site and losing information or being infected with malware.

2. SQL Injection Testing
- How It Works: Places typical SQL payloads into an input form on a webpage and waits for the application to respond.
- User Benefit: Helps identify web application vulnerabilities that process SQL queries, such as Splunk dashboards. This tool mainly helps businesses improve security on their websites. 

3. XSS Detection
- How It Works: Our tool utilizes a function that injects XSS payloads into the website. If the payloads execute, that means the page is vulnerable and alerts will pop up. 
- User Benefit: Prevents attackers from stealing sensitive information or hijacking a user's session, as it will notify users if the website is vulnerable to XSS attacks. 

4. CSRF Detection
- How It Works: Searches web pages for forms and checks if they carry CSRF tokens. Non-token-containing forms are considered vulnerable.
- User Benefit: Picks out websites that may be subject to CSRF attack and has illegitimate activities done on their account.
  
##How our tool is Unique:
Most extensions that serve as detection tools are limited to only one of the above, typically phishing prevention. However, our APAK Protection tool puts together detection of all these web vulnerabilities within a simple extension tool. The UI is simple for users with buttons that are easy to utilize. Furthermore, the built-in phishing prevention aspect will alert users when coming across vulnerable websites and close them out within 5 seconds. 

##Future Improvement:
1. Increase Phishing Database:
- Incorporate more APIs (Google Safe Browsing, etc.) to improve detection rates for phishing.
2. Include More Vulnerability Tests:
- Incorporate SQL injection, clickjacking, and other such known vulnerability tests.
3. Machine Learning
- Use machine learning to detect unknown phishing websites and zero-day attacks.
4. User Education:
- Incorporate educational tooltips and definitions to let users know about the threat and how to get around them.

##Real-World Applications:
- Personal Use: Users may utilize APAK Protection as a personal security blanket when surfing the web.
- Enterprise Use: Companies may use APAK Protection to teach staff about security and prevent data breaches.
- Education: APAK Protection can be used as an educational tool to demonstrate common web vulnerabilities and how to detect them.

##Development Process:
1. Research: We began with research on common web vulnerabilities and how they impact users.
2. Design: We defined the user interface and extension behavior to be as straightforward and intuitive as possible.
3. Implementation: We coded the extension with Google’s Safe Browsing APIs, JavaScript, and HTML/CSS.
4. Testing: We tested the extension on various websites and sandbox environment to make sure there were little to no flaws. 
5. Documentation: We documented the entire process and put our instructions in the README.md for the GitHub repository.

##Credits:
We used Google’s version 4 of their Safe Browsing API as the backbone of our program. We also used sandbox websites to test our extension. 
Phishtank (Phishing database and sandbox)
Google’s Gruyere (Test out XSS CSRF)
Testfire.net (SQL Injection)
ChatGPT (Makes imitation websites to test out all of the threats through our extension)

##How to Use: 
1) Go to chrome://extensions/ 
2) Enable “Developer Mode” 
3) Add APAK Protection to your Google Chrome Browser
4) Now when visiting a link Click on each button to check for each subjective problem
5) In the popup you can also paste any link you desire to check for phishing before you visit it. 

##Troubleshooting:
We utilized OpenAI to generate vulnerable HTML code, which we could run on our laptops
We used these websites to test our features, and check that what we were doing would be effective
We also used Generative AI to recognize errors in the program, which we couldn’t figure out ourself, and researched how we would fix them
We used multiple websites created precreated as a sandbox to test our extension on, and see if the extension wasn’t just working on our HTML sites

##Conclusion:
APAK Protection is a strong but easy program that allows you to surf the internet safely. We believe APAK Protection would encourage other people to be proactively involved in protecting themselves and their data on the internet.

Team Members: Aahan Nellutla, Pranav Anumarlu, Anish Rangarajan, Krish Bhardwaj
