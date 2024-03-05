// spread operator = ... allows an iterable such as an
//                   array or string to be expanded
//                   into seperate elements
//                   (unpacks the elements)

// let numbers =[1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// let minimun = Math.min(...numbers);

// console.log(minimun);

// let username = "Abhinav";
// let letters = [...username].join("-");

// console.log(letters);

let fruits = ["apple", "banana", "orange"];
let vegetables = ["carrots", "potato", "tomato"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);