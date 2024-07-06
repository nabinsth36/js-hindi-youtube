const myMap = new Map();
myMap.set("name", "John");
myMap.set("address", "bharatpur");
myMap.set("Phone", "571000");
myMap.set("Email", "john@johns.com");
myMap.set("FB", "johnsh");
myMap.set("Web", "www.john.com.np");

// using Object.fromEntries() method
//**************************** */
const myObj = Object.fromEntries(myMap);

console.log(myObj);
console.log(myMap.get("Email"));
console.log(myMap.delete("FB"));
console.log(myMap.size);
console.log(myMap);

// using forEach() method
//********************* */
// const myObj = {};
// myMap.forEach((value, key) => {
//   myObj[key] = value;
// });

// using values() method and for...of loop
//************************************* */

// const myObject = {};
// for (const value of myMap.values()) {
//   myObject[myMap.keys().next().value] = value;
// }
// console.log(myObject);
