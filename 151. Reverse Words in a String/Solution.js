//https://leetcode.com/problems/reverse-words-in-a-string/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    var arr= s.trim().split(" ");
    var Reversed_str=""
    for (var i =arr.length-1 ; i>0  ; i-- ){
        if (arr[i] != ""){
            Reversed_str += arr[i]+" "
        }
    
    }
    Reversed_str=Reversed_str+arr[0]
    
    return Reversed_str;
    };