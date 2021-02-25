// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
// }];


// 1 - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let person = {
//     person1: 'Max', age: 20, status: true,
//     person2: 'Petya', age: 25, status: false,
//     person3: 'Kolya', age: 19, status: true,
//     person4: 'Olya', age: 22, status: false,
//     person5: 'Roma', age: 29, status: true,
// };

// 2 - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

// let webDevelopers = {
//     nickname: 'Max',
//     skill: ['Js,HTML', 'Python'],
//     framework: { nickname: 'Django' },
//     nickname: 'Oleg',
//     skill: ['Js,HTML, Css, Phyton'],
//     framework: { nickname: 'METEOR' },
//     nickname: 'Andrey',
//     skill: ['Java'],
//     framework: { nickname: 'Spring' },
//     nickname: 'Alex',
//     skill: ['Python'],
//     framework: { nickname: 'Django' },
//     nickname: 'Roma',
//     skill: ['Js,PHP'],
//     framework: { nickname: 'Laravel' }
// };
// console.log(webDevelopers);


// 3 - При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for (const keys in webDevelopers) {
//     console.log(keys);
// }

// 4 - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2


// перебор значений
// for (let keys of Object.keys(person1)) {
//     console.log((keys));

// }
// for (let keys of Object.keys(webDevelopers)) {
//     console.log((keys));
// }



// 5 - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

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
// console.log(cars);

// 6 - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)


// let cities = [
//     { population: 41, country: 'Ukraine', region: 'Полтавщина' },
//     { population: 41, country: 'Ukraine', region: 'Волинь' }
// ]


// 7 - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

// let carsForUser = [
//     { brand: 'Lamborghini', yearOfIssue: 1912, power: 5700, color: 'green' },
//     driver = {
//         name: 'Erik',
//         age: 35,
//         gender: 'male',
//         Experience: 5
//     }
// ]
// console.log(cars);
// 8 - проитерировать каждый массив из задания 5,6,7 при помощи while.

// let i = 0;
// while (i < cars.length) {
//     i++
//     while (i < cities.length) {
//         console.log(cars, cities[i]);
//         i++
//     }
// }

// while (i < carsForUser.length) {
//     console.log(carsForUser);
//     i++
// }

// 9 - проитерировать каждый массив из задания 5,6,7 при помощи for .

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }
// for (let i = 0; i < carsForUser.length; i++) {
//     console.log(carsForUser[i]);
// }
// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
// }

// 10 - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for (const i of cars) {
//     console.log(i);
// }
// for (const i of cities) {
//     console.log(i);
// }
// for (const i of carsForUser) {
//     console.log(i);
// }


// 11 - взять объекты из задания 1 и превратить каждый в json.

// let person = {
//     person1: 'Max', age: 20, status: true,
//     person2: 'Petya', age: 25, status: false,
//     person3: 'Kolya', age: 19, status: true,
//     person4: 'Olya', age: 22, status: false,
//     person5: 'Roma', age: 29, status: true,
// };

// let userJSON = JSON.stringify(person)
// console.log(userJSON);

// 12 - взять json из задания 10 и превратить их обратно в объекты.

// let parse = JSON.parse(userJSON)
// console.log(parse);

// 13 - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

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

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }
// let carsJSON = JSON.stringify(cars)
// console.log(carsJSON);

// 14 - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// let cities = [
//     { population: 41, country: 'Ukraine', region: 'Полтавщина' },
//     { population: 41, country: 'Ukraine', region: 'Волинь' }
// ]
// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
// }
// let citiesJSON = JSON.stringify(cities)
// console.log(citiesJSON);

// let parse = JSON.parse(citiesJSON)
// console.log(parse);

// let result = [parse]
// console.log(result);


// 15 - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

// let usersForm = [
//     { person1: 'Petya', age: 25, skills: ['java', 'js'] }, { person2: 'Kolya', age: 19, skills: ['java', 'js'] }, { person3: 'Olya', age: 22, skills: ['java', 'js'] }, { person4: 'Roma', age: 29, skills: ['java', 'js'] },
// ]

// for (let i = 0; i < usersForm.length; i++) {
//     console.log(usersForm[i]);
//     for (let j = 0; j < usersForm.length; j++) {
//         console.log(usersForm[i].skills[j]);
//     }
// }

// 16 - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

// let usersForm = [
//     { person1: 'Petya', age: 25, skills: ['java', 'js', 'Pyhton','java', 'js', 'Pyhton'] }, { person2: 'Kolya', age: 19, skills: ['java', 'js'] }, { person3: 'Olya', age: 22, skills: ['java', 'js'] }, { person4: 'Roma', age: 29, skills: ['java', 'js'] },
// ]

// for (let i = 0; i < usersForm.length; i++) {
//     console.log(usersForm[i]);
//     for (let j = 0; j < usersForm[i].skills.length; j++) {
//         console.log(usersForm[i].skills[j]);
//     }
// }

// 17- За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

// let users = [{ name: 'vasya', age: 31, status: false, skills: ['java', 'js'] },
// { name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html'] },
// { name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo'] },
// { name: 'olya', age: 28, status: false, skills: ['java', 'js'] },
// { name: 'max', age: 30, status: true, skills: ['mysql', ',mongo'] }];

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
//     for (let j = 0; j < users[j].skills.length; j++) {
//         console.log(users[i].skills[j]);
//     }
// }


//19 - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement. Всі данні в одному блоці.
//20 - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
//21 - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

