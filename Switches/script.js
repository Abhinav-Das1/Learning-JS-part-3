// SWITCH = can be an efficient replacement to many else if statements

// let day = "cake";

// switch(day){
//     case 1: 
//         console.log("It is Sunday");
//         break;
//     case 2: 
//         console.log("It is Monday");
//         break;
//     case 3: 
//         console.log("It is Tuesday");
//         break;
//     case 4: 
//         console.log("It is Wednesday");
//         break;
//     case 5: 
//         console.log("It is Thursday");
//         break;
//     case 6: 
//         console.log("It is Friday");
//         break;
//     case 7: 
//         console.log("It is Saturday");
//         break;
//     default:
//         console.log(`${day} is not a day`);
// }

let testScore = 33;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    case testScore >= 50:
        letterGrade = "E";
        break;
    default:
        letterGrade = "F";
}

console.log(letterGrade);