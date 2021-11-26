export const getTotal = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
  return result;
};
