//https://leetcode.com/problems/climbing-stairs/
// Pro Tip: Simialr to Fibonacci challange, can be solved using Depth First Search and Dynamic Programming.
// Bottom up approach

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    arr = []
    arr[0]  = 0  
    arr[1] = 1 //number of wasy to get into this stair
    arr[2] = 2  //number of wasy to get into this stair

    for ( let i = 3 ; i<=n  ; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }

    return arr[n];
};