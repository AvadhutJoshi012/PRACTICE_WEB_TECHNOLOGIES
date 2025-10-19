let number = 12;
let userNum = prompt("Guess the Number: ");
while (userNum != number) {
  userNum = prompt("Wrong.. Guess Again");
}
console.log("Congrats you guess the right number.");
