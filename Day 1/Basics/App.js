/*Addition
-----------
The '+' operator in JavaScript can do both:
1. Addition → if both operands are numbers
2. Concatenation → if at least one operand is a string

Examples:
10 + 20        → 30       (number + number = addition)
"10" + 20      → "1020"   (string + number = concatenation)
10 + "20"      → "1020"   (number + string = concatenation)
*/

let num1 = 10;
let num2 = 20;

console.log(num1 + num2); //Addtion

console.log("---------------***---------------");

console.log("Addition Is:" + num1 + num2); // Here we can have concatanation
console.log(num1 + num2 + " is Addition"); // Here we can have concatanation
// it will always goes from left to right.
console.log("Addition Is:" + (num1 + num2)); // and with the BODMAS rule here we can see the addtion first, and  after that concatanation

console.log("---------------***---------------");

/*
*** When using the - (subtraction) operator in JavaScript:
It is not used for string concatenation like the + operator.000
So, JavaScript tries to convert both operands to numbers (if possible) and then performs numeric subtraction. and hare will happen Type Coercion.

*** Type Coercion
-------------------
Type Coercion is the process where JavaScript automatically converts one data type to another to perform an operation.
*/
console.log("50" - num2); // out

console.log("---------------***---------------");

/* Static Value
---------------
A fixed value that is already defined in the code.
Example: */
let age = 10;

/* Dynamic Value
-------------------
A value that we take from the user at runtime.
Example: */

console.log("---------------***---------------");

// **** Type Casting

// Q. Accept and Print the Answers

// let age1 = prompt("Enter your age:");
// The prompt() function always returns a string.

// age1 = Number(age1);
/*
The Number() function is used to convert the string into a number.
If the input is a valid numeric value (like "25"), it will be converted.
If it's not a number (like "hello"), the result will be NaN (Not a Number).
*/
// console.log(age1);

console.log("---------------***---------------");

// **** Swaping
let a = 10;
let b = 20;
// let c;

// c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);

// swapping without Extra variable
// a = a + b; // a = 10 + 20 = 30
// b = a - b; // b = 30 - 20 = 10
// a = a - b; // a = 30 - 10 = 20
// console.log(a, b);

[a, b] = [b, a];

console.log(a, b);
