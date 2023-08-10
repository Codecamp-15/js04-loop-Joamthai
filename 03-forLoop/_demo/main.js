console.log("Learn counting Loop");

console.log("Starting........");
// () = parenthesis
// {} = bracket
// [] = square bracket

// for(let i = 0; i < 3; i++) {
//     console.log(`${i} : Hello`);
//     console.log("Codecamp");
// };

// for(let i = 1; i <= 20; i++) {
//     if (i % 2 == 0)
//     console.log(i);
// };

// for(let i = 2; i <= 20; i = i + 2) {
//     console.log(i);
// };

// for (let i = 1; i <= 20; i++) {
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log(`${i} : FizzBuzz`);
//     } else if(i % 5 == 0){
//         console.log(`${i} : Buzz`);
//     } else if(i % 3 == 0){
//         console.log(`${i} : Fizz`);
//     } else {
//         console.log(i);
//     };
// };

// for (let i = 1; i <= 20; i++) {
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log(`${i} : FizzBuzz`);
//     } else if(i % 5 == 0){
//         console.log(`${i} : Buzz`);
//     } else if(i % 3 == 0){
//         continue;    // Skip Fizz
//     } else {
//         console.log(i);
//     };
// };

// for(let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) 
//         console.log(i);
//     else continue;
//         console.log('even');
// };

// let str = "";
// for(let i = 1; i <= 10; i++) {
//     str += i;
// };
// console.log(str);

// let str = "";
// for(let i = 1; i <= 10; i++) {
//     if(i % 3 == 0) continue;
//     str += i;
// };
// console.log(str);

// let src = "codecamp";
// let res = "";

// for(let i = 0; i < src.length; i++){
//     // console.log(i, src[i]);
//     if(src[i] == "a" || src[i] == "e" || src[i] == "i" || src[i] == "o" || src[i] == "u") continue;
//     res = res + src[i];
// };
// console.log(res);

// let src = "codecamp";
// let res = "";

// for(let i = 0; i < src.length; i++){
//     let isVowel =src[i] == "a" || src[i] == "e" || src[i] == "i" || src[i] == "o" || src[i] == "u"
//     if(isVowel) continue;
//     res = res + src[i];
// };
// console.log(res);
for(let i = 2; i <= 3; i++){
    for(let j = 1; j <= 12; j++){
        console.log(`${i} x ${j} = ${j*i}`)
    };
console.log("\n");
}




console.log("END");

