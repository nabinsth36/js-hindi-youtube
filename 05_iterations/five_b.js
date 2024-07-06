const coding = ["js", "ruby", "python", "java", "cpp"];

// coding.forEach((val) => {
//   console.log(val);
// });

function printMe(item) {
  console.log(item);
}

// coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "Javascript",
    LanguageFile: "js",
  },
  {
    languageName: "Python",
    LanguageFile: "py",
  },
  {
    languageName: "java",
    LanguageFile: "java",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});

coding.forEach((item, num, arr) => {
  console.log(`${num} => ${item} => ${[...arr]}`);
});
