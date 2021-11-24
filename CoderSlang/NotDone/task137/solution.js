import { positiveElements } from './helper.js';

const arr = [ 10, -10, 20, -55, 1, 5, 12, -15, 0 ];

console.log(`Given the original array ${arr}, positive elements are ${positiveElements(arr)}`); // [10, 20, 1, 5, 12]