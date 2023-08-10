//########### P1 ####################
//########### V1 ####################
// let ansNumber = prompt("Enter your magic number");

// let isNull = ansNumber === null;
// let isEmpty = ansNumber.trim() === "";
// let isNan = isNaN(ansNumber);

// let isValid = ansNumber == null || ansNumber.trim() === '' || isNan(ansNumber);
// let outOfRange = +ansNumber < 1 || +ansNumber > 99;
// let isInRange = +ansNumber >= 1 || +ansNumber <= 99;

// if(isValid) {
//     alert('Invalid Input');
// } else if (outOfRange) {
//     alert('Invalid Input');
// } else if(isInRange) {
//     alert('Try to guess number');
// };


//########### P1 ####################
//########### V2 ####################
let ansNumber = '';
let isEmpty;
let isNan;
let outOfRange;
let isInRange;

do {
    ansNumber = prompt("Enter your magic number");

    isEmpty = ansNumber.trim() === "";
    isNan = isNaN(ansNumber);
    outOfRange = +ansNumber < 1 || +ansNumber > 99;
    isInRange = +ansNumber >= 1 || +ansNumber <= 99;

    if(isEmpty || isNan) {
        alert('Invalid Input. Try 1-99');
    } else if (outOfRange) {
        alert('Invalid Input. Try 1-99');
    } else if(isInRange) {
        alert("Let's guess");
    };
    
} while(isEmpty || isNan || outOfRange);

//########### P2 ####################
//########### V1 ####################
// let guessNumber;
// let isEmpty;
// let isNan;
// let outOfRange;


do {

    guessNumber = prompt("Enter your magic number") || '';
    isEmpty = guessNumber.trim() === "";
    isNan = isNaN(guessNumber);
    outOfRange = +guessNumber < 1 || +guessNumber > 99;

    if(isEmpty || isNan) {
        alert('Invalid Input. Try 1-99');
    } else if (outOfRange) {
        alert('Invalid Input. Try 1-99');
    } else if(+guessNumber > +ansNumber) {
        alert('Too Hight');
    } else if(+guessNumber < +ansNumber) {
        alert('Too Low');
    } else if(+guessNumber === +ansNumber) {
        alert('Correct');
    };


} while(+guessNumber != +ansNumber)
