const digital_root = n => {
  let n2Arr = num => (num + "").split("").map(s => parseInt(s, 10));

  let nArr = n2Arr(n);

  while (nArr.length > 1) {
    nArr = nArr.reduce((crr, acc) => acc + crr);
    nArr = n2Arr(nArr);
  }
  return nArr;
};

console.log(digital_root(16), digital_root(456)); //7 /6
