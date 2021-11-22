/**
 * The function `lte` is broken. Fix the conditions inside `if (...)` statements.
 * The messages printed to the screen should start making sense after the fix
 * Don't change the output, only fix the conditions.
 * */

import { lte } from './helper.js';

console.log(lte(5, 10));   // 5 is less than or equal to 10
console.log(lte(5, 3));    // 5 is NOT less than or equal to 3
console.log(lte(5, 5));    // 5 is less than or equal to 5
