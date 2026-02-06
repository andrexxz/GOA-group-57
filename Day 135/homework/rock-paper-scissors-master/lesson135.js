let scoreCount = document.getElementById("scoreCount");
let imagesArr = document.getElementsByClassName("images");

let choiceDiv = document.getElementById("choiceDiv");
let choiceDi2 = document.getElementById("choiceDi2");
let userChoice = document.getElementById("userChoice");
let computerChoice = document.getElementById("computerChoice");

let imageSources = ["blue.png", "yelow.png", "red.png"];

function computerMove() {
  let randomNumber = Math.floor(Math.random() * 3);
  computerChoice.src = imageSources[randomNumber];
}

function displayImage() {
  for (let i = 0; i < imagesArr.length; i++) {
    imagesArr[i].addEventListener("click", function () {
      choiceDiv.style.display = "none";
      choiceDiv2.style.display = "flex";

      userChoice.src = imageSources[i];
    });
  }
  computerMove();
}
displayImage();