// let arr = [];
// console.log(arr);

// let a = [10, 20, 30];
// console.log(a);

// let arrCons = new Array["Ram", "Sham", "Rohan", "Mohan"]
// console.log(arrCons);

let arr = ["Ram", "Sham", "Rohan"];
console.log(arr[0]);
console.log(arr[2]);

let first = arr[0];
console.log("First Element is: ", first);

let last = arr.length - 1;
console.log("Last Element is: ", arr[last]);
console.log(arr);

arr[1] = "Mohan";
console.log(arr);

arr.push("Avadhut");
arr.unshift("Sham");
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.splice(1, 2);
console.log(arr);

let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(Arr);
console.log(Arr.length);

Arr.length = 11;
console.log(Arr);
Arr.length=5;
console.log(Arr);
