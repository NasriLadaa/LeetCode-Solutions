//https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {

    isPalidnrome = false
    for (var i = 0; i < words.length; i++) {
        isPalidnrome = palindrome(words[i])
        if (isPalidnrome) {
            return words[i];
        }
    }
    return ""


};


const palindrome = (str) => {
    let left = 0
    let right = str.length - 1
    while (left < right) {
        if (str[left] == str[right]) {
            left++
            right--
        }
        else {
            return false
        }
    }
    return true;
}
