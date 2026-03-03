/*1)მომხმარებელს შემოატანინე რიცხვი (1–7).
switch–case გამოყენებით გამოიტანე შესაბამისი კვირის დღე.
თუ სხვა რიცხვია → "არასწორი დღე".

2)მომხმარებელს შემოატანინე თვის ნომერი (1–12).
switch–case გამოყენებით განსაზღვრე სეზონი:

12,1,2 → ზამთარი

3,4,5 → გაზაფხული

6,7,8 → ზაფხული

9,10,11 → შემოდგომა

3)მომხმარებელს შემოატანინე:

პირველი რიცხვი

ოპერატორი (+, -, *, /)

მეორე რიცხვი

switch–case გამოყენებით შეასრულე ოპერაცია.
თუ ოპერატორი არასწორია → "არასწორი ოპერატორი".

4)მომხმარებელს შემოატანინე ქულა (0–100).
switch(true) <--მოიძიეთ ///// გამოიყენე და დააბრუნე:

90–100 → A

80–89 → B

70–79 → C

60–69 → D

<60 → F

5)მომხმარებელს შემოატანინე ტექსტი:
"car", "bus", "bike", "train"

switch–case გამოყენებით დაბეჭდე შესაბამისი აღწერა.
default შემთხვევაში → "უცნობი ტრანსპორტი".

6)მომხმარებელს შემოატანინე რიცხვი.
switch(true) გამოყენებით განსაზღვრე:

თუ არის 0

თუ არის ლუწი

თუ არის კენტი

7)ცვლადი role:
შეამოწმე თუ ცვლადში ინახება შემდეგი მნშვნელობები გამოიტანე შესაბამისი ტექსტი

"admin"

"user"

"guest"

switch–case-ით განსაზღვრე წვდომა.
თუ სხვა მნიშვნელობაა -> default ->
"როლი არ არის განსაზღვრული"

8)მომხმარებელს შემოატანინე ფერი:
"red", "green", "blue"

switch–case-ით დაბეჭდე შესაბამისი ტექსტი.
თუ სხვა ფერია → default →
"ასეთი ფერი სისტემაში არ არის"





<------single-line function----->

9)დაწერე single-line arrow function, რომელიც იღებს ორ რიცხვს და აბრუნებს მათ ჯამს.

10)დაწერე single-line arrow function, რომელიც იღებს რიცხვს და აბრუნებს:

"ლუწი" თუ ლუწია
"კენტი" თუ კენტია
(გამოიყენე ternary)

11)დაწერე single-line arrow function, რომელიც აბრუნებს გადაცემული რიცხვის კვადრატს.

12)დაწერე single-line arrow function, რომელიც იღებს ტექსტს და აბრუნებს მის სიგრძეს

13)დაწერე single-line arrow function, რომელიც ტექსტს აბრუნებს მთლიანად დიდი ასოებით.

14)დაწერე single-line arrow function, რომელიც იღებს ასაკს და აბრუნებს

"სრულწლოვანი" თუ >= 18
"არასრულწლოვანი" თუ < 18

15)დაწერე single-line arrow function, რომელიც იღებს name და age-ს და აბრუნებს ობიექტს ამ ველებით */

//1

const dayOfWeek = (num) => {
  switch (num) {
    case 1:
      return 'ორშაბათი';
    case 2:
      return 'სამშაბათი';
    case 3:
      return 'ოთხშაბათი';
    case 4:
      return 'ხუთშაბათი';
    case 5:
      return 'პარასკევი';
    case 6:
      return 'შაბათი';
    case 7:
      return 'კვირა';
    default:
      return 'არასწორი დღე';
  }
};

//2

const seasonOfMonth = (num) => {
  switch (num) {
    case 12:
    case 1:
    case 2:
      return 'ზამთარი';
    case 3:
    case 4:
    case 5:
      return 'გაზაფხული';
    case 6:
    case 7:
    case 8:
      return 'ზაფხული';
    case 9:
    case 10:
    case 11:
      return 'შემოდგომა';
    default:
      return 'არასწორი თვე';
  }
};

//3

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : 'არ შეიძლება განაყოფი ნულის';
    default:
      return 'არასწორი ოპერატორი';
  }
};

//4

const gradeToLetter = (score) => {
  switch (true) {
    case score >= 90 && score <= 100:
      return 'A';
    case score >= 80 && score < 90:
      return 'B';
    case score >= 70 && score < 80:
      return 'C';
    case score >= 60 && score < 70:
      return 'D';
    case score < 60:
      return 'F';
    default:
      return 'არასწორი ქულა';
  }
};

//5

const transportDescription = (transport) => {
  switch (transport) {
    case 'car':
      return 'მანქანა';
    case 'bus':
      return 'ავტობუსი';
    case 'bike':
      return 'ველოსიპედი';
    case 'train':
      return 'მატარებელი';
    default:
      return 'უცნობი ტრანსპორტი';
  }
};

//6

const numberType = (num) => {
  switch (true) {
    case num === 0:
      return 'ნული';
    case num % 2 === 0:
      return 'ლუწი';
    case num % 2 !== 0:
      return 'კენტი';
    default:
      return 'არასწორი რიცხვი';
  }
};

//7
const checkRole = (role) => {
  switch (role) {
    case 'admin':
      return 'ადმინი';
    case 'user':
      return 'მომხმარებელი';
    case 'guest':
      return 'სტუმარი';
    default:
      return 'როლი არ არის განსაზღვრული';
  }
};

//8
const colorDescription = (color) => {
  switch (color) {
    case 'red':
      return 'წითელი';
    case 'green':
      return 'მწვანე';
    case 'blue':
      return 'ლურჯი';
    default:
      return 'ასეთი ფერი სისტემაში არ არის';
  }
};

//9
const sum = (a, b) => a + b;

//10
const evenOrOdd = (num) => (num % 2 === 0 ? 'ლუწი' : 'კენტი');

//11
const square = (num) => num * num;

//12
const textLength = (text) => text.length;

//13
const toUpperCase = (text) => text.toUpperCase();

//14
const checkAge = (age) => (age >= 18 ? 'სრულწლოვანი' : 'არასრულწლოვანი');

//15
const createPerson = (name, age) => ({ name, age });