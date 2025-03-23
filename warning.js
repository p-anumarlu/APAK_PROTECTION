let seconds = 5;
var countdownElement = document.getElementById("countdown");

var countdown = setInterval(() => {
  seconds--;
  countdownElement.textContent = seconds;

  if (seconds <= 0) {
    clearInterval(countdown);
    window.close();
  }
}, 1000);