export const checkSpam = (text, spamKeywords) => {
  let lowerStr = text.toLowerCase().split(" ");
  const yeah = spamKeywords.some((str) => lowerStr.includes(str));
  if (yeah) {
    return true;
  } else return false;
};
