/**
 * Implement the function getObjectKeys.
 *
 * It should print all keys of the object to the console
 * */

import { getObjectKeys } from './helper.js';

const user = {
  name: 'Tom',
  age: '2',
  isHappy: true,
  createdAt: '2020-01-01'
}

const parrot = {
  type: 'bird',
  lifespan: '2'
}

console.log(`The object user has following keys: ${getObjectKeys(user)}`);

console.log(`The object parrot has following keys: ${getObjectKeys(parrot)}`);