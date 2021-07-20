let a = +prompt('Enter a number')
function getFactorial(num) {
        if(num === 1 || num === 0 ) {
        return 1;
    } else {
        return num * getFactorial(num - 1);
    }
}
console.log(getFactorial(a))


//task 2

// let a = +prompt('Enter a number');
// let b = +prompt('Enter another number');

// function pow(num, degree) {
//     if (degree === 1) {
//         return num;
//       } else {
//         return num * pow(num, degree - 1);
//       }
// }

// console.log(pow(a, b))


//task 3

// let a = +prompt('Enter a number');
// let b = +prompt('Enter another number');

// function sum(num1, num2) {
//     if(num2 === 0) return num1;
//     else if (num1 === 0) return num2;
//     else {
//     return sum(num1 + 1, num2 - 1);
//     }
// }
// console.log(sum(a, b))