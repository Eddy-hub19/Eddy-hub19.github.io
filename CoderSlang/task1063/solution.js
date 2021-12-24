/**
 * Implement function concatenateArraysUnique in helper.js
 *
 * It should return a new array that "glues" the second array to the end of the first one and remove any duplicates
 *
 * Example: concatenateArraysUnique([1,2,3], [1,2,4]) returns [1,2,3,4]
 * */

import { concatenateArraysUnique } from './helper.js';

const original = [ 10, 10, 1, 5, 12, 15 ];
const fake = [ 10, 10, 20, 55, 5, 5, 12, 100, 200 ];

console.log(`The concatenation of ${original} and ${fake}, is ${concatenateArraysUnique(original, fake)}`);