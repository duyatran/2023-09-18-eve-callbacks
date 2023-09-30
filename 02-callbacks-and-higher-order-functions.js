const sayHello = function(name) {
  console.log("we are inside sayHello!");
  console.log(`Hello ${name}`);
}

// const sayHi = function(name) {
//   console.log("we are inside sayHi!");
//   console.log(`Hi ${name}`);
// }

const higherOrderFunction = function(callback) {
  console.log('higherOrderFunction begins')
  callback('Gloria');
  console.log('higherOrderFunction ends');
}

higherOrderFunction(sayHello);
// const higherOrderFunction = function(sayHello) {
//   console.log('higherOrderFunction begins')
//   sayHello('Gloria');
//   console.log('higherOrderFunction ends');
// }