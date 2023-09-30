// Function declaration/statement
function sayHi1(name) {
  console.log(`Hi ${name}`);
}

// Alternative way: function expression
// const sayHi3 = function() {
//   console.log('Hi');
// }
const sayHi2 = sayHi1;
const sayHello = function(name) {
  console.log(`Hello ${name}`);
}

// sayHi1('Jordan');
// sayHi2('Jordan');

// First class object:
//  - it can be assigned to a variable
//  - it can be passed around (as an argument)

// Array of Numbers
// [1, 2, 3]
// Array of functions
const functions = [sayHi1, sayHello];
// console.log(functions);

// functions[0]('Paul'); // === sayHi1('Paul');

// Execute all functions in the array

for(const fn of functions) {
  fn('Paul');
}
