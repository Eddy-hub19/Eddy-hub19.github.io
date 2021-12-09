/**
 * Implement the function `startsWith(start)`.
 * */

import { startsWith } from './functions.js';

const words = [ 'good', 'god', 'goblin', 'grand', 'giga', 'mega', 'force', 'joy', 'giggle', 'global', 'function' ];

console.log(words.filter(startsWith('g')));
console.log(words.filter(startsWith('go')));
console.log(words.filter(startsWith('f')));
