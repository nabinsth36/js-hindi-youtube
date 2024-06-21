// singleton

// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Hitesh",
  "full name": "Hitesh Chaudhary",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser.email);
console.log(JsUser["full name"]);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email = "hitesh@msn.com";

// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JsUser");
};

JsUser.greetingTwo = function () {
  return `Hello JsUser, ${this.name}`;
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
