/**
 * Fix the code. Access should only be given to the users with the 'admin' role.
 * */

import { auth } from './functions.js';

const regularUser = {
  name: 'John',
  role: 'user',
  password: '123456'
};

const adminUser = {
  name: 'Sally',
  role: 'admin',
  password: 'BzL171a#*8!t'
};

console.log(`Authenticating ${regularUser}!`);
console.log(auth(regularUser, '123456'));

console.log(`Authenticating ${adminUser}!`);
console.log(auth(adminUser, 'BzL171a#*8!t'));