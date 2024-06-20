const name = "hitesh";
const repoCount = 50;

console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hiteshhc.com");

console.log(gameName[0]);
console.log(gameName.__proto__); // {}
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.endsWith("c"));
console.log(gameName.indexOf("t"));
console.log(gameName.includes("b"));

const newString = gameName.substring(1, 7);
console.log(newString);

const anotherString = gameName.slice(-8, 4);

const newStringOne = "      hitesh chaudhary     ";
console.log(anotherString);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";
const newUrl = url.replace("%20", "-");
console.log(newUrl);

console.log(url.includes("sundar"));
console.log(newUrl.split(" "));
