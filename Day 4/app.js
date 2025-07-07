// here we are configuring array with static value, now i want to try with promptlet

// arr = [];
// arr[0] = "Kshitij";
// console.log(arr);

console.log("Array with dyanamic values");
// here we are taking the values from the user
let length = Number(prompt("How many numbers?"));
let arr = new Array(length); // this gives the array a defined length

for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(prompt("Enter number " + (i + 1)));
}

console.log(arr);
