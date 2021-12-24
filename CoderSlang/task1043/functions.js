export const getFormattedDate = (date) => {
  if (date) {
    return date.toUTCString();
  }
  return new Date().toUTCString();
}