import { formatTaskList } from './functions.js';

const tasks = [
  { id: 1, title: 'Start learning JS on CoderslangJS', status: 'DONE' },
  { id: 2, title: 'Write my first program', status: 'DONE' },
  { id: 3, title: 'Set clear and achievable goals', status: 'DONE' },
  { id: 4, title: 'Be patient and learn every day', status: 'IN_PROGRESS' },
  { id: 5, title: 'Join Coderslang community', status: 'IN_PROGRESS' },
];

console.log(formatTaskList(tasks));
