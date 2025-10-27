let arr = [1, 2, 3, 4, 5];

arr.forEach((i) => {
  console.log(i * i);
});
console.log();
arr.forEach((arr) => {
  console.log(arr * arr);
});
console.log();
let nums = [10, 20, 30, 40, 50];

let val = (nums) => {
  console.log(nums * nums);
};
nums.forEach(val);
