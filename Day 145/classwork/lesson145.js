/*1)შექმენი სიას სადაც შეინახავ რამდენიმე ობიექტს, ყველა ობიექტში იყოს მსგავსი კიები მაგ: name ,surname , email , შენი დავალებაა რომ მოახდინო სიის დესტრუქცია შემდეგ თითოეული ობიექტის დესტრუქცია და მათი მნიშვნელოობების დაბეჭდვა

const profile = [
  { name: 'andrew', surname: 'korchilava', email: 'something@gmail.com' },
  { name: 'nika', surname: 'malikashvili', email: 'something@gmail.com' },
  { name: 'data', surname: 'kombalashvili', email: 'something@gmail.com' },
];

const [profile1, profile2, profile3] = profile;

const { name: name1, surname: surname1, email: email1 } = profile1;
const { name: name2, surname: surname2, email: email2 } = profile2;
const { name: name3, surname: surname3, email: email3 } = profile3;

console.log(name1, surname1, email1);
console.log(name2, surname2, email2);
console.log(name3, surname3, email3);

//2) შექმენი ცარიელი ობიექტი და ამ ობიექტში დესტრუქციის დროს გადაეცი ის მნიშვნელობები რასაც მომხმარებელი შემოიყვანს, მომხმარებელს შემოაყვანინე სახელი და გვარი, default მნიშნველობად ასევე ყველას მიანიჭე რაიმე რენდომ ასაკი და იმეილი

const obj = {};

const [
  name = prompt('your name?  '),
  surname = prompt('your surname?  '),
  age = 18,
  emial = 'example@gmail.com',
] = obj;

console.log(name, surname, age, email)


*/
const user = [{
    name: "nika",
    surname: "nishnianidze",
    address: {
        city: {
            street: "beliashvili"
        },
        country: "Georgia"
    }
}] //მოახდინეთ ყველაფრის დესტრუქცია და დაბეჭდე საერთოდ ყველაფრის მნიშვნელობა

const [name0, surname0, {address: {city: {street: street0}, country: country0}}] = user

console.log(name0, surname0, country0, street0);