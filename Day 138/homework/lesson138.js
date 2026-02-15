/*1)კომენტარის სახით ახსენით თუ რა არის truthy და falsy მნშიშვნელობები

2)let values = [0, "0", "", "false", false, null, undefined, [], {}, NaN, 25];

ამ სიიდან :

ცალკე მასივში ჩაწერე truthy მნიშვნელობები

ცალკე მასივში ჩაწერე falsy მნიშვნელობები

გამოიყენე for of და სიის მეთოდი რომელიც ამატემს ელემენტებს სიაში

დაბეჭდე ორივე


3)შექმენი ფუნქცია register(username, password) 

თუ ორივე მნიშვნელობა truthy არის → დაბეჭდე "Registration successful"

თუ რომელიმე falsy არის → დაბეჭდე "All fields are required"

გამოიძახე ფუნქცია სხვადასხვა მნიშვნელობებით და შეამოწმე შედეგი.

4)შექმენი ცვლადი

userName = ""

შემდეგ შექმენი ცვლადი და ამ ცვლადს მიენიჭოს --->

თუ userName არის truthy მიენიჭოს მასში შენახული მნიშვნელობა და თუ userName არ არის truthy მიენიჭოს "guest"

გამოიყენე || ოპერატორი

5)ternary ოპერატორის გამოყენებით დააკონსოლლოგე:

"Positive" თუ რიცხვი მეტია 0-ზე

"Negative or Zero" სხვა შემთხვევაში

6)ternary-ის გამოყენებით განსაზღვრე არის თუ არა რიცხვი ლუწი.

გამოტანე:

"Even" თუ ლუწია

"Odd" თუ კენტია(სხვა შემთხვევაში)

7)შექმენი ცვლადი age.

ternary-ის გამოყენებით:

თუ ასაკი 18-ზე მეტია ან ტოლია → "Adult"

სხვა შემთხვევაში → "Minor"

8)მოცემულია ქულა score.

ternary-ის გამოყენებით დააბრუნე:

"Excellent" თუ 90+

"Good" თუ 70–89

"Fail" სხვა შემთხვევაში

(აქ უკვე ჩაშენებული ternary დასჭირდებათ რაზეც  გაკვეთილზეც ვისაუბრეთ)

# დავალებების გარეშე არც ერთი მოსწავლე შემოხვიდეთ(გახვალთ გააკეთებთ და შემოხვალთ გაკვეთილზე) */

// 1) Truthy and Falsy values in JavaScript are used to determine the boolean value of an expression.

// Truthy values are those that are considered true when evaluated in a boolean context. Examples include non-empty strings, non-zero numbers, objects, arrays, and the boolean value true.
// Falsy values are those that are considered false when evaluated in a boolean context. Examples include 0, "", false, null, undefined, and NaN.

// 2)let values = [0, "0", "", "false", false, null, undefined, [], {}, NaN, 25];

let truthyValues = [];
let falsyValues = [];

for (let value of values) {
  if (value) {
    truthyValues.push(value);
  } else {
    falsyValues.push(value);
  }
}

console.log("Truthy values:", truthyValues);
console.log("Falsy values:", falsyValues);  


// 3)function register(username, password) {
//   if (username && password) {
//     console.log("Registration successful");
//   } else {
//     console.log("All fields are required");
//   }
// }

// register("username", "password"); // Registration successful
// register("", "password"); // All fields are required
// register("username", ""); // All fields are required


// 4)let userName = "";
let displayName = userName || "guest";
console.log(displayName); // Output: "guest"


// 5)let number = 5;
let result = (number > 0) ? "Positive" : "Negative or Zero";
console.log(result);

// 6)let num = 4;
let parity = (num % 2 === 0) ? "Even" : "Odd";
console.log(parity);

// 7)let age = 20;
let ageGroup = (age >= 18) ? "Adult" : "Minor";
console.log(ageGroup);

// 8)let score = 85;
let grade = (score >= 90) ? "Excellent" : (score >= 70) ? "Good" : "Fail";
console.log(grade);

