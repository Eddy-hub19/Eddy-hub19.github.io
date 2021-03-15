 // 1. -  Створити функцію конструктор для об'єкту який описує теги/властивості
 //  -назва тегу
 //  - опис його дій
 //  - масив з атрибутами (2-3 атрибути максимум)

 //  Кожен атрибут описати як окремий який буде містити
 //  -назву атрибуту
 //  -опис дії атрибуту
 //  інформацію брати з htmlbook.ru

 //  function Tag(title, action, attrs) {
 //      this.test = title;
 //      this.test2 = action;
 //      this.test3 = attrs;
 //  }
 //  let title = '<a>';
 //  let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.';

 //  let atributes = [
 //      { titleOfAttr: 'accesskey', actionOfAttr: `Активация ссылки с помощью комбинации клавиш.` },
 //      { titleOfAttr: 'coords', actionOfAttr: `Устанавливает координаты активной области.` },
 //      { titleOfAttr: 'download', actionOfAttr: `Предлагает скачать указанный по ссылке файл.` },
 //  ]

 //  let pushObject = new Tag(title, action, atributes);
 //  console.log(pushObject);

 //  let h1 = new Tag(
 //      '<h1>',
 //      'тег заголовку першого рівня', [{ titleOfAttr: 'class', actionOfAttr: 'клас це атрибут,який дозволяє робити вибірку елемента в css' }]
 //  );
 //  console.log(h1);
 //  - Таким чином описати теги
 //  -a
 //  -div
 //  -h1
 //  -span
 //  -input
 //  -form
 //  -option
 //  -select
 //  Приклад результату

 //    {
 //         titleOfTag  : 'area',
 //         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
 //         attrs: [
 //         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
 //         {/*some props and values*/},
 //         {/*...*/},
 //         {/*...*/},
 //        
 //    }

 // ==============================================
 // 5 - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
 // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
 // -- info () - яка виводить всю інформацію про автомобіль
 // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
 // -- changeYear (newValue) - змінює рік випуску на значення newValue
 // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
 // ==============================================

 //  let car = {
 //      brand: 'Renoult',
 //      model: 'lAGUNA',
 //      year: 2005,
 //      maxSpeed: 260,
 //      engineCapacity: '1.9',
 //      drive: function() {
 //          console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
 //      },
 //      info: function() {
 //          console.log(` brand: ${this.brand}; model: ${this.model}; year: ${this.year}; maxSpeed: ${this.maxSpeed}; engineCapacity: ${this.engineCapacity}`);
 //      },
 //      increaseMaxSpeed: function(newSpeed) {
 //          this.maxSpeed = newSpeed
 //      },
 //      changeYear: function(newValue) {
 //          this.year = newValue
 //      },
 //      addDriver: function(driver) {
 //          this.driver = driver
 //      }
 //  }
 //  car.increaseMaxSpeed(2);
 //  car.changeYear(2007);
 //  car.addDriver('Sanya');
 //  console.log(car);

 //  function test(name) {

 //  }
 //  test('Edik don`t be stuped!')
 //      // CLASS

 // ==============================================
 // 6 - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
 // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
 // -- info () - яка виводить всю інформацію про автомобіль
 // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
 // -- changeYear (newValue) - змінює рік випуску на значення newValue
 // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
 // ==============================================

 //  function Car(brand, model, year, maxSpeed, engineCapacity) {
 //      this.brand = brand
 //      this.model = model
 //      this.year = year
 //      this.maxSpeed = maxSpeed
 //      this.engineCapacity = engineCapacity,
 //          this.info = function() {
 //              console.log(` brand: ${this.brand}; model: ${this.model}; year: ${this.year}; maxSpeed: ${this.maxSpeed}; engineCapacity: ${this.engineCapacity}`);
 //          },
 //          this.increaseMaxSpeed = function(newSpeed) {
 //              this.maxSpeed = newSpeed
 //          },
 //          this.changeYear = function(newValue) {
 //              this.year = newValue
 //          }
 //      this.addDriver = function(driver) {
 //          this.driver = driver
 //      }
 //  }
 //  let car1 = new Car("Mustang", "Shelby GT500", 2008, 330, '2.3');
 //  console.log(car1.info());
 //  console.log(car1);
 // ==============================================
 // 7 - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
 // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
 // -- info () - яка виводить всю інформацію про автомобіль
 // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
 // -- changeYear (newValue) - змінює рік випуску на значення newValue
 // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
 // ==============================================

 //  class Car {

 //      constructor(brand, model, year, maxSpeed, engineCapacity) {
 //          this.brand = brand
 //          this.model = model
 //          this.year = year
 //          this.maxSpeed = maxSpeed
 //          this.engineCapacity = engineCapacity
 //      }

 //      info() {
 //          console.log(` brand: ${this.brand}; model: ${this.model}; year: ${this.year}; maxSpeed: ${this.maxSpeed}; engineCapacity: ${this.engineCapacity}`);
 //      }
 //      increaseMaxSpeed(newSpeed) {
 //          this.maxSpeed = newSpeed
 //      }
 //      changeYear(newValue) {
 //          this.year = newValue
 //      }
 //      addDriver(driver) {
 //          this.driver = driver
 //      }

 //  }

 //  // Использование:
 //  let car = new Car('Wolksvagen', 'Sharan', 2000, 200, '2');
 //  car.info();
 //  car.increaseMaxSpeed(300)
 //  car.changeYear(2000);
 //  car.addDriver('Ed');
 //  console.log(car);
 // ==============================================
 // 8 - створити класс попелюшка з полями ім'я, вік, розмір ноги
 // --Створити 10 попелюшок , покласти їх в масив
 // --Сторити клас "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
 // -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом(find)
 // ==============================================
 //  class Cinderella {

 //      constructor(name, age, footSize) {
 //          this.name = name;
 //          this.age = age;
 //          this.footSize = footSize;
 //      }
 //  }

 //  let olya = new Cinderella(`Olya`, 18, 35);
 //  let rosa = new Cinderella(`Rosa`, 16, 32);
 //  let moka = new Cinderella(`Moka`, 14, 31);
 //  let losa = new Cinderella(`Losa`, 20, 39);
 //  let lora = new Cinderella(`Lora`, 19, 40);
 //  let kida = new Cinderella(`Kida`, 21, 33);
 //  let ella = new Cinderella(`Ella`, 17, 36);
 //  let tilly = new Cinderella(`Tilly`, 27, 38);
 //  let linda = new Cinderella(`Linda`, 25, 35);
 //  let lina = new Cinderella(`Lina`, 28, 42);

 //  let array = [olya, rosa, moka, losa, lora, kida, ella, tilly, linda, lina]

 //  class Prince {
 //      constructor(name, age, shoe) {
 //          this.name = name;
 //          this.age = age;
 //          this.shoe = shoe
 //      }
 //  }
 //  let prince = new Prince('Artur', 30, 36)

 //  let test = array.find(item => item.footSize == prince.shoe);
 //  console.log(test);

 // ==============================================
 // 9 - створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
 // --Створити 10 попелюшок , покласти їх в масив
 // --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
 //  -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

 //  function Cinderella(name, age, footSize) {
 //      this.name = name;
 //      this.age = age;
 //      this.footSize = footSize;
 //  }
 //  let olya = new Cinderella(`Olya`, 18, 35);
 //  let rosa = new Cinderella(`Rosa`, 16, 32);
 //  let moka = new Cinderella(`Moka`, 14, 31);
 //  let losa = new Cinderella(`Losa`, 20, 39);
 //  let lora = new Cinderella(`Lora`, 19, 40);
 //  let kida = new Cinderella(`Kida`, 21, 33);
 //  let ella = new Cinderella(`Ella`, 17, 36);
 //  let tilly = new Cinderella(`Tilly`, 27, 38);
 //  let linda = new Cinderella(`Linda`, 25, 35);
 //  let lina = new Cinderella(`Lina`, 28, 42);

 //  let array = [olya, rosa, moka, losa, lora, kida, ella, tilly, linda, lina]

 //  function Prince(name, age, shoe) {
 //      this.name = name;
 //      this.age = age;
 //      this.shoe = shoe
 //  }
 //  let prince = new Prince('Artur', 30, 36)

 //  let test = array.find(item => item.footSize == prince.shoe);
 //  console.log(test);