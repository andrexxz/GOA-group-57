/*1)შექმენი სია სადაც მოთავსებული იქნება ადამიანის სახელები , დაახლოებით 10 სახელი

თქბენიდ დავალებაა რომ filter მეთოდის დახმარებით შექმნათ ახალი სია სადაც ინქებიან მხოლოდ ის სახელები რომელშიც ასობის რაოდენობა იქნება 5 ზე მეტი და და იწყება g ასოზე

ეს დავალება შეასრულეთ single line function ითაც და ჩვეულებრივ return keyword ის გამოყენებითაც */

//let names = ['nika', 'dachi', 'kako', 'elene', 'giorgi']

//const names0 = names.filter(names1 => { return names1.length > 3 && names1[0] == "g"})

//let names = ['nika', 'dachi', 'kako', 'elene', 'giorgi']

//const names0 = names.filter(names1 => names1.length > 3 && names1[0] == "g")

/*2)შექმენით სია სადაც მოათავსებთ რიცხვებს,შენიდ ავალებაა რომ გაიგო სიაშ პირველი შემხვედრი ელემენტის ინდექსი რომელიც დააკმაყოფილებს შემდეგ პირობას ==>

თუ რიცხვი არის ლუწი ან (არის 50ზე მეტი და 100 ზე ნაკლები) */

let nums = [1, 54, 100, 42, 83, 12];

const nums0 = nums.findIndex((nums1) => {
  switch (true) {
    case nums1 % 2 == 0:
      console.log('ლუწი');
      break;
    case 50 > nums1 > 100:
      console.log('50-IS DA 100-is suasia');
      break;
    default:
        console.log('arcertiaa');
  }
});
