export const shortenByWords = (s, n) => {
  if (s.length <= n) {
    return s;
  } else {
    return s.slice(0, n-1) + '...';
  }
}