/*
    sort array from unsorted array
*/
function sortArray(values){
    for (let i = 0; i < values.length; i++)
        for (let j = i + 1; j < values.length; j++) {
            if (values[i].score > values[j].score) {
                let temp = values[i];
                values[i] = values[j];
                values[j] = temp;
            }
        }
    return values;
}

/*
    A: sorted array for binary search
    n: the string to be found in A
    binary_search function returns the position of the found string in the sorted array
*/
const binary_search = function (A, score) {
    //sort array first with unsorted array before doing binary search
    A = sortArray(A);
    let low = 0, high = A.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (A[mid].score < score)
        low = mid + 1;
      else if (A[mid].score > score)
        high = mid - 1;
      else
        return mid;
    }
    return -1;                //key not found
}
module.exports = binary_search