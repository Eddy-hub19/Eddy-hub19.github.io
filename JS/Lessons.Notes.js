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

// console.log(true+2);
// console.log(false+2);
// console.log(10 + "1");
// console.log(10 - "1");

// Not a number
// console.log(10 - "Hello");
// console.log(age * "5");
// console.log(age / "5");
// //////////////////////////

// console.log(typeof age);
// console.log(typeof true);
// console.log(typeof "Hello");
// console.log(typeof NaN);