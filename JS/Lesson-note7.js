// API - це абстрактна назва серверної частини,яка спроможна за певними урлами віддавати певні дані

// console.log('start'); // асинхрона функція
// let clock = document.getElementById('clock');
// setInterval(() => {
//     let date = new Date();
//     clock.innerText = date.getHours() + " " + date.getUTCMinutes() + " " + date.getUTCSeconds();
// }, 1000);

// console.log('end');

// setTimeout(() => console.log('sdgsdg'), 2000); // просто через 2 сек покаже мені те,що в консольці

// let usersBlock = document.getElementById('clock')
// fetch('https://jsonplaceholder.typicode.com/users') // Наша база данних
//     .then(response => response.json()) // асинхрона дія, // response - відповідь від сервера 
//     .then(users => { /* then - тогда */

//         for (const user of users) {
//             let item = document.createElement('p');
//             item.innerText = `${user.id} ${user.name} : ${user.email}, ${user.company.name};`;

//             usersBlock.appendChild(item);
//         }

//     });

// let usersBlock = document.getElementById('clock')

// fetch('https://api.sampleapis.com/futurama/characters')
//     .then(response => response.json())
//     .then(heroes => {
//         for (const hero of heroes) {
//             let info = document.createElement('p');
//             let anchor = document.createElement('a');
//             anchor.href =
//                 `rule.html?name=${hero.name.first}&surname=${hero.name.last}&full=${JSON.stringify(hero)}`;
//             anchor.innerText = 'info'

//             info.appendChild(anchor)

//             let img = document.createElement('img')
//             img.src = hero.images.main

//             usersBlock.appendChild(info)
//             usersBlock.appendChild(img)
//         }
//     })

// console.log(location);


//Поместить в файл рулс
// console.log(location);
// console.log(location.search);
// let url = new URL(location);
// console.log(url);
// let name = url.searchParams.get('name')
// console.log(name);
// let surname = url.searchParams.get('surname');
// console.log(surname)
// let full = url.searchParams.get('full');
// console.log(JSON.parse(full));
// let h1 = document.getElementsByTagName('h1')[0];
// h1.innerText = `${name} ${surname}`


/*Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, 
запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.

Информация о пользователе GitHub с логином USERNAME 
доступна по ссылке: https://api.github.com/users/USERNAME.*/

// fetch('https://api.github.com/users')
//     .then(response => response.json())
//     .then(commits => console.log(commits));


// fetch('https://api.github.com/users')
//     .then(response => response.json())
//     .then(commits => {
//         for (const res of commits) {
//             let result = res
//             console.log(result);
//         }
//     });