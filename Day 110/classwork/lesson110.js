// 1) შექმენით სია რომელშიც იქნება რიცხვები, შემდეგ შექმენით ორი დამატებითი სია, ერთ სიაში ჩაამატეთ მთავარი სიიდან მხოლოდ ლუწი რიცხვები ხოლო მეორეში მხოლოდ კენტები

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];
let oddNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  } else {
    oddNumbers.push(numbers[i]);
  }
  return evenNumbers, oddNumbers;
}

