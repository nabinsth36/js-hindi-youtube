const myNums = [20, 5, 2, 7, 1];

const newNum = myNums.reduce((acc, currVal) => acc + currVal, 1);
console.log(newNum);

const salarys = [15000, 18000, 25000, 12000, 45000];
const totalSal = salarys.reduce((a, c) => a + c, 0);
console.log(totalSal);
