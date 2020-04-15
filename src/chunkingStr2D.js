function chunkArrayInGroups(arr, size) {
  let oarr = [];
  for (let i = 0; i < arr.length; i += size) {
    oarr.push(arr.slice(i, i + size));
  }
  return oarr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
//[[0, 1, 2, 3], [4, 5, 6, 7], [8]]
