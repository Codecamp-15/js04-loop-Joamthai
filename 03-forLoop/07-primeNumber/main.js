
// for(i = 2; i <= 100; i++){
//     for(j = 2; j <= i; j++){
//         if(i % j == 0 && i !== j){
//             break;
//         };
//         if(i == j) {
//             console.log(i);
//         };
//     };
// };


for(let n = 2; n <= 100; n++){
    let isPrime = true;
    for(let divider = 2; divider < n; divider++){      // divider 2, 3, 4, ..., n-1
        if (n % divider == 0) isPrime = false;
        break;                                          // n=2  5/2 = 2.5 => isPrime = true
    };                                                  // n=3  5/3 = 1.6 => isPrime = true
    if(isPrime) console.log(n);                         // n=4  5/4 = 1.25 => isPrime = true
};

// if(isPrime) console.log(`number ${n} is prime number`);
// else console.log(`number ${n} is not prime number`);
