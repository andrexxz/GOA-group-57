/*1)შექმენი ობიექტი თქვენს შესახებ,უნდა გქონდეთ ინფორმაცია --> სახელი , გვარი , ასაკი , მისამართი, სიმაღლე , სასწავლებელი ადგილი,ამის შემდეგ კონსოლში გამოიტანეთ თითოეული value

2)შექმენით ობიექტი ,სადაც გექნებათ თავიდან 3 property(თქვენ რაზეც გინდათ) , ამის შემდეგ ამ ობიექტში დაამატეთ კიდევ 2 property ,(დააკონსოლლოგეთ ობიექტი რომ ნახოთ ჩაემატა თუ არა) ,ამის შემდეგ ამოშალეთ ობიექტიდან თავიდან თქვენს მოერ შექმნილი 3 property და დატოვეთ მხოლოდ ჩამატებულები, დააკონსოლლოგეთ ობიექტი რომ ნახოთ შედეგი ამოიშალა თუ არა */

//1
let aboutMe = {
    firstName: "andria",
    lastName: "korchilava",
    age: 15,
    address: "gori, Georgia",
    height: "172cm",
    school: "gori public school number 3"
};
console.log(aboutMe.firstName, aboutMe.lastName, aboutMe.age, aboutMe.address, aboutMe.height, aboutMe.school);

//2
let obj = {
    prop1: "value1",
    prop2: "value2",
    prop3: "value3"
};
obj.prop4 = "value4";
obj.prop5 = "value5";
console.log(obj);
delete obj.prop1;
delete obj.prop2;
delete obj.prop3;
console.log(obj);