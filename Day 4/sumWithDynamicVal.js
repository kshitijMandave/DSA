let arr = Array(5);
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(prompt("Enter the value"));
  sum = sum + arr[i];
}

console.log(sum);
