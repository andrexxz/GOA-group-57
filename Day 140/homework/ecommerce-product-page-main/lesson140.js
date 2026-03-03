const mainIMG = document.getElementById("mainIMG");
const img = document.getElementsByClassName("img");
const quantity = document.getElementById("quantity");
const fullprice = document.getElementById("span");
const p = document.getElementById("p");
const h1 = document.getElementById("h1");

const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const add = document.getElementById("add");
const cartDIV = document.getElementById("cartDIV");
const cartIMG = document.getElementById("cartIMG");

let result = 0;
quantity.textContent = result;

const imgUrl = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function () {
    mainIMG.src = imgUrl[i];
    img[i].style.border = "3px solid hsl(26, 100%, 55%)";
  });
}

minus.addEventListener("click", function () {
  if (result > 0) {
    result -= 1;
    p.textContent = result;
    quantity.textContent = result;
  }
});
plus.addEventListener("click", function () {
  if (result >= 0) {
    result += 1;
    p.textContent = result;
    quantity.textContent = result;
  }
});

add.addEventListener("click", function () {
  fullprice.textContent = `$ ${125 * result}.00`;
});

cartIMG.addEventListener("click", function () {
  fullprice.textContent = `$ ${125 * result}.00`;
  cartDIV.style.display = "block";
}); 