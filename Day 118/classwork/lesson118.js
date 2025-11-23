/*let divElement = document.createElement('div');
let pElement = document.createElement('p');
let buttonElement = document.createElement('button');

pElement.textContent = "This is a paragraph.";
buttonElement.textContent = "Click Me";
divElement.appendChild(pElement);
divElement.appendChild(buttonElement);
document.body.appendChild(divElement);
*/

//2) დაამატეთ საიტზე ღილაკი როცა ამ ღილაკს დააჭერთ კონსოლში დაიბეჭდოს რომ ღილაკს დაეჭირა და ამასთან ერთად გვერძე მიეწეროს მერამდენე დაჭერა(დაკლიკება მოხდა)

let button = document.createElement('button');
button.textContent = "Click Me";
document.body.appendChild(button);
let clickCount = 0;
function handleClick() {
    clickCount++;
    console.log(`Button clicked ${clickCount} times`);
}
button.addEventListener('click', handleClick);
