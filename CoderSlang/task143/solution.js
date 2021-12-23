import { extractNumber } from './functions.js';

console.log(extractNumber('$59.99'));
console.log(extractNumber('EUR 1.35'));
console.log(extractNumber('1 BTC'));
console.log(extractNumber('agdflhwet galsdf 13245 sdflgkhytaol chalsdf'));
