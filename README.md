# Algorithms

The program implements object sorting via `Bubble` and `Insertion` sort algorithms. It  also searches for the objects within unsorted and sorted array using `linear` and `binary` searches. It also compares the results those you can see in [SortComparison](data/sortcomparison.png) and [Search Comparisons](data/searchcomparison.png)  

It also demostrate the use of recursive vs iterative uses via 2 pratical problems
1. If the user enters the integer number, will get the sum digits of the number.
2. The application generates the palindromes from the inputed words with iterative, 

## How to run

Execute following statements on command line at root project directory  

### `npm install`
### `npm link`
### `node index.js`  
	In next section, user can input the run mode from keyboard such as 1,2,3,4,5,6,7  
	1. Bubble Sort   
	2. Insertion Sort   
	3. Comparison Sorts  
	4. Linear Search  
	5. Binary Search  
	6. Problem1  
	7. Problem2  

![Demo](data/demo.gif)  

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
 
 
## Citation and Credits

1. Leveraged [John Kotis](https://github.com/johnkottis)' work on [nodejs-console-app](https://github.com/johnkottis/nodejs-console-app) to build command line menu options and to read json files.
2. Leveraged ParseTime function from [here](https://npmdoc.github.io/node-npmdoc-tcp-ping/build/apidoc.html)
