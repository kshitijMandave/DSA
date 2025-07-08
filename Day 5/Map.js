/*
Map
------
it is used to get access of each element of Array.
map is used to of each element of array and perform some actions on it. Whatever result will Generate it will be stored in new array and finally that array will returned.
*/

var arr = [10, 20, 30, 40, 50, 6, 0, 4, 70, 8, 5];

var Mapped = arr.map(function (element, index) {
  return element >= 10;
});
console.log(Mapped);
