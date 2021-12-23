import { bakeMyCake } from './helper.js';

const ingredients = {
  flour: '500g',
  sugar: '200g',
  eggs: '6pc',
  honey: '50g',
}

const cakeOne = bakeMyCake(ingredients); // all good
console.log(cakeOne);                    // baked properly

const cakeTwo = bakeMyCake();            // an error!
console.log(cakeTwo);
