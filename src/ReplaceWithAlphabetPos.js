const abet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

const alphabetPosition = str => {
  //console.log(str.split(""));
  let stArr = str.split("");
  let resArr = [];
  for (let i = 0; i < stArr.length; i++) {
    if (abet.indexOf(stArr[i].toLowerCase()) + 1 > 0)
      resArr.push(abet.indexOf(stArr[i].toLowerCase()) + 1);
  }
  return resArr.join(" ");
};

console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");)
