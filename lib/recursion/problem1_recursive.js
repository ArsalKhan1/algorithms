/*
    params:
    n: The inputed number for calculating the sum of digits in it

    recursiveCalculate_sum_number function return the sum of digits in number by recursive function. ex: 123->6(1+2+3)
*/
function recursiveCalculate_sum_number(n) {
    if (n == 0)
        return 0;
    else
        return n % 10 + this.recursiveCalculate_sum_number(Math.floor(n / 10));
}

