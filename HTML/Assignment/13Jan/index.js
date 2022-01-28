const matrixOne = [
  [4, 3, 2, 4],
  [9, 1, 5, 6],
  [2, 7, 9, 8],
  [8, 5, 2, 0],
];
console.log(matrixOne);
let priDiagSum = 0;
let secDiagSum = 0;
primary_diagonal();
secondary_diagonal();
function primary_diagonal() {
  for (let i = 0; i < matrixOne.length; i++) {
    for (let j = 0; j < matrixOne[i].length; j++) {
      if (i === j) {
        // console.log(matrixOne[i][j]);
        priDiagSum += matrixOne[i][j];
      }
    }
  }
  console.log(`The sum of primary diagonal element is ${priDiagSum}`);
}

function secondary_diagonal() {
  for (let i = 0; i < matrixOne.length; i++) {
    for (let j = 0; j < matrixOne[i].length; j++) {
      if (i + j == matrixOne.length - 1) {
        // console.log(matrixOne[i][j]);
        secDiagSum += matrixOne[i][j];
      }
    }
  }
  console.log(`The sum of Secondary diagonal element is ${secDiagSum}`);
}
