const sumAll = arr => {
  let start = Math.min(arr[0], arr[1]);
  let end = Math.max(arr[0], arr[1]);

  let sum = 0;
  for (let i = start; i <= end; i++) {
    console.log(i);
    sum += i;
  }
  return sum;
};

console.log(sumAll([1, 4]));

function getSum(a, b) {
  let maxN = Math.max(...arguments);
  let minN = Math.min(...arguments);

  console.log(maxN, minN);
  let sum = 0;
  for (let i = minN; i <= maxN; i++) {
    console.log(i);
    sum += i;
  }
  return sum;
}

console.log("test", getSum(0, -1)); //-1
console.log("test", getSum(0, 1)); // 1
