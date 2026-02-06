/*1)კომენტარის სახით ახსენით თუ რა არის block scope 

2)კომენტარის სახით ახსენით თუ რა არის global scope

3)კომენტარის სახით ახსენით თუ რა არის local variables და როგორი ცვლადები არიან ისინი

4)კომენტარის სახით ახსენით თუ რა არის global variables და როგორი ცვლადები არიან ისინი

5)კომენტარის სახით ახსენით თუ რა არის namespace]

6)კომენტარის სახით ახსენით თ რა არის scope pollution

7)დაწერე კოდი, სადაც არის:

ერთი global ცვლადი

ორი block scope ცვლადი (ერთი if ბლოკში და მეორე for ციკლში)

შენი დავალებაა

console.log–ით გამოიტანე ყველა ცვლადი ბლოკის გარეთ და ნახე შედეგი

8)ამას შემდეგზე ავსნით მაგრამ შეამოწმეთ ==>

if (true) {
  var a = 5;
  let b = 10;
}
console.log(a);
console.log(b);

ნახეთ:

რომელი და რატომ დაბეჭდავს?

რომელი არ დაიბეჭდება?

9)let y = 5;

{
  let y = 15;
  console.log(y);
}

console.log(y);

რატომ არის პირველ და მეორე console.log-ის შედეგი განსხვავებული?


10)let z = 1;

function test() {
  let z = 2;
  console.log(z);
}

test();
console.log(z);

რატომ განსხვავდება შედეგი?

11)დაწერე:

for (let i = 0; i < 3; i++) {
  console.log(i);
}
console.log(i);

console.log(i) ციკლიდან გარეთ რა შედეგს იძლევა და რატომ?

12)let name = "Goga";

function changeName() {
  name = "Nika";
}

changeName();
console.log(name);

რა გამოვა და რატომ?


13)დაწერე კოდი, სადაც:

global ცვლადი x = 10

for ციკლში შექმენი let x = 0 და დააბეჭდე

ციკლიდან გარეთ დააბეჭდე global x


14)დაწერე კოდი, სადაც:

შექმენი global ცვლადი name

if ბლოკში შექმენი ცვლადი name და დააწერე სხვა მნიშვნელობა

დააბეჭდე name ბლოკის გარეთ */

// 1) Block scope არის ცვლადების ხილვადობის არეალი, რომელიც შემოიფარგლება კოდის ბლოკით, როგორიცაა ფუნქცია, ციკლი ან if-ბლოკი. Block scope-ში განსაზღვრული ცვლადები ხელმისაწვდომია მხოლოდ იმ ბლოკის შიგნით.

// 2) Global scope არის ცვლადების ხილვადობის არეალი, რომელიც მოიცავს მთელ კოდს. Global scope-ში განსაზღვრული ცვლადები ხელმისაწვდომია ნებისმიერ ადგილას კოდის ნებისმიერ ნაწილში.

// 3) Local variables არის ცვლადები, რომლებიც განსაზღვრულია კონკრეტულ ფუნქციაში ან ბლოკში და ხელმისაწვდომია მხოლოდ იმ კონკრეტულ არეში. ისინი არ არის ხელმისაწვდომი კოდის სხვა ნაწილებში.

// 4) Global variables არის ცვლადები, რომლებიც განსაზღვრულია გლობალურ არეში და ხელმისაწვდომია კოდის ნებისმიერ ნაწილში. ისინი შეიძლება გამოყენებულ იქნას სხვადასხვა ფუნქციებში და ბლოკებში.

// 5) Namespace არის ლოგიკური სივრცე, რომელიც გამოიყენება ცვლადების, ფუნქციების და კლასების ორგანიზებისთვის და მათი სახელების კონფლიქტების თავიდან ასაცილებლად. Namespace-ები საშუალებას იძლევიან ერთნაირი სახელების მქონე ელემენტების თანაარსებობას სხვადასხვა კონტექსტში.

// 6) Scope pollution არის პრობლემა, რომელიც წარმოიქმნება მაშინ, როდესაც გლობალური ცვლადები შემთხვევით გადაეწერება ან შეცვლილია სხვა კოდის ნაწილების მიერ, რაც იწვევს გაუგებრობას და შეცდომებს პროგრამაში.

// 7)
let globalVar = "I am a global variable";
if (true) {
  let blockVar1 = "I am a block scope variable in if";
}
for (let i = 0; i < 1; i++) {
  let blockVar2 = "I am a block scope variable in for";
}
console.log(globalVar);
// console.log(blockVar1); // Uncaught ReferenceError: blockVar1 is not defined
// console.log(blockVar2); // Uncaught ReferenceError: blockVar2 is not defined

// 8)
if (true) {
  var a = 5;
  let b = 10;
}
console.log(a); // 5
// console.log(b); // Uncaught ReferenceError: b is not defined
// a დაიბეჭდება, რადგან var ცვლადები ფუნქციის ან გლობალურ scope-ში არიან, ხოლო b არ დაიბეჭდება, რადგან let ცვლადები block scope-ში არიან.

// 9)
let y = 5;
{
  let y = 15;
  console.log(y); // 15
}
console.log(y); // 5
// პირველ console.log-ში გამოაქვს 15, რადგან ის block scope-ში განსაზღვრული y-ს ეხება, ხოლო მეორე console.log-ში გამოაქვს 5, რადგან ის გლობალურ y-ს ეხება.

// 10)
let z = 1;
function test() {
  let z = 2;
  console.log(z); // 2
}
test();
console.log(z); // 1
// ფუნქციის შიგნით განსაზღვრული z არის ადგილობრივი ცვლადი და გამოაქვს 2, ხოლო გლობალური z არის 1 და გამოაქვს 1.

// 11)
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
// console.log(i); // Uncaught ReferenceError: i is not defined
// i არ არის ხელმისაწვდომი ციკლიდან გარეთ, რადგან ის block scope-შია განსაზღვრული.

// 12)
let name = "Goga";
function changeName() {
  name = "Nika";
}
changeName();
console.log(name); // Nika
// name შეიცვალა ფუნქციის შიგნით და გამოაქვს "Nika".

// 13)
let x = 10;
for (let i = 0; i < 1; i++) {
  let x = 0;
  console.log(x); // 0
}
console.log(x); // 10
// ციკლში განსაზღვრული x არის block scope ცვლადი და გამოაქვს 0, ხოლო გლობალური x არის 10 და გამოაქვს 10.

// 14)
let name = "Goga";
if (true) {
  let name = "Nika";
}
console.log(name); // Goga  
// if ბლოკში განსაზღვრული name არის block scope ცვლადი და არ ახდენს გავლენას გლობალურ name-ზე, ამიტომ console.log(name) გამოაქვს "Goga".

