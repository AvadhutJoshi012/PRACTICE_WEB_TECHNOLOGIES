console.log("String");
let str = "Avadhut"; //TO CREATE STRING
str.length; //TO DISPLAY THE LENGTH
str[1]; //TO DISPLAY THE CHARACTER AT PARTICULAR INDEX
str[7];

console.log(`TEMPLATE_LITERALS`);
let student = {
  name: "avadhut",
  age: 23,
  course: "java",
};
console.log("The name is: ", student.name);
console.log(`The name is ${student.name} and age is ${student.age}`);

console.log("Avadhut\nJoshi");
console.log("Avadhut\tJoshi");

let string = "Avadhut Joshi";
let string1 = "Kini kolhapur";
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.slice(2, 8));
console.log(string.concat(string1));

console.log(string.replace("a", "J"));
console.log(string.replaceAll("A", "J"));

console.log(string.charAt(10));
