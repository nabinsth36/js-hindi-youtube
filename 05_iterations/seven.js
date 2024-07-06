const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = myNumbers.map((num) => num + 10);

console.log(newNum);

const mynums = [2, 4, 6, 8, 10, 12];
const newNum2 = mynums
  .map((num) => num * 10)
  .map((num2) => num2 + 10)
  .filter((r) => r % 15 === 0);
console.log(newNum2);
