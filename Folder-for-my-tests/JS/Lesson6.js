// - создать массив с 20 числами.

// let array = [1, 2, 3, 4, 5, 1000, 11, 8, 9, 10.23, 435, 46, 6, 14, 48, 7, 32, 457]

// -- при помощи метода sort и колбека  отсортировать массив.

// let sort1 = array.sort(function(a, b) { return b - a });
// console.log(sort1);
// let sort = array.sort((a, b) => a - b);
// console.log(sort);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// let array = [1, 2, 3, 4, 5, 1000, 11, 8, 9, 10.23, 435, 46, 20, 14, 48, 7, 30, 457]
// function arrayElement(test) {
//     let result = [];
//     for (let i = 0; i < test.length; i++) {
//         if (i % 3 === 0) {
//             result.push(i)
//         }
//     }
//     return result
// }
// let res = arrayElement(array)
// console.log(res);

// let array = [15, 0, 2, 3, -10, 65, -2, 58];
// let newArray = array.sort((a, b) => b - a)
// console.log(newArray);

// -- при помощи filter получить числа кратные 3

// let newArr = array.filter(function(num) {
//     return num % 3 === 0;
// })
// console.log(newArr);

// let newArray = array.filter(value => value % 3 === 0 && value !== 0);
// console.log(newArray);

// -- при помощи filter получить числа кратные 10

// let newArr = array.filter(function(num) {
//     return num % 10 === 0;
// })
// console.log(newArr);

// let newArr = array.filter(value => value % 10 === 0 && value != 0);
// console.log(newArr);

// -- перебрать (проитерировать) массив при помощи foreach()

// let array = [1, 2, 3, 4, 5, 1000, 11, 8, 9, 10.23, 435, 46, 20, 14, 48, 7, 30, 457]
// array.forEach(function(item, i, arr) {
//     console.log(item);
// });

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let map = array.map(value => value * 3);
// console.log(map);

// let result = array.map(function(item, index, array) {
//     console.log();
// });

//////////////////////////////////////////////////////////////////////////


// - создать массив со словами на 15-20 элементов.

// let arrays = [
//     'алмазо-бриллиантовый',
//     'бальнеоклиматический',
//     'воздушно-космический',
//     'восемнадцатитысячный',
//     'гипочувствительность',
//     'двадцатидевятилетний',
//     'кура',
//     'пук'
// ];

// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.

// let res = arrays.sort((a, b) => a.toLocaleLowerCase() < b.toLocaleLowerCase() ? 1 : -1)
// console.log(res);
// let res = arrays.sort((a, b) => a.length < b.length ? 1 : -1)
// console.log(res);

// let res = arrays.sort((a, b) => {
//     if (a.toLowerCase() > b.toLowerCase()) return 1;
//     if (a.toLowerCase() < b.toLowerCase()) return -1;
//     return 0;
// })
// console.log(res);

// -- отфильтровать слова длиной менее 4х символов

// let arrFilter = arrays.filter((item) => {
//     if (item.length <= 4) {
//         console.log(length);
//         return true
//     }
// })
// console.log(arrFilter);

// let arrFilter = arrays.filter(item => item.length < 4)
// console.log(arrFilter);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let map = arrays.map((value) => {
//     return value + '!';
// })
// console.log(map);

// Все робити через функції масивів (foreach, map ...тд)

// let users = [
//     { name: 'vasya', age: 31, status: false },
//     { name: 'petya', age: 30, status: true },
//     { name: 'kolya', age: 29, status: true },
//     { name: 'olya', age: 28, status: false },
//     { name: 'kolaaaaaan', age: 30, status: true },
//     { name: 'anya', age: 31, status: false },
//     { name: 'oleg', age: 28, status: false },
//     { name: 'andrey', age: 29, status: true },
//     { name: 'masha', age: 30, status: true },
//     { name: 'olya', age: 31, status: false },
//     { name: 'maxiiiiiiiim', age: 31, status: true },
// ];

// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// users.sort(function(u1, u2) {
//     return u2.age - u1.age;
// });
// console.log(users);
// let users2 = [...users];
// let res = users2.sort((a, b) => a.name.length > b.name.length ? 1 : -1)
// console.log(res);

// -пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор(По якому принципу його створювати - ваше рішення), та зберегти це в новий масив(первинний масив залишиться без змін)

// let map = users.map((value, index) => { // Добавляємо id через колбек функцію
//     value.id = index + 1;
//     return value;
// })
// let result = map
// console.log(result);


// - відсортувати його за індентифікатором

// users.sort(function(u1, u2) {
//     return u2.id + u1.id;
// });
// console.log(users);

// -- написать функцию калькулятора с 2мя числами и колбеком
// let a = prompt('напиши 1 число')
// let b = prompt('напиши 2 число')

// function calculator(a, b, kb) {
//     return kb(a, b);
// }

// console.log(calculator(a, b, (a, b) => a * b));

// -- написать функцию калькулятора с 3мя числами и колбеком

// let a = prompt('напиши 1 число');
// let b = prompt('напиши 2 число');
// let c = prompt('напиши 3 число');

