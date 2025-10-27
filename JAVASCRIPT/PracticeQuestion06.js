let Marks = [95, 85, 65, 75, 88];

for (let m of Marks) {
  console.log(m);
}

let sum = 0;
for (let m of Marks) {
  sum = sum + m;
}
console.log(sum);
let avg=sum/Marks.length;
console.log(`Average marks is: ${avg}`);
