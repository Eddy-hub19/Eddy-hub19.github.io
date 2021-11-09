/**
 * Implement the function `getBMICategory(bmi)` in helper.js. It should accept a single parameter `bmi` and
 * return the string representation of the body mass index category based on the following rules:
 * - **Underweight** = 18.5 or less
 * - **Normal weight** = greater than 18.5 and less than 25
 * - **Overweight** = starting at 25 and less than 30
 * - **Obesity** = 30 or greater
 * */

import { getBMICategory } from './helper.js';

console.log(getBMICategory(10));    // Underweight
console.log(getBMICategory(20));    // Normal weight
console.log(getBMICategory(40));    // Obesity
