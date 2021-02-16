//  Lesson 2
// -----------------------------------------------------

// for (let i = 0; i < 2; i++) { // выведет 0, затем 1, затем 2
//     alert(i);
// }

// часть		
// начало	i = 0	Выполняется один раз при входе в цикл
// условие	i < 3	Проверяется перед каждой итерацией цикла. Если оно вычислится в false, цикл остановится.
// шаг	i++	Выполняется после тела цикла на каждой итерации перед проверкой условия.
// тело	alert(i)	Выполняется снова и снова, пока условие вычисляется в true.



// 7 Типів данних

// 1. let str 'STRING';
// 2. let num = -0.23,123,-23;
// 3. let bull = true\false;
// undefined - Вакуум
// 4. let undefined = indefined; так називати змінні не можна
// 5. let = null;

// 6. let obg = {};
// 7. sym = Symbol();

// 8. let bInt = BigInt(99999);

// const cars = ['Volvo', 'Mers', 'Zaz', 'Lanos', false, 889900, [[[8,9, 'Hello']]]];

// console.log(cars[1], cars[2], cars[5]);
// console.log(cars[6][0][0][2]);

//Можу переприсвоїти те,що знаходиться в масиві

// cars[2] = 'Yamaha Fazer'
// cars[99] = 'Chevy'
// cars[6][0][0] = 'TEST'; //Можна міняти масив в масиві

// const cars = ['Volvo', 'Mers', 'Zaz', 'Lanos', false, 889900, [[[8,9, 'Hello']]]];


// cars[7] = 'HELLO WORLD';
// cars.push('1');
// cars.push('2');
// cars.push('3');
// cars.unshift('false'); //Краще робити PUSH


// let deletedElement = cars.pop(); // Можна добавляти видaлeнний масив в змінну
// alert(deletedElement);

// cars.pop();

// cars.shift();
// cars.shift();

// console.log(cars.length); // Показує число,яке знаходиться в масиві

// Один ключ одне значення

// {} - Об`єкт 
// [] - Масив

// let user = {
//     name: 'Eddy',
//     age: 20,
//     students: ['Oleg', 'Dima', 'Nastya'],
//     job: {
//         title: 'Middle',
//         company: 'Inoxoft'
//     }
// }

// user.age = 22;
// user.job.title = 'Junior'
// user.laptop = {producer: 'DELL', model: 'PRECISION'}

// console.log(user);
// console.log(user.job.title);
// console.log(user.students[1]);

// let user = {
//     name: 'Eddy',
//     age: 20,
//     students: ['Oleg', 'Dima', 'Nastya'],
//     job: {
//         title: 'Middle',
//         company: 'Inoxoft'
//     }
// }

// let keys = Object.keys(user) //показує тільки ключі
// let values = Object.values(user)
// let entries = Object.entries(user) //показує значення і ключі

// console.log(keys);
// console.log(values);
// console.log(entries);




// console.log('Привіт ' + names [0]);
// console.log('Привіт ' + names [1]);
// console.log('Привіт ' + names [2]);
// console.log('Привіт ' + names [3]);


// for (let i = 0; i < names.length; i = i++) {
//     console.log(names[i]);
//     console.log('_____________________')
// }



// for (let i = 1; i < names.length; i = i + 2) {
//     console.log(names[i]);
//     console.log('_____________________');
// }

// let names = ['Dima', 'Ira', 'Olga', 'Ivan', 'Katya'];

// for (let i = 0; i < names.length; i++) {
// document.write('Hello ' + names[1]);
// document.write('<hr>');
// document.write('Hello ' + names[2]);
// document.write('<hr>');

//string-template
// document.write(`Hello dear ${names[1]} how are you?}`);
// }
// let names = ['Dima', 'Ira', 'Olga', 'Ivan', 'Katya'];

// let i = 0;

// while (i < names.length) {
//     document.write(`Hello dear ${names[1]}!`)
//     document.write(`<br>`)
//     i++;
// }

//for of and while -- Може використовуватись тільки для масивів


