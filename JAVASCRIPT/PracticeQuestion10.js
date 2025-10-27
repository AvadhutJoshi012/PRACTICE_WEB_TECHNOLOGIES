let num = prompt("Enter Number To Print Array: ");
let arr = [];
for (let i = 1; i < num; i++) {
  arr[i - 1] = i;
}
console.log(arr);

let sum = arr.reduce((pre, curr) => {
  return pre + curr;
});
console.log(sum);

let product = arr.reduce((pre, curr) => {
  return pre * curr;
});
console.log(product);
