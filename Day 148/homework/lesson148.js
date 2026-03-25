/*1)შექმენი მასივი სტუდენტების ობიექტებით:

const students = [
    { name: "ანა", age: 17, grade: 9 },
    { name: "ლაშა", age: 20, grade: 12 },
    { name: "მარიამი", age: 18, grade: 11 },
    { name: "გიორგი", age: 16, grade: 10 }
];

გამოიყენე filter რათა შექმნა ახალი მასივი, რომელიც შეიცავს მხოლოდ 18 წლის ან უფრო უფროს სტუდენტებს.

გამოიყენე მხოლოდ ერთი ხაზის ფუნქცია

2)შექმენი მასივი პოსტების ობიექტებით:

const posts = [
    { id: 1, title: "JavaScript Basics", likes: 150 },
    { id: 2, title: "CSS Tricks", likes: 75 },
    { id: 3, title: "React Guide", likes: 200 },
    { id: 4, title: "Node.js Tips", likes: 50 }
];

გამოიყენე filter, რათა გამოარჩიო მხოლოდ ის პოსტები, რომლებმაც 100-ზე მეტი ლაიქი მიიღო.

თითოეული ობიექტი შენახე ახალი მასივში და დაბეჭდე.

3)შექმენი მასივი სტატიის ობიექტებით:

const articles = [
    { id: 1, content: "Learning JavaScript is fun" },
    { id: 2, content: "CSS animations are cool" },
    { id: 3, content: "Advanced JavaScript techniques" },
    { id: 4, content: "HTML basics" }
];

გამოიყენე filter, რათა გამოყო მხოლოდ ის სტატია, რომელიც შეიცავს სიტყვას "JavaScript".

სიტყვა არ არის case-sensitive.

4)შექმენი მასივი პროდუქტების ობიექტებით:

const products = [
    { name: "ვაშლი", type: "ხილი", price: 2 },
    { name: "სტაფილო", type: "ბოსტნეული", price: 1 },
    { name: "ბანანი", type: "ხილი", price: 3 },
    { name: "კარტოფილი", type: "ბოსტნეული", price: 2 },
    { name: "მანგო", type: "ხილი", price: 5 }
];

მოითხოვე:

შექმენი მასივი, რომელიც შეიცავს მხოლოდ ხილის ტიპის პროდუქტებს.

დაამატე დამატებითი პირობა: ფასი უნდა იყოს 2-ზე მეტი.

5)შექმენი მასივი თანამშრომელთა ობიექტებით:

const employees = [
    { name: "მარიამი", age: 25, department: "IT", salary: 1200 },
    { name: "გიორგი", age: 30, department: "HR", salary: 900 },
    { name: "ანა", age: 22, department: "IT", salary: 1000 },
    { name: "ლაშა", age: 28, department: "Finance", salary: 1500 },
    { name: "ნინო", age: 35, department: "IT", salary: 2000 }
];

მოითხოვე:

გამოიყენე filter, რათა გამოარჩიო IT დეპარტამენტის თანამშრომლები, რომელთა ანაზღაურება 1500-ზე ნაკლებია და ასაკი 30-ზე ნაკლებია.

დაბეჭდე მხოლოდ მათი სახელები.

გამოგადგებათ map იც

6)const employees = [
    { name: "მარიამი", age: 25, department: "IT", salary: 1200 },
    { name: "გიორგი", age: 30, department: "HR", salary: 900 },
    { name: "ანა", age: 22, department: "IT", salary: 1000 },
    { name: "ლაშა", age: 28, department: "Finance", salary: 1500 },
    { name: "ნინო", age: 35, department: "IT", salary: 2000 }
];

დავალება:

გამოიყენე findIndex, რათა იპოვო პირველი თანამშრომელი IT დეპარტამენტში, რომლის ანაზღაურება 1500-ზე ნაკლებია და ასაკი 30-ზე ნაკლებია.

დაბეჭდე index და იმ თანამშრომლის ობიექტიც.

7)ზემოთ მოცემულ ობიექტში ==> .

იპოვე პირველი თანამშრომელი, რომლის ასაკი < 25.

დაბეჭდე თანამშრომლის ობიექტი და ინდექსი.

8)იპოვე პირველი თანამშრომელი, რომელიც მუშაობს Finance დეპარტამენტში და ასაკი > 25.

დაბეჭდე ინდექსი.

9)იპოვე პირველი თანამშრომელი, რომლის ანაზღაურება > 1500.

დაბეჭდე მისი სახელი და ანაზღაურება.

10)იპოვე პირველი თანამშრომელი, რომელიც IT დეპარტამენტშია, ასაკი < 30, ანაზღაურება < 1500, სახელი იწყება “ა” ასოთი.

დაბეჭდე ინდექსი და ობიექტი.

11)მოცემულია მასივი:

const numbers = [5, 10, 15, 20];

გამოიყენე reduce, რათა გამოითვალოს ყველა რიცხვის ჯამი.

დაბეჭდე შედეგი.


12)მოცემულია მასივი პროდუქტების ობიექტებით:

const products = [
    { name: "ვაშლი", price: 2 },
    { name: "ბანანი", price: 3 },
    { name: "სტაფილო", price: 1 }
];

გამოიყენე reduce, რათა გამოითვალოს პროდუქტების საერთო ფასი.

დაბეჭდე შედეგი.

13)მოცემულია მასივი სტუდენტების სახელებით:

const students = ["ანა", "ლაშა", "გიორგი", "ნინო"];

გამოიყენე reduce, რათა შექმნა ერთი სტრინგი, სადაც ყველა სახელი იქნება ხაზით -.

შედეგი უნდა იყოს: "ანა-ლაშა-გიორგი-ნინო".*/

