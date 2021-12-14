export const setEasyTimeout = (func, time) => {
  let totalTimeMs =
    time.seconds * 1000 + time.minutes * 60000 + time.hours * 3600000;
  console.log(totalTimeMs);
  setTimeout(func, totalTimeMs);
};
// Прорахувати кількість мілісекунд базуючись на годих,хвилинах і секундах
