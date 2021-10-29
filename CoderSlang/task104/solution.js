/**
 * Implement the function createSamples that takes a string and returns two samples of it, one in lowercase
 * and another one in the uppercase.
 *
 * Samples should be combined, i.e. createSamples('HeLLo') should return the string 'helloHELLO'
 *
 * You must use functions toLowerCase and toUpperCase from the file helper.js
 * */

import { createSamples } from './helper.js';

console.log(createSamples('binGO'));   // bingoBINGO
console.log(createSamples('R2D2'));    // r2d2R2D2