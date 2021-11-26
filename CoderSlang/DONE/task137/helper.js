export const positiveElements = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
