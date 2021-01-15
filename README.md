# Algorithms

The program implements object sorting via `Bubble` and `Insertion` sort algorithms. It  also searches for the objects within unsorted and sorted arrays using `linear` and `binary` searches. It compares the results that you can see in [SortComparison](data/sortcomparison.png) and [Search Comparisons](data/searchcomparison.png).

It demostrates the use of recursive vs iterative functions through 2 practical problems:
1. If the user enters an integer number, the output will be the sum of the digits of the number.
2. The application generates the palindromes from the inputed words. 

![Demo](data/demo.gif)  

## How to run

Execute following statements on the command line at the root project directory:

- `npm install`
- `npm link`
- `node index.js`  
- `Select Option from menu`  
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
2.	Created 30 entries in a [data.json](data/data.json) 
3.	Created 10,000 entries in [bigdata.json](data/bigdata.json) 

##	Sort 

### Bubble Sort
The code is in [lib/sort/bubble.js](lib/sort/bubble.js)  
The bubblesort_demo() in [index.js](index.js) executes following steps

1.	Loads data from data.json in an array of objects
2.  Prints the unsorted one on console
3.	Calls the Bubble Sort function and sort by score from ascending to descending order
4.	Prints the sorted array

### Insertion Sort
The code is in [lib/sort/insertion.js](lib/sort/insertion.js)  
The insertionsort_demo() in [index.js](index.js) executes following steps

1.	Loads data from data.json  in an array of objects
2.  Prints the unsorted one on console
3.	Calls the Insertion Sort function and sort by score from ascending to descending order
4.	Prints the sorted array

### Comparison of Bubble, Insertion and built-in sort

For the comparison, loaded [data/bigdata.json](data/bigdata.json) file using all three functions and recorded the time and observed that:
- Bubble Sort is slow regardless of the number of items in the array.
- Insertion Sort is fastest on at least NodeJS platform.  
- The following is the visualization of the above experiment   
- ![comparison](data/sortcomparison.png)

### Video Questions and Answers

What do you notice about the searches that have the thin bars vs. those with the thicker bars?
- The searches that have thicker bars are 
	- Used for relatively slower algorithms that use smaller sets of data such as Bubble Sort, Selection Sort, and Cocktail Shaker Sort
	- Generally less efficient since they are sorting lesser data in around the same amount of time
	- Typically used to sort element by element
- The searches that have thinner bars are
	- Used for relatively faster algorithms that use smaller sets of data such as Quick Sort, Heap Sort, and std::sort (gc).
	- Generally more efficient since they are sorting more data in around the same amount of time
	- Typically used to sort through the divide-and-conquer strategy

Why would someone make this video?
- To compare the different types of sorting algorithms and the processes different sorting algorithms go through
- To provide a visualization of how certain sorting algorithms sort through data in real-time
- It shows the computation complexity of the algorithms based on how fast they complete the sort. This is not a clear indicator because of the variance of data and delay.

How could this video be skewed to show something that is incorrect?
1. The amount of data required to sort through and the delay time could vary
	- Larger amounts of data take longer to sort and the delay time indicates how long the system delays after each array access.
	- If a larger amount of data or longer delay time were presented, it could cause a misrepresentation of the speed of the sorting algorithm.
2. The video speed is changed
	- If played faster, the sorting function would falsely be shown as more efficient than it really is.
3. Only one sample of data is shown
	- The number of comparisons differs every time the function is used. With a lower number of comparisons shown, a sorting algorithm could be shown as more efficient in
	comparison to when more comparisons are required.
	- A larger sample of data should be used to calculate the efficiency of sorting algorithms.

## Search

### Linear Search
The code is in [lib/search/linear.js](lib/search/linear.js)  
The linearsearch_demo() in [index.js](index.js) executes following steps  

1.	Loads data from data.json in an array of objects
2.	Prints the unsorted one on console
3.	Calls the linear search function and displays the position on console. If not found, -1.

### Binary Search
The code is in [lib/search/binary.js](lib/search/binary.js)  
The binarysearch_demo() in [index.js](index.js) executes following steps  

1.	Loads data from data.json in an array of objects
2.  Sorts the data using the Insertion sort function
3.	Prints the sorted array on console
4.	Calls the Binary search function and display the position on console. If not found, -1.

### Comparison of Linear, Binary and built-in searches

For the comparison, loaded [data/bigdata.json](data/bigdata.json) file using all three and recorded the time and observed that:
- Linear is the slowest as it just goes in a sequence 
- Binary is fast but keep in mind the cost of sorting before using this. It is still very fast.
- The in-built one was the fastest regardless of the number size and tries. 
- Following is the visualization of the above experiment   
- ![comparison](data/searchcomparison.png)


## Recursion

### Problem 1
The code is in [lib/problem/problem1_iterative.js](lib/problem/problem1_iterative.js) and in [lib/problem/problem1_recursive.js](lib/problem/problem1_recursive.js)

- The problem1_demo() in [index.js](index.js) takes the input from console, and then displays the results using both the iterative and recursive approach.
 
### Problem 2
The code is in [lib/problem/problem2_iterative.js](lib/problem/problem2_iterative.js) and in [lib/problem/problem2_recursive.js](lib/problem/problem2_recursive.js)

- The problem2_demo() in [index.js](index.js) takes the input from console, and then displays the counts and number of combinations on console using both the iterative and recursive approach.  
 
### Recursion Questions and Answers
1. What are some common pitfalls of recursion?   
    - Simply, it's an infinite cycle. If there is no appropriate return statement, the recursion function will fall into an infinite cycle. This infinite recursion can cause
    the system to crash.  
    - A recursive program has greater space requirements than an iterative program 
    as each function call will remain in the stack until the base case is reached.  
    - It also has greater time requirements because each time the function is called, 
    the stack grows and the final answer is returned when the stack is popped completely.  
    
2. What issues did you run into during your development of the below algorithms?  
    - I had to be careful not to fall into infinite cycle, so I made the below if statement in the recursion function  
        if (n == 0)  
            return 0;
 
## Citation and Credits

1. Leveraged [John Kotis](https://github.com/johnkottis)' work on [nodejs-console-app](https://github.com/johnkottis/nodejs-console-app) to build command line menu options and to read json files.
2. Leveraged ParseTime function from [here](https://npmdoc.github.io/node-npmdoc-tcp-ping/build/apidoc.html)
