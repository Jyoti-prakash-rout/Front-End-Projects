const score = 45;

if (score > 90) {
  console.log("You're very smart");

}
 else if (score > 50) {

  console.log("You're Average");

} else{
    console.log("You're not very smart");
}


/* Switch statement */

switch (score) {
    case score > 90:
        console.log("You're very smart");
        break;
    case score > 50:
        console.log("You're Average");
        break;
    default:
        console.log("You're not very smart");
        break;
}



/* Ternary Operator */

score > 90 ? console.log("You're Average") : console.log("You're not very smart");



/* Write a code to check the person is adult or not */

const currentAge = 15;

if (currentAge >= 18) {
    console.log("You're an adult");
} else {
    console.log("You're not an adult");
}


/* Write a code to check the number is even or odd */

const number = 66;

if (number % 2 === 0) { // 66 % 2 = 0
    console.log("The number is even");
} else {
    console.log("The number is odd");
}   


/* Using switch statement, write a code to check number is divisible by 5 or 15 */

const num = 74;

switch (num) {
    case num % 5 === 0:
        console.log("The number is divisible by 5");
        break;
    case num % 15 === 0:
        console.log("The number is divisible by 15");
        break;
    default:
        console.log("The number is not divisible by 5 or 15");
        break;
}

