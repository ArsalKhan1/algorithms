/*
    A: array for insertion sort
    n: the length of the array
    insertion_sort function returns the sorted array from unsorted array
*/
const insertion_sort = function (A) {
    var n = A.length;
    for (let i = 0; i < n; i++) {
        /*storing current element whose left side is checked for its 
                 correct position .*/

        let temp = A[i];
        let j = i;

        /* check whether the adjacent element in left side is greater or
             less than the current element. */

        while (j > 0 && temp.score < A[j - 1].score) {
            // moving the left side element to one position forward.
            A[j] = A[j - 1];
            j = j - 1;
        }
        // moving current element to its  correct position.
        A[j] = temp;
    }
    return A;
};

module.exports = insertion_sort