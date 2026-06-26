// 1) Promise, რომელიც აბრუნებს "Hello World"-ს

const promise1 = new Promise((resolve, reject) => {
    resolve("Hello World");
});

promise1.then(result => {
    console.log(result);
});


// 2) Promise, რომელიც აბრუნებს რიცხვს 10

const promise2 = new Promise((resolve, reject) => {
    resolve(10);
});

promise2.then(result => {
    console.log(result);
});


// 3) Promise აბრუნებს "JavaScript"-ს და then-ში ემატება " is awesome"

const promise3 = new Promise((resolve, reject) => {
    resolve("JavaScript");
});

promise3.then(result => {
    console.log(result + " is awesome");
});


// 4) Promise, რომელიც reject-ს იძახებს

const promise4 = new Promise((resolve, reject) => {
    reject("Something went wrong");
});

promise4.catch(error => {
    console.log(error);
});


// 5) ლუწი თუ კენტი

const number = 8;

const promise5 = new Promise((resolve, reject) => {
    if (number % 2 === 0) {
        resolve("Even");
    } else {
        reject("Odd");
    }
});

promise5
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });


// 6) ასაკის შემოწმება

const age = 20;

const promise6 = new Promise((resolve, reject) => {
    if (age >= 18) {
        resolve("Access granted");
    } else {
        reject("Access denied");
    }
});

promise6
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });


// 7) Promise აბრუნებს 5-ს, then-ში ორმაგდება

const promise7 = new Promise((resolve, reject) => {
    resolve(5);
});

promise7.then(result => {
    console.log(result * 2);
});