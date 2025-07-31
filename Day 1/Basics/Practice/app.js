// Q 1 print
console.log("**** To print \n\n");
console.log("Hello World");

// Q 2 Addition
console.log("\n **** To Addition \n\n");
function add(a, b) {
  return a + b;
}

add(10, 20); // here we are calling the function
console.log(add(10, 20)); // here we are printing the result of the function

// Q a+b-c
console.log("\n **** To Calculate a+b-c \n\n");

function calculate(a, b, c) {
  return a + b - c;
}

console.log(calculate(10, 20, 40)); // -10

// Q. Swaping
console.log("\n **** To Swap two values \n\n");

function swap(a, b) {
  let x = a + b - a;
  let y = a + b - b;
  return { x, y };
}

console.log(swap(10, 20));

// Swap with extra variable.
console.log("\n **** To Swap two numbers with extra variable\n\n");

function swapTwo(a, b) {
  let c;
  c = a;
  a = b;
  b = c;
  return { a, b };
}

console.log(swapTwo(50, 60));

// Q Swap Three Numbers
console.log("\n **** To Swap three numbers\n\n");

function swapThree(a, b, c) {
  let temp = a;
  a = b;
  b = c;
  c = temp;
  return [a, b, c];
}

let a = 10,
  b = 20,
  c = 30;

[a, b, c] = swapThree(a, b, c);

console.log(a, b, c);
