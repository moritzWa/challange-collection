const longestSlideDownSimple = pyramid => {
  for (let i = pyramid.length - 2; i >= 0; i--) {
    for (let j = 0; j < pyramid[i].length; j++) {
      console.log(Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1]))
      pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1])
    }
  }
  return pyramid
}

const longestSlideDownReducerRight = pyramid => {
  return pyramid.reduceRight((prev, curr) =>
    curr.map((val, i) => val + Math.max(prev[i], prev[i + 1]))
  )[0]
}

console.log(
  longestSlideDownReducerRight([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]])
)
//       /3/  3+7
//      \7\ 4
//     2\ 4\ 6    4+9
//    8 5 \9\ 3       23

// console.log(longestSlideDown([[3], [4, 8], [1, 5, 3], [2, 1, 9, 7]]))
// //     [3]        3+7
// //   [4, 7]
// //  [1, 5, 3]       5+9
// // [2, 1, 9, 7]         25
