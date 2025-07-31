// here is the code for finding the maximum of two numbers

function max(a, b) {
  if (a >= b) {
    return `${a}is grater than b`;
  } else if (b >= a) {
    return `${b} is greater than a`;
  }
}

console.log(max(30, 40));
