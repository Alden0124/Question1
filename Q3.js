/**
let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5,
4, 4, 7, 8, 8, 0, 1, 2, 3, 1];
Please write down a function to console log unique value from this array.
**/

function getUniqueNumber(items) {
  const uniqueNumberObj = items.reduce((acc, number) => {
    acc[number] = (acc[number] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(uniqueNumberObj).filter((key) => uniqueNumberObj[key] === 1);
}

let items = [
  1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4,
  4, 7, 8, 8, 0, 1, 2, 3, 1,
];
console.log(getUniqueNumber(items))
