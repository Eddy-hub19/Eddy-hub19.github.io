export const startProgressBar = (progressBar, delay) => {
  const timer = setInterval(() => {
    progressBar.tick();
    if (progressBar.complete) {
      console.log('DONE!');
    }else{
      clearInterval(timer);
    }
  }, delay);
}