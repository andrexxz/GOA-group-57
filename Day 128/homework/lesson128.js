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


const buyTab = document.getElementById("buy-tab");
const buy = document.getElementById("buy");

buy.addEventListener("click", function () {
  buyTab.style.display = "flex";
});

buyTab.addEventListener("click", function () {
  buyTab.style.display = "none";
});

const rate = document.getElementById("rate");

let heratRateChangerNumber = Math.floor(Math.random() * 60) + 50;

function heratRateChanger() {
  let randomNumber = Math.floor(Math.random() * 2);
  let change = Math.floor(Math.random() * 6) + 1;

  if (randomNumber === 0) {
    heratRateChangerNumber += change;
  } else {
    heratRateChangerNumber -= change;
  }

  if (heratRateChangerNumber >= 110) {
    heratRateChangerNumber -= change;
  } else if (heratRateChangerNumber <= 60) {
    heratRateChangerNumber += change;
  }

  rate.textContent = heratRateChangerNumber;
}

setInterval(heratRateChanger, 2000);