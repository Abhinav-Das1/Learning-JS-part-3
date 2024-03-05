// ternary operator = a shortcut to if{} and else{} statements
//                    helps to assign a variable based on a condition 
//                    condition? codeIfTrue : codeIfFalse;

// let age = 18;
// let message = age >= 18 ? "You're an adult" : "You a minor";
// console.log(message);

// let time = 11;
// let greeting = time < 12 ? "Good morning!" : "Good afternoon";
// console.log(greeting);

// let isStudent = false;
// let message = isStudent ? "You are a student" : "You are NOT a student";
// console.log(message);

let pAmt = 135;
let discount = pAmt >= 100 ? 10 : 0;
console.log(`Your total is $${pAmt - pAmt * (discount/100)}`);