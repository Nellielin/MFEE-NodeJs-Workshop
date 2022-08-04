let arr = [
  { user: "Bulbasaur", phone: 0999999999, gender: "male" },
  { user: "Charmander", phone: 0988888888, gender: "male" },
  { user: "Squirtle", phone: 0977777777, gender: "female" },
];

function filter() {
  let newArr = [];
  for (let i = 0; i < arr.length; i++)
    if (arr[i].gender === "male") {
      newArr.push(arr[i]);
    }
  console.log(newArr);
  return newArr;
}
filter();
