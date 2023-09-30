// function declaration (all functions declared this way are hoisted up
// to the top of the file)
function sayHello0(name) {
  return `Hello, ${name}`;
}

// function expression
const sayHello1 = function(name) {
  return `Hello, ${name}`;
}

// Arrow function
const sayHello2 = (name) => {
  return `Hello, ${name}`;
}

// Rules:
// 1. if only one argument, you don't need the parenthesis
// 2a. if the body only has one line, you don't need the braces
// 2b. the only line returns implicitly (you don't need the "return" keyword)
const sayHello2a = name => `Hello, ${name}`;
// const sayHello3 = () => `Hello`;

const sum = function(x, y) {
  return x + y;
}

const sumArrow = (x, y) => Number(x) + Number(y);


// higherOrderFunction(function(name) {
//   console.log(`Hello ${name} from anonymous function`);
// })


// higherOrderFunction(name => console.log(`Hello ${name} from anonymous function`))



