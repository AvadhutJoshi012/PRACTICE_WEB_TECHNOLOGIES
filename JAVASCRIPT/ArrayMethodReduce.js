let arr = [1, 2, 3, 4, 5];
console.log(arr);

let output = arr.reduce((res, val) => {
  return res + val;
});

console.log("Sum: :", output);

let newArr = arr.reduce((pre, curr) => {
  return pre > curr ? pre : curr;
});
console.log(newArr);
