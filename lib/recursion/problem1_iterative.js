/*
    params:
    n: The inputed number for calculating the sum of digits in it

    iterativeCalculate_sum_number function return the sum of digits in number by iterative function. ex: 123->6(1+2+3)
*/
function iterativeCalculate_sum_number(n) {
    if (parseInt(n) < 0)
        return -1;
    n = parseInt(n);
    let result = 0, temp = n;
    do {
        result += n % 10;
        temp = Math.floor(temp / 10);
    } while (temp > 0)
    return result;
};

