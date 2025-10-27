let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let Arr = ["Avadhut", "Ram", "Sham", "Mohan", "Rohan"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
for (let j = 0; j < Arr.length; j++) {
  console.log(Arr[j]);
}

arr.forEach(function myfun(x) {
  console.log(x);
});

let concatArr = arr.concat(Arr);
console.log(concatArr);

console.log(arr.toString());
