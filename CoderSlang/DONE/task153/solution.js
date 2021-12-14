/**
 * Implement the function isKeyPresent which checks if the object has a certain field
 * */

import { isKeyPresent } from './helper.js';

const user = {
  name: 'Tom',
  age: '2',
  isHappy: true,
  createdAt: '2020-01-01'
}

console.log(isKeyPresent(user, 'age')); //true
console.log(isKeyPresent(user, 'name')); //true
console.log(isKeyPresent(user, 'address')); //false
console.log(isKeyPresent(user, 'isHappy')); //true