# Algorithms


## Data Preparation 
1.	Created following object for this assignment  
``` json 
    Article { 
        id: int, 
        title: string, 
        score: int
    }
```
2.	Create 30 entries in a [data.json](data.json) 
3.	Create 10,000 entries in [bigdata.json](bigdata.json) 

##	Sort 

### Bubble Sort
The code is in [lib/sort/bubblesort.js](lib/sort/bubblesort.js)  
The bubblesort_demo() in [index.js](index.js) executes following steps

1.	Loads data from data.json  in an array of objects
2.  Prints the unsorted one on console
3.	Calls the Bubble Sort function and sort by score from ascending to descending
4.	Prints the sorted array

### Insertion Sort
The code is in [lib/sort/insertionsort.js](lib/sort/insertionsort.js)  
The insertionsort_demo() in [index.js](index.js) executes following steps

1.	Loads data from data.json  in an array of objects
2.  Prints the unsorted one on console
3.	Calls the Insertion Sort function and sort by score from ascending to descending
4.	Prints the sorted array

### Comparison of Bubble, Insertion and built-in sort

For the comparison, loaded [bigdata.json](bigdata.json) file using all three and recorded the time and observed that:
- Bubble Sort is slow regarless of number of items in array.
- Insertion sort is comparable to in-built sort but looks like inbuild sort switch algorithm based on the size and is almost always is faster but not consistently.  

- Following is the visualization of above experiment   
- ![comparison](data/sortcomparison.png)

## Search

### Linear Search
The code is in [lib/search/linearsearch.js](lib/search/linearsearch.js)  
The linearsearch_demo() in [index.js](index.js) executes following steps:  

1.	Loads data from data.json in an array of objects
2.	Prints the unsorted one on console
3.	Calls the binary search function and display the position on console. -1 if not found.

### Binary Search
The code is in [lib/search/binarysearch.js](lib/search/binarysearch.js)  
The binarysearch_demo() in [index.js](index.js) executes following steps:  

1.	Loads data from data.json in an array of objects
2.  Sorts the data using Insertion sort function
3.	Prints the sorted array on console
4.	Calls the Binary search function and display the position on console. -1 if not found.

## Recusion

### Problem 1
The code is in [lib/rcusrsion/problem1_iterative.js](lib/rcusrsion/problem1_iterative.js) and in [lib/rcusrsion/problem1_recursive.js](lib/rcusrsion/problem1_recursive.js)

- The problem1_demo() in [index.js](index.js) takes the input from console and display the results using both iterative and recursive approach.
 
### Problem 2
The code is in [lib/rcusrsion/problem2_iterative.js](lib/rcusrsion/problem1_iterative.js) and in [lib/rcusrsion/problem2_recursive.js](lib/rcusrsion/problem1_recursive.js)

- The problem2_demo() in [index.js](index.js) takes the input from console and display the counts and number of combinations on console using both iterative and recursive approach.