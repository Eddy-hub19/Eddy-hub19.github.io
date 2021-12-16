export const getObjectKeys = (obj) => {
  let arr = [];
  for (const i in obj) {
    let total = arr.push(i);
  }
  return arr;
};
