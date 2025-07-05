// let amount = Number(prompt("What is the final amount ?"));

// if (amount > 0 && amount <= 5000) {
//   console.log(amount);
// } else if (amount > 5001 && amount <= 7000) {
//   console.log(amount - Math.floor((5 * amount) / 100));
// } else if (amount > 7000 && amount <= 9000) {
//   console.log(amount - Math.floor((10 * amount) / 100));
// } else if (amount > 9000) {
//   console.log(amount - Math.floor((20 * amount) / 100));
// } else {
//   console.log("Wrong Input");
// }

// here we are calculating Math.floor((5 * amount) / 100) discount, and here we are subtracting discount amount with amount and getting payable amount amount - Math.floor((5 * amount) / 100)

// Another Way

let amount = Number(prompt("Enter the amount : "));
let dis = 0;
if (amount > 0 && amount <= 5000) {
  dis = 5;
} else if (amount > 5001 && amount <= 7000) {
  dis = 10;
} else if (amount > 9000) {
  dis = 20;
} else {
  console.log("Invalid Amount");
}

console.log(amount - Math.floor(dis * amount) / 100);
