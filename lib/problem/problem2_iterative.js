//isPalindromen_iterative to check if the word is palindrome or not
const isPalindromen_iterative = function (str) {
    for (let i = 1; i <= Math.floor(str.length / 2); i++) {
        if (str.charAt(i - 1) != str.charAt(str.length - i))
            return false;
    }
    return true;
}
/*
    params:
    str: The inputed string for finding palindrome from its substring

    iterativepalindrome function return all palindrome from its substring
*/
const iterativepalindrome = function (str) {
    //the variable to store all palindrome words from inputed string
    let result = "";
    let count = 0;

    //get the all substring from input string using two arrays
    for (let i = 0; i < str.length; i++)
        for (let j = i + 1; j < str.length; j++) {
            let temp = str.substr(i, j - i + 1);
            if (isPalindromen_iterative(temp)){
                result += result == "" ? temp : "," + temp;
                count++;
            }
        }
    return result + "(count=" + count + ")";
}
module.exports = iterativepalindrome