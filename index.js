// import data.json and bigdata.json
var datajson = require('./data/data.json')
var bigdatajson = require('./data/bigdata.json')

// import bubble and insertion sort algorithm functions from Javascript files
var bubbleSort = require('./lib/sort/bubble');
var insertionSort = require('./lib/sort/insertion');

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

//After input run mode from keyboard, execute the appropriate functions such as bubblesort_demo(), insertionsort_demo()
(async () => {
    const response = await prompts({
        type: 'number',
        name: 'value',
        message:
            'Bubble Sort(1), Insertion Sort(2), Comparison Sorts(3)\nLinear Search(4), Binary Search(5)\nProblem1(6), Problem2(7)\nPlease input run mode: '
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
            //comparison_sort();
            rl.close();
            break;
        case 4:
            //linearsearch_demo();
            rl.close();
            break;
        case 5:
            ///binarysearch_demo();
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