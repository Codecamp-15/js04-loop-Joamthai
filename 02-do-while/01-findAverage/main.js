
let input = 0;
let sum = 0;
let i = 0;


do {
    input = +prompt("Enter another number");
    if(input == 0){
        break;
    } else {
        sum += input;
        i++
    }
    
}    while (input != 0);

console.log(`sum : ${sum}, avg : ${sum / i}`);