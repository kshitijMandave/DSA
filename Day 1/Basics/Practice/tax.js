function tax(salry) {
  let t1 = 30;
  let t2 = 20;
  let t3 = 10;

  if (salry >= 15) {
    return `your payable tax is ${t1}%`;
  } else if (salry >= 10) {
    return `your payable tax is ${t2}%`;
  } else if (salry >= 5) {
    return `your payable tax is ${t3}%`;
  } else {
    return `your payable tax is ${0}%`;
  }
}

console.log(tax(15));
