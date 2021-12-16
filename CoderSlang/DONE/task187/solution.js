/**
 * Implement isIdentical function in helper.js
 *
 * It should take two objects and return a boolean value that tells if the fields of the objects are the same.
 *
 * Objects will only have plain fields (strings, numbers or booleans)
 * */

import { isIdentical } from './helper.js';

const cat = {
  name: 'Tom',
  age: '2',
  isHappy: true,
}

const dog = {
  name: 'Rex',
  age: '2',
  isHappy: true,
}
console.log(isIdentical(cat, dog));