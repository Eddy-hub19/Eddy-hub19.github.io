/**
 "Implement the function checkSpam(text, spamKeywords).",
 "",
 "It should return `true` if `text` contains any of the `spamKeywords`, otherwise - `false`.",
 "The comparison should be case insensitive."
 * */

import { checkSpam } from './functions.js';

const friendlyChat = 'Hey, John! Any update on the upcoming trip?';
const spamMail = 'Hey, JOHN! YoU woN 1000 tabS of ViaGrA ! ! ! ! ';
const spamKeywords = ['viagra', 'lottery', 'won', 'prize', 'prince'];

console.log(checkSpam(friendlyChat, spamKeywords));
console.log(checkSpam(spamMail, spamKeywords));
