export const startCountdown = (n) => {
  setInterval(() => {
    let i = 0;
    if (i < n) {
      console.log(n - i);
      i++;
    } else {
      console.log('GO!');
    }
  }, 1000)
}