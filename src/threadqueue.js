function queueTime(customers, n) {
  console.log(n);
  let threads = "0"
    .repeat(n)
    .split("")
    .map(z => Number.parseFloat(z));

  console.log("top0", threads);

  for (let i = 0; i < customers.length; i++) {
    threads[threads.indexOf(Math.min(...threads))] = +customers[i];
  }

  return Math.max(...threads);
}

console.log(queueTime([2, 3, 10], 2));

console.log(queueTime([10, 2, 3, 3], 2));
console.log(queueTime([5, 3, 4], 1));
