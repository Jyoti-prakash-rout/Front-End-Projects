
/* While Loop */

  let i = 1;

 while (i < 10) {
   console.log(i);
    i++;
}


 /* Do While Loop */

  let j = 7;

 do {
     console.log(j);
     j++;
} while (j < 12);



/* For Loop */

for (let i = 0; i < 500; i++) {

    if(5 ===22){
        continue
    }

    if(i % 5 == 0){
        console.log(i);
    }
    if(i > 500){
        break;
    }
}


/* Print even number upto 60 using for loop */

const uptoNumber = 60;

for (let i = 0; i <= uptoNumber; i++) {
    if (i % 2 == 0) {
        console.log("Even Number: " , i);
    }
}



/* Given a number, find the factorial of that number */

 let number = 5;
    let factorial = 1;

    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }

    console.log(factorial);


    /* Write a table for 19 using for loop */

    let tableNumber = 18;

    for (let i = 1; i <= 10; i++) {
        console.log(tableNumber + " * " + i + " = " + tableNumber * i);
    }



    const defaultPin = 0000;
    const guessMessage = "Please make your guess";
    const wrongMessage = "Sorry that was wrong";
    const correctMessage = "That was correct";
    const maxAttemt = 4;
    let currentAttempt = 0;

    for(let i = 1; i <= maxAttemt; i++) {

        const userInput = parseInt(prompt("Please guess your number"));

        if(userInput == defaultPin){

            console.log(correctMessage);
            break;
        }

        else{
            console.log(wrongMessage);
        }
    }








