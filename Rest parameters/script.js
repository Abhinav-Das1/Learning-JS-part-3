// Rest parameters = (...rest) allow a function work with a variable
//                   number of arguments by bundling them into array

//                   spread = expands an array into seperate elements
//                   rest = bundles seperate elements into an array

// function openFridge(...foods){
//     console.log(...foods);
// }

// function getFood(...foods){
//     return foods;
// }

// const food1 = "pizza";
// const food2 = "sushi";
// const food3 = "ramen";
// const food4 = "burger";

// openFridge(food1, food2, food3, food4);

// const foods = getFood(food1, food2, food3, food4);

// console.log(foods);

// function sum(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result;
// }

// const total = sum(1, 99);

// console.log(`Your total is $${total}`);

// function getAverage(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result / numbers.length;
// }

// const total = getAverage(72, 79, 83, 91, 69);

// console.log(total);

function combineStrings(...strings){
    return strings.join(" ");
}


const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullName);