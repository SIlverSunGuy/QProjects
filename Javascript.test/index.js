// This is a comment where you can explain what you are doing or the context of the line.
console.log('Step 3');

let x = 'Mosh'; 
console.log(x);


//Strings, number = (integers, Float), Boolean, Char, 

//in Javascript you use number, making it dynamic, number instead of Float or Integer

//string, Boelean, Undefined, null

//Integer or int= 5 or -42
//Floating point or float= 5.3 or 42.51
//Boolean or bool = True or False
//Character or Char = 'a' or '1' (single characters)
//String = 'hello'
//byte = A group of 8 bits

//Reference Types:
//Object --------------------------------------------------------------------------------------------------------------------------------
let person = {    //person is the Object. {} is the syntax you use while using an object
    name: 'Josh',
    age: 20
    
};

//Dot Notation
person.name = 'Bob';

// Bracket notation
person['name'] = 'Mary';
//or
let selection = 'name';
person[selection] = 'Mary';

let bababa = 'name';
person[bababa] = 'john'

console.log(person.name);

console.log(person);

//Array-------------------------------------------------------------------------------------------------------------------------------------
let selectedColors = ['red','blue']; //let selectedColors = [] would indicate an empty array
selectedColors[2] = 'green' //can also be a number 
console.log(selectedColors);
console.log(selectedColors [0]); //the array starts at 0, then 1. 0, 1, 2, 3 ,4 

//Function

function greet() {
    console.log('Hello my guy');
}

greet(); //this is a statement

//https://youtu.be/W6NZfCO5SIk?t=2393  

function greet(name, lastName) {
    console.log('Hello' + name + ' ' + lastName);
}

greet('john', 'smith');
greet('Mary', 'smith');

//VARIABLES:
// cannot be a reserved keyword (if / else / var / etc)
// names should be meaningfull, and descriptive names
// cannot start with a number
// cannot contain a space or hyphen (-)
// use camelnotations (variables are case senstiive) firstName lastName wrongName
// declare each variable on a single line, best modern practice

//const vs let :
//const = A value of a constant can't change
//let = value can change

let firstName = 'Mosh';
let lastName = 'man';

let interestRate = 0.3;
interesteRate = 1;
console.log(interestRate);

//const interestRate = 0.3;
//interestRate = 1;
//this will be an error in console

let name = "Mosh"; //String 
let age = '30'; // number Integer
let weight = '3.49'; // number Float
let isApproved = true; //boolean
let middleName = null; // situations where you want to clear a valuable of a number for example a red button on and off, null or with a value. if null then red, if have value then blue for example

//Javascript is Dynamic, meaning values can change in the future down the codeline

console.log(person.name);