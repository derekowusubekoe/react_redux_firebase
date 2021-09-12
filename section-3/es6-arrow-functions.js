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
