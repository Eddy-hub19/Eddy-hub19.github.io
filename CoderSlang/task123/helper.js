export const lte = (x, y) => {
  if (x) {
    return `${x} is less than or equal to ${y}`;
  } else {
    return `${x} is NOT less than or equal to ${y}`;
  }
}