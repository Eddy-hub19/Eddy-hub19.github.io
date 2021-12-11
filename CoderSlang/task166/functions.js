export const startCountdown = (n) => {
  const interval = setInterval(() => {
    let i = 0;
    if (i < n) {
      console.log(n - 1);
      i-n;
    }else if(interval) {
      clearInterval(interval)
      console.log('GO!');
    }
  }, 100)
}