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

let usersBlock = document.getElementById('clock')

fetch('https://api.sampleapis.com/futurama/characters')
    .then(response => response.json())
    .then(heroes => {
        for (const hero of heroes) {
            let info = document.createElement('p');
            let anchor = document.createElement('a');
            anchor.href =
                `rule.html?name=${hero.name.first}&surname=${hero.name.last}&full=${JSON.stringify(hero)}`;
            anchor.innerText = 'info'

            info.appendChild(anchor)

            let img = document.createElement('img')
            img.src = hero.images.main

            usersBlock.appendChild(info)
            usersBlock.appendChild(img)
        }
    })

console.log(location);