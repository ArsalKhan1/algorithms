// import data.json and bigdata.json
var datajson = require('./data/data.json')
var bigdatajson = require('./data/bigdata.json')

// import libs for command line options processing
var program = require('commander');
const prompts = require('prompts');
const readline = require('readline');

// convert hrTime to seconds
function parseHrtimeToSeconds(hrtime) {
    var seconds = (hrtime[0] + (hrtime[1] / 1e9)).toFixed(20);
    return seconds;
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
            //bubblesort_demo();
            rl.close();
            break;
        case 2:
            //insertionsort_demo();
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