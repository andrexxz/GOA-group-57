// შექმენით ერეი სადაც მოათავსებ ზვიანგურ სახელებს შემდეგ კი გააკეთებ მათ დესტრუქციას და დაბეჭდავ სათითადოდ
// შექმენი ობიექტი შენს შესახებ შემდეგ კი გააკეთე მისი დესტრუქცია და დაბეჭდე მონაცემები

const arr = [
  "ლორწუა-ზვიანგი",
  "ბჟუტუჩა ზვიანგი",
  "ფრუტუნ-ზვიანგა",
  "ბაგ-ზვიანგა",
  "კიბერ-ზვიანგი",
  "გლიჩ-ზვიანგულა",
  "კრიპტო-ზვიანგი",
  "ზვიანგოზავრი-ზვიანგი",
];
const [zviangi1, zviangi2, zviangi3, zviangi4, zviangi5, zviangi6, zviangi7] = arr;

console.log(zviangi1); 
console.log(zviangi2); 
console.log(zviangi3);
console.log(zviangi4);
console.log(zviangi5);
console.log(zviangi6);
console.log(zviangi7);


//2) შექმენით სია რომელშიც შეინახავთ რამდენიმე ობიექტს, თითოეული ობიექტი იქნება განსხვავებული, თქვენი მიზანია მოახდინოთ სიის დესტრუქცია შემდეგ კი თითოეული ობიექტის დესტრუქცია და მათი მნიშვნელობების დაბეჭდვა

const people = [
  { name: "mikelangelo", age: 307, city: "anchient zangozavroba city" },
  { name: "mikel jordan", age: 48, city: "basketball moedani"},
  { name: "skibidi", age: 888, city: "brainrot skibidi sofeli"},
];

const [person1, person2, person3] = people;

const { name: name1, age: age1, city: city1 } = person1;
const { name: name2, age: age2, city: city2 } = person2;
const { name: name3, age: age3, city: city3 } = person3;

console.log(name1, age1, city1);
console.log(name2, age2, city2);
console.log(name3, age3, city3);