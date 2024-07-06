const coding = ["js", "java", "python", "ruby"];

// coding.forEach(function (val) {
//   console.log(val);
// });

////////////

// coding.forEach((item) => console.log(item));

////////

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe);

////////

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

//////////

const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "JS",
  },
  {
    languageName: "Python",
    languageFileName: "PY",
  },
  {
    languageName: "C++",
    languageFileName: "C++",
  },
];

myCoding.forEach((item) => {
  //   console.log(item.languageName);
});

const studentsDetails = [
  {
    name: "John Doe",
    age: 10,
    class: 5,
    subjects: ["Math", "Science", "English"],
  },
  {
    name: "Rajan Shrestha",
    age: 15,
    class: 10,
    subjects: ["Math", "Science", "English", "Nepali, Computer"],
  },
  {
    name: "Goma Aryal",
    age: 13,
    class: 8,
    subjects: ["Math", "Science", "English", "Nepali, Computer"],
  },
];

studentsDetails.forEach((item) => {
  console.log(item.name);
  console.log(item.subjects);
});
