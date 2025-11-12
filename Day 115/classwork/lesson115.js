//1 Write code that calculates the maximum and minimum of 5 numbers.

console.log(Math.min(3, 0, -3)); // -3
console.log(Math.max(3, 0, -3)); // 3

//2 Use Math.round(), Math.ceil(), and Math.floor() on: 4.7, 9.1, -3.6.

console.log(Math.round(4.7));
console.log(Math.celi(4.7));
console.log(Math.floor(4.7));

console.log(Math.round(9.1));
console.log(Math.ceil(9.1));
console.log(Math.floor(9.1));

console.log(Math.round(-3.6));
console.log(Math.ceil(-3.6));
console.log(Math.floor(-3.6));

//3 Given: 3², 5³, 2¹⁰ Use Math.pow().

console.log(Math.pow(3, 4)); 
console.log(Math.pow(5, 2));
console.log(Math.pow(2, 10)); 

//4 Calculate the square roots of the following numbers: 25, 144, 2 Round the results using Math.round().

console.log(Math.round(Math.sqrt(25))); 
console.log(Math.round(Math.sqrt(144))); 
console.log(Math.round(Math.sqrt(2))); 

//5 Find the absolute values of the following numbers: -8.3, 5 - 12 Use Math.abs().

console.log(Math.abs(-8.3));
console.log(Math.abs(5 - 12));

//7 Write a function calculate(num) that:
//A Raises num to the power of 2

function calculate(num) {
  return Math.pow(num, 2);
}
console.log(calculate(4));

//B Finds the square root of the result

function calculate(num) {
  return Math.sqrt(Math.pow(num, 2));
}
console.log(calculate(4));

//C Rounds it down (Math.floor)

function calculate(num) {
    return Math.floor(Math.sqrt(Math.pow(num, 2)));
}
console.log(calculate(4.7));

//9 Write a function pythagoras(a, b) that calculates the hypotenuse:

function pythagoras(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

console.log(pythagoras(3, 4));