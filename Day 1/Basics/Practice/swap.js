// Swapping without third variable.

console.log("\nBefore Swapping\n");
let a = 40;
let b = 60;
console.log({ a, b });
a = a + b; // 100
b = a - b; // 40
a = a - b;

console.log("\nAfter Swapping\n");
console.log({ a, b });
