// for (let i = 1; i <= 5; i++) {
//   console.log("Avadhut");
// }

// //SUM OF NUMBERS
// console.log("FOR LOOP");
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum = sum + i;
//   console.log(sum);
// }

// console.log("WHILE LOOP");
// let i = 1;
// while (i <= 5) {
//   console.log("i=", i);
//   i++;
// }

// console.log("DO WHILE LOOP");
// let j = 20;
// do {
//   console.log("Ram");
// } while (j <= 10);

// let k = 5;
// do {
//   console.log("k=", k);
// } while (k <= 5);

// console.log("FOR OF LOOP");
// let str = "avadhut";
// let size = 0;
// for (let a of str) {
//   console.log(a);
//   size++;
// }
// console.log(size);

console.log("FOR IN LOOP");
let student = {
  name: "ram",
  age: 25,
  course: "java",
};

for (let key in student) {
  console.log("key:", key, "value:", student[key]);
}
