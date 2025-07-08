/*

syntax
--------

    forEach(function(elemnet, index){

    })

forEach
--------
it is used to get access of each element of Array.

***forEach Take one Argument and that is One call back Function, and that fuction takes two parameters. (element,index)

*/

var arr = [10, 20, 30, 40, 50, 60, 70, 80, 1000, 100];
arr.forEach(function (elment, index) {
  console.log(elment, "-", index);
});
