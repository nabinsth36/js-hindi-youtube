const myArr = [0, 1, 2, 3, 4, 5, true, "hitesh"];
// const myHeros = ["shaktiman", "naagraj"];

// const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2[2]);

// myArr.push(6);

// myArr.pop();

// myArr.unshift(9);

// myArr.shift();
// console.log(myArr.includes("hitesh"));

// console.log(myArr.indexOf(3));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(typeof newArr);

// slice,  splice

console.log("original array", myArr);

const myn1 = myArr.slice(1, 2);
console.log(myn1);
console.log("B (array after slice) ", myArr);

const myn2 = myArr.splice(1, 2);
console.log(myn2);
console.log("C (array after splice)", myArr);
