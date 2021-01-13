/*
    A: array for linear search
    n: the string to be found in A
    linear_search function returns the position of the found string in array
*/
const linear_search = function (A, score) {
  for (k = 0; k < A.length; k++) {
      if (A[k].score === score) {
          return k;
      }
  }
  return -1;
}

module.exports = linear_search