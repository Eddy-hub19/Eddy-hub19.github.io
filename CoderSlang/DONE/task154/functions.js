export const startsWith = (start) => {
  return (s) => {
    let i = start.length
    let b = s.slice(0, i)
    return (start === b)
  };
};
