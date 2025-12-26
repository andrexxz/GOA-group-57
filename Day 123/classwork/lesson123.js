/*შექმენით კონსტრუქტორი სახელად Student რომელიც მიიღებს მოსწავლის სახელს და თარიღს, კონსტრუქტორში შიგნით შექმენით ფუნქცია რომელიც გამოაკონსოლებს მოსწავლის სახელს და თარიღს თუ როდის დაიწყო სწავლა goa-ში

function Student(name, startDate) {
    this.name = name;
    this.startDate = startDate;
    this.getInfo = function() {
        console.log(`Student Name: ${this.name}, Start Date: ${this.startDate}`);
    }
}

const student1 = new Student('gio', '2022-09-01');
const student2 = new Student('jumbera', '2023-01-15');
const student3 = new Student('jemala', '2023-06-10');

student1.getInfo();
student2.getInfo();
student3.getInfo();


შექმენით ორი input ველი რომელშიც შეიყვანთ თქვენს სახელს და ასაკს, შემდეგ კონსტრუქტორის გამოყენებით დაწერეთ ფუნქცია რომელიც ამუშავდება submit ღილაკზე დაჭერისას და  საიტზე გამოიტანს  თქვენს შეყვანილ სახელს და  ასაკს

function User(name, age) {
    this.name = name;
    this.age = age;
}

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    const user = new User(name, age);
    document.getElementById('output').innerText = `სახელი: ${user.name}, ასაკი: ${user.age}`;
});


*/






function Traveler(currentAge, travelYears) {
    this.currentAge = currentAge;
    this.travelYears = travelYears;

    this.calculateFutureAge = function() {
        return this.currentAge + this.travelYears;
    }
}

document.getElementById('calculateBtn').addEventListener('click', function() {
    const age = parseInt(document.getElementById('ageInput').value);
    const years = parseInt(document.getElementById('yearsInput').value);

    const traveler = new Traveler(age, years);
    const futureAge = traveler.calculateFutureAge();

    document.getElementById('result').innerText = `თქვენ იქნებით ${futureAge} წლის შემდეგ.`;
});