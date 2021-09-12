const names = ['John', 'Derek', 'Eliora'];
const moreNames = ['Will', 'Mark', 'Elsa'];

// Using a spread operator '...'
// console.log(...names);

// ['John', 'Derek', 'Eliora', ' ', 'Will', 'Mark', 'Elsa'], Concantinate all and put Gio in the middle of all the values in the array ES5
// let allNames = [];
// Use 'concat' to Concantenate two different arrays
// allNames = allNames.concat(names); // ['John', 'Derek', 'Eliora']

// Append a string into an Array
// allNames.push('Gio'); // ['John', 'Derek', 'Eliora', 'Gio']

// allNames = allNames.concat(moreNames); // ['John', 'Derek', 'Eliora', 'Gio', 'Will', 'Mark', 'Elsa']

// ============================================================

// USING THE SPRED OPERATOR
const allNames = [...names, 'Gio', ...moreNames]; //this destructure the array
console.log(allNames);




