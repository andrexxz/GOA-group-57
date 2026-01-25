const addCart = document.getElementsByClassName("add-to-cart");
const mainImg = document.getElementsByClassName("main-img");
const countP = document.getElementsByClassName("count");
const plus = document.getElementsByClassName("plus");
const minus = document.getElementsByClassName("minus");
const addBtn = document.getElementsByClassName("add");
const addedBtn = document.getElementsByClassName("added");

for (let i = 0; i < addCart.length; i++) {
  addCart[i].addEventListener("click", function () {
    let currentCount = Number(countP[i].textContent) || 1;

    mainImg[i].style.border = "2px solid #a65c43";
    addCart[i].style.background = "#c83b0e";
    addBtn[i].style.display = "none";
    addedBtn[i].style.display = "flex";

    countP[i].style.color = "white";
    countP[i].textContent = currentCount;
  });

  plus[i].addEventListener("click", function (e) {
    e.stopPropagation();
    let currentCount = Number(countP[i].textContent);
    currentCount++;
    countP[i].textContent = currentCount;
  });

  minus[i].addEventListener("click", function (e) {
    e.stopPropagation();
    let currentCount = Number(countP[i].textContent);

    if (currentCount > 1) {
      currentCount--;
      countP[i].textContent = currentCount;
    } else if (currentCount === 1) {
      countP[i].textContent = 1;

      mainImg[i].style.border = "none";
      addCart[i].style.background = "white";
      addBtn[i].style.display = "flex";
      addedBtn[i].style.display = "none";
    }
  });
}