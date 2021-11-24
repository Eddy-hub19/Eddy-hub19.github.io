/**
 * Fix the function `getLocale`.
 *
 * It should return userConfig.locale if it's found in knownLocales.
 *
 * Otherwise, it should return the string `en`.
 * */

import { getLocale } from './functions.js';

const knownLocales = ['en', 'ru', 'es', 'it', 'fr'];
const userConfig1 = {locale: 'en'};
const userConfig2 = {locale: 'ru'};
const userConfig3 = {locale: 'ws'};

console.log(getLocale(userConfig1, knownLocales));  // en
console.log(getLocale(userConfig2, knownLocales));  // ru
console.log(getLocale(userConfig3, knownLocales));  // en