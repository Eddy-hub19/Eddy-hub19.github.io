/**
 * Implement the function formatTaskList.
 *
 * It should transform each task object into a string by placing
 * a green checkmark (u2705) in front of the title if the task is DONE.
 * Otherwise, use a red cross (u274c).
 *
 * */

import { formatTaskList } from './functions.js';

const tasks = [
  { id: 1, title: 'Start learning JS on CoderslangJS', status: 'DONE' },
  { id: 2, title: 'Write my first program', status: 'DONE' },
  { id: 3, title: 'Set clear and achievable goals', status: 'DONE' },
  { id: 4, title: 'Be patient and learn every day', status: 'IN_PROGRESS' },
  { id: 5, title: 'Join Coderslang community', status: 'IN_PROGRESS' },
];

console.log(formatTaskList(tasks));
