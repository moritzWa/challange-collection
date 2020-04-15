function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  collection.forEach(col => {
    console.log(Object.keys(col));
  });

  console.log(Object.keys(source));

  // Only change code above this line
  return arr;
}

console.log(
  whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
    apple: 1
  }),
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  ),
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  )
);
