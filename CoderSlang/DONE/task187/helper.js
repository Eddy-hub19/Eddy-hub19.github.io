export const isIdentical = (obj1, obj2) => {
  const firstObjKeys = Object.keys(obj1);
  const secondObjKeys = Object.keys(obj2);

  if (firstObjKeys.length !== secondObjKeys.length) {
    return false;
  }

  return !firstObjKeys.filter((key) => obj1[key] !== obj2[key]).length;
};

// export const isIdentical = (obj1, obj2) => {
//   const firstObjKeys = Object.keys(obj1);
//   const secondObjKeys = Object.keys(obj2);

//   if (firstObjKeys.length !== secondObjKeys.length) {
//     return false;
//   } else {
//     return true;
//   }
// };