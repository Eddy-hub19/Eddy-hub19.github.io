export const isKeyPresent = (obj, key) => {
  let result = Object.keys(obj);
  for (let i = 0; i < result.length; i++) {
    if (key in obj === true) {
      return true;
    } else {
      return false;
    }
  }
};

// export const isKeyPresent = (obj, key) => {
//   let result = Object.keys(obj);
//   console.log(result);
//   for (let i = 0; i < result.length; i++) {
//     if (result[i] === key) {
//       console.log(result[i]);
//       return true;
//     } else {
//       return false;
//     }
//   }
// };
