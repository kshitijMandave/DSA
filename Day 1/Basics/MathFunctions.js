console.log("Math Functions!!");

// Math.round()
// Rounds to the nearest integer.
// If decimal ≥ 0.5 → rounds up
// If decimal < 0.5 → rounds down
console.log(Math.round(10.6)); // 11
console.log(Math.round(10.3)); // 10

//  Math.ceil()
// Always rounds **up** to the next integer
console.log(Math.ceil(10.1)); // 11

// Math.floor()
// Always rounds **down** to the previous integer
console.log(Math.floor(10.7));

// Math.trunc()
// Removes the decimal part (keeps only integer part)
console.log(Math.trunc(10.9)); // 10

// Math.abs()
// Returns the absolute (positive) value
console.log(Math.abs(-20)); // 20

// Math.pow()
// Returns base to the power of exponent → base^exponent
console.log(Math.pow(2, 3)); // 8

// Math.sqrt()
// Returns square root
console.log(Math.sqrt(25)); // 5

// Math.min() and Math.max()
console.log(Math.min(10, 5, 3)); // 3
console.log(Math.max(10, 5, 3)); // 10

// Math.random()
// Returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // e.g., 0.4532

// To get a random integer between 1 and 10:
console.log(Math.floor(Math.random() * 10) + 1);
