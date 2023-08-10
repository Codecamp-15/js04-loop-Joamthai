let num = prompt("Enter a Number");
let i = 0;

while (num >= 10**i) {
    num % 10**i === 0
    i++;
};
console.log(i)


// let count = 0;
// while(num >= 0 && num >= 1) {
//     count++;
//     num = num / 10;
// };
// console.log(count);