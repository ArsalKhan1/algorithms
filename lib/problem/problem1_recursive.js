/*
    params:
    n: The inputed number for calculating the sum of digits in it

    recursiveCalculate_sum_number function return the sum of digits in number by recursive function. ex: 123->6(1+2+3)
*/
const recursiveCalculate_sum_number = function (n) {
    if (n == 0)
        return 0;
    else
        return n % 10 + recursiveCalculate_sum_number(Math.floor(n / 10));
}

module.exports = recursiveCalculate_sum_number

/*
    Question and Answer
    1)What are some common pitfalls of recursion? 
    Simplye it's infinite cycle. If there are no appropriate return statement, the recursion function
    will be fall in infinite cycle.
    
    Recursion, broadly speaking, has the following disadvantages:
    -A recursive program has greater space requirements than an iterative program 
    as each function call will remain in the stack until the base case is reached.
    -It also has greater time requirements because each time the function is called, 
    the stack grows and the final answer is returned when the stack is popped completely.

    On the other hand, recursion has the following advantages
    -For a recursive function, you only need to define the base case and recursive case, 
    so the code is simpler and shorter than an iterative code.
    -Some problems are inherently recursive, such as Graph and Tree Traversal.

    2)What issues did you run into during your development of the below algorithms?
    -should be careful not to fall into infinite cycle, so I made the below if statements in the recursion
    function
        if (n == 0)
            return 0;
*/