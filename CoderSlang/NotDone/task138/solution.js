/**
 * Implement a function pow in helper.js that takes two numbers and
 * returns the first number raised to the power of second number
 *
 * pow(2, 2) // 4
 * pow(2, 0) // 1
 * pow(0, 2) // 0
 *
 * You can't use Math.pow
 * */

import { pow } from './helper.js';

const x = 2;
const y = 2;

console.log(`${x} raised to the power of ${y} is ${pow(x, y)}`); // 4