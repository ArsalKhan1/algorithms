/*
    A: sorted array for binary search
    n: the string to be found in A
    binary_search function returns the position of the found string in the sorted array
*/
function binary_search(A, n) {
    let low = 0, high = A.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (A[mid] < n)
        low = mid + 1;
      else if (A[mid] > n)
        high = mid - 1;
      else
        return mid;
    }
    return -1;                //key not found
}
