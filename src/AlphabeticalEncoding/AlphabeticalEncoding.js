const alphabet = [
  "A", //0
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z" //25
];

let createEncoding = n => {
  let encoding;
  let mult = Math.floor(n / 26);
  console.log(mult);
  if (702 > n > 26) {
    encoding = alphabet[mult - 1] + alphabet[n - 1 - 26 * mult];
    //                27 - 1 =Â A         704 - 1 - 26 * 27  =  B
  } else if (n > 702) {
    encoding =
      alphabet[mult - 27] + alphabet[mult - 27] + alphabet[n - 1 - 26 * mult];
    //     28 - 1 =Â A        28 - 1 =Â A          729 - 1 - 26 * 28  =  A
  } else {
    encoding = alphabet[n - 1];
  }
  return encoding;
};
console.log(createEncoding(704)); //704/AAB
console.log(createEncoding(729)); //729/BBA
