// Sample of an Object using Literal Notation
// An Object is a collection of properties associated with a variable
 const person = {
     name: 'Bill',
     age: 50
 };
 console.log(person);

// Function constructors that are often used to create objects
//In JavaScript, the thing called 'this' is the object that "owns" the current code.
//The value of 'this', when used in a function, is the object that "owns" the function.
 function Person(name, age){
 this.name = name;
 this.age = age;
};

// Giving a constructor prototype method to a Function
Person.prototype.speak = function(){
    console.log(`Hi my name is ${this.name}`);
};

// Creating an Object with a Constructor function
// Whenever you create an Object with a Constructor, you must use the 'new' operator
const bill = new Person ('Bill', 50);
bill.speak();

//console.log(bill)

const recipe = {
    recipeName: 'Fried Rice',
    difficulty: 'easy',
    vegetarian: true,
    prepTime: 20,
    cookTime: 60
};
console.log(recipe);