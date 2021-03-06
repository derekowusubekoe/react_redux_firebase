// Regular function
const integers = [1,2,3];
// increase value of every element in the array -- use the map functionality

// ES6 Arrow Function
const updateIntergers = integers.map(number => number += 1);
console.log(updateIntergers);


// ES6 Arrow Function
const numIsEven = [1,2,3,4,5,6,7,8];

const findEvenNum = numIsEven.filter((evenInteger) => {
    return evenInteger % 2 == 0;
});
console.log(findEvenNum);


// ES6 Arrow Function
const ages = [23, 42, 6, 18];
const adults = ages.filter(age => age > 20);
console.log(adults);


// Arrow function with ZERO arguments
let randomNumber2 = () => Math.random;
console.log(randomNumber2());

// Arrow function with one parameter
let isPositive2 = number => number >= 0;
console.log(isPositive2(-1));


// Arrow function with two or more parameters
let sum2 = (a, b) => a + b;
console.log(sum2(2, 4));


// Anonymous Function

const square = number => number * number;
console.log(square(5));



