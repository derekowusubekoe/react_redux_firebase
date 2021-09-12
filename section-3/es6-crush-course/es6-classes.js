class Person {
// Create a Constructor with parameters
    constructor(firstName, age, children) {
// Create an object from the Constructor
        this.firstName = firstName;
        this.age = age;
        this.children = children;
    }
// Give Class Constructor a Prototype of of 'speak'
    speak(){
        console.log(`Hi my name is ${this.firstName}`)  
    }
    birth(child){
        this.children.pop(child);
        return this.children
    }
};
// Declare an Object from the Constructor with values
const bill = new Person ('Bill', 43, ['Eliora', 'Elsa']);

//console.log(bill); for testing purpose
// Calling the Method 'speak'
bill.speak();
bill.birth('Jess');
console.log(bill.children);
