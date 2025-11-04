/* 1)შექმენი ობიექტი person, რომელსაც ექნება ველები: name, age, city.
კონსოლში გამოიტანე მხოლოდ name და city.

2)შექმენი ობიექტი book რომელსაც ექნება key ები: title, author, pages.
გამოიტანე მხოლოდ author-ის მნიშვნელობა.

3)შექმენი ობიექტი student, რომელსაც ექნება key ები: firstName, lastName, grade, age.
Object.values() მეთოდის გამოყენებით გამოიტანე ყველა value.

4)შექმენი ობიექტი book ველებით: title, author, pages.
Object.keys() მეთოდის გამოყენებით გამოიტანე ყველა key.
ასევე
Object.values() მეთოდის გამოყენებით გამოიტანე ყველა value.

5)შექმენი ობიექტი movie ველებით: name, genre, rating.
Object.keys() მეთოდის გამოყენებით გამოიტანე ყველა key ცალ ცალკე ხაზზე (for loop)
ასევე
Object.values() მეთოდის გამოყენებით გამოიტანე ყველა value ცალ ცალკე ხაზზე (for loop)

6)შექმენი ობიექტი student = {name: "Gio", age: 16, grade: "A"}
წაშალე age და grade ფროფერთიები

7)შექმენი ობიექტი car = {brand: "Toyota", model: "Camry", year: 2020}
წაშალე model და დაბეჭდე კონსოლში მხოლოდ დარჩენილი ობიექტი(რომ დაწრუნდე მართლა ამოიშალა თუარა)

8)შექმენი ობიექტი book = {title: "1984", author: "Orwell", pages: 328}
წაშალე pages  და კონსოლში დაბეჭდე ის  ქიები რომლებიც დარჩა ობიექტში.

9)შექმენი ობიექტი person = {name: "Ana", age: 20}
დაამატე ახალი key 
სახელად city მნიშვნელობით "Tbilisi".
ასევე დაამატე height მნიშვნელობით --> 1.90


10)შექმენით ობიექტი რომელიც იქნება ცარიელი,შენი დავალებაა რომ ამ ობიექტშ დაამატო 5 property,შემდეგ დააკონსოლლოგეთ(რომ შეამოწმოთ შეივსო(დაემატა)თუ არა ,და ამის შემდეგ ამოშალოთ 2 property (ბოლოს დააკონსოლლოგეთ რომ ნახოთ ამოიშალა თუარა)

11)შექმენი ობიექტი phone = {brand: "Apple"}
დაამატე model და price ველები, შემდეგ ტერმინალში გამოიტანეთ ყველა value სიის სახით და ასევე ყველა key სიის სახით

12)შექმენი ობიექტი --> car = {"car brand" : "bmw" , "car model" ; "g30" , "car year" : "2013" }
ცონსოლში გამოიტანე ცალ ცალკე ყველა value გამოიყენეთ მეორე გზა რომელიც ვისწავლეთ ობიექტიდან ელემენტის წამოსაღებად
*/

//1
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person.name, person.city);


//2
let book = {
    title: "The Great Gatsby",
    Author: "F. Scott Fitzgerald",
    pages: 180
};
console.log(book.Author);


//3
let student = {
    firstName: "Jane",
    lastName: "Doe",
    grade: "A",
    age: 20
};
console.log(Object.values(student));


//4
let book1 = {
    title: "To Kill a Mockingbird",
    Author: "Harper Lee",
    pages: 281
};
console.log(Object.keys(book1));
console.log(Object.values(book1));


//5
let movie = {
    name: "Inception",
    genre: "Sci-Fi",
    rating: 8.8
};
let movieKeys = Object.keys(movie);
for (let i = 0; i < movieKeys.length; i++) {
    console.log(movieKeys[i]);
}
let movieValues = Object.values(movie);
for (let i = 0; i < movieValues.length; i++) {
    console.log(movieValues[i]);
}


//6
let student1 = {
    name: "Gio",
    age: 16,
    grade: "A"
};
delete student1.age;
delete student1.grade;
console.log(student1);


//7
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};
delete car.model;
console.log(car);


//8
let book2 = {
    title: "1984",
    Author: "Orwell",
    pages: 328
};
delete book2.pages;
console.log(Object.keys(book2));


//9
let person1 = {
    name: "Ana",
    age: 20
};
person1.city = "Tbilisi";
person1.height = 1.90;
console.log(person1);


//10
let obj = {};
obj.prop1 = "value1";
obj.prop2 = "value2";
obj.prop3 = "value3";
obj.prop4 = "value4";
obj.prop5 = "value5";
console.log(obj);
delete obj.prop4;
delete obj.prop5;
console.log(obj);


//11
let phone = {
    brand: "Apple"
};
phone.model = "iPhone 13";
phone.price = 999;
console.log(Object.values(phone));
console.log(Object.keys(phone));


//12    
let car1 = {
    "car brand": "bmw",
    "car model": "g30",
    "car year": "2013"
};
console.log(car1["car brand"]);
console.log(car1["car model"]);
console.log(car1["car year"]);