// function calculator(a, b, c, callback) {
//     return callback(a, b, c);
// }

// console.log(calculator(a, b, c, (a, b, c) => a * b - c));


// function calculate(a, b, callback) {
//     return callback(a, b);
// }
// let result = calculate(20, 20, function(a, b) {
//     return a + b
// })
// console.log(result);

// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================




// let cars = [
//     { producer: "subaru", model: "wrx", year: 2010, color: "blue", type: "sedan", engine: "ej204x", volume: 2, power: 400 },
//     { producer: "subaru", model: "legacy", year: 2007, color: "silver", type: "sedan", engine: "ez30", volume: 3, power: 250 },
//     { producer: "subaru", model: "tribeca", year: 2011, color: "white", type: "jeep", engine: "ej20", volume: 2, power: 300 },
//     { producer: "subaru", model: "leone", year: 1998, color: "yellow", type: "sedan", engine: "ez20x", volume: 2, power: 140 },
//     { producer: "subaru", model: "impreza", year: 2014, color: "red", type: "sedan", engine: "ej204x", volume: 2, power: 200 },
//     { producer: "subaru", model: "outback", year: 2014, color: "red", type: "hachback", engine: "ej204", volume: 2, power: 165 },
//     { producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120 },
//     { producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120 },
//     { producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350 },
//     { producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180 },
//     { producer: "mercedes", model: "e200", year: 1990, color: "silver", type: "sedan", engine: "eng200", volume: 2, power: 180 },
//     { producer: "mercedes", model: "e63", year: 2017, color: "yellow", type: "sedan", engine: "amg63", volume: 3, power: 400 },
//     { producer: "mercedes", model: "c250", year: 2017, color: "red", type: "sedan", engine: "eng25", volume: 2.5, power: 230 }
// ];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів

// let carsFilter = cars.filter((item) => {
//     if (item.volume >= 3) {
//         console.log(length);
//         return item
//     }
// })
// console.log(carsFilter);

// - двигун = 2л

// let carFiltr = cars.filter((item) => {

//     if (item.volume === 2) {
//         return item
//     }
// });
// console.log(carFiltr);


// - виробник мерс

// let carFiltrMers = cars.filter((item) => {
//     if (item.producer === 'mercedes') {
//         return item
//     }
// });
// console.log(carFiltrMers);

// - двигун більше 3х літрів + виробник мерседес

// let carFiltrMers = cars.filter((item) => {
//     if (item.volume === 3 && item.producer === 'mercedes') {
//         return item
//     }
// });
// console.log(carFiltrMers);

// - двигун більше 3х літрів + виробник субару

// let carFiltrSubaru = cars.filter((item) => {
//     if (item.volume === 3 && item.producer === 'subaru') {
//         return item
//     }
// });
// console.log(carFiltrSubaru);

// - сили більше ніж 300

// let carFilterPower = cars.filter((item) => {

//     if (item.power >= 300) {
//         return item
//     }
// });
// console.log(carFiltr);

// - сили більше ніж 300 + виробник субару

// let carFilterPowerProducer = cars.filter((item) => {

//     if (item.power >= 300 && item.producer === 'subaru') {
//         return item
//     }
// });
// console.log(carFiltr);

// -мотор серіі ej

// let engineFilter = cars.filter((eng) => {
//     if (eng.engine.startsWith('ej')) {
//         return eng
//     }
// })
// console.log(engineFilter);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес




// let cars = [
//     { producer: "subaru", model: "wrx", year: 2010, color: "blue", type: "sedan", engine: "ej204x", volume: 2, power: 400 },
//     { producer: "subaru", model: "legacy", year: 2007, color: "silver", type: "sedan", engine: "ez30", volume: 3, power: 250 },
//     { producer: "subaru", model: "tribeca", year: 2011, color: "white", type: "jeep", engine: "ej20", volume: 2, power: 300 },
//     { producer: "subaru", model: "leone", year: 1998, color: "yellow", type: "sedan", engine: "ez20x", volume: 2, power: 140 },
//     { producer: "subaru", model: "impreza", year: 2014, color: "red", type: "sedan", engine: "ej204x", volume: 2, power: 200 },
//     { producer: "subaru", model: "outback", year: 2014, color: "red", type: "hachback", engine: "ej204", volume: 2, power: 165 },
//     { producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120 },
//     { producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120 },
//     { producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350 },
//     { producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180 },
//     { producer: "mercedes", model: "e200", year: 1990, color: "silver", type: "sedan", engine: "eng200", volume: 2, power: 180 },
//     { producer: "mercedes", model: "e63", year: 2017, color: "yellow", type: "sedan", engine: "amg63", volume: 3, power: 400 },
//     { producer: "mercedes", model: "c250", year: 2017, color: "red", type: "sedan", engine: "eng25", volume: 2.5, power: 230 }
// ];

// - двигун більше 2л + сили більше 250
// let filterPow = cars.filter((eng) => {
//     if (eng.volume >= 2 && eng.power === 250) {
//         return eng;
//     }
// })
// console.log(filterPow);

// - сили більше 250  + виробник бмв

