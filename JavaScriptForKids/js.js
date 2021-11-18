//   1. Lesson;

// COMMAND + OPTION + J.

// Рисуем столько котиков, сколько захотим!
var drawCats = function (howManyTimes) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " =^.^= ");
  }
};
drawCats(10); // Вместо 10 тут может быть другое число

// Draw cats — рисовать котиков
// Function — функция
// How many times — сколько раз
___________________________________________;
//   2. Lesson;

// ТИПЫ ДАННЫХ И ПЕРЕМЕННЫЕ

// Boolean - True & False

var nick; // undefined

// Undefined — значение не определено

var age = 12;

// Number of siblings — число братьев и сестер
// Number of candies — число конфет

var numberOfSiblings = 1 + 3;
var numberOfCandies = 8;
numberOfCandies / numberOfSiblings;
// 2

// Reference error — ошибка данных

// Seconds in a minute — секунд в минуте
// Minutes in a hour — минут в часе

//Сколько секунд в часе
let secondsInAMinute = 60;
let minutesInAHour = 60;
let secondsInAHour = secondsInAMinute * minutesInAHour;
secondsInAHour; //60*60 = 3600

// Hours in a day — часов в день
// Сколько секунд в сутках
let hoursInADay = 24;
let secondsInADay = secondsInAHour * hoursInADay;
secondsInADay; // 24*3600 = 86 400

// Days in a year — дней в году

// Сколько секунд в году

let daysInAYear = 365;
let secondsInAYear = secondsInADay * daysInAYear;
secondsInAYear; //86400 * 365 = 31536000

//Возраст в секундах

let age = 20;
age * secondsInAYear; //630720000

20 * secondsInAYear; //630720000

// Инкремент и декремент

// Увеличение на 1 называют инкрементом,
// а уменьшение на 1 — декрементом.


// High fives — дай пять!

var highFives = 0;
++highFives;
1;
++highFives;
2;
--highFives;
// 1
