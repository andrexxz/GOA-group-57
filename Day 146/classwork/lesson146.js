/*მოცემულია ობიექტტი*/ 
store = {
  name: "MegaShop",
  address: {
    city: "Batumi",
    location: {
      street: "Chavchavadze",
      number: 10
    }
  },
  products: [
    {
      name: "Laptop",
      price: 2500
    },
    {
      name: "Phone",
      price: 1200
    }
  ]
} //მოცემული ობიექტიდან დესტრუქცია გაუკეთე name და city ს დანარჩენი კი გამოიტანე სპრედ ოპერატორის დახმარებით

const {name: name1, address: {city: city1}, ...rest} = store

console.log(name1, city1, rest)

//მოცემულია რიცხვების სია const numbers = [5, 10, 15, 20]; forEach  ფუნქციის გამოყენებით ეკრანზე გამოიტანე ლუწი რიცხვები კვადრატში აყვანილი

const numbers = [5, 10, 15, 20];

numbers.forEach((num, index) => {
    switch(num) {
        case num % 2 == 0:
          console.log(num * num)
          break
    }
})


/*const users = [
  {name: "Nika", age: 20},
  {name: "Ana", age: 25},
  {name: "Gio", age: 17}
]; //forEach ფუნქციის გამოყენებით გაარკვიე რამდენი წლის იქნება თითოეული იუზერი 15 წლის შემდეგ. ჯერ გამოიტანე მათი სახელები და გვერდით რამდენის წლის იქნებიან მომავალში.
*/
users.forEach((num, index) => {
  console.log(num.age + 15)
})


const users = [
  {name: "Nika", age: 20},
  {name: "Ana", age: 25},
  {name: "Gio", age: 17}
];// მოცემული მასივიდა map() ფუნქციის გამოყენებით  თითოეული ასაკი გაამრავლე ორზე და გამოიტანე შევლილი მასივი 

const changedusers = users.map(num => )