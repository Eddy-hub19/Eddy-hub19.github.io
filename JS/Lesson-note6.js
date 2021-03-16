import users from './users.js'
// CALLBACK

// let numbers = [11, 22, 0, -1, 78];

// numbers.sort(function(a, b) { return a - b });
// console.log(numbers); //reverse() /*Костиль*/
// console.log(users);
// users.sort(function(u1, u2) {
//     return u2.age - u1.age;
// });

// Як можна фільтрувати

// users.filter(function(user) {
//     // return !user.status; //!user.status - якщо я хочу відфільтрувати масив об'єкту по false, if i need sort to array true  //user.status - true// 
//     // return user.age > 30; // Якщо я хочу відфільтрувати масив по імені
//     return user.age > 30 && user.status
// });

// let filter = users.filter(user => user.status);
// console.log(filter);

// users.forEach(value => console.log(value)); // Це схоже на фор оф,але дещо зручніший цикл

//Для того,щоб змінити об'єкти,або сформувати нові

// let map = users.map((value, index) => { // Добавляємо id через колбек функцію
//     if (value.name == 'max') {
//         value.id = 'unique'
//     } else {
//         value.id = index; // тут ми можем ставити свох значення такі,як id = 100,роибити рандом Math.random() і по INDEX
//     }
//     return value;
// })
// console.log(users);

//FIND - шукати один об'єкт,якщо треба знайти більше використовуєм filter
// users.filter(value => value.name === 'max')

// let find = users.find(value => value.name === 'olya');
// console.log(find);


let usersWithAdress = [
    { id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 11 } },
    { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
    { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 90 } },
    { id: 5, name: 'max', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
    { id: 6, name: 'anya', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 2 } },
    { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 22 } },
    { id: 8, name: 'andrey', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
    { id: 9, name: 'masha', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 12 } },
    { id: 10, name: 'olya', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 11, name: 'max', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
];


// console.log(usersWithAdress.filter(user => user.address.number > 50));
// usersWithAdress.sort((a, b) => a.address.number - b.address.number);
// console.log(usersWithAdress.sort((a, b) => a.address.number - b.address.number));

//callback

// function print(arr, callback) {
//     callback(arr);
// }
// print([1, 2, 3, 4, 5], function(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// });

// print([11, 22, 33, 44, 55], function(arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//         const arrElement = arr[i];
//         console.log(arrElement);
//     }
// });

// function calculator(a, b, callback) {
//     return callback(a, b);
// }

// console.log(10, 20, (a, c) => a + a + a - c);

// console.log(calculator(100, 200, (a, b) => a * b - b));

//PROTOTYPE

// Array.prototype.print = function() {
//     console.log(this);
// }

// let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// x.print();


// Array.prototype.customFilter = function(callback) {
//     let res = [];
//     for (const item of this) {
//         if (callback(item)) {
//             res.push(item)
//         }
//     }
//     return res;
// }

// x.customFilter(function(item) {
//     return item % 2 === 0;
// });
// console.log(customFilter);