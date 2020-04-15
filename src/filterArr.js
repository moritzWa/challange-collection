function destroyer(arr) {
  let base = Object.keys(arguments).map(k => arguments[k])[0];
  let destroys = Object.keys(arguments)
    .map(k => arguments[k])
    .slice(1);
  return base.filter(d => destroys.indexOf(d) === -1);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // [1, 5, 1]
