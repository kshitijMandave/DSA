// let arr = [];
// arr[0] = Number(prompt("Enter the value :"));
// arr[1] = Number(prompt("Enter the value :")); and ...
// console.log(arr);

// here we are taking value with prompt
let arr = new Array(5);
for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(prompt("Enter the Value :"));
}

console.log(arr);
