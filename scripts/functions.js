console.log("functions.js file");

let name = "Michael";
let lastName = "Scott";
console.log("Hello " + name +" " + lastName + ", welcome to the Javascript world");

console.log(`Hello ${name} ${lastName} ${1+1}, welcome to the Javascript world`);

// function declaration
function sayHello(){
    console.log("Hello cohort 55");
}


// Call the function
sayHello();
sayHello();

// Example 2
function greet(name){
    console.log(`Hello ${name}, welcome`);
}

greet("Roland");
greet('Joseph');


//Example 3
function greet2(name1, name2){
    console.log(`Hello ${name1} and ${name2}, welcome to your JS course!`);
}

greet2("Roland" , "Jospeph");
greet2("Koiree", "Edward");
greet2("Leo" , "Nar");


//Example 4, with prompt
prompt("whit is your age");

function sayMyName(){
    prompt("What is my name?");
    console.log(`Your name is ${name}`);
    
}

sayMyName();

//Example 5 with numbers and default parameters
function add( num1=0, num2=0){
    console.log(`the addition between ${num1} and ${num2} = ${num1+num2}`);
    document.write(`the addition between ${num1} and ${num2} = ${num1+num2} <br>`);
}

add(10,2);
add(57.6, 38.4);
add(1183.5, 2353.5);

add(55);
add();


/* Challenge No.1
challenge 3: Double the Number
Task:
Create a function called doubleNumber that takes one number as a parameter.
The function should return the number multiplied by 2.
Print the result when you call the function with different numbers.
*/


function doubleNumber(num){
    console.log(`The double of ${num} is ${num*2}`);
}
doubleNumber(4);
doubleNumber(10);

//Button click event
function login(){
    alert("You have successfully logged in1");
    console.log("executing login function");
}