// //Цикл для тоого,що пройтись по всьому
// // Якщо треба пробігтись від старту до кінця,можно використовувати цей цикл
// for (const name of names) {
//     console.log(name);
// }

// Єдина річ,яка вміє мотати об`єкт і масив
// for (const key in user) {
//     console.log(key);
// }

// for (const key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

// let keysFromUser = [`age`, `job`];

// for (const key of keysFromUser) {
//     console.log(user[key])
// }



//-------------------------------------------------------

// Мої спроби щось зробити)

// let userName = prompt("Your Name");
// let userSecondName = prompt("Your Second Name");
// let userData = (userName + userSecondName);
// console.log(userData);
// let userYear = document.write('<p>' + userData + '</p>');
// alert(userData);

// NEW Lesson 1
// -----------------------------------------------------

// let userName = prompt("ENTER NAME");
// switch (userName) {
//     case 'Viktor':
//         alert("Hello man")
//         break;
//     case 'Ivan':
//         alert("Hi Bro")
//         break;
//     case 'Olga':
//         alert("Hi girl")
//         break;
//     case 'Ivan':
//         alert("Lets get party")
//         break;
//     default:
//         alert('I dont know u')
// }


// Як спілкуватись з User
// let userAge = prompt("How old are u?", "age")

// if (userAge > 18) {
//     alert("WELCOME");
// } else {
//     if (userName === 'taras') {
//         alert("WELCOME");
//     } else {
//         alert("TOOO YOUNG");
//     }
// }

// if (userAge > 18) {
//     alert("WELCOME");
// } else if (userName === 'taras') {
//     alert("WELCOME");
// } else {
//     alert("TOOO YOUNG");
// }

// || > OR
// && > AND

// const isOLdTaras = userAge > 18 && userName === 'taras'
// if (isOLdTaras) {
//     alert("WELCOME");
// } else {
//     alert("TOOO YOUNG");
// }


// console.log("3" != 3)
// console.log("3" !== 3) не строга
// console.log("3" ==  3) строга
// console.log("3" === 3)

// let userName = prompt("What is your name?", "Your name")
// let userAge = prompt("How old are u?", "Age")

// document.write('Hello ' + userName);
// document.write("<hr>");
// document.write('Wow are you '  + userAge + '.years old? are you kidding me?');
// let isConfirmed = confirm('Are you 18+?');
// console.log(isConfirmed)


// Оголошення Змінних
// alert('My name is Eddy')
// Константа,яку не можливо змінити
// const name = 'Eduard';
// Перемінна,яку можливо змінити
// let age = 20;

// boolean значення
// let car = true;
// let money = false;
// //////////////////////////

// Можна виводити напряму в html

// document.write('Hello my name is ' + name + ' and I am ' + age + ' years old');
// document.write(2 + 2);
// document.write('<hr>');
// document.write(2 - 2);
// document.write('<hr>');
// document.write(2 * 2);
// document.write('<hr>');
// document.write(2 / 2);
// document.write('<hr>');
// document.write((2+2)*2);
// document.write('<hr>');
// document.write(10 % 3);
//////////////////////////

// Математичні оператори

// console.log(true + 2);
// console.log(false + 2);
// console.log(10 + "1");
// console.log(10 - "1");

// Not a number
// console.log(10 - "Hello");
// console.log(age * "5");
// console.log(age / "5");
// //////////////////////////

// Оператор перевірки типу 'typeof'

// console.log(typeof age);
// console.log(typeof true);
// console.log(typeof "Hello");
// console.log(typeof NaN);


//if (i % 2 != 0) - Умова перевірки на не парне число

// if(i % 2 == 0) Умова перевірки на парне число

// IF - ELSE - IF

// let res = num % 2; // = 0 Если остаток от деления будет эквивалентен 0 это означает,что число парное 
// let res = num % 2; // != Если остаток от деления будет не эквивалентен 0 то он будет парным 


// let num = 10;

// if (num % 11 ==0) {
//     console.log('Even'); //even - парное
// } else {
//     console.log('odd'); //odd - не парное
// }

// Светофор

