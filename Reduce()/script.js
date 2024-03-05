// .reduce() = reduce the elements of an array 
//             to a single value

// const prices = [109, 299, 519, 749, 479, 389];

// const total = prices.reduce(sum);

// console.log(`$${total.toFixed(2)}`);

// function sum(accumulator, element){
//     return accumulator + element;
// }

const grades = [70, 60, 82, 93];

const maximun = grades.reduce(sum);
const minimun = grades.reduce(getMin)

console.log(maximun);
console.log(minimun);

function sum(accumulator, element){
    return accumulator + element;
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}