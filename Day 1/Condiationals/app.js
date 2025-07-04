let ans = Number(prompt("Enter your Age?"));
if (isNaN(ans)) {
  console.log("Invalid Input!");
} else if (ans >= 18) {
  console.log("You can vote! your age is: ", ans);
} else {
  console.log("Sorry!! You can't vote! your age is: ", ans);
}
