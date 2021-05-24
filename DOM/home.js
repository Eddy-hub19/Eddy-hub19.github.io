// 1. use find the youngest person
// 2. sort by year від молодшого до старшого
// 3. map add 4 ocupation gender
// 4. use for add 4 gender
// 5. use filter старше 20 років

let friends = [
  {
    name: "Eduard",
    surname: "Sekan",
    age: 20,
  },
  {
    name: "Taras",
    surname: "Sekan",
    age: 18,
  },
  {
    name: "Anton",
    surname: "Kochukov",
    age: 24,
  },
  {
    name: "Sasha",
    surname: "Ivanov",
    age: 19,
  },
];

// for (let i = 0; i < friends.length; i++) {
//   friends[i].gender = "test";
//   console.log(friends[i]);
// }

// let map = friends.map(function (user /*index, array*/) {
//   user.gender = "female";
//   console.log(user);
// });
// console.log(friends);

// const find = friends.find((el) => el.age < 20);
// console.log(find);

// let sort = friends.sort((a,b) => a.age-b.age)
// console.log(sort);

// console.log(friends);

let userFilter = friends.filter(function (friend) {
  return friend.age >= 20;
});
console.log(userFilter);
