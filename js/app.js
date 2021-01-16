// JavaScript
// - ECMA Script (JavaScript Syntax)
// - Browser Object Model (BOM)
// - Document Object Model (DOM)

// Browser Object Model (BOM)
// - window Object
//      - document
//      - history 
//      - screen
//      - navigator
//      - location

// console.log("Console - 1", "Console - A", "Console - a");
// console.error("Console - 2", "Console - B");
// console.warn("Console - 3");

// alert("Hello");
// prompt("Enter Your Name");
// confirm("Are you sure?");

// Programming Language
// - Static Programming Language (C, C++, JAVA, C#, F#)
//      - Int, byte, long, short
//      - Double
//      - Float
//      - Decimal, String, char, array, object
// - Dynamic Programming Language (JavaScript, PHP, Python)
//      - number, string, array, object


// 2 types of DataType
// - Primitive DataType (a = 1) Int, float, double
// - Non-Primitive DataType , array, object

// DataType - Variable
// var 
// let 
// const - constant (ကိန်းသေ)

// var a = 1;
// console.log("Pre assign:", a);
// a = 2;
// console.log("After assign:", a);
// var a = 3;
// console.log("After Double assign:", a);

// let a = 1;
// console.log("Pre assign: ", a);
// a = 2;
// console.log("After assign: ", a);
// let a = 3;
// console.log("After assign: ", a);

// const a = 1; 
// console.log("Pre assign: ", a);
// a = 2;
// console.log("After Assign: ", a);
// const a = 3;
// console.log("After Double Assign: ", a);


// int a = 1; // Static Programming Language
// var a = 1; // Dynamic Programming Language

// var : DataType
// a : Variable
// = : Operator (Assignment Operator) 
// 1 : value

// Varible 
// - Declare (ကြေညာ)
// - Assign (သက်မှတ်)

// Variable Declare
// var b;

// b = 2; // Assign
// Variable Assign
// var a = 1;


// var bool = true;
// console.log(bool, typeof bool);

// Operators
// ==========
// - Arithmetic Operator (Mathematical)
// - Assignment Operator (Variable Assignment)
// - Comparison Operator (Conditional)
// - Logical Operator (Conditional)

// Arithmetic Operator
// + , - , * , / , % , ** , ++ , --

// Assignment Operator
// +=, -=, *=, /=, %=, =

// Comparison Operator
// ==, ===, !=, !==, <, >, <=, >=

// Logical Operator
// AND, OR, NOT

// var : DataType
// c : Variable
// = : Operator (Assignment Operator)
// a, b : Operand
// + : Operator (Arithmetic Operator)

// Statement (2)
//  - Conditional Statement
//      - If
//      - Else...if
//      - switch
//  - Looping Statement
//      - for
//      - while
//      - do while

// Array and Object
// 0, 1, 2, 3
var fruits = ["apple", "banana", "mango", "potato", "orange"];
var fruits = [
    ["apple", "red"],
    ["banana", "yellow"],
    ["mango", "green"],
    ["potato", "brown"],
    ["orange", "orange"]
];

// index, key => value


var human = {
    firstname: "John",
    lastname: "Doe",
    age: 19,
    job: {
        first: "Staff",
        second: "Senior Staff",
        third: "Manager"
    }
};

// for(var i = 0; i < 5; i++){
//     for(var j = 0; j < 2; j++){
//         console.log(fruits[i][j]);
//     }
// }

console.log(typeof human);