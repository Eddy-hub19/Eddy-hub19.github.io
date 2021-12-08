import { checkAccess, grantAccess, denyAccess } from './helper.js';

export const auth = (user, password) => {
  if (checkAccess(user, password)) {
    grantAccess();
  } else {
    denyAccess();
  }
}