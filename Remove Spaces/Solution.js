//https://practice.geeksforgeeks.org/problems/remove-spaces0128/1

//User function Template for javascript


/**
 * @param {string}s
 * @returns {string}
*/

class Solution {
    modify(s) {
        //code here
        let result = ''
        for (let i = 0; i < s.length; i++) {
            if (s.charAt(i) != ' ') {
                result += s.charAt(i)
            }
        }
        return result
    }
}
