export const capitalizeEachWord = (s) => {
  const sArr = s.split(' ');
  let res = [];
  for(let i = 0; i < sArr.length; i++){
  res.push(sArr[i][0].toUpperCase() + sArr[i].slice(1));
  }
  return res.join(' ');
  }