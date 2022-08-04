let arr = [1, 2, 3, 4];

function map() {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 10;
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(map());
