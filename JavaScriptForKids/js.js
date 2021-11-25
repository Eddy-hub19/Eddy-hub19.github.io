// //   1. Lesson;

// // COMMAND + OPTION + J.

// // Рисуем столько котиков, сколько захотим!
// var drawCats = function (howManyTimes) {
//   for (var i = 0; i < howManyTimes; i++) {
//     console.log(i + " =^.^= ");
//   }
// };
// drawCats(10); // Вместо 10 тут может быть другое число

// // Draw cats — рисовать котиков
// // Function — функция
// // How many times — сколько раз
// ___________________________________________;
// //   2. Lesson;

// // ТИПЫ ДАННЫХ И ПЕРЕМЕННЫЕ

// // Boolean - True & False

// let nick; // undefined

// // Undefined — значение не определено

// let age = 12;

// // Number of siblings — число братьев и сестер
// // Number of candies — число конфет

// let numberOfSiblings = 1 + 3;
// let numberOfCandies = 8;
// numberOfCandies / numberOfSiblings;
// // 2

// // Reference error — ошибка данных

// // Seconds in a minute — секунд в минуте
// // Minutes in a hour — минут в часе

// //Сколько секунд в часе
// let secondsInAMinute = 60;
// let minutesInAHour = 60;
// let secondsInAHour = secondsInAMinute * minutesInAHour;
// secondsInAHour; //60*60 = 3600

// // Hours in a day — часов в день
// // Сколько секунд в сутках
// let hoursInADay = 24;
// let secondsInADay = secondsInAHour * hoursInADay;
// secondsInADay; // 24*3600 = 86 400

// // Days in a year — дней в году

// // Сколько секунд в году

// let daysInAYear = 365;
// let secondsInAYear = secondsInADay * daysInAYear;
// secondsInAYear; //86400 * 365 = 31536000

// //Возраст в секундах

// let age = 20;
// age * secondsInAYear; //630720000

// 20 * secondsInAYear; //630720000

// // Инкремент и декремент

// // Увеличение на 1 называют инкрементом,
// // а уменьшение на 1 — декрементом.

// // High fives — дай пять!

// let highFives = 0;
// ++highFives;
// 1;
// ++highFives;
// 2;
// --highFives;
// // 1

// // Score — счет

// let score = 10;
// score += 7; // 10 + 7 = 17
// score -= 3; // 17 - 3 = 14

// // Balloon — воздушный шар

// let balloons = 100;
// balloons *= 2; // 200

// let balloons = 100;
// balloons /= 4; // 25

// // СТРОКИ

// // My awesome string — Моя крутая строка

// let myAwesomeString = "Что-то ОЧЕНЬ крутое!!!";

// // My thing — моя штука

// let myThing = 5;
// myThing = "это строка";
// ("это строка");

// // Как узнать длину строки

// // Length — длина

// "Суперпупердлиннаястрока".length; // 23

// let java = "Java";
// java.length; // 4
// let script = "Script";
// script.length; // 6
// let javascript = java + script;
// javascript.length; //4 + 6 = 10

// // Получение отдельного символа строки

// let myName = "Ник";

// myName[0];
// myName[1];
// myName[2];

// Сode word — кодовое слово

// let codeWord1 = "обернись";
// let codeWord2 = "Неужели";
// let codeWord3 = "огурцы";
// let codeWord4 = "липкие";
// let codeWord5 = "?!";

// codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];

// let i = 0;          // создаем переменную i с начальным значением 0
// while (i < 20) {    // пока значение i меньше 10, выполняем код в фигурных скобках
//   console.log(i);   // печатаем на экран текущее значение i
//   i = i + 1;        // увеличиваем i на 1, или иначе можно было написать i = i + 1
// }

const stock = [
  { title: "fork", price: 10 },
  { title: "spoon", price: 15 },
  { title: "knife", price: 20 },
  { title: "plate", price: 5 },
];

const printStock = (stock) => {
  for (let i = 0; i < stock.length; i++) {
    console.log(stock[i]);
  }
};

printStock(stock)