// let powerFilterProd = cars.filter((item) => {
//     if (item.power >= 250 && item.producer === 'bmw') {
//         return item
//     }
// })
// console.log(powerFilterProd);

// - взять слдующий массив

// let usersWithAddress = [{
//         id: 1,
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: { city: 'Lviv', street: 'Shevchenko', number: 16 }
//     },
//     {
//         id: 2,
//         name: 'petya',
//         age: 30,
//         status: true,
//         address: { city: 'Lviv', street: 'Shevchenko', number: 1 }
//     },
//     {
//         id: 3,
//         name: 'kolya',
//         age: 29,
//         status: true,
//         address: { city: 'Lviv', street: 'Shevchenko', number: 121 }
//     },
//     {
//         id: 4,
//         name: 'olya',
//         age: 28,
//         status: false,
//         address: { city: 'Lviv', street: 'Shevchenko', number: 90 }
//     },
//     {
//         id: 5,
//         name: 'max',
//         age: 30,
//         status: true,
//         address: { city: 'Lviv', street: 'Shevchenko', number: 115 }
//     },
//     {
//         id: 6,
//         name: 'anya',
//         age: 31,
//         status: false,
//         address: { city: 'Lviv', street: 'Shevchenko', number: 2 }
//     },
//     {
//         id: 7,
//         name: 'oleg',
//         age: 28,
//         status: false,
//         address: { city: 'Lviv', street: 'Shevchenko', number: 22 }
//     },
//     {
//         id: 8,
//         name: 'andrey',
//         age: 29,
//         status: true,
//         address: { city: 'Lviv', street: 'Shevchenko', number: 43 }
//     },
//     {
//         id: 9,
//         name: 'masha',
//         age: 30,
//         status: true,
//         address: { city: 'Lviv', street: 'Shevchenko', number: 12 }
//     },
//     {
//         id: 10,
//         name: 'olya',
//         age: 31,
//         status: false,
//         address: { city: 'Lviv', street: 'Shevchenko', number: 16 }
//     },
//     {
//         id: 11,
//         name: 'max',
//         age: 31,
//         status: true,
//         address: { city: 'Lviv', street: 'Shevchenko', number: 121 }
//     }
// ];
// -- отсортировать его по id пользователей

// let sort = usersWithAddress.sort((a, b) => {
//     return b.id + a.id
// })
// console.log(sort);

// -- отсортировать его по id пользователей в обратном опрядке

// let sort = usersWithAddress.sort((a, b) => {
//     return b.id - a.id
// })
// console.log(sort);

// -- отсортировать его по возрасту пользователей

// let sort = usersWithAddress.sort((a, b) => {
//     return b.age - a.age
// })
// console.log(sort);

// -- отсортировать его по возрасту пользователей в обратном порядке

// let sort = usersWithAddress.sort((a, b) => {
//     return a.age - b.age
// })
// console.log(sort);

// -- отсортировать его по имени пользователей
// -- отсортировать его по имени пользователей в обратном порядке

// let sort = usersWithAddress.sort((a, b) => {
//     return a.name - b.name
// })
// console.log(sort);




// -- отсортировать его по названию улицы  в алфавитном порядке
// -- отсортировать его по номеру дома по возрастанию

// let res = usersWithAddress.sort((a, b) => a.toLocaleLowerCase() < b.toLocaleLowerCase() ? 1 : -1)
// console.log(res);
// let sort = usersWithAddress.sort((a, b) => a.address.number - b.address.number);
// console.log(sort);
// console.log(usersWithAdress.sort((a, b) => a.address.street - b.address.street));

// -- отфильтровать (оставить) тех кто младше 30

// let filterUsers = usersWithAddress.sort((item) => {
//     if (item.age < 30) {
//         console.log(item);
//         return item;
//     }
// })


// -- отфильтровать (оставить) тех у кого отрицательный статус

// let filterUsers = usersWithAddress.sort((item) => {
//     if (item.status === false) {
//         console.log(item);
//         return item;
//     }
// })

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

// let filterUsers = usersWithAddress.sort((item) => {
//         if (item.status === false && item.age < 30) {
//             console.log(item);
//             return item;
//         }
//     })
// -- отфильтровать (оставить) тех у кого номер дома четный

// let filterUsers = usersWithAddress.sort((item) => {
//     if (item.address.number % 2 === 0) {
//         console.log(item);
//         return item;
//     }
// })


// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі


// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

// function findFirstAndLast(array, el) {

//     let min = null;
//     let max = null;
//     for (let index = 0; index < array.length; index++) {
//         if (array[index] === el) {
//             if (!min) min = index; 
//             max = index;
//         }
//     }
//     min !== null ?
//         console.log(`Answer: MinIndex = ${min}, MaxIndex = ${max}`) : console.log(-1);
// }

// findFirstAndLast(arr, 4)


// function findFirstAndLast(array, element) {
//     let min = array.indexOf(element)
//     let max = array.LastindexOf(element)
//     console.log(`Answer: MinIndex = ${min}, MaxIndex = ${max}`);
// }

// findFirstAndLast(arr, 4)