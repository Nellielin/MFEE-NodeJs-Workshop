let users = [
  {
    name: "Bulbasaur",
    phone: "0999999999",
    age: 30,
  },
  {
    name: "Charmander",
    phone: "0988888888",
    age: 11,
  },
  {
    name: "Squirtle",
    phone: "0977777777",
    age: 15,
  },
];

function find(users) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].age < 20) {
      return users[i];
    }
  }
}

console.log(find(users));
