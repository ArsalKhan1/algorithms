//isPalindromen_recursion(recursion function) to check if the word is palindrome or not
const isPalindromen_recursion = function (str) {
    if (str.length < 2)
      return true;
    //check if the first character is same as last character from string.
    if (str.charAt(0) == str.charAt(str.length - 1))
      return isPalindromen_recursion(str.substring(1, str.length - 1));
    return false;
}
/*
    params:
    str: The inputed string for finding palindrome from its substring

    recursivepalindrome function return all palindrome from its substring
*/
const recursivepalindrome = function (str) {
    //the variable to store all palindrome words from inputed string
    let result = ""
    let count = 0;

    //get the all substring from input string using two arrays
    for (let i = 0; i < str.length; i++)
        for (let j = i + 1; j < str.length; j++) {
            let temp = str.substr(i, j - i + 1);
            if (isPalindromen_recursion(temp)){
                result += result == "" ? temp : "," + temp;
                count++;
            }
        }
    return result + "(count=" + count + ")";
}
module.exports = recursivepalindrome

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
    -used the recursion function to check if the some word is palindrome or not.
    -should be careful not to fall into infinite cycle, so I made the below if statements in the recursion
    function
        if (str.length < 2)
            return true;
*/