//18 - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let result = [];
// for (let i = 0; i < users.length; i++) {
//     result.push(users[i].address);
//     console.log(users[i].address);
// };
// let map = users.map(function (user) {
// console.log(user.address);
//     return user.address.city;
// });
// console.log(map);
// console.log(result);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в свiй блок за допомоги document.createElement. Всі данні в одному блоці.
// let createBlock = document.createElement('ul');

// for (let j = 0; j < users.length; j++) {
//     let createBlock = document.createElement('ul');
//     createBlock.innerHTML = `<li>${users[j].name}</li> `;
//     document.body.append(createBlock);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// for (let j = 0; j < users.length; j++) {
//     let createBlock = document.createElement('ul');
//     createBlock.innerHTML = `<li>${users[j].name} 
//     <ul> 
//         <li>age : ${users[j].age}</li> 
//         <li>status : ${users[j].status}</li> 
//         <li>address : ${users[j].address.country}, ${users[j].address.city}, ${users[j].address.street}</li> 
//      </ul> 

//      </li> `;
//     document.body.append(createBlock);
// }

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//  let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//  let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{
//     id: 1,
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: { user_id: 1, country: 'Ukraine', city: 'Ternopil' }
// }]

// let usersWithId = [
//     { id: 1, name: 'vasya', age: 31, status: false },
//     { id: 2, name: 'petya', age: 30, status: true },
//     { id: 3, name: 'kolya', age: 29, status: true },
//     { id: 4, name: 'olya', age: 28, status: false },
// ];
// let citiesWithId = [
//     { user_id: 3, country: 'USA', city: 'Portland' },
//     { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
//     { user_id: 2, country: 'Poland', city: 'Krakow' },
//     { user_id: 4, country: 'USA', city: 'Miami' },
// ]
// ------------------------------------------------------------------------------------
// usersWithId.push({address: citiesWithId.country})
// // let findTest = citiesWithId.find(item => item.user_id == usersWithId.id);
// let map = usersWithId.map(function (user /*index, array*/) {
//     user.address = citiesWithId;
//     return user;
// });
// console.log(map);
// ------------------------------------------------------------------------------------
// let result = [];

// for (let i = 0; i < usersWithId.length; i++) {
//     let test = citiesWithId.find(item => item.user_id == usersWithId[i].id);
//     // console.log(address);
//     let newObj = {
//         id: usersWithId[i].id,
//         name: usersWithId[i].name,
//         age: usersWithId[i].age,
//         status: usersWithId[i].status,
//         address: test,
//     }
//     result.push(newObj);
// }
// console.log(result);

//1.Пройтись по циклу першого массива(userWithId) !
//2.Створити новий об`єкт який включає всі властивості першого массиву(name,age,status)
//3.Додати властивість адрес до нового об`єкту створенного вище
//4.Адресу знайти за допомою методу (find) find по user_id в массиві citiesWithId
//5.Вставити новий об`єкст в result


// створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу

// let target1 = document.getElementById('target');
// let target2 = document.getElementsByTagName('div');
// let target3 = document.getElementsByClassName('target');
// let elementNodeListOf = document.querySelector('#target');
// console.log(target1);
// console.log(target2);
// console.log(elementNodeListOf);

// - змінити цей текст використовуючи селектори id, class,  tag

// target1.innerText = 'EDDYYYYY';
// target2.innerText = 'sjsjsjs';
// elementNodeListOf.innerText = 'redredredred';

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// target.style.width = '50px';
// target.style.height = '20px';
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

// let createBlock = document.createElement('table');
// createBlock.innerHTML = `
// <table border="1">
//         <tr>
//           <td>1</td>
//           <td>2</td>
//           <td>3</td>
//         </tr>
//     </table> `;
// document.body.append(createBlock);

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

// for (let i = 0; i < 10; i++) {

//     let createBlock = document.createElement('table.tr');
//     createBlock.innerHTML = `
//     <table border="1">
//         <tr>
//           <td>1</td>
//           <td>2</td>
//           <td>3</td>
//         </tr>`;
//     document.body.append(createBlock);
// }

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

// for (let i = 0; i < 10; i++) {

//     let createBlock = document.createElement('table.tr');
//     createBlock.innerHTML = `
//     <table border="1">
//         <tr>
//           <td>1</td>
//           <td>2</td>
//           <td>3</td>
//         </tr>`;
//     createBlock.style.color = 'blue'
//     document.body.append(createBlock);

//     for (let j = 0; j < 5; j++) {
//         let createBlockTable = document.createElement('td');
//         createBlockTable.innerHTML = `
//           <td>1</td>`
//         document.body.appendChild(createBlockTable);
//     };
// }

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

// let n = prompt('Введите число рядов');
// let m = prompt('Введите число ячеек');

// for (let i = 0; i < n; i++) {

//     let createBlock = document.createElement('table.tr');
//     createBlock.innerHTML = `
//         <table border="1">
//             <tr>
//               <td>1</td>
//               <td>2</td>
//               <td>3</td>
//             </tr>`;
//     createBlock.style.color = 'red'
//     document.body.append(createBlock);

//     for (let j = 0; j < m; j++) {
//         let createBlockTable = document.createElement('td');
//         createBlockTable.innerHTML = `<td>${m}</td>`
//         createBlockTable.style.color = 'blue'
//         document.body.appendChild(createBlockTable);
//     };
// }

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
//  - знайти всі div та змінити ім колір на червоний

let classElement = document.getElementsByClassName('header__class', 'header_main');
console.log(classElement);
let paragraphElement = document.getElementsByTagName('p')
console.log(paragraphElement);
let divElement = document.getElementsByTagName('div')
console.log(divElement);

let querySelectorClass = document.querySelectorAll('.classs')
console.log(querySelectorClass);