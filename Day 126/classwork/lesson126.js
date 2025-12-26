const newYear = new Date("2026-1-1");

function time() {
  const now = new Date();
  let distance = newYear - now;

  if (distance <= 0) {
    document.getElementById("dey").textContent = 0;
    document.getElementById("hours").textContent = 0;
    document.getElementById("min").textContent = 0;
    document.getElementById("sec").textContent = 0;
  }

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("dey").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("min").textContent = minutes;
  document.getElementById("sec").textContent = seconds;
}

setInterval(time, 1000);