// 1
const students1 = [
  { name: 'ანა', age: 17, grade: 9 },
  { name: 'ლაშა', age: 20, grade: 12 },
  { name: 'მარიამი', age: 18, grade: 11 },
  { name: 'გიორგი', age: 16, grade: 10 },
];

const adults = students1.filter((s) => s.age >= 18);

// 2
const posts = [
  { id: 1, title: 'JavaScript Basics', likes: 150 },
  { id: 2, title: 'CSS Tricks', likes: 75 },
  { id: 3, title: 'React Guide', likes: 200 },
  { id: 4, title: 'Node.js Tips', likes: 50 },
];

const popularPosts = posts.filter((p) => p.likes > 100);
console.log(popularPosts);

// 3
const articles = [
  { id: 1, content: 'Learning JavaScript is fun' },
  { id: 2, content: 'CSS animations are cool' },
  { id: 3, content: 'Advanced JavaScript techniques' },
  { id: 4, content: 'HTML basics' },
];

const jsArticles = articles.filter((a) =>
  a.content.toLowerCase().includes('javascript'),
);

// 4
const products1 = [
  { name: 'ვაშლი', type: 'ხილი', price: 2 },
  { name: 'სტაფილო', type: 'ბოსტნეული', price: 1 },
  { name: 'ბანანი', type: 'ხილი', price: 3 },
  { name: 'კარტოფილი', type: 'ბოსტნეული', price: 2 },
  { name: 'მანგო', type: 'ხილი', price: 5 },
];

const fruits = products1.filter((p) => p.type === 'ხილი' && p.price > 2);

// 5
const employees = [
  { name: 'მარიამი', age: 25, department: 'IT', salary: 1200 },
  { name: 'გიორგი', age: 30, department: 'HR', salary: 900 },
  { name: 'ანა', age: 22, department: 'IT', salary: 1000 },
  { name: 'ლაშა', age: 28, department: 'Finance', salary: 1500 },
  { name: 'ნინო', age: 35, department: 'IT', salary: 2000 },
];

const itNames = employees
  .filter((e) => e.department === 'IT' && e.salary < 1500 && e.age < 30)
  .map((e) => e.name);

console.log(itNames);

// 6
const idx1 = employees.findIndex(
  (e) => e.department === 'IT' && e.salary < 1500 && e.age < 30,
);

console.log(idx1, employees[idx1]);

// 7
const idx2 = employees.findIndex((e) => e.age < 25);
console.log(idx2, employees[idx2]);

// 8
const idx3 = employees.findIndex(
  (e) => e.department === 'Finance' && e.age > 25,
);
console.log(idx3);

// 9
const emp4 = employees.find((e) => e.salary > 1500);
console.log(emp4.name, emp4.salary);

// 10
const idx4 = employees.findIndex(
  (e) =>
    e.department === 'IT' &&
    e.age < 30 &&
    e.salary < 1500 &&
    e.name.startsWith('ა'),
);

console.log(idx4, employees[idx4]);

// 11
const numbers = [5, 10, 15, 20];
const sum = numbers.reduce((acc, n) => acc + n);
console.log(sum);

// 12
const products2 = [
  { name: 'ვაშლი', price: 2 },
  { name: 'ბანანი', price: 3 },
  { name: 'სტაფილო', price: 1 },
];

const totalPrice = products2.reduce((acc, p) => acc + p.price);
console.log(totalPrice);

// 13
const students2 = ['ანა', 'ლაშა', 'გიორგი', 'ნინო'];

const result = students2.reduce((acc, name, i) => {
  return i === 0 ? name : acc + '-' + name;
}, '');

console.log(result);
