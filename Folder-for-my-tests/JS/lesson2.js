// Home Task 2
// 1. -- створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


// const fruits = ['1', '2', '3', '4', '5', `Banana`, `Apple`, `Lemon`, `Orange`];
// fruits.push('Hello', 'World', 'Are', 'You', 'Sleeping?');
// console.log(fruits.length)
// console.log(fruits);


// 2. -- Створити пустий масив.Наповнити його будь - якими значеннями звертаючись до конкретного індексу.Вивести в консоль


// const names = [];
// names[1] = 'Eddy'
// console.log(names);


// 3. - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// let names = ['Ira', 'Eddy', 'Roma', 'Sasha', 'Valeria'];

// for (let i = 0; i < 10; i + 3) {
//     document.write('<div> It`s 2 lesson</div>');
//     i++
// }

// 4. - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// const names = ['Rita', 'Ivan', 'Ira'];
// names.push = 'Eddy'

// for (let i = 0; i < 10; i + 3) {
//     document.write('<div>'[i] + [0] '</div>');
//     console.log([i])
//     i++
// }
// for (let i = 0; i < names.length; i = i++) {
//     console.log([i]);
//     i++
// }

// 5. - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20) {
//     document.write('<h1> Ed </h1>');
//     console.log(i);
//     i++;
// }

// Выполнить начало
// let i = 0;
// Если условие == true → Выполнить тело, Выполнить шаг
// if (i < 3) { alert(i); i++ }
// Если условие == true → Выполнить тело, Выполнить шаг
// if (i < 3) { alert(i); i++ }
// Если условие == true → Выполнить тело, Выполнить шаг
// if (i < 3) { alert(i); i++ }
// ...конец, потому что теперь i == 3


// 6. - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// const names = ['Rita', 'Ivan', 'Ira'];
// let i = 1;
// let name = ('2')
// while (i < 21) {
//     document.write(`<h1> block </h1> ${i} <hr>`);
//     i++
// }

// 7 - Створити масив з 10 числових елементів.Вивести в консоль всі його елементи в циклі.

// const numbers = [20, 15, 25, 20, 15, 25, 20, 15, 25, 10];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// for (let i = 10; i == 10; i++) { // выведет 0, затем 1, затем 2
//     console.log(i);
// }


// 8 - Створити масив з 10 строкрових елементів.Вивести в консоль всі його елементи в циклі.

// const user = ['Kristina', 'Andriy', 'Yosup', 'Kostya', 'Ivan', ' Ira', 'Vova', 'Asya', 'Roma'];
// for (let i = 0; i < user.length; i++) {
//     console.log(user[i]);
// }

// 9 - Створити масив з 10 елементів будь - якого типу.Вивести в консоль всі його елементи в циклі.

// const fruits = ['Banana', 'Lemon', 92, true, 'Js', 'Tolya', 'Barabolya', 'Asya', 'Roma'];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// 10 - Створити масив з 10 елементів числового, стірчкового і булевого типу.За допомогою if та typeof вивести тільки булеві елементи

// const fruits = ['Banana', true, true, 'Orange', false, 'Green-Aplle', true, 10, true, true];
// for (let i = 0; i < fruits.length; i++) {
//     // if (fruits[i] === true || fruits[i] === false) {
//     if (typeof fruits[i] === "boolean" ) {
//         console.log(fruits[i], typeof fruits[i]);
//     }
// }

// 11 - Створити масив з 10 елементів числового, стірчкового і булевого типу.За допомогою if та typeof вивести тільки числові елементи

// const fruits = ['Banana', true, true, 'Orange', false, 'Green-Aplle', true, 10, true, true];
// for (let i = 0; i < fruits.length; i++) {
//     if (typeof fruits[i] === "number" ) {
//         console.log(fruits[i], typeof fruits[i]);
//     }
// }


// 12 - Створити масив з 10 елементів числового, стрічкового і булевого типу.За допомогою if та typeof вивести тільки рядкові елементи

// const fruits = ['Banana', true, true, 'Orange', false, 'Green-Aplle', true, 10, true, true];
// for (let i = 0; i < fruits.length; i++) {
//     if (typeof fruits[i] === "string" ) {
//         console.log(fruits[i], typeof fruits[i]);
//     }
// }

// 13 - Створити порожній масив.Наповнити його 10 елементами(різними за типами) через звернення до конкретних індексів.Вивести в консоль всі його елементи в циклі.

// const color = ['red','green', '2', 'yellow', 'black']



// 14 - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
//     document.write(i);
// }

// 15 - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i <= 100; i = i + 1) {
//     console.log(i);
//     document.write(i);
// }

// 16 - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i <= 100; i = i + 2) {
//     console.log(i);
//     document.write(i);
// }

// 17 - Створити цикл for на 100 ітерацій.Вивести тільки парні кроки.через console.log + document.write
// for (let i = 0; i <= 100; i = i + 2) {
//     console.log(i);
//     document.write(i);
// }

// 19 - Створити цикл for на 100 ітерацій.Вивести тільки непарні кроки.через console.log + document.write


// for (let i = 0; i <= 100; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }



// 20 - Гріши Задача

// let i = 0;
// while (i < 11) {
//     console.log(i)
//     i++;
// }
