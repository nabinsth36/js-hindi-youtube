// let score = "hitesh";
// // console.log(typeof score);
// // console.log(typeof score);

// let valueInNumber = Number(score);
// // console.log(typeof valueInNumber);
// // console.log(valueInNumber);

// // '33' => 33
// // '33abc' => NaN
// // true => 1;  false => 0

// let isLoggedIn = "hites";

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// // 1 = true;  0 => false
// // "" => false
// // "hitesh" => true

// let someNumber = 33;

// let stringNumber = String(someNumber);

// console.log(stringNumber);
// console.log(typeof stringNumber);

//***************Operations*********** */

let value = 3;
let negValue = -value;

// console.log(negValue);
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(11 % 2);

let str1 = "hello";
let str2 = " hitesh";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log("1" + "2");
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);
// console.log(true);
// console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
// gameCounter++;

++gameCounter;

// console.log(gameCounter);

//***********Increment Operator ************** */

// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// // Expected output: "a:4, b:4"

//////// Postfix increment /////////////

// let x = 3;
// const y = x++;
// // x is 4; y is 3
// console.log(`x is ${x}`);
// console.log(`y is ${y}`);

// let x2 = 3n;
// const y2 = x2++;
// x2 is 4n; y2 is 3n
// the increment operator increments and returns the value before incrementing.

// console.log(`x2 is ${x2}`);
// console.log(`y2 is ${y2}`);

/*********Prefix increment */

// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

// let x = 3;
// const y = ++x;
// // x is 4; y is 4
// console.log(`x is ${x}`);
// console.log(`y is ${y}`);

/////////////////////////

/*If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.*/
let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n
console.log(`x2 is ${x2}`);
console.log(`y2 is ${y2}`);
