/*1)შექმენით ერთი დივი,მიეცით ზომები 150px სიგანე 300px სიმაღლე/მიეცით წითელი ბორდერი

ამ დივში ჩააშენეთ 1 ფოტო(ინტერნეტშ მოძებნეთ ნებისმიერი ფოტო)

ამ დივშ ფოტოს ქვემოთ ჩააშენეთ 1 სათაური , ამ სათაურს ქონდეს class --> "heading" და css ში გასტილეთ

სათაურის ქვემოთ ჩააშენეთ 1 პარაგრაფი რომელსაც კლასი ექნება paragraph და css იდან გასტილეთ

და ამ სათაურის ქვევით იყოს button რომელსაც გასტილავთ css იდან */

let div = document.createElement("div");
div.style.width = "150px";
div.style.height = "300px";
div.style.border = "2px solid red";
document.body.appendChild(div);

let img = document.createElement("img");
img.src = "https://tse3.explicit.bing.net/th/id/OIP.h9dQXfNnbKbm-KarfJiVlAHaJ4?pid=Api&P=0&h=220";
div.appendChild(img);

let heading = document.createElement("h2");
heading.className = "heading";
heading.textContent = "This is a Heading";
div.appendChild(heading);

let paragraph = document.createElement("p");
paragraph.className = "paragraph";
paragraph.textContent = "This is a paragraph.";
div.appendChild(paragraph);

let button = document.createElement("button");
button.textContent = "Click Me";
div.appendChild(button);
