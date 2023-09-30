const sayHello = function(name) {
  console.log("we are inside sayHello!");
  console.log(`Hello ${name}`);
}

const higherOrderFunction = function(callback) {
  console.log('higherOrderFunction begins')
  callback('Gloria');
  console.log('higherOrderFunction ends');
}

higherOrderFunction(sayHello);

// - localized, one-time usage
// - naming things is hard
higherOrderFunction(function(name) {
  console.log(`Hello ${name} from anonymous function`);
})
