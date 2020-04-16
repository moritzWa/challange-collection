function whatIsInAName(collection, source) {
  let resArr = [];

  //v1
  // //loop through collection
  // collection.forEach(ob => {
  //   //loop through obj props
  //   Object.keys(ob).map((k, v) => {
  //     // obj prop matches (one) source val:prop
  //     // capulet == capulet
  //     if (ob[k] === source[k]) {
  //       resArr.push(ob);
  //     }
  //     return resArr;
  //   });
  // });
  //return resArr;

  //v2
  let keys = Object.keys(source);
  //looping over collection
  return collection.filter(obj => {
    //loop over keys of source
    for (let key of keys) {
      //dont has prop                unequal values of source val
      if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
        return false;
      }
    }
    return true;
  });

  // Only change code above this line
}

console.log(
  JSON.stringify(
    whatIsInAName(
      [
        { first: "Romeo", last: "Montague" },
        { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" }
      ],
      { last: "Capulet" }
    ) //[{ first: "Tybalt", last: "Capulet" }]
  )
);

console.log(
  JSON.stringify(
    whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
      apple: 1
    }) // [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]
  )
);

console.log(
  JSON.stringify(
    whatIsInAName(
      [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
      { apple: 1, cookie: 2 }
    )
    //[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]
  )
);
