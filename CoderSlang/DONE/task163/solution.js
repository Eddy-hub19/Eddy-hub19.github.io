/**
 * Fix the function `startProgressBar`
 *
 * Expected behavior:
 * The function should display the progress bar on the screen and move it forward each `delay` ms.
 * The interval should be cleared once the progress bar is full.
 *
 * */

import { startProgressBar } from './functions.js';
import ProgressBar from 'progress';

const bar = new ProgressBar(':bar :percent', { total: 100 })
startProgressBar(100);