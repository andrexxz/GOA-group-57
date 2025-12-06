/*1) შექმენი კონსტრუქტორი სახელიად Cars რომელიც პარამეტრად მიიღებს მანქანის ბრენდს და გამოშვების წელს, შექმენი ასეთი 3 მანქანა.
2) შექმენი კონსტრუქტორის ფუნქცია სახელით Person. კონსტრუქტორმა პარამეტრად უნდა მიიღოს: სახელი, გვარი და ასაკი. შექმენი ასეთი სამი ობიექტი.
3) HTML - ში შექმენი სამი ინფუთი სახელისთვის, მეილისთვის და პაროლისთვის, ასევე შექმენი Button-ი რომელზე დაჭერის შემდეგ ამუშავდება კონსტრუქტორ ფუნქცია და შექმნის User ობიექტებს. ეს ობიექტები ჩაამატე ლისტში და გამოაკონსოლე თქვენი User-ების ობიექტები. */
//1
function Car(brand, year) {
    this.brand = brand;
    this.year = year;
}

const car1 = new Car('Toyota', 2010);
const car2 = new Car('Honda', 2015);
const car3 = new Car('Ford', 2018);

//2
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

const person1 = new Person('John', 'Doe', 30);
const person2 = new Person('Jane', 'Smith', 25);
const person3 = new Person('Mike', 'Johnson', 40);


//3
function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
}

document.getElementById('createUserBtn').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;
    const newUser = new User(name, email, password);
    console.log(newUser);
    const userList = document.getElementById('userList');
    const listItem = document.createElement('li');
    listItem.textContent = `Name: ${newUser.name}, Email: ${newUser.email}`;
    userList.appendChild(listItem);
}
);

