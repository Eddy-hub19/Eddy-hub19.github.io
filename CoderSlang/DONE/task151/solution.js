/**
 * Implement the function `isShortWord(s)`.
 * */

import { isShortWord } from './functions.js';

const words = [ 'good', 'things', 'happen', 'if', 'you', 'do', 'something good', 'for_a_long_time' ];
const shortWords = words.filter(isShortWord);

console.log(shortWords);    // [ 'good', 'things', 'happen', 'if', 'you', 'do' ]
