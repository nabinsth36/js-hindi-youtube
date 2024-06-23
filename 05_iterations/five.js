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
  console.log(item.languageName);
});
