/*
    A: array for bubble sort
    n: the length of the array
    bubbleSort function returns the sorted array from unsorted array
*/
function bubbleSort(A, n) {
  for (k = 0; k < n - 1; k++) {
    // (n-k-1) is for ignoring comparisons of elements which have already been compared in earlier iterations
    for (i = 0; i < n - k - 1; i++) {
      if (A[i] > A[i + 1]) {
        // here swapping of positions is being done.
        temp = A[i];
        A[i] = A[i + 1];
        A[i + 1] = temp;
      }
    }
  }
};

