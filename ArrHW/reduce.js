let arr = [1, 2, 3, 4];

function reduce() {
  let acc = arr[0];
  for (let i = 1; i < arr.length; i++) {
    acc += arr[i];
  }
  return acc;
}
console.log(reduce());
