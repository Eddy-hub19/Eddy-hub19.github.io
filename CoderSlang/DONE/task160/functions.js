export const delayedLog = (s, n) => {
  setTimeout(()=>{
  console.log(s);
  }, 1000*n);
}