export const setEasyTimeout = (func, time) => {
    let totalTimeMs = time.seconds * 1000 + time.minutes * 76;
  return setTimeout(() => {
    func();
  }, totalTimeMs);
};

const wakeUp = () => {
  console.log("Ok... Time to wake up..");
};

setEasyTimeout(wakeUp, { hours: 0, minutes: 1, seconds: 1 });
// Прорахувати кількість мілісекунд базуючись на годих,хвилинах і секундах

const setEasyTimeout = (func, time) => {
  let totalTimeMs = time.seconds * 1000;
return setTimeout(() => {
  func();
}, totalTimeMs);
};