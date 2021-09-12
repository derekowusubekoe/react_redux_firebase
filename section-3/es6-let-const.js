
var firstName = "Derek"
if(firstName == "Derek"){
    let fullName = "Derek Owusu Bekoe";
    let age = 43;
    // const age = 43; this will give an error
    age = 41;
    console.log(fullName);
    console.log(age)
}

// console.log(fullName); this will give you an error
// console.log(age)

// declare a const variable and assign it to an object

const person = {
    initialName: 'Derek',
    gender: 'male',
    country: 'United States'
};

// updating the person object will give an error because of 'const'
// changing it to 'let' will work

// person = {
//     initialName: 'Nana',
//     gender: 'female',
//     country: 'Ghana'
// };

console.log(person.initialName)
console.log(person.gender)
console.log(person.country)

// Updating a 'const' object properties
const fruits = {
    originalName: 'Orange',
    category: 'citrus',
    vitamin: 'C'
};

fruits.originalName = 'Pawpaw';
fruits.category = 'Discicious';
fruits.vitamin = 'D';

console.log(fruits.originalName)
console.log(fruits.category)
console.log(fruits.vitamin)
