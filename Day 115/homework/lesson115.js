/*1)მომხმარებელს შემოატანინე რიცხვი და გამოიტანე მისი მთელი ნაწილი Math.floor()-ის გამოყენებით.

2)მომხმარებელს შემოატანინე ათწილადი და გამოიტანე მისი მომდევნო მთელი რიცხვი Math.ceil()-ის გამოყენებით.

3)შექმენი ორი ცვლადი — a და b, მიენიჭე მათ რიცხვები და გამოიტანე რომელი მათგანი უფრო დიდია Math.max()-ის გამოყენებით.

4)შექმენი სამი ცვლადი და შეინახე სამივეში რიცხვი --> გამოიტანე მათგან მინიმალური მნიშვნელობა Math.min()-ის გამოყენებით.

5)დააგენერირე შემთხვევითი რიცხვი 0-დან 1-მდე Math.random()-ის გამოყენებით.

6)დააგენერირე შემთხვევითი  (მთელი) რიცხვი 1-დან 10-მდე, Math.random()-ისა და Math.floor()-ის კომბინაციით.

7)მომხმარებელს შემოატანინე რიცხვი და გამოიტანე მისი კვადრატული ფესვი Math.sqrt()-ის გამოყენებით.

8)მომხმარებელს შემოატანინე რიცხვი და გამოიტანე მისი ხარისხი (მაგ. კვადრატი ან კუბი) Math.pow()-ის გამოყენებით.

9)დააგენერირე 5 შემთხვევითი მთელი რიცხვი 1-დან 100-მდე და იპოვე ამ რიცხვებიდან
მინიმალური და მაქსიმალური მნიშვნელობა Math.random(), Math.floor(), Math.min() და Math.max()-ის გამოყენებით.

10)მომხმარებელს შემოატანინე რიცხვი და გამოიტანე:

მისი კვადრატი (Math.pow()),

ფესვი (Math.sqrt()),

დამრგვალებული მნიშვნელობა (Math.round()).
ყველა შედეგი ცალ-ცალკე გამოიტანე console.log()-ით.

11)შექმენი პატარა “მათემატიკური თამაში”:
დააგენერირე შემთხვევითი რიცხვი 1-დან 10-მდე.
მომხმარებელს შემოატანინე რიცხვი.
თუ მომხმარებლის რიცხვი დაემთხვა დაგენერირებულს — გამოიტანე "სწორია!",
სხვა შემთხვევაში "ცდები!".*/

//1
function getIntegerPart(num) {
    return Math.floor(num);
}

console.log(getIntegerPart(5.8));

//2
function getNextWholeNumber(num) {
    return Math.ceil(num);
}
console.log(getNextWholeNumber(4.3));

//3
function getMaxOfTwo(a, b) {
    return Math.max(a, b);
}
console.log(getMaxOfTwo(7, 10));

//4
function getMinOfThree(x, y, z) {
    return Math.min(x, y, z);
}
console.log(getMinOfThree(5, 2, 8));
/*
//5
function getRandomNumber() {
    return Math.random(0, 2);
}   
console.log(getRandomNumber());

//6
function getRandomInt1to10() {
    return Math.random(0, 11);
}
console.log(getRandomInt1to10());
*/
//7
function getSquareRoot(num) {
    return Math.sqrt(num);
}
console.log(getSquareRoot(49));

//8 
function getPower(num, power) {
    return Math.pow(num, power);
}
console.log(getPower(3, 3));

//9
function getMinMaxOfRandoms() {
    let randomNumbers = [];
    for (let i = 0; i < 5; i++) {
        randomNumbers.push(Math.floor(Math.random() * 100) + 1);
    }
    let min = Math.min(...randomNumbers);
    let max = Math.max(...randomNumbers);
    return { min, max };
}
console.log(getMinMaxOfRandoms());

//10
function calculateNumber(num) {
    let square = Math.pow(num, 2);
    let squareRoot = Math.sqrt(num);
    let rounded = Math.round(num);
    console.log("Square:", square);
    console.log("Square Root:", squareRoot);
    console.log("Rounded:", rounded);
}
calculateNumber(6.7);

//11
function mathGame(userInput) {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    if (userInput === randomNum) {
        console.log("სწორია!");
    }
    else {
        console.log("ცდები!");
    }
}
mathGame(5);