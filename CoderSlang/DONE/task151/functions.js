export const isShortWord = (s) => {
  if(s.length < 10 && s !== ' ') {
    return true;
  }else{
    return false;
  }
}