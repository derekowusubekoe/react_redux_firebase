// You cannot access a variable outside the scope in which it was declared in.
// It is only scoped to function it was declared in.
// var are function scoped
// var variables are not block scoped
// let and const are a block scope

function printName(){
    var myName = "Nana";
    console.log(myName);
}
printName();

var firstName = "Derek";

if(firstName == "Derek"){
    let fullName = "Derek Owusu Bekoe"
    console.log(fullName);
}

//console.log(fullName);
