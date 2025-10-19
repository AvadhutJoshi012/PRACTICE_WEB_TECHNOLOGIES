let score = prompt("Enter Your Score: ");
if (score > 90 && score <= 100) {
  console.log("Got A+");
} else if (score > 70 && score <= 90) {
  console.log("Got A");
} else if (score > 50 && score <= 70) {
  console.log("Got B");
} else if (score > 35 && score <= 50) {
  console.log("Got C");
} else if (score > 0 && score <= 35) {
  console.log("You Are Fail");
} else {
  console.log("Enter Valid Score");
}