// let color = 'green';
// if (color == 'green') {
//     console.log('go');
// } else if (color == 'yellow') {
//     console.log('wait');
// } else if (color == 'red') {
//     console.log('stop');
// }else {
//     console.log('default');
// }

// let num = 68;

// if (num % 2 == 0 || num % 3 == 0) {
//     console.log('this number is multiple 2 & 3');
// }

// SWITCH

// let password = ('25818')
// switch (password) {
//     case '25818':
//         console.log('case1');
//         break;
//     case '1111':
//         console.log('case2');
//         break;
//     case '2222':
//         console.log('case3');
//         break;
//     default:
//         console.log('def');
// }

//OBJECT

// let obj = {
//     name: 'Ed',
//     age: 20,
//     exp: '5 mouth',
//     wife: {
//         name: 'Anya',
//         age: 18
//     }
// };

// console.log(obj.wife.name);
// let key = 'name';
// console.log(obj['wife'][key]); // Асоциитивные массивы
// obj.age= 21;
// console.log(obj);
// obj.newProperty = 'new prop';
// obj['newProperty'] = 'new prop';
// console.log(obj);
// delete obj.newProperty;
// console.log(obj);



// Примитивы и сылочные типы данных

// let a = 10
// let b = a * 2;
// console.log(a, b);
// console.log(a);
// let user1 = {
//     name: 'Vasya' 
// };

// let user2 = user1;
// user2.name = 'Petya'
// console.log(user1);

// FOR OF

// let users = [
//     { name: 'vasya', age: 31, status: false }, // 0
//     { name: 'petya', age: 30, status: true }, // 1
//     { name: 'kolya', age: 29, status: true }, // 2
//     { name: 'olya', age: 28, status: false }, // 3
//     { name: 'max', age: 30, status: true }, // 4..
//     { name: 'anya', age: 31, status: false },
//     { name: 'oleg', age: 28, status: false },
//     { name: 'andrey', age: 29, status: true },
//     { name: 'masha', age: 30, status: true },
//     { name: 'olya', age: 31, status: false },
//     { name: 'max', age: 31, status: true },
// ]
// console.log(users[0]);
// console.log(users[2]);
// console.log(users[3]);
// console.log(users[4]);
// console.log(users[5]);
// console.log(users[6]);
// console.log(users[7]);
// console.log(users[8]);
// console.log(users[9]);
// console.log(users[10]);


// FOR OF

// for (let x of users) {
//     console.log('Hello');
//     console.log(x);
// }

// FOR EACH

// Он идёт от начала и до конца.цыкл всегда идёт от начала и до конца

// Использование фильтрации буллинга например TRUE
// Почему не надо делать сравнения здесь,потому,что статус уже будет TRUE или FALSE

// for (const user of users) {
//     if (user.status == true {
//         console.log(user);
//     }
// }

// for (const user of users) {
//     if (user.status) {
//         console.log(user);
//     }
// }

// Использование фильтрации буллинга например FALSE

// for (const user of users) {
//     if (!user.status) {
//         console.log(user);
//     }
// }

// let a = 0
// a = a + 1; более динaмичнa можно Множить _*_ и  Делить _/_
// a += 1; в таком примере можно только декриминтировать или инкриминтировать
// a ++; --a
// ++ a; a--
// console.log(a); 
// let a = 0;
// let b = ++a; Если впереди префикс ++ тогда она инкриминтирует
// console.log(b);

// FOR

// let users = [
//     { name: 'vasya', age: 31, status: false }, // 0
//     { name: 'petya', age: 30, status: true }, // 1
//     { name: 'kolya', age: 29, status: true }, // 2
//     { name: 'olya', age: 28, status: false }, // 3
//     { name: 'max', age: 30, status: true }, // 4..
//     { name: 'anya', age: 31, status: false }, // 5
//     { name: 'oleg', age: 28, status: false }, // 6
//     { name: 'andrey', age: 29, status: true }, // 7
//     { name: 'masha', age: 30, status: true }, // 8
//     { name: 'olya', age: 31, status: false }, // 9
//     { name: 'max', age: 31, status: true }, // 10
// ]

