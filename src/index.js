
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let sortedArray = [];
  if (Array.isArray(matrix)) {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 != 0 ) {
        matrix[i] = matrix[i].reverse();
      }
      for (let j = 0; j < matrix[i].length; j++) {
        sortedArray.push(matrix[i][j]);
      }
    }
  } 
  return sortedArray;
}
