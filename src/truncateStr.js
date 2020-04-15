function truncateString(str, num) {
  console.log(str.length, num);
  if (str.length <= num) return str;
  return str.substr(0, num) + "...";
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
//"A-tisket..."
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2
  )
);
