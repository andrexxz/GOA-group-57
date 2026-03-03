/*1)შექმენი ფუნქცია checkNumber(num)

პარამეტრი: num

თუ რიცხვი დადებითია → დააბრუნოს "Positive"

თუ უარყოფითია → "Negative"

თუ 0-ია → "Zero"

გამოიყენე ternary operator

2)შექმენი ფუნქცია gradeCategory(score)

90+ → "Excellent"

75–89 → "Good"

50–74 → "Average"

0–49 → "Fail"

თუ უარყოფითი ან 100-ზე მეტი → "Invalid score"

გამოიყენე მხოლოდ ternary ოპერატორები.

გამოიძახე ფუნქცია სხვადასხვა არგუმენტებით რამდენჯერმე


3)შექმენი ფუნქცია triangleType(a, b, c)

თუ ყველა გვერდი ტოლია → "Equilateral"

თუ ორი გვერდი ტოლია → "Isosceles"

თუ ყველა განსხვავებულია → "Scalene"

გამოიძახე ფუნქცია სხვადასხვა არგუმენტებით რამდენჯერმე

4)შექმენი ფუნქცია numberStatus(num)

თუ ლუწი და დადებითია → "Positive Even"

თუ ლუწი და უარყოფითია → "Negative Even"

თუ კენტი და დადებითია → "Positive Odd"

თუ კენტი და უარყოფითია → "Negative Odd"

თუ 0 → "Zero"

გამოიძახე ფუნქცია სხვადასხვა არგუმენტებით რამდენჯერმე

5)შექმენი ფუნქცია login(username, password)

სწორი მონაცემები:
username: "admin"

password: "1234"

მომხმარებელს შემოატანინე username და password და გადაეცით ფუნქციას არგუმენტად

შეამოწმე:

ორივე თუ სწორია → "Welcome"

username სწორია, password არა → "Wrong password"

სხვა შემთხვევაში → "Access denied" */

//1

function checkNumber(num) {
  return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero';
}

//2

function gradeCategory(score) {
  return score < 0 || score > 100
    ? 'Invalid score'
    : score >= 90
      ? 'Excellent'
      : score >= 75
        ? 'Good'
        : score >= 50
          ? 'Average'
          : 'Fail';
}

//3

function triangleType(a, b, c) {
  return a === b && b === c
    ? 'Equilateral'
    : a === b || b === c || a === c
      ? 'Isosceles'
      : 'Scalene';
}

//4

function numberStatus(num) {
  return num === 0
    ? 'Zero'
    : num % 2 === 0
      ? num > 0
        ? 'Positive Even'
        : 'Negative Even'
      : num > 0
        ? 'Positive Odd'
        : 'Negative Odd';
}

//5

function login(username, password) {
  return username === 'admin' && password === '1234'
    ? 'Welcome'
    : username === 'admin'
      ? 'Wrong password'
      : 'Access denied';
}

