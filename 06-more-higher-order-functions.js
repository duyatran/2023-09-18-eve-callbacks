// Write a function that accepts two arguments:
// 1. `array`
// 2. callback function that takes a item
// Return a new array containing the results of calling a provided function on every element
const snacks = ['peanuts', 'cookies', 'chips'];

const map = (array, callback) => {
  // Create new array.
  const newArr = [];
  // Loop through each item.
  for(const item of array) {
      // Execute our callback, passing in the item.
      const newItemValue = callback(item);
      // Add updated item to the new array.
      newArr.push(newItemValue);
  }
  // Return the updated / copied array.
  return newArr;
};

// Try to uppercase all text:
const upperCaseSnacks = map(snacks, snack => snack.toUpperCase());
console.log(upperCaseSnacks); // ['PEANUTS', 'COOKIES', 'CHIPS']


// Write a function that accepts two arguments:
// 1. `array`
// 2. callback function that takes an item and returns a boolean
// Return a new array containing just the items that pass the callback test
const filter = (array, callback) => {
  const newArr = [];

  for (const item of array) {
    if (callback(item)) {
      newArr.push(item);
    }
  }
  return newArr;
}

const snacksThatStartWithLetterC = filter(snacks, snack => snack.startsWith('c'));
console.log(snacksThatStartWithLetterC); // [cookies, chips]