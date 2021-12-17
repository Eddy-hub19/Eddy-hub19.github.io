export const extractNumber = (s) => {
  s = s.split('');
  let str = [];
  for (let i = 0; i < s.length; i++)
		if (s[i] <= '9' && s[i] >= '0')
			str += s[i];
  return  parseFloat(str);
}