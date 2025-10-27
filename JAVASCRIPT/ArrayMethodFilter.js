let arr = [4, 5, 6, 7, 8];
console.log(arr);

let newArr = arr.filter((val) => {
  return val % 2 === 0;
});
console.log(newArr);
