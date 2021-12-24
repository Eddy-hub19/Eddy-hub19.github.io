import { getUserCount } from './db.js';

export const printUserCount = () => {
  console.log(getUserCount());
}