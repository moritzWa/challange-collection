function confirmEnding(str, target) {
  //let ending = str.split("").splice(-1, str.length - target.length);
  //if (ending === target) return true;
  if (str.endsWith(target)) return true;
  else return false;
}

console.log(confirmEnding("Bastian", "n"));
