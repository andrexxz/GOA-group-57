/*1)შექმენით HTML გვერდი <p> ელემენტით. დაწერეთ JavaScript ფუნქცია, რომელიც გამოძახებისას შეცვლის <p> ელემენტის ტექსტს და დააწერს "Hello, DOM!".

2)შექმენით HTML გვერდი <button> ელემენტით. დაწერეთ JavaScript ფუნქცია, რომელიც გამოძახებისას შეცვლის <button> ელემენტის ფონს წითლად და ტექსტის ფერს – თეთრად.

3)შექმენით HTML გვერდი ცარიელი <div> ელემენტით. დაწერეთ JavaScript ფუნქცია, რომელიც გამოძახებისას შექმნის ახალ <p> ელემენტს ტექსტით "New paragraph" და დაამატებს მას <div>-ის შიგნით.

4)შექმენით HTML გვერდი <button> ელემენტით. დაწერეთ JavaScript ფუნქცია, რომელიც მაშინ გამოიძახება, როცა ღილაკზე დააჭერენ, და აჩვენებს alert ს Mensagem-ით "Button clicked!".

5)შექმენით HTML გვერდი <form> ელემენტით, რომელიც შეიცავს input ველს და submit ღილაკს.
-----დაწერეთ JavaScript ფუნქცია, რომელიც ფორმის გაგზავნისას შეამოწმებს input ველს:
----- თუ ველი ცარიელია → გამოჩნდება შეცდომის შეტყობინება input ველის გვერდით.
-----თუ ველი არაა ცარიელი → გამოჩნდება alert ს Mensagem-ით "Form submitted!".

6)შექმენით HTML გვერდი 3 <button> ელემენტით, თითოეული განსხვავებული id-ით (btn1, btn2, btn3).
-----დაწერეთ JavaScript, რომელიც თითოეული ღილაკის დაჭერისას:
-----შეცვლის <h2> ელემენტის ტექსტს "Button X clicked!" (X = 1,2,3)
-----შეცვლის <h2> ფონს განსხვავებულ ფერად, რაც დამოკიდებულია დაჭერილ ღილაკზე.

7)შექმენით HTML გვერდი <div id="container"></div> და <button> ელემენტით.
-----ყოველი დაჭერისას შექმენით ახალი <p> ელემენტი ტექსტით "Item X" (X = დამატებული ელემენტების რაოდენობა).
-----დაამატეთ ახალი ელემენტი container-ში. */

// 1
function changeParagraphText() {
    const paragraph = document.querySelector('p');
    paragraph.textContent = "Hello, DOM!";
}

// 2
function changeButtonStyle() {
    const button = document.querySelector('button');
    button.style.backgroundColor = 'red';
    button.style.color = 'white';
}

// 3
function addNewParagraph() {
    const div = document.querySelector('div');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "New paragraph";
    div.appendChild(newParagraph);
}

// 4
function buttonClicked() {
    alert("Button clicked!");
}

// 5
function validateForm(event) {
    event.preventDefault();
    const input = document.querySelector('input');
    const errorMessage = document.querySelector('.error-message');
    if (input.value.trim() === "") {
        if (!errorMessage) {
            const error = document.createElement('span');
            error.className = 'error-message';
            error.style.color = 'red';
            error.textContent = "This field cannot be empty.";
            input.parentNode.insertBefore(error, input.nextSibling);
        }
    } else {
        if (errorMessage) {
            errorMessage.remove();
        }
        alert("Form submitted!");
    }   
}

// 6
function setupButtonHandlers() {
    const buttons = document.querySelectorAll('button');
    const heading = document.querySelector('h2');
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            heading.textContent = `Button ${index + 1} clicked!`;
            const colors = ['lightblue', 'lightgreen', 'lightcoral'];
            heading.style.backgroundColor = colors[index];
        });
    });
}   

// 7
let itemCount = 0;
function addItem() {
    itemCount++;
    const container = document.getElementById('container');
    const newItem = document.createElement('p');
    newItem.textContent = `Item ${itemCount}`;
    container.appendChild(newItem);
}
