const time = document.getElementById("clock-txt");

const timeChanger = document.getElementById("timeChanger");
const heratChanger = document.getElementById("heratChanger");

const clockTxt = document.getElementById("clock-txt");
const heratRate = document.getElementById("herat-rate");

const watch = document.getElementById("Watch");
const colorButtons = document.getElementsByClassName("color");
let adres = [
  "images/black.png",
  "images/blue.png",
  "images/pink.png",
  "images/purple.png",
  "images/red.png",
];

console.log(colorButtons);

for (let i = 0; i < colorButtons.length; i++) {
  colorButtons[i].addEventListener("click", function () {
    watch.src = adres[i];
  });
}

function changeTiem() {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  if (hr < 10) {
    hr = `0${hr}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  if (sec < 10) {
    sec = `0${sec}`;
  }

  time.textContent = `${hr}:${min}:${sec}`;
}

timeChanger.addEventListener("click", function () {
  clockTxt.style.display = "block";
  heratRate.style.display = "none";
});

heratChanger.addEventListener("click", function () {
  heratRate.style.display = "flex";
  clockTxt.style.display = "none";
});

setInterval(changeTiem, 1000);