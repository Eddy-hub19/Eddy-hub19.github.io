export const startCountdown = (n) => {
  let i = n;
  let test = setInterval(() => {
    if (i != 0) {
      console.log(i);
      i = i - 1;
    } else {
      console.log("GO!");
      clearInterval(test);
    }
  }, 100);
};
