//FUNCTIONS

// STRING FUNCTION
// let str = 'okten is cool';
// let replaceAll = str.replaceAll('o', '0');
// console.log(replaceAll); // 0kten is c00l
// console.log(str.toUpperCase());

// document.write(<div>'Hello'</div>) // Що треба зробити для тоого,щоб не копіювати
// document.write(<div>'test'</div>)
// document.write(<div>'Bye'</div>)

// // Для цього є функції,якщо більше чим 2 copypast треба обгортати в функцію

// function foobar() {
//     document.write(<div>'Hello'</div>)
//     document.write(<div>'test'</div>)
//     document.write(<div>'Bye'</div>)
// }
// foobar(); // Працюй Функція

// foobar(); // Працюй

// foobar(); // Працюй

// Ми перевикористовуєм одну і ту ж функцію і не копіпастим

// Переходим на ДОМ структуру

// function createDOMElement() {
//     let element = document.createElement('div');
//     element.innerText = 'hello world';
//     document.body.appendChild(element);
// }

// Argument цее зміна в контексті моєї функції
// Ячейка для тоого,щоб потім її заповнювати
// Можна добавляти багато аргументів,та класти туди будьякі типи елементів

// function createDOMElement(tag, txt /*Аргумент*/) {
//     let element = document.createElement('tag')
//     element.innerText = 'txt';
//     document.body.appendChild(element)
// }

// createDOMElement('div', okten is cool); //Працюй,але заміни на блок
// createDOMElement('h2', hello world);


//FUNCTIONS RETURN

// Можна описувати різні формули

// function calcPerimetr(a, b) {
//     let result = (a + b) * 2;
//     console.log(result);
//     // return undefined;
//     return result;   // RETURN - потрібен для тоого,щоб я міг користуватись результатами функції надалі
// }

// // calcPerimetr(100, 20); // 600 // Не можна далі використовувати,ця функція видаляє все після себе

// let perimeter1 = calcPerimetr(100, 200);
// let perimeter2 = calcPerimetr(200, 300);

// let perimeter = calcPerimetr(perimeter1, perimeter2);
// console.log(perimeter);

// function calculator(a, b, action) {
//     let result;
//     if (action == '+') {
//         result = a + b;
//     } else if (action === '-') {
//         result = a - b;
//     }
//     return result;
// }

// let res1 = calculator(10,20, '+')
// console.log(res1);


// ЗОЛОТЕ ПРАВИЛО - Чи збираюсь я використовувати результат функції,так то пишу return.якщо ні не пишу

// Функція це ліфт а Аргументи - це кнопки ліфта 

// function printArray(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }

// let cars = [
//     { brand: 'Audi', yearOfIssue: 1912, power: 5700, color: 'black' },
//     { brand: 'Duo', yearOfIssue: 1920, power: 5700, color: 'white' },
//     { brand: 'Lamborghini', yearOfIssue: 1922, power: 5700, color: 'green' },
//     { brand: 'Mercedes', yearOfIssue: 1932, power: 5700, color: 'red' },
//     { brand: 'BMW', yearOfIssue: 1942, power: 5700, color: 'yellow' },
//     { brand: 'Volkswagen', yearOfIssue: 1512, power: 5700, color: 'blue' },
//     { brand: 'Ferrari', yearOfIssue: 2000, power: 5700, color: 'black' },
//     { brand: 'Nissan', yearOfIssue: 2005, power: 5700, color: 'pink' },
//     { brand: 'Ford', yearOfIssue: 2006, power: 5700, color: 'red' },
//     { brand: 'Toyota', yearOfIssue: 2010, power: 5700, color: 'black' }
// ]
// printArray(cars);

//SCOPE

// function scopeDemo() { // Все,що виводиться не в тілі функції буде помирати
//     let a = 100500;
//     var b = 200600;
// }
// console.log(a, b); // undefined

// //FUNC WITH FUNC

// // Використання однією функції іншою
// // Функція в функції

// function add(a, b) {
//     return a + b;
// }
// function minus(a, b) {
//     return a - b;
// }

// function calculate(a, b, action) {
//     // debugger - Можна зупиняти роботу двіжка і дивитись пошагово
//     if (action === '+') {
//         return add(a, b);
//     }else if (action === '-') {
//         return minus (a,b);
//     }
//     return 'EROR';
// }
// calculate(100,200, '+'); // 300

//HOISTING 

//Всплытие

// Функції в хості вспливають на самий верх

// hoist(); // Можна викликати функцію навіть до того,як її створили
// function hoist() {}

//FUNC EXPRESSION

// let expressionFunc = function (a, b, c) { // Це вже об`єкт
//     console.log('test');
// };
// expressionFunc(10,20,30);

//ORROW

// =>  стрілочна дія

// let expressionFunc = (a, b, c) => { // стрілочна функція
//     console.log('test');
// };
// expressionFunc(10, 20, 30);

// // Упростити
// let expressionFunc = () => { console.log('test'); };
// expressionFunc(10, 20, 30);

// // Ще можна упростити
// let expressionFunc = a => console.log(a); // Якщо один аргумент можна не ставити дужки
// expressionFunc('hello');

// let expressionFunc = (a, b) => {
//     let result = a + b;
//     console.log(result);
//     return result;
// };
// let num = expressionFunc(10, 20);

// let expressionFunc = (a, b) => /*return*/ a + b;
// let num = expressionFunc(10, 20);
// console.log(num); //30

//ARGUMENTS

// function calc(arguments) { // Неважливо скільки аргументів
//     let bascket = 0;
//     for (const argument of object) { // Перегрузка методів
//         bascket += argument;
//     }
// }
// calc(10, 20, 30, 40); // Все йде пошаблонно
// calc(10, 20, 30, 40, 50);
// calc(100, 200, 300, -40, 50,5);


//LOCAL FUNCTION

// function outer() {
//     function local() {
//         console.log('test');
//     }
//     local();
// }

//SELFINVOKE

// В index.html створив button 
// {/* <button onclick="clickX"> press me </button> */ }

// function clickX() {
//     console.log('clik');
// }

//RECURCION

// function increment(num) { // Сама себе викликає кожний раз
//     if (num > 10) {
//         return;
//     }
//     num++; //Збільшуєм на одиницю
//     console.log(num);
//     increment(num);
// }

// increment(0);


//ARGUMENTS
//overload

// НЕ працює!

// function twoArgs(a, b) {
//     return a + b;
// }

// function threeArgs(a, b, c) {
//     return a - b - c;
// }

// function calc() {
//     if (arguments.length === 2) {
//         return twoArgs(arguments[0], arguments[1]);
//     }
//     if (arguments.length === 3) {
//         return threeArgs(arguments[0], arguments[1], arguments[2]);
//     }
// }
// calc(10, 20); //30
// calc(10, 20, 30) /*-40*/



// Цікава фьюча з об`єктами

// let user = { id = 1, name: 'Vasya', age: 14 };

// // let name = user.name;
// // let id = user.id;
// // let age = user.age;

// let { name, id, age } = user;

// console.log(name, id, age);