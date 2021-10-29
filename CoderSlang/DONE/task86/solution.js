/**
 * Find variables that were never changed after the initialization.
 *
 * Make them constants.
 * */

const name = 'Hero';
const greeting = 'Good Day!'
let count = 0;

count = count + 1;
console.log(greeting + " " + name + ". Count is " + count);
