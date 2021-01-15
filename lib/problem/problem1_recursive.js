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
*/
