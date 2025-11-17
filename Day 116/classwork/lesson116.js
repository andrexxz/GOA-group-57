/*1)Math.random() ის გამოუენებით დააგენერირეთ რიცხვები 0 დან 1 მდე

2))Math.random() ის გამოუენებით დააგენერირეთ რიცხვები 0 დან 20 მდე

3)Math.random() ის გამოუენებით დააგენერირეთ რიცხვები 1 დან 20 ჩათვლით*/


//1
function getRandomNumber0to1() {
    return Math.random();
}
console.log(getRandomNumber0to1());

//2
function getRandomNumber0to20() {
    return Math.random() * 20;
}
console.log(getRandomNumber0to20());

//3
function getRandomNumber1to20() {
    return Math.random() * 21;
}
console.log(getRandomNumber1to20());    

/*4)შექმენით 4 ცალი h2 და ჩაწერე შიგნით რაიმე მტექსტები,შენი დავალებაა რომ წამოიღო ჯავასკრიპტში ეს ელემენტები TagName ის გამოყენებით და შეინახო ცვლადში,შენი დავალებაა რომ თითეული h2 გამოიტანო კონსოლში ინდექსების გამოყენებით */

const h2Elements = document.getElementsByTagName('h2');
console.log(h2Elements[0]);
console.log(h2Elements[1]);
console.log(h2Elements[2]);
console.log(h2Elements[3]);