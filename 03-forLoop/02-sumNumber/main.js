let sum = 0;
let sumEven = 0;
let sumOdd = 0;
let sumSuperTwo = 0;
let sumSuperThree = 0;

for(let i = 0; i <= 100; i++){
    sum += i;

    if(i % 2 == 0){
    sumEven += i;
    sumSuperTwo += i**2;
    } else {
        (i % 2 != 0)
        sumOdd += i;
    };

    if (i % 3 == 0){
        sumSuperThree += i**2;
    };

};
console.log(sum);
console.log(sumEven);
console.log(sumOdd);
console.log(sumSuperTwo);
console.log(sumSuperThree);
console.log(sumSuperTwo - sumSuperThree);

