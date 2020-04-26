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

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
