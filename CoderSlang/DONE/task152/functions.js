import { checkAccess, grantAccess, denyAccess } from './helper.js';

export const auth = (user, password) => {
  if (checkAccess(user, password) === true) {
    grantAccess(user.name);
  } else {
    denyAccess(user.name);
  }
}

// auth должна вызывать grantAccess с именем пользователя, если checkAccess вернул true

// auth должен вызывать denyAccess с именем пользователя, если checkAccess вернул false