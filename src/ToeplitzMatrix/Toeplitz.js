/* const matrix = [
  [1, 2, 3, 4, 8],
  [5, 1, 5, 3, 4],
  [4, 5, 1, 2, 3],
  [7, 4, 5, 1, 2]
] */

/* // fÃ¼r jede Reihe
for (let y = 0; y < matrix.length; x++) {
  for (let x = 0; x < matrix[0].length; y++) {
    //console.log(matrix[x][y])
    //teste if P1R1 = P252 = true
    //console.log(matrix[x][y] == matrix[x + 1][y + 1] ? "true" : "false")
  }
} */

/* for (var x = 0; x < matrix.length - 1; x++) {
  var matrixRow = matrix[x]
  for (var y = 0; y < matrixRow.length - 1; y++) {
    // check if matrixRow 1 positon 2 == matrixRow 1+1 positon 2+1
    console.log("matrixRow[" + x + "][" + y + "] = " + matrixRow[y])
    matrix[x][y] === matrix[x + 1][y + 1]
      ? console.log("true")
      : console.log("false")
  }
} */

array = [
  [0, 0],
  [-2, -2],
  [-2, -3]
]

getTheDistance = array => {
  for (let i = 0; i < array.length; i++) {
    Math.sqrt(
      Math.pow(array[i + 1][0] + array[i][0], 2) +
        (Math.pow(array[i + 1][1] + array[i][0]), 2)
    )
  }
}

getTheDistance(array)
