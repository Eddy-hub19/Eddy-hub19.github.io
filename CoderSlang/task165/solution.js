/**
 * Implement the function setEasyTimout(func, time)
 *
 * It should execute the function `func` after the specific amount of `time`.
 * */

import { setEasyTimeout } from './functions.js';

const wakeUp = () => {
  console.log('Ok... Time to wake up..');
}
const doMorningRoutine = () => {
  console.log('Where\'s my toothbrush?');
}
const learnJavascript = () => {
  console.log('Learning JS is very exciting!');
}
const goToSleep = () => {
  console.log('That was a very productive day... Time to rest..');
}

setEasyTimeout(wakeUp, { hours: 8, minutes: 0, seconds: 0 })
setEasyTimeout(doMorningRoutine, { hours: 8, minutes: 5, seconds: 10 })
setEasyTimeout(learnJavascript, { hours: 8, minutes: 15, seconds: 30 })
setEasyTimeout(goToSleep, { hours: 22, minutes: 10, seconds: 30 })