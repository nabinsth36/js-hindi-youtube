// for of

// ["", "", ""];
// [{}, {}, {}];

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //   console.log(num);
}

const greetings = "Hello Friends";
for (const greet of greetings) {
  //   console.log(`Each char is : ${greet}`);
}

// Exercise 1: Iterating over an array
// Write a function that takes an array of numbers and returns the sum of all the numbers in the array.
function sumofNum(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

// console.log(sumofNum([5, 9, 12, 20]));

// Exercise 2: Iterating over a string
// Write a function that takes a string and returns the number of vowels in the string.

function vowelCount(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (char of str) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }
  return `No. of vowels in the string = ${count}`;
}

// console.log(vowelCount("thank you! you are awesome"));

// Exercise 3: Iterating over a Set
// Write a function that takes a Set of words and returns the longest word in the Set.

const longestWords = (words) => {
  let longWord = "";
  for (const word of words) {
    if (word.length > longWord.length) {
      longWord = word;
    }
  }
  return `Longest word in the Set is : ${longWord}`;
};

const words = new Set(["plate", "parachute", "ginger", "teaspoonful", "oil"]);

// console.log(longestWords(words));

// Exercise 4: Iterating over a Map
// Write a function that takes a Map of student names and their scores, and returns the name of the student with the highest score.

const topStudents = (students) => {
  let highestScore = -1;
  let topStudent = "";
  for (const [name, score] of students) {
    if (score > highestScore) {
      highestScore = score;
      topStudent = name;
    }
  }
  return `Top Student is ${topStudent} and highest score is ${highestScore}`;
};

const stdData = [
  ["Raju", 45],
  ["Dipak", 52],
  ["Gopal", 61],
  ["Suresh", 48],
  ["Ramesh", 75],
];

// console.log(topStudents(stdData));

// Exercise 5: Iterating over an array of objects
// Write a function that takes an array of objects representing people, with each object having name and age properties. The function should return an array of names of people who are at least 18 years old.

const people = (arr) => {
  let names = [];

  for (const [name, age] of arr) {
    if (age >= 18) {
      names.push(name);
    }
  }
  return `People at least 18 years old are ${names}`;
};

const data = [
  ["Ramu", 20],
  ["Dipak", 17],
  ["Hira", 14],
  ["Nabin", 40],
  ["Maiya", 35],
];

// console.log(people(data));

// Exercise 6: Filtering Even Numbers
// Write a function that takes an array of numbers and returns a new array containing only the even numbers.

const evenNumbers = (arr) => {
  let evenArray = [];

  for (num of arr) {
    if (num % 2 == 0) {
      evenArray.push(num);
    }
  }
  return `Even numbers are ${evenArray}`;
};

const myNums = [15, 18, 23, 19, 44, 38];
// console.log(evenNumbers(myNums));

// Exercise 9: Extracting Property Values from Objects
// Write a function that takes an array of objects and a property name, and returns an array of values for that property from each object.

const extractPropertyValues = (objects, propertyName) => {
  const arrayValues = [];
  for (const obj of objects) {
    arrayValues.push(obj[propertyName]);
  }
  return arrayValues;
};

const myArray = [
  {
    name: "Raju",
    age: 25,
  },
  {
    name: "Sita",
    age: 18,
  },
  {
    name: "Gopal",
    age: 35,
  },
];

// console.log(extractPropertyValues(myArray, "name"));

// Exercise 7: Converting Array of Strings to Uppercase
// Write a function that takes an array of strings and returns a new array with all strings converted to uppercase.

function convertToUppercase(strs) {
  let newArray = [];
  for (const str of strs) {
    newArray.push(str.toUpperCase());
  }
  return newArray;
}

const peopleArr = ["ramesh", "hari", "dhruba"];

// console.log(convertToUppercase(peopleArr));

// Exercise 8: Summing Array of Objects by Property
// Write a function that takes an array of objects representing items with name and price properties, and returns the total price of all items.

const totalPrice = (objArrs, price) => {
  let sum = 0;
  for (obj of objArrs) {
    sum += obj[price];
  }
  return sum;
};

const myItems = [
  { name: "apple", price: 10 },
  { name: "banana", price: 20 },
  { name: "biscuit", price: 70 },
  { name: "noodle", price: 80 },
];

// console.log(totalPrice(myItems, "price"));

// Exercise 10: Counting Occurrences of Words
// Write a function that takes a string of text and returns an object where the keys are words and the values are the number of occurrences of each word.

const occurencesOfWord = (strings) => {
  let objCount = "";
  let words = strings.split(" ");
  for (const word of words) {
    objCount += Math.count(word);
  }
  return objCount;
};

const myStrings = "Will you marry me, I think you are interested in me";
// console.log(occurencesOfWord(myStrings));

// for of loop with Map

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);

for (const [key, value] of map) {
  //   console.log(`${key} : ${value}`);
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

for (const key in myObject) {
  //   console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["JS", "Python", "Ruby", "Java"];

for (const key in programming) {
  //   console.log(`${key} => ${programming[key]}`);
}

const myMap = new Map();
map.set("IN", "India");
map.set("USA", "United States");
map.set("Fr", "France");
map.set("IN", "India");

for (const key in myMap) {
  //   console.log(key[myMap]);
}
// Map is not iterable
