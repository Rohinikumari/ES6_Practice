
/**
 * const arr = [1, 2, 3, 4, 5];

const byTwo = arr.map(num => num * 2)
console.log(byTwo)
 */

// if you want to return an object
const arr = [1, 2, 3, 4, 5];

const byTwo = arr.map(num => ({ number: num * 2 }))
console.log(byTwo)