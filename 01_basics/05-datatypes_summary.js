// Primitive

// 7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 29424234982394024323n;

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "superman", "hitman", "spiderman"];
let myObj = {
  name: "hitesh",
  age: 42,
};

const myFunction = function () {
  console.log("hello world");
};

console.log(typeof isLoggedIn); // boolean

console.log(typeof bigNumber); // bigint

console.log(typeof outsideTemp); // object

console.log(typeof myFunction); // function

console.log(typeof heros); // object

console.log(typeof myObj); // object
console.log(typeof userEmail); // undefined

console.log(typeof score); // number

console.log(typeof scoreValue); // number

//*************************************** */

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "hiteshchoudharydotcom";

let anotherName = "myYoutubemame";
anotherName = "chaiaurcode";
console.log(anotherName);
console.log(myYoutubeName);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "nabin@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
