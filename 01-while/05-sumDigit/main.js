let n = prompt("Enter a Number");
let sum = 0;

while (n) {
    let remainder = n % 10;
    n = (n - remainder) / 10;
    sum += remainder;
};
console.log(sum);


// while (n) {                              //156       //15        //1
//     let remainder = n % 10;              //6         //5         //1
//     n = (n - remainder) / 10;            //15        //1         //0 ((1 - 1)/10)
//     sum += remainder;                    //6         //(6 + 5)   //(6 + 5 + 1)
// };
// console.log(sum);

