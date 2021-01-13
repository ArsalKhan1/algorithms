// import data.json and bigdata.json
var datajson = require('./data/data.json')
var bigdatajson = require('./data/bigdata.json')

// import bubble and insertion sort algorithm functions from Javascript files
var bubbleSort = require('./lib/sort/bubble');
var insertionSort = require('./lib/sort/insertion');

// import linear and binary search algorithm functions from Javascript files
var linearSearch = require('./lib/search/linear');
var binarySearch = require('./lib/search/binary');

// import iterative and recursive functions to solve problem1 from Javascript files
var problem1_iterative = require('./lib/problem/problem1_iterative');
var problem1_recursive = require('./lib/problem/problem1_recursive');

// import iterative and recursive functions to solve problem2 from Javascript files
var problem2_iterative = require('./lib/problem/problem2_iterative');
var problem2_recursive = require('./lib/problem/problem2_recursive');

// import libs for command line options processing
var program = require('commander');
const prompts = require('prompts');
const readline = require('readline');

// convert hrTime to seconds
function parseHrtimeToSeconds(hrtime) {
    var seconds = (hrtime[0] + (hrtime[1] / 1e9)).toFixed(20);
    return seconds;
}
//bubble sort function
function bubblesort_demo() {
    console.log('------------Bubble Sort Section--------------')
    // Sort
    console.log('Unsorted Array');
    // Print the unsorted one on console
    console.log(datajson);
    // call the Bubble Sort function and sort by score from ascending to descending
    var sorted_datajson = bubbleSort(datajson);
    console.log('Sorted Array from ascending to descending -- bubble sort');
    // Print the sorted array with bubble sort
    console.log(sorted_datajson);
}
//insertion sort function
function insertionsort_demo() {
    console.log('------------Insertion Sort Section--------------')
    // Sort
    console.log('Unsorted Array');
    // Print the unsorted one on console
    console.log(datajson);
    // call the Insertion Sort function and sort by score from ascending to descending
    var sorted_datajson = insertionSort(datajson);
    console.log('Sorted Array from ascending to descending -- insertion sort');
    // Print the sorted array with insertion sort
    console.log(sorted_datajson);
}
//compare between bubble sort and insertion sort alogirhtms
function comparison_sort() {
    console.log('The time to sort the bigdata.json with bubble sort algorithm');
    var startTime = process.hrtime();
    sorted_datajson = bubbleSort(bigdatajson);
    var elapsedSeconds = parseHrtimeToSeconds(process.hrtime(startTime));
    console.log(elapsedSeconds + " second");

    console.log('The time to sort the bigdata.json with insertion sort algorithm');
    startTime = process.hrtime();
    sorted_datajson = bubbleSort(bigdatajson); k
    elapsedSeconds = parseHrtimeToSeconds(process.hrtime(startTime));
    console.log(elapsedSeconds + " second");

    console.log('The time to sort the bigdata.json with sort() function');
    startTime = process.hrtime();
    sorted_datajson = bigdatajson.sort(function (a, b) {
        return -(a.score - b.score);
    })
    elapsedSeconds = parseHrtimeToSeconds(process.hrtime(startTime));
    console.log(elapsedSeconds + " second");
}
//linear search function
function linearsearch_demo() {
    // Binary Search
    console.log('------------Linear Search Section--------------')
    console.log('Unsorted Array');
    // Print the unsorted one on console
    console.log(datajson);
    // call the linearSearch function and search by score
    var searchScore = datajson[5].score;
    var findedID = linearSearch(datajson, searchScore);
    // Print the ID of object from search result
    if (findedID != - 1)
        console.log('linearSearch->Searched ID(score = ', searchScore, ') = ', datajson[findedID]);
    else
        console.log('linearSearch->Search Result : Not found(-1)');
}
//binary search function
function binarysearch_demo() {
    // Binary Search
    console.log('------------Binary Search Section--------------')
    console.log('Unsorted Array');
    // Print the unsorted one on console
    console.log(datajson);
    var searchScore = datajson[5].score;
    // call the binarySearch function and search by score
    var findedID = binarySearch(datajson, searchScore);
    // Print the ID of object from search result
    if (findedID != - 1)
        console.log('binarySearch->Searched ID(score = ', searchScore, ') = ', datajson[findedID]);
    else
        console.log('binarySearch->Search Result : Not found(-1)');
}
//iterative and recursive functions in problem1
function problem1_demo(inputNum) {
    // Problem1
    console.log('------------Problem1 Section--------------')
    console.log('IterativeCalculate(', inputNum, ') = ', problem1_iterative(inputNum));
    console.log('RecursiveCalculate(', inputNum, ') = ', problem1_recursive(inputNum));
}
//iterative and recursive functions in problem2
function problem2_demo(inputWord) {
    // Problem2
    console.log('------------Problem2 Section--------------')
    console.log('IterativeCalculate(', inputWord, ') = ', problem2_iterative(inputWord));
    console.log('RecursiveCalculate(', inputWord, ') = ', problem2_recursive(inputWord));
}


//After input run mode from keyboard, execute the appropriate functions such as bubblesort_demo(), insertionsort_demo()
(async () => {
    const response = await prompts({
        type: 'number',
        name: 'value',
        message:
            '\n1. Bubble Sort\n2. Insertion Sort\n3. Comparison Sorts\n4. Linear Search\n5. Binary Search\n6. Problem1\n7. Problem2\nPlease input run mode: '
    })
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    switch (response.value) {
        case 1:
            bubblesort_demo();
            rl.close();
            break;
        case 2:
            insertionsort_demo();
            rl.close();
            break;
        case 3:
            comparison_sort();
            rl.close();
            break;
        case 4:
            linearsearch_demo();
            rl.close();
            break;
        case 5:
            binarysearch_demo();
            rl.close();
            break;
        case 6:
            rl.question("Please input a non-negative integer N : ", function (inputNum) {
                problem1_demo(inputNum);
                rl.close();
            });
            break;
        case 7:
            rl.question("Please input the Word : ", function (inputNum) {
                problem2_demo(inputNum);
                rl.close();
            });
            break;
        default:
            console.log('please input the correct run mode(1~7)');
    }
})();