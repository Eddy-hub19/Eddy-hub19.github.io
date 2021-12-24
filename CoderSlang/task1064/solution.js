/**
 * Implement a function factorial in helper.js that returns a factorial of a certain number
 *
 * Factorial is a product of all integers below it.
 *
 * factorial(0) // 1
 * factorial(1) // 1 * factorial(0)
 * factorial(2) // 2 * factorial(1)
 * ...
 * factorial(n) // n * factorial(n-1)
 * */

import { factorial } from './helper.js';

const n = 4;

console.log(`Factorial of ${n} is ${factorial(4)}`); // 24