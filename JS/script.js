// 1. Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.

// let item1 = 'hello'
// let item2 = 'owu'
// let item3 = 'com'
// let item4 = 'ua'
// let item5 = '1'
// let item6 = '10'
// let item7 = '16'
// let item8 = '-999'
// let item9 = '123'
// let item10 = '3.14'
// let item11 = '2.7'
// let item12 = 'true'
// let item13 = 'false'

//2. Вивести кожну змінну за допомогою: console.log , alert, document.write

// console.log(item1)
// alert(item2);
// document.write(item3)

//3. Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.

// item1 = 'hello'
// item2 = 'owu'
// item3 = 'com'
// item4 = 'ua'
// item5 = '1'
// item6 = '10'
// item7 = '16'
// item8 = '-999'
// item9 = '123'
// item10 = '3.14'
// item11 = '2.7'
// item12 = 'true'
// item13 = 'false'

// 4. Вивести кожну змінну за допомогою: console.log , alert, document.write

// console.log(item1)
// alert(item2);
// document.write(item3)

// 5. За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.

// let userName = prompt("ENTER NAME");
// let userSecondName = prompt("Your secondname");
// let userAge = prompt("Your Age");

// 6. Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// alert("Вітаю" + userName + userSecondName + "тобі уже" + userAge)


// 7.Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).

let userName = ('Your Name');
let userSecondName = ('Your SecondName');
let userAge = ('Your Age');
let contactInfo = (userName + userSecondName + userAge);
alert(contactInfo);











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


//console.log("3" != 3)
//console.log("3" !== 3) не строга
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