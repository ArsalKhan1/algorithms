/*
    A: array for bubble sort
    bubbleSort function returns the sorted array from unsorted array
*/
const bubbleSort = function (A) {
    let n = A.length;
    for (k = 0; k < n - 1; k++) {
      // (n-k-1) is for ignoring comparisons of elements which have already been compared in earlier iterations
      for (i = 0; i < n - k - 1; i++) {
        if ( A[i].score > A[i + 1].score ) {
          // here swapping of positions is being done.
          temp = A[i];
          A[i] = A[i + 1];
          A[i + 1] = temp;
        }
      }
    }
    return A;
  };
  
  module.exports = bubbleSort