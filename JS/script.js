// 1 - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

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

// console.log(item1)
// alert(item2);
// document.write(item3)

// 2. - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//      Вивести кожну змінну за допомогою: console.log , alert, document.write

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

// console.log(item1)
// alert(item2);
// document.write(item3)

// 3. - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//      Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// let userName = prompt("ENTER NAME");
// let userSecondName = prompt("Your secondname");
// let userAge = prompt("Your Age");

// alert("Вітаю" + userName + userSecondName + "тобі уже" + userAge)


// 4. - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).

// let userName = ('Your Name');
// let userSecondName = ('Your SecondName');
// let userAge = ('Your Age');
// let contactInfo = (userName + userSecondName + userAge);
// alert(contactInfo);

// 5. - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.

// let userAge = prompt("Your Age");
// let userYear = prompt("ENTER: everthing");
// let userData = prompt("ENTER: DATA");
// let result1 = parseInt(userAge);
// let result2 = parseInt(userYear);
// let result3 = parseInt(userData);
// console.log(result1 + result2 + result3);



// 6. - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.

// let bananas = prompt("Сколько бананов?");
// let apple = prompt("Сколько яблок?");
// let orange = prompt("Сколько апельсинов?");
// let lemon = prompt("Сколько лимонов?");

// let resultBananas = parseInt(bananas);
// let resultApple = parseInt(apple);
// let resultOrange = parseInt(orange);
// let resultLemon = parseInt(lemon);
// console.log(resultBananas + resultApple + resultOrange + resultLemon);


// 7. - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat. 
//      Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.

// let store1 = prompt("Введите 10ти значное цисло");
// let store2 = prompt("Enter a 10-digit number");
// let store3 = prompt("Enter a 10-digit number");

// let result1 = parseFloat(store1);
// let result2 = parseFloat(store2);
// let result3 = parseFloat(store3);
// console.log(result1 + result2 + result3);

// 8. - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.

// let item1 = prompt('value1');
// let item2 = prompt('value2');
// let item3 = prompt('value3');
// let resultValue1 = x = Math.round(item1);
// let resultValue2 = x = Math.round(item2);
// let resultValue3 = x = Math.round(item3);
// console.log(resultValue1 + resultValue2 + resultValue3);

//9 - За допомогою prompt() отримати 2 цілих числа.
//    Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//    За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//    Example. Число 1 = 5. Число 2 = 2. Результат = 25

// let value1 = prompt('Введите целое число');
// let value2 = prompt('Введите целое число');
// let mathResult = Math.pow(value1, value2);
// alert(mathResult);
// document.write('<a href="https://matemonline.com/dh/tablica-stepenej/">Піднесення до степення</a>');

// 10. - - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//         let a = 100; let b = '100'; let c = true;

//         let a = ("100");
//         let b = ("100");
//         let c = ("true");
//         console.log(typeof a, b, c)



//- Поставте відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразаї не використовувати однакові оператори!!!
// 5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true
//----------------------------------------//
// console.log(5 != 6);         //true
// console.log(5 > 6);          //false
// console.log(5 === 6);        //false
// console.log(5 ==! 6);        //false
// console.log(10 == 10);       //true
// console.log(10 >= 10);       //true
// console.log(10 > 10);        //false
// console.log(10 == 10);       //false
// console.log(10 > 10);        //false
// console.log(123 < '123');    //false
// console.log(123 > ! '123');  //true
//----------------------------------------//


// Равно (==)	Возвращает true, если операнды равны.
// Не равно (!=)	Возвращает true, если операнды не равны.
// Строго равно (===)	Возвращает true, если операнды равны и имеют одинаковый тип. См. также Object.is и sameness in JS.
// Строго не равно(!==)	Возвращает true, если операнды не равны и/или имеют разный тип.
// Больше (>)	Возвращает true, если операнд слева больше операнда справа.
// Больше или равно (>=)	Возвращает true, если операнд слева больше или равен операнду справа.
// Меньше (<)	Возвращает true, если операнд слева меньше операнда справа.
// Меньше или равно (<=)	Возвращает true, если операнд слева меньше или равен операнду справа

// Додадктово:

// - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.

//   console.log(132 > 100 && 45 < 12 ); //false                                                true|false
//   console.log(34 > 33 && 23 < 90 ); //false                                          true|false + на - = false 
//   console.log(99 > 100 && 45 > 12 ); //false                                                 false|true
//   console.log(132 > 100 || 45 < 12 ); //true                                                 true|false
//   console.log(111 > 11 || 45 < 111 ); //true                                                 true|true
//   console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); //true      (true|true) = true | (true|false)=true
//   console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); //false      (true|true) = true | (true\false) = false
//   console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); //false   (true|false)= false| (true|false) = false
//   console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); //false      (true|true) = true | (false|true) = false
//   console.log(!!'-1'); //true 
//   console.log(!!-1); //true
//   console.log(!!'0'); //true
//   console.log(!!'null'); //true 
//   console.log(!!'undefined'); //true
//   console.log(!!(3/'owu')); //false
//   console.log((111 > 11 || 45 < 111) ||  !!'0'); //true
//   console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); //false