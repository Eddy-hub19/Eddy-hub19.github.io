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
//     console.log(i);
//     for (const j in users.length) {
//         console.log(users[j]);
//     }
// }