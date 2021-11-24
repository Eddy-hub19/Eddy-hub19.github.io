/**
 * Implement getTotal function in helper.js
 *
 * It should return return the sum of all elements in the array
 *
 * Array will only contain numbers
 * */

import { getTotal } from './helper.js';

const revenue = [10, 10, 20, 55, 1, 5, 12, 15];

console.log(`For the array ${revenue}, total is ${getTotal(revenue)}`);