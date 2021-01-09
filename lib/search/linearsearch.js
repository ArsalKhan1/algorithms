/*
    A: array for linear search
    n: the string to be found in A
    linear_search function returns the position of the found string in array
*/
function linear_search(A, n) {
    for (k = 0; k < n - 1; k++) {
        if (A[k] === n) {
            return k;
        }
    }
    return -1;
}

