/*1)კომენტარის სახით ახსენით და განმარტეთ რა არის DOM და რაში გვეხმარება იგი

2)კომენტარის სახით ახსენით თუ რას გვიბრუნებს getElementByTagName("")

3)შექმენით 5 სათაური,შენი დავალებაა რომ ეს 5 სათაური წამოიღო ჯს ში tagName ის გამოყენებით და შეინახო ცვლადში,შემდეგ შენი დავალებაა რომ innerHTNL ის გამოყენებით შეცვალალო ყველა სათაურის შიგთავსი(ტექსტი) ცალ ცალკე(ინდექსების გამოყენებით რითიც თქვენ გინდათ, ამის შემდეგ როცა შეცვლით 5 ივე ს კონტენტს გამოიტანეთ 5 ივე სათაურის შიგთავსი კონსოლში გამოიყენეთ  innerHTML

4)გვერდზე გქონდეს სამი <p> ტეგი.
JS-ით getElementsByTagName("p") გამოიტანე პირველი <p> და
მისი textContent-ი შეცვალე --> "khachapuri" ით .გამოიყენე textCXontent

5)გვერდზე იყოს 5 <li>.
მიწვდი მესამე li ს
და textContent გააკეთე ცარიელი სტრინგი ანუ ამოშალე მასში მყოფი ტექსტი:

6)გვერდზე იყოს ორი <p>.
JS-ით გაცვალე ერთმანეთის textContent-ები
(პირველის ტექსტი გახდეს მეორის და პირიქით).

7)შექმენი 6 ცალი პარაგრაფი,წამოიღე ყველა პარაგრაფი tagName ის გამოყენებით და შეინახე ცვალადში,შემდეგ დააკონსოლლოგე იმ სიის სიგრძე რომელშიც ინახავ ყველა პარაგრაფს////ასევე ამ სიას გადაუარე for ციკლით და გამოიტანე თითოეული ელემენტის textContent ცალ ცალკე

8)შექმენი 5 ცალი i თეგი და მოათავსე რაიმე ტექსტი შიგნით,შენი დავცალებაა რომ წამოიღო ყველა i თეგი და შეინახო ცვლადში,შენი დავალებააა რომ ყველა i თეგში მყოფი ტექსტი textContent ის გამოყენებით შეცვალო --> "viri" ით /გამოიყენე while loop/for loop ორივე

9)დააგენერირე რენდომ მთელი რიცხვები 50 დან 100 ჩათვლით/////1 დან 10 ჩათვლით /// 5 დან 25 მდე/// */


//1) DOM (Document Object Model) არის ვებ-გვერდის სტრუქტურის მოდელი, რომელიც წარმოადგენს HTML ან XML დოკუმენტის ელემენტებს ობიექტების სახით. იგი გვეხმარება ვებ-გვერდის ელემენტებთან ინტერაქციისა და მათზე მანიპულაციის განხორციელებაში JavaScript-ის საშუალებით.

//2) getElementByTagName("") მეთოდი გვიბრუნებს HTML კოლექციას (HTMLCollection) ყველა ელემენტისგან, რომლებიც შეესაბამება მითითებულ ტეგის სახელს. მაგალითად, getElementByTagName("p") დაგვიბრუნებს ყველა <p> ელემენტს დოკუმენტში.

//3)
let headings = document.getElementsByTagName("h1");
headings[0].innerHTML = "First Heading";
headings[1].innerHTML = "Second Heading";
headings[2].innerHTML = "Third Heading";
headings[3].innerHTML = "Fourth Heading";
headings[4].innerHTML = "Fifth Heading";
for (let i = 0; i < headings.length; i++) {
    console.log(headings[i].innerHTML);
}

//4)
let paragraphs = document.getElementsByTagName("p");
paragraphs[0].textContent = "khachapuri";

//5)
let listItems = document.getElementsByTagName("li");
listItems[2].textContent = "";

//6)
let pElements = document.getElementsByTagName("p");
let temp = pElements[0].textContent;
pElements[0].textContent = pElements[1].textContent;
pElements[1].textContent = temp;

//7)
let allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs.length);
for (let i = 0; i < allParagraphs.length; i++) {
    console.log(allParagraphs[i].textContent);
}

//8)
let iTags = document.getElementsByTagName("i");
let index = 0;
while (index < iTags.length) {
    iTags[index].textContent = "viri";
    index++;
}
for (let j = 0; j < iTags.length; j++) {
    iTags[j].textContent = "viri";
}
//9)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let random1to10 = getRandomInt(1, 10);
let random5to25 = getRandomInt(5, 25);
let random50to100 = getRandomInt(50, 100);
console.log(random1to10, random5to25, random50to100);

