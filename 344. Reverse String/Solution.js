//https://leetcode.com/problems/reverse-string/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
        
    n = s.length
    var left =0
    var right = n-1
    while (left <= right){
        temp = s[left]
        s[left] = s[right]
        s[right] = temp
        //console.log(s)
        left++
        right--
    }

    return s;


};