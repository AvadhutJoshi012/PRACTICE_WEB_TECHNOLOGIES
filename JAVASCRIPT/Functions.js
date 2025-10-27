function myName() {
  console.log("This is a Function");
  console.log("Using Function Call");
}
myName();

function value(msg, val) {
  console.log(msg);
  console.log(val);
}

value("Age: ", 25);

function sum(a, b) {
  let addition = a + b;
  console.log("The sum is: ", addition);
}
sum(10, 20);

let mul = (a, b) => {
  console.log(a * b);
};
mul();
mul(2, 3);
