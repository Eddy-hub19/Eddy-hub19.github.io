/**
 * Sometimes, there isn't a good choice and we need to choose the lesser evil.
 *
 * Implement a function **getLesserEvil** that takes two objects, compares them by the field **evilFactor** and
 * returns the one which the smaller **evilFactor**.
 * */

import { getLesserEvil } from './helper.js';

const globalWarming = {
  description: 'Global warming risk',
  evilFactor: 10,
}

const aiThreat = {
  description: 'The AI threat to humanity',
  evilFactor: 1,
}

const globalPandemic = {
  description: 'Mass extinction from the global pandemic',
  evilFactor: 3,
}

console.log(getLesserEvil(globalWarming, globalPandemic));
console.log(getLesserEvil(aiThreat, globalPandemic));