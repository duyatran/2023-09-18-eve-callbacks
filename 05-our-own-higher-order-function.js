// Write a function that accepts two arguments:
// 1. `array`
// 2. callback function
// Execute the callback function of each item in the `array`

const snacks = ['peanuts', 'cookies', 'chips'];

// const enjoySnack = snack => console.log(`A snack that I like is ${snack}`);
const enjoySnack = function(snack) {
  console.log(`A snack that I like is ${snack}`);
}

const loopThroughArray = (array, callback) => {
  for (const item of array) {
    callback(item);
  }
}

loopThroughArray(snacks, enjoySnack);
// A snack that I like is peanuts
// A snack that I like is cookies
// A snack that I like is chips
