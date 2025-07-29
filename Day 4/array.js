var user = []; // Empty Array

var Products = ["Apple", "Samsung", "Vivo"];

Products.push("Oppo"); //push() - to insert the value at last element of array

console.log(Products);

console.log("after pop() Method");

Products.pop(); // pop() - to remove the last element of arry.

console.log(Products);

Products[8] = "Nokia";

console.log(Products);

// Array with Array() constructor

const arr = new Array(3); // here we are mentioning the size of Array, but In JS there isn't be anything fixed, They are dynamic, which means you can add elements at any index, even if it's way beyond the current size.
arr[0] = "Kshitij";
arr[1] = "7038342551";
arr[2] = "Male";

console.log(arr);

arr[10] = "Nagpur";

console.log(arr);

let arr1 = new Array(3);
arr1.push("Kshitij"); // it will always be at last index
console.log(arr1);
