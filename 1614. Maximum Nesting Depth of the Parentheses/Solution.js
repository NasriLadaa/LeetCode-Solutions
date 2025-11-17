//https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {

    var count = 0;
    var maxNum = 0;

    for (var i = 0; i < s.length; i++) {
        if (s[i] == "(") {
            count++;
            maxNum = Math.max(count, maxNum);
        }
        else if (s[i] == ")") {
            count--;
        }
    }
    return maxNum;


};