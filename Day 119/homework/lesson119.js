/*    1) ააწყვეთ counter, თუ რიცხვი იქნება 0ზე მეტი მაშინ მისი ფერი იყოს მწვანე, თუ 0ზე ნაკლები მისი ფერი იყოს წითელი, თუ 0 მაშინ თეთრი. background-color იყოს შავი. გასტილეთ ყველაფერი.
 */

let counter = 0;
const counterEl = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const updateCounter = () => {
  counterEl.textContent = counter;
    if (counter > 0) {
        counterEl.style.color = "green";
    } else if (counter < 0) {
        counterEl.style.color = "red";
    } else {
        counterEl.style.color = "white";
    }
};

/*გასტილე ეხლა, ყველაფერი შუაში იყოს და ღილაკები იყოს მწვანე და შედარებით დიდი*/

document.body.style.backgroundColor = "black";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.height = "100vh";
counterEl.style.fontSize = "48px";
incrementBtn.style.fontSize = "24px";
incrementBtn.style.backgroundColor = "green";
decrementBtn.style.fontSize = "24px";
decrementBtn.style.backgroundColor = "green";
incrementBtn.style.margin = "10px";
decrementBtn.style.margin = "10px";


incrementBtn.addEventListener("click", () => {
  counter++;
  updateCounter();
});
decrementBtn.addEventListener("click", () => {
  counter--;
  updateCounter();
});
updateCounter();

