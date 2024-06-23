// For in with object

const myObject = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift by apple",
};

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

///////////

const programming = ["js", "rb", "cpp", "ruby"];
for (const key in programming) {
  console.log(`${key} => ${programming[key]}`);
}

/////////////

// Maps
const map = new Map();
map.set("In", "India");
map.set("NP", "Nepal");
map.set("JP", "Japan");
map.set("In", "India");

for (const key in map) {
  console.log(key);
}

// Map is not iterable
// for...in loop is not suitable for Map, it will iterate over the property names of the
// Map object, not the keys or values of the Map itself.
// Instead, use for...of loop or Map.prototype.forEach()