// for (let index = 0; index < users.length; index++) {
//     if (users[index].age > 30) {
//         console.log(users[index]);
//     }
// }

//WHILE

// let users = [
//     { name: 'vasya', age: 31, status: false }, // 0
//     { name: 'petya', age: 30, status: true }, // 1
//     { name: 'kolya', age: 29, status: true }, // 2
//     { name: 'olya', age: 28, status: false }, // 3
//     { name: 'max', age: 30, status: true }, // 4..
//     { name: 'anya', age: 31, status: false }, // 5
//     { name: 'oleg', age: 28, status: false }, // 6
//     { name: 'andrey', age: 29, status: true }, // 7
//     { name: 'masha', age: 30, status: true }, // 8
//     { name: 'olya', age: 31, status: false }, // 9
//     { name: 'max', age: 31, status: true }, // 10
// ]

// let index = 0;
// while (index < users.length) {
//     console.log(users[index]);
//     index++;
// }

// let users = [
//     { name: 'vasya', age: 31, status: false }, // 0
//     { name: 'petya', age: 30, status: true }, // 1
//     { name: 'kolya', age: 29, status: true }, // 2
//     { name: 'olya', age: 28, status: false }, // 3
//     { name: 'max', age: 30, status: true }, // 4..
//     { name: 'anya', age: 31, status: false }, // 5
//     { name: 'oleg', age: 28, status: false }, // 6
//     { name: 'andrey', age: 29, status: true }, // 7
//     { name: 'masha', age: 30, status: true }, // 8
//     { name: 'olya', age: 31, status: false }, // 9
//     { name: 'max', age: 31, status: true }, // 10
// ];
// console.log(users);
// users.push(1, 2, 3, 4);
// users.shift();
// users.pop();
// users.pop();
// console.log(users);
// users.reverse();
// users.splice(1, 2, {name: 'kokos'});

// let sliceArray = users.slice(0,4)
// console.log(sliceArray);
// console.log(users);

// let indexOf = users.indexOf({name: 'vasya', age: 31, status: false })
// console.log(indexOf);

// function add(a, b) {
//     return a + b;
// }
// function minus(a, b) {
//     return a - b;
// }
// function multiply(a, b) {
//     return a * b;
// }

// ФУНКЦИИИ

// ДЕКЛАРИРОВАНИЕ

// let x = calculator(10, 20, '*')
// console.log(x);

// function calculator(a, b, action) {
//     console.log(arguments);
//     let result;
//     if (action == '+') {
//         result = add(a, b);
//     } else if (action == '-') {
//         result = minus(a, b);
//     } else if (action == '*') {
//         result = multiply(a, b);
//     }
//     return result;
// }

// Выражение

// let foo = function (x, y) {
//     return x + y * x
// }

// console.log(foo);
// let bar = foo;
// let quest = bar;
// console.log(quest(10, 20));

// (function (a) {
//     console.log('self invoke', a);
//     //return undefined;
// }
// )('args');

// let user = {
//     name: 'vasya',
//     greeting: function () {
//         console.log('Hello my name is', this.name);
//     }
// }
// user.greeting();

// let user2 = {
//     name: 'petya',
//     greeting: function () {
//         console.log('Hello my name is', this.name); // Контекст
//     }
// }
// user2.greeting();


// let user = {
//     name: 'Vasya',
//     greeting: function () {
//         console.log(`Hello my name is - ${this.name}`); // этот способ лучше
//         // console.log("Hello my name is", this.name);
//         // console.log("Hello my name is" + this.name);
//     }
// }

// user.greeting();

// let userJSON = JSON.stringify(user); // JSON Формат строки который приспособлен для передачи информации но не поведений
// console.log(user);
// console.log(/*typeof*/ userJSON);

// let parse = JSON.parse(userJSON);
// console.log(parse);

// Функции Масcивов

