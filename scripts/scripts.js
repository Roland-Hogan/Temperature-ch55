console.log("Variables");
// keyword nameVar = value;
// var, let , const

//string
var firstName = "Roland";
var lastname = "Hogan";


//numerical values
let myAge = 38;
let myHeight = 74;

//boolean (true / false)
let isStudent = false;

// display the values on the console
console.log("My name is: " + firstName + ", I am " + myAge + " years old, my size is " + myHeight);

// Arithmetic operations + - / *

let num1 = 10;
let num2 = 2;

let sum = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;

console.log("The sum is: " + sum);
console.log("The sub is: " + sub);
console.log("The mul is: " + mul);
console.log("The div is: " + div);

// challenge 1

let a = 0;
const π = 3.1416;
let r = prompt("Enter the radius: ");



// a = π * r * r
a = π * r * r;

console.log("The area of a circle with a radius of" + r + " value is the" + a);


// challenge #2

let integerNumber;

integerNumber = 1625;
console.log("The value of integerNumber is " + integerNumber);
integerNumber = 375;

alert(integerNumber + 125);


// challenge #3

userAge = prompt("Enter your age: ");

alert("Thank you for your answer.");
alert("you are " + userAge + " years old.");



// differance between variable and constant

//definition of variable
let aVariable;

//assigning a value
aVariable=20;

// define and assing the value in the same line
let otherVarible = 10;

console.log(aVariable,otherVarible)

aVariable=50;
otherVarible=40;

console.log(aVariable,otherVarible)

const weekDays = 7;
console.log(weekDays);


// Error: the constant is always the same.
// weekDays=5;
// console.log(weekDays);