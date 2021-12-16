export const find = (arr, quote) => {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === quote) {
      index = i;
      break;
    }
  }
  return index;
};
