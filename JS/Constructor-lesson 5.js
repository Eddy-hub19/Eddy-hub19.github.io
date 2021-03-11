// CONSTRUCTOR

// let dfsf = {
//     name: 'vasya',
//     age: '25',
//     greeting: function() {
//         console.log('hello - ' + this.age + '' + this.name);
//     }
// };
// dfsf.greeting(); //Визиваємо функцію в об'єкті

// Креслення

// функція конструктор це просто шаблон по якому щось створюється

// function User(name, age, fn) { //об'єкта ще не існує,але він буде кожного разу,як викликати креслення
// this.imya = name; // [imya: name]
// this.vik = age; // [imya: name, vik: age]

// Не буде ніяких проблем з іменами
//     this.name = name;
//     this.age = age;
//     this.greeting = function(msg) {
//         console.log(`${msg} ${this.name} ${this.age}`);
//     }

//     this.greeting = fn;
// }

// let u1 = new User('vasya', 123, function(msg) { console.log(msg); });
// console.log(u1);

// let u2 = new User('koks', 345, (msg) => console.log(msg));
// console.log(u1);

// u1.greeting('hello')
// u2.greeting('hi')

// function Element(tag, txt, background, color) {
//     this.tag = tag;
//     this.txt = txt;
//     this.background = background;
//     this.color = color;
// }

// let createElement = function() {
//     let element = document.createElement(this.tag);
//     element.innerText = this.txt;
//     element.style.background = this.background;
//     element.style.color = this.color;
//     document.body.appendChild(element);
// }

// let element1 = new Element('div', 'lorem', 'red', 'gray');
// element1.createElement();

// Клас це заміна функції конструктора,але це такий же конструктор

// class User {
//     // name = 'vasya'; // мОЖНА ВИЗНАЧИТИ ПО ДЕФОЛТУ,яктй буде
//     // age = '45'
//     // name;
//     // age;
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     // Метод та сама функція,але яка знаходиться в скопі мого класу

//     greeting(msg) {
//         console.log(`${msg} ${this.name} ${this.age}`);
//     }

// }

// let u1 = new User("vasya", 12);
// let u2 = new User("kokos", 15);

// u1.greeting('dsdg')
// u2.greeting('Hi')

// console.log(u1, u2);


// // Як наслідувати

// // extends - автоматично проваджує в середину класу характеристику,яка була в батька

// class SuperUser extends User { // extends - розришювати, наслідувати
//     constructor(name, age, status) {
//         super(name, age); // super батько 
//         this.status = status;
//     }
// }

// let superUser = new SuperUser('Max', '83', false);

// console.log(superUser);