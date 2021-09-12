// const and let are block scoped (variable can be accessed only within this scope.)
// var is not block scoped



if (true){
const message = "Hello";
console.log(message)
}

var name = "Derek";
console.log(name);
name = "Owusu";
console.log(name);
