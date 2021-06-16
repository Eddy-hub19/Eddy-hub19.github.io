// Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, 
// чтобы при клике на кнопку исчезал элемент с id="text".

// let div = document.createElement('div');
// div.id = "text";
// div.innerText = ' Используя JavaScript, сделайте так,чтобы при клике на кнопку исчезал элемент с id="text".'
// document.body.appendChild(div)

// let button = document.createElement('button');
// button.innerHTML = 'кнопка'
// document.body.appendChild(button)

// document.getElementsByTagName(button)
// button.onclick = fn => {
//         let text = document.getElementById('text')
//         text.hidden = true
//     }
// if (text.hidden === false) {
//     text.hidden = true
// } else {
//     text.hidden = false
// }
// text.hidden = text.hidden ? false : true
// text.style.display === 'block' ?
//     text.style.display = 'none' :
//     text.style.display = 'block'

// text.hidden ? text.hidden = false : text.hidden = true}

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn = document.createElement('button');
// btn.innerHTML = 'кнопка'
// document.body.appendChild(btn)

// btn.onclick = ev => {
//     console.log(ev);
//     btn.style.display = 'none'
// }


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, 
// та повідомити про це користувача

// const btn = document.getElementById('myBtn')

// btn.onclick = event => {
//     const myInput = document.getElementById('myInput')
//     const value = myInput.value;
//     console.log(value);
//     if (value < 18 && value > 0) {
//         alert('Вам меньше 18! Не пущу');
//     }
//     if (value <= 0 || value > 20) {
//         alert('incorrect')
//     }
// }


// - Создайте меню, которое раскрывается/сворачивается при клике

// let a1 = document.getElementById('a1')
// let subMenu = document.getElementById('subMenu')
// let flag = false;
// a1.onclick = ev => {
//     if (flag) {
//         subMenu.style.display = 'block';
//         flag = false;
//     } else {
//         subMenu.style.display = 'none';
//         flag = true;
//     }
// }

// - Создать список комментариев , пример объекта коментария - 
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

// let commentArray = [
//     { title: 'lorem', body: 'lorem ipsum dolo sit ameti' },
//     { title: 'lorem', body: 'lorem ipsum dolo sit ameti' },
//     { title: 'lorem', body: 'lorem ipsum dolo sit ameti' },
//     { title: 'lorem', body: 'lorem ipsum dolo sit ameti' },
//     { title: 'lorem', body: 'lorem ipsum dolo sit ameti' },
// ]

// const content = document.getElementById("content")

// commentArray.forEach(item => {
//     const div = document.createElement('div');
//     const h2 = document.createElement('h2');
//     const p = document.createElement('p');
//     const button = document.createElement('button');

//     button.innerText = 'Hide'
//     h2.innerText = item.title;
//     p.innerText = item.body;

//     button.onclick = ev => {
//         p.hidden ? p.hidden = false : p.hidden = true
//     }
//     div.appendChild(h2)
//     div.appendChild(p)
//     div.appendChild(button)
//     content.appendChild(div)

// });

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку 
// при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let button = document.getElementById('btn');
// const input1 = document.getElementById('input1');
// const input2 = document.getElementById('input2');
// const input21 = document.getElementById('input21');
// const input22 = document.getElementById('input22');

// button.onclick = ev => {
//     console.log(input1.value);
//     console.log(document.forms.form1.input1.value);
// }


// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.



// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку



// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// -- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