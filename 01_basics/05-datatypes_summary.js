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

console.log(typeof bigNumber);

console.log(typeof outsideTemp);

console.log(typeof myFunction);

console.log(typeof heros);

console.log(typeof myObj);
console.log(typeof userEmail);

console.log(typeof score);

console.log(typeof scoreValue);
