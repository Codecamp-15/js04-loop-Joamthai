console.log("Learn While Loop");

console.log("Starting...");

let i = 1;

// while (i < 10) {
//     //loop block
//     console.log(i);
//     i = i + 2;
// }

// while (i++ < 10) {
//     //loop block
//     console.log(i);
// }

// while (++i <= 10) {
//     //loop block
//     console.log(i);
// }

// while (i <= 10) {
//     //loop block
//     console.log(i);
//     ++i;
// }

// while (i <= 10) {
//     //loop block
//     console.log(i);
//     i++;
// }

// while (i <= 20) {
//     //loop block
//     if (i % 3 == 0){
//         console.log(i);
//     }
//     i++;
// }

// while (i <= 20) {
//     if(i % 5 == 0){
//         console.log(`${i} : HighFive`);
//     } else {
//         i % 3 == 0
//         console.log(i);
//     }
//     i++;
// }

while (i <= 20) {
    if(i % 3 == 0 && i % 5 == 0){
        console.log(`${i} : FizzBuzz`);
    } else if(i % 5 == 0){
        console.log(`${i} : Buzz`);
    } else if(i % 3 == 0 ){
        console.log(`${i} : Fizz`);
    } else {
        console.log(i);
    };
    i++;
};




console.log("END...");