//isPalindromen_recursion(recursion function) to check if the word is palindrome or not
function isPalindromen_recursion(str) {
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
function recursivepalindrome(str) {
    //the variable to store all palindrome words from inputed string
    let result = ""

    //get the all substring from input string using two arrays
    for (let i = 0; i < str.length; i++)
        for (let j = i + 1; j < str.length; j++) {
            let temp = str.substr(i, j - i + 1);
            if (isPalindromen_recursion(temp))
                result += result == "" ? temp : "," + temp;
        }
    return result;
}
