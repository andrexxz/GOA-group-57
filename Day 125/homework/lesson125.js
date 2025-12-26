let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let time = document.getElementById("timetxt");

let timework = true;

function updTime() {
  if (timework) {
    const date = new Date();
    time.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }
}

setInterval(updTime, 1000);

startBtn.addEventListener("click", function () {
  timework = true;
});

stopBtn.addEventListener("click", function () {
  timework = false;
  const date = new Date();
  time.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
});