let users = [
    { name: 'vasya', age: 31, status: false }, // 0
    { name: 'petya', age: 30, status: true }, // 1
    { name: 'kolya', age: 29, status: true }, // 2
    { name: 'olya', age: 28, status: false }, // 3
    { name: 'max', age: 30, status: true }, // 4..
    { name: 'anya', age: 31, status: false }, // 5
    { name: 'oleg', age: 28, status: false }, // 6
    { name: 'andrey', age: 29, status: true }, // 7
    { name: 'masha', age: 30, status: true }, // 8
    { name: 'olya', age: 31, status: false }, // 9
    { name: 'max', age: 31, status: true }, // 10
];

// let userFilter = users.filter(function (user, index, array) {
//     console.log(user, index, array);
//     // if (user.age > 30) {
//     //     return true;
//     // }
//     return user.age > 30;
// }); console.log(userFilter);

// -- SORT --

// let sort = users.sort(function (userCurrent, userNext) {
//     // console.log(userCurrent, userNext);
//     return userNext.age - userCurrent.age ; // 
// })
// console.log(sort);

// -- MAP --

// let map = users.map(function (user /*index, array*/) {
//     user.age = user.age + 20;
//     return user;
// });
// console.log(map);

// -- FIND --

// let find = users.find(function (user) {
//     return user.name == 'vasya'
// })
// console.log(find);

// -- SOME --

// let some = users.some(function (user) {
//     return user.age > 30;
// })
// console.log(some);

// -- EVERY --

// let every = users.every(function (user) {
//     return user.age > 25;
// })
// console.log(every);

// -- REDUCE --

// let reduce = [10, 20, 30, 40].reduce(function (a, b) {
//     console.log(a, b);
//     return a + b;
// })

// console.log(reduce);

// CALLBACK

// function calculate(a, b, callback) {
//     let result = callback(a, b);
//     return result;
// }

// let res = calculate(10, 20, function (a, b) {
//     return 10 + 20;
// })
// console.log(res);

// INCREMENT

// function outer() {
//     let x = 0;

//     return function () {
//         return ++x;
//     }
// }
// let returnedIncrement = outer();
// console.log(returnedIncrement());
// console.log(returnedIncrement());

// PRiVAT

// function privatVarObjectGeneretor(params) {
//     let obj = {
//         name: 'vasya'
//     }
//     return {
//         getName: function () {
//             return obj.name
//         },
//         setName: function (newName) {
//             obj.name = newName;
//         }
//     }
// }
// let obj1 = privatVarObjectGeneretor();
// obj1.setName('Petya');
// console.log(obj1.getName());

// for (let i = arr1.length - 1; i >= 0; i--) { //-- Зворотній фор
//     const bElement = b[i]
// }

// Фор ін витягує тільки назву ключа, !не значення! ФОР Ін працює тільки для об`єкстів

// let user = { name: 'vasya', age: 123, status: false };
// for (const key in user) {
//     console.log(key, user[key]);
// }   

// const arr1 = [11, 22, 33, 44]
// for (const number of arr1) {
//     if (number > 20) {
//         console.log(number);
//     }
// }


// for (let i = 0; i < 5; i++) /* Зовнішній цикл */ {
//     for (let j = 0; j < 3; j++) /* Внутршіній цикл */ {
//         console.log(i, j);
//     }
// }


// for (let i = 0; i < 2; i++) /* Зовнішній цикл */ {
//     for (let j = 0; j < 60; j++) /* Внутршіній цикл */ {
//         console.log(i, j);
//     }
// }

// SIBLING  ELEMENTS IN ARRAY

// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);     // curent element
//     console.log(arr1[i - 1]); // next sibling
//     console.log(arr1[i + 1]); // previous sibling
// }

// SWAP EVERY 3

// let arr1 = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100100, 200200]

// for (let i = 0; i < arr1.length; i++) { Через Іф зробив через кожний третій
//     if (i % 3 == 0 && i != 0) {
//        arr1[i] = 'qwertyuiop'
//     }
// }

// for (let i = 0; i < arr1.length; i += 3) {
//    arr1[1] = 'qwerty'
//    console.log(arr1);
// }

//SPLICE

// let splicedElements = arr1.splice(0, 2, 'Ed', 'Areal');
// console.log(arr1, splicedElements);\

// SLICE

// let segment = arr1.slice(3, 6);
// console.log(segment, arr1);