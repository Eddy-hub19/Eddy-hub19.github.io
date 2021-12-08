/**
 * Implement the function divideBy(divisor)
 *
 * It should accept a number **divisor** and return a function that takes another number **n**
 * and divides it by the **divisor**.
 * */

import { divideBy } from './functions.js';

const divideBy2 = divideBy(2);
const divideBy5 = divideBy(5);

console.log(divideBy2(10)); /* 10/2 = 5  */
console.log(divideBy2(20)); /* 20/2 = 10 */
console.log(divideBy5(10)); /* 10/5 = 2  */
console.log(divideBy5(20)); /* 20/5 = 48 */
