function getIndexToIns(arr, num) {
  let sorted = arr.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] >= num) return i;
  }
  return arr.length;
}

console.log(getIndexToIns([60, 40], 50)); //1
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); //2
console.log(getIndexToIns([3, 10, 5], 3)); //0
console.log(getIndexToIns([2, 5, 10], 15)